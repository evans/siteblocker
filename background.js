var youtube = "*://*.youtube.com/*";
var mozilla = "*://mdn.mozillademos.org/*";

//function redirect(requestdetails) {
//  console.log("cancelling: " + requestdetails.url);
//  return {
//    cancel : true
//    //redirecturl: "https://38.media.tumblr.com/tumblr_ldbj01lzip1qe0eclo1_500.gif"
//  };
//}

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      cancel: true
    };
  }, // function
  {
    urls: [
      "*://*.youtube.com/*",
      "https://news.ycombinator.com/",
      "*://news.ycombinator.com/*",
      "*://*.ycombinator.com/*",
      "*://*.facebook.com/*",
      "*://*.nba.com/*",
      // "*://*.reddit.com/*",
      "*://*.kongregate.com/*",
      "*://*.espn.com/*",
      "*://*.go.com/*",
      "*://*.movie4k.to/*"
    ]
  }, //  object
  ["blocking"]
);

// browser.webrequest.onbeforerequest.addlistener(
//   redirect,
//   {urls:[youtube, mozilla]},
//   ["blocking"]
// );
