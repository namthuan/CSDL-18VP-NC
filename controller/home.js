const getHome = (req, res, next) => {
    res.render('./home/index',{
        foo: 'bar'
    });
}

module.exports = {
    getHome
}