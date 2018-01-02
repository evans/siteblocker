#!/bin/bash

XPI=build.xpi

#Path to adb in ''
adb='adb'

# Replace this value to push to different release channels.
# Nightly = org.mozilla.fennec
# Aurora = org.mozilla.fennec_aurora
# Beta = org.mozilla.firefox_beta
# Release = org.mozilla.firefox
ANDROID_APP_ID=org.mozilla.firefox

echo "Started Compressing"
# List add-on files here
zip -r $XPI manifest.json \
            background.js \
            blocker.js \
            README.md \
    -x *.DS_Store*
echo "Finished Compressing"

TOKEN=`node ./scripts/gen_token.js`
echo $TOKEN
curl https://addons.mozilla.org/api/v3/addons/ -v -g -XPOST -F "upload=@build.xpi" -F "version=0.1" -H "Authorization: JWT $TOKEN" | jq

