const axios = require('axios');
const request = require('request');
const got = require('got');

const chuck = async () => {
    const url = 'https://api.chucknorris.io/jokes/random'

    // axiox
    axios.get(url)
        .then(function (response) {
            console.log('axiox: ', response.data.value);
        })
        .catch(function (error) {
            console.log(error);
        })

    // request
    request({ 'url': url }, (error, response) => {
        const data = JSON.parse(response.body)
        console.log('request: ', data.value);
    })

    // got
    got.get(url, { responseType: 'json' })
        .then(res => {
            console.log(res.data.value);
        })
        .catch(err => {
            console.log('Error: ', err.message);
        });
}
chuck()