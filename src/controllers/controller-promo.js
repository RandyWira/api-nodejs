const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err)=> {
    console.err(err);
});

module.exports = {

    getPromo(req, res){
        pool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query(
                `SELECT * FROM promo;` ,
                function (error, results) {
                    if(error) throw  error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil',
                        data: results
                    });
            });
            connection.release();
        });
    },

    getPromoByID(req, res) {
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query(
                `SELECT * FROM promo WHERE id = ?;` , [id],
                function (error,results) {
                    if(error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil',
                        data: results
                    });
            });
            connection.release();
        })
    }, 

    addPromo(req, res){
        let data = {
            nama_promo : req.body.nama_promo,
            deskripsi : req.body.deskripsi
        }

        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `INSERT INTO promo SET ?;` , [data],
                function (error, results) {
                    if(error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil tambah data',
                    });
                });
                connection.release();
        })
    },

    editPromo(req,res){
        let dataEdit = {
            nama_promo : req.body.nama_promo,
            deskripsi: req.body.deskripsi,
        }
        let id = req.body.id
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `UPDATE promo SET ? WHERE id = ?;` , [dataEdit, id],
                function (error, results) {
                    if(error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil Edit Data',
                    });
                });
                connection.release();
        })
    },

    deletePromo(req, res){
        let id = req.body.id
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `DELETE FROM promo where id = ?;` , [id],
                function (error, results) {
                    if(error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil dihapus',
                    });
                });
                connection.release();
        })
    }

}