#!/bin/sh

mkdir -p ./app/data/prev/
mkdir -p ./app/data/latest/
mkdir -p ./app/data/latest_bak/
rm -rf ./app/data/prev/
mv ./app/data/latest/ ./app/data/prev/
cp -r ./app/dist/ ./app/data/latest/
rm -rf ./app/data/latest_bak/
cp -r ./app/dist/ ./app/data/latest_bak/
