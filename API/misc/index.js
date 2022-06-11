
function base64encode(something) {
    return btoa(something);
}
function base64decode(something) {
    return atob(something);
}


module.exports = { base64encode, base64decode };