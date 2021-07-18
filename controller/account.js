const getAccount = (req, res, next) => {
    let info = req.params.name;
    console.log(info);
    res.render('./account/account');
}

module.exports = {
    getAccount,
}
