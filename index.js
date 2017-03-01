
function sendMessage(event) {
  let sender = event.sender.id;
  let text = event.message.text;

  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: 'EAABk5SIfT64BAPlgxDKWEZCcOyWVVBANbnf8xN4Q9bCQetJTNoZBlOtRlPY58KsaqxBobv6aUhrGoUXSLQRUbUbxx8XOyCer98tXGaE3p3c197NZBoqUHZARLR5d1vu9wXZBiD4fBiQbtGpWW0h2akuNdRMhiutbg9xdHMCwSMQZDZD'},
    method: 'POST',
    json: {
      recipient: {id: sender},
      message: {text: text}
    }
  }, function (error, response) {
    if (error) {
        console.log('Error sending message: ', error);
    } else if (response.body.error) {
        console.log('Error: ', response.body.error);
    }
  });
}
