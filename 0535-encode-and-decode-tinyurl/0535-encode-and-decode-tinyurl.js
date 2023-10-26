/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let map = new Map();
let url = "http://tinyurl.com/";
var encode = function(longUrl) {
    let key = Date.now().toString();
    map.set(key,longUrl);
    return url + key;
};

var decode = function(shortUrl) {
    let key = shortUrl.split(url);
    return map.get(key[1]);
};