const { test, expect } = require('@jest/globals')
const fetch = require('./popup')
const fetchImages = require('./popup')
const api_key = require('./popup')


test('Fetches Images from Api and displays Images', () => {
    expect(fetch).toHaveBeenCalledWith(`http://api.giphy.com/v1/gifs/search?q=${fetchImages.value}&limit=9&api_key=${api_key}`);
    });


