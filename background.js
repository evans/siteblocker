var youtube = "*://*.youtube.com/*";
var mozilla = "*://mdn.mozillademos.org/*";

function redirect(requestdetails) {
  console.log("cancelling: " + requestdetails.url);
  return {
    cancel : true
    //redirecturl: "https://38.media.tumblr.com/tumblr_ldbj01lzip1qe0eclo1_500.gif"
  };
}

browser.webrequest.onbeforerequest.addlistener(
  redirect,
  {urls:[youtube, mozilla]},
  ["blocking"]
);
