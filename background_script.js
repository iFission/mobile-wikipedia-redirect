const mobileURL = "https://en.m.wikipedia.org";

browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl: mobileURL + details.url.match(/^https?:\/\/[^\/]+(.*)/)[1],
    };
  },
  {
    urls: ["*://en.wikipedia.org/*"],
  },
  ["blocking"]
);
