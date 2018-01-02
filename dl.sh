URL=`./status.sh | jq '.files[0].download_url' | cat`
echo $URL
curl "$URL" -g -H "Authorization: JWT $TOKEN"
