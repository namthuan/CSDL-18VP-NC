const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Trying",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

let dienthoai_maytinhbang = new Promise((res,rej)=>{
    conn.connect()
    .then(() => {
        
        conn.query('select * from SanPham', function (err, recordset) {
            
            if (err) console.log(err)

            let products = JSON.stringify(recordset.recordset);
            //let products = recordset.recordset;
            res(products);
        });
    })
    .catch(err => {rej("error! " + err)});
})

let dientu_dienlanh = new Promise((res,rej)=>{
    conn.connect()
    .then(() => {
        
        conn.query('select * from SanPham', function (err, recordset) {
            
            if (err) console.log(err)

            let products = JSON.stringify(recordset.recordset);
            //let products = recordset.recordset;
            res(products);
        });
    })
    .catch(err => {rej("error! " + err)});
})

module.exports = {dienthoai_maytinhbang, dientu_dienlanh};
