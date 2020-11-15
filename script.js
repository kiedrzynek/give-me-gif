$(document).ready(function() {
    $.get(
        'https://api.giphy.com/v1/gifs/random',
        {
            api_key: 'udyq3h2fMZG5YRkgWF3Q2f0t61pUNnSc',
            rating: 'g',
            tag: 'cat'
        }
    ).done(function(response) {
        let data = response.data;
        $('main').append(`<img class="gif" src=${data.images.downsized.url} />`);
    }).fail(function(data) {
        let faildata = data.responseJSON.meta.msg;
        console.log(faildata);
        $('body').append(`<div>Sorry, something went wrong. Gif it another try :)</div>`);
    })
});