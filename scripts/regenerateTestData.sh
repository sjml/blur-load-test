#!/usr/bin/env bash

# NB:
#   - assumes a flat directory of sample images
#   - uses ImageMagick, jq, and probably some other things
#     that I forgot I had installed

# takes ~10.5 minutes to process 20 ~2-3MB images
#    on my 2017 MacBook Pro (3.1GHz Dual-Core i5)

### Settings
IN_DIR=./samples
OUT_DIR=./public/img

normalSizes=("1920x1080" "1280x720" "640x480" "320x240")
normalQuality=90
tinySizes=(16 24 32 42 64)
qualities=($(seq 5 5 70))
formats=(jpg webp jp2 jxr)
### /Settings




### Do the things
cd "$(dirname $0)"
cd ..

rm -rf $OUT_DIR/*
mkdir -p ${OUT_DIR}

pushd ${IN_DIR} > /dev/null
  imgList=(*)
popd > /dev/null

num_combs=$(expr ${#tinySizes[@]} \* ${#qualities[@]} \* ${#formats[@]})
num_reports=2
total=$(expr ${num_reports} + ${#imgList[@]} \* ${num_combs} + $(expr ${#imgList[@]} \* ${#normalSizes[@]}))
echo "Generating ${num_combs} tiny versions and ${#normalSizes[@]} normal versions of ${#imgList[@]} images, along with 2 JSON reports (${total} total files)..." \
  | fold -s -w $COLUMNS

imgJson="[]"
for i in ${!imgList[@]}; do
  img=${imgList[$i]}
  echo "    ${IN_DIR}/${img} ($(expr ${i} + 1)/${#imgList[@]})..."

  dims=($(magick identify -format "%[w] %[h]" ${IN_DIR}/${img}))
  aspect=$(awk "BEGIN {print ${dims[0]}/${dims[1]}}")
  imgJson=$(echo $imgJson | jq -r ". += [{file: \"${img}\", width: ${dims[0]}, height: ${dims[1]}, aspect: $aspect}]")

  for q in ${qualities[@]}; do
    for s in ${tinySizes[@]}; do
      for f in ${formats[@]}; do
        dpath=${OUT_DIR}/tiny/format_${f}/quality_${q}/size_${s}
        mkdir -p $dpath
        convert \
          -define jpeg:size=${s}x${s} ${IN_DIR}/${img} \
          -resize ${s}x${s} \
          -auto-orient -strip \
          -quality ${q} \
          ${dpath}/${img}.${f}
      done
    done
  done

  for s in ${normalSizes[@]}; do
    dpath=${OUT_DIR}/normal/${s}
    mkdir -p $dpath
    convert \
      -define jpeg:size=${s} ${IN_DIR}/${img} \
      -resize ${s} \
      -auto-orient -strip \
      -quality ${normalQuality} \
      ${dpath}/${img}.jpg
  done
done

echo
echo "    Generating reports..."

tinySizesJson=$(printf '%s\n' "${tinySizes[@]}" | jq -R '.|tonumber' | jq -r -s .)
normalSizesJson=$(printf '%s\n' "${normalSizes[@]}" | jq -R . | jq -r -s .)
qualitiesJson=$(printf '%s\n' "${qualities[@]}" | jq -R '.|tonumber' | jq -r -s .)
formatsJson=$(printf '%s\n' "${formats[@]}" | jq -R . | jq -r -s .)

jq -n \
  --argjson tinySizes "$tinySizesJson" \
  --argjson normalSizes "$normalSizesJson" \
  --argjson qualities "$qualitiesJson" \
  --argjson formats "$formatsJson" \
  --argjson imgs "$imgJson" \
  '{tinySizes: $tinySizes, normalSizes: $normalSizes, qualities: $qualities, formats: $formats, inputImages: $imgs}' \
  > ${OUT_DIR}/imageData.json

reportJson="{}"
for q in ${qualities[@]}; do
  for s in ${tinySizes[@]}; do
    for f in ${formats[@]}; do
      pushd ${OUT_DIR}/tiny/format_${f}/quality_${q}/size_${s} > /dev/null
        fileSizes=($(ls -l | awk '{print $5}' | grep -v -e '^$'))
        fsJson=$(printf '%s\n' "${fileSizes[@]}" | jq -R '.|tonumber' | jq -r -s .)
        reportJson=$(echo $fsJson | jq -r "{format_$f: {quality_$q: {size_$s: . }}} * $reportJson")
      popd > /dev/null
    done
  done
done
echo $reportJson > ${OUT_DIR}/sizeReport.json


echo
echo "    Encoding images as data..."

for f in ${formats[@]}; do
  for q in ${qualities[@]}; do
    echo "        ${f}@${q}..."
    for s in ${tinySizes[@]}; do
      dpath=${OUT_DIR}/tiny/format_${f}/quality_${q}/size_${s}
      imgDataJson="{}"
      pushd $dpath > /dev/null
        imgList=(*)
        for i in ${imgList[@]}; do
          imgDataJson=$(echo $imgDataJson | jq -r ". * {\"${i}\": \"$(base64 ${i})\"}")
        done
        echo $imgDataJson > ./imageData.json
      popd > /dev/null
    done
  done
done


echo
echo
echo "Done!"
