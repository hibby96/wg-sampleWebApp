
function base64encode(something) {
    return Buffer.from(something).toString('base64');
}
function base64decode(something) {
    return Buffer.from(something, 'base64').toString('ascii');
}


module.exports = { base64encode, base64decode };