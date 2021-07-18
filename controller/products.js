var needle = require('needle');
const getProducts = (req, res, next) => {
    
    let name = req.params.name;
    
    //stored

    let url = `http://localhost:3001/api/category/${name}`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);
        res.render('./products/index', {products: list});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

module.exports = {
    getProducts,
}