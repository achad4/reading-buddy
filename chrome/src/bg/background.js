// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


console.log("I'm here bitches");

options =

chrome.runtime.onInstalled.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    chrome.notifications.create('reminder', {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'Don\'t forget!',
      message: 'You have things to do. Wake up, dude!'
   }, function(notificationId) {
     console.log("created");
   });
  });
