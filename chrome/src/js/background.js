
chrome.runtime.onInstalled.addListener(
  //want to make a request to the API for the schedule and set alarms
  function(request, sender, sendResponse) {
    console.log(request);
    chrome.notifications.create('reminder', {
      type: 'basic',
      iconUrl: '../icons/icon128.png',
      title: 'Don\'t forget!',
      message: 'Do some shit son...'
   }, function(notificationId) {
     console.log("created");
   });
});
