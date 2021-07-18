let category = require('../../models/category');

function getCategory(req, res)
{
    let name = req.params.name;
    console.log(req.params.name);
    if (name == "dienthoai maytinhbang"){
        category.dienthoai_maytinhbang.then((data)=>{
            res.json(data); //quang
        })
        .catch(err => {res.json(err)});
    }
    
    if(name == "dientu dienlanh"){
        category.dientu_dienlanh.then((data)=>{
            res.json(data);
        })
        .catch(err => {res.json(err)});
    }

    
}

module.exports = {getCategory };