function sendMessage(message, requestType) {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/855504273629249596/Y_XaWOvOL-q6akuy2ZSD6aNE18LoxG2LiRZcpoZfKwr1rODP_UpGch3p0TMSwMyjkFpJ");

    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        "embeds": [
            {
                "title": "WiiU Discord RPC - Feature request!",
                url: window.location.href,
                "description": message,
                "footer": {
                    "text": `Request type: ${requestType}`
                },
                "timestamp": (new Date()).toISOString()
            }
        ]
    }
    request.send(JSON.stringify(params))
    alert('Message sent! Thanks for requesting')
};

document.getElementById('send').addEventListener('click', () => {
    var isGameRequest = document.getElementById('game').checked;

    var message = document.getElementById('messageInput').value;
    if (message.trim() == "") return alert('Message cant be empty!');
    if (message.trim().length <= 10) return alert('Message must be longer than 10 characters');

    sendMessage(message, isGameRequest ? "Game request" : "Settings option request");

    document.getElementById('messageInput').value = "";
});