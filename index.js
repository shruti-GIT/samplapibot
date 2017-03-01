const apiai = require('apiai');
const app = apiai("000bf9a133bf45088c470fae2ae9639c");

function sendMessage(event) {
  let sender = event.sender.id;
  let text = event.message.text;

  let apiai = apiaiApp.textRequest(text, {
    sessionId: 'tabby_cat' // use any arbitrary id
  });

  apiai.on('response', (response) => {
    // Got a response from api.ai. Let's POST to Facebook Messenger
  });

  apiai.on('error', (error) => {
    console.log(error);
  });

  apiai.end();
}