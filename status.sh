
TOKEN=`node ./scripts/gen_token.js`
curl "https://addons.mozilla.org/api/v3/addons/evans@evanshauser.com/versions/0.1/" -H "Authorization: JWT $TOKEN"
