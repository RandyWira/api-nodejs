const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err)=> {
    console.err(err);
});

module.exports = {

    getDataMenu(req, res){
        pool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query(
                `SELECT * FROM menu;` ,
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

    getDataMenuByID(req, res) {
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query(
                `SELECT * FROM menu WHERE id = ?;` , [id],
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

    addDataMenu(req, res){
        let data = {
            nama_menu : req.body.nama_menu,
            harga : req.body.harga,
            kategori : req.body.kategori
        }

        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `INSERT INTO menu SET ?;` , [data],
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

    editDataMenu(req,res){
        let dataEdit = {
            nama_menu : req.body.nama_menu,
            harga: req.body.harga,
            kategori: req.body.kategori,
        }
        let id = req.body.id
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `UPDATE menu SET ? WHERE id = ?;` , [dataEdit, id],
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

    deleteDataMenu(req, res){
        let id = req.body.id
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `DELETE FROM menu where id = ?;` , [id],
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