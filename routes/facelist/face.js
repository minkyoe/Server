'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "a540b083deb14790b0d6c932fc99d4b0";
// faceListId=jsm
const uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/jsm";


const options = {
    uri: uriBase,
    body: null,
    headers: {
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

//facelist에 있는 얼굴들 조회
request.get(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(JSON.stringify(JSON.parse(body), null, '  ')); //json형식으로 log출력
});
