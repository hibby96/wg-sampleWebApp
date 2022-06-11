
function base64encode(something) {
    try {return Buffer.from(something).toString('base64');
}catch(e){return 400;}
}
function base64decode(something) {
    return Buffer.from(something, 'base64').toString('ascii');
}


module.exports = { base64encode, base64decode };