
chrome.runtime.onInstalled.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    chrome.notifications.create('reminder', {
      type: 'basic',
      iconUrl: '../icons/icon128.png',
      title: 'Don\'t forget!',
      message: 'You have things to do. Wake up, dude!'
   }, function(notificationId) {
     console.log("created");
   });
});
