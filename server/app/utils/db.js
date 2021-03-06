/**
 * mysql 封装
 * https://www.npmjs.com/package/mysql
 */

let mysql = require("mysql");
let crypto = require('./crypto');
let debug = require('../config').debug;

let pool = null;

// 空对象
let nop = (a, b, c, d, e, f, g) => { }

// 复用对象池
let query = (sql, callback) => {
    pool.getConnection((err, conn) => {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, (qerr, vals, fields) => {
                // 释放连接  
                conn.release();
                // 事件驱动回调  
                callback(qerr, vals, fields);
            });
        }
    });
};

/**
 * 初始化 mysql 连接
 */
let init = () => {
    let config = debug ? require('../config/dbtest_config').config : require('../config/db_config').config;
    pool = mysql.createPool({
        host: config.HOST,
        user: config.USER,
        password: config.PSWD,
        database: config.DB,
        port: config.PORT,
    });
};

// 执行数据库初始化
init();

/**
 * 参数的非空判断
 */
let _checkParams = (callback, ...args) => {
    callback = callback == null ? nop : callback;
    for(let i in args){
        if(args[i] == null){
            callback(false);
            return undefined;
        }
    }
    return callback;
}

let isAccountExist = (account, callback) => {
    callback = _checkParams(callback, account);
    if (callback == undefined) return;

    let sql = 'SELECT * FROM t_accounts WHERE account = "' + account + '"';
    query(sql, (err, rows, fields) => {
        if (err) {
            callback(false);
            throw err;
        }
        else {
            if (rows.length > 0) {
                callback(true);
            }
            else {
                callback(false);
            }
        }
    });
};

let createAccount = (account, password, callback) => {
    callback = _checkParams(callback, account, password);
    if (callback == undefined) return;

    let psw = crypto.md5(password);
    let sql = 'INSERT INTO t_accounts(account,password) VALUES("' + account + '","' + psw + '")';
    query(sql, (err, rows, fields) => {
        if (err) {
            // 重复键名称'%s'
            if (err.code == 'ER_DUP_ENTRY') {
                callback(false);
                return;
            }
            callback(false);
            throw err;
        }
        else {
            callback(true);
        }
    });
};

let getAccountInfo = (account, password, callback) => {
    callback = _checkParams(callback, account, password);
    if (callback == undefined) return;

    let sql = 'SELECT * FROM t_accounts WHERE account = "' + account + '"';
    query(sql, (err, rows, fields) => {
        if (err) {
            callback(null);
            throw err;
        }

        if (rows.length == 0) {
            callback(null);
            return;
        }

        if (password != null) {
            let psw = crypto.md5(password);
            if (rows[0].password == psw) {
                callback(null);
                return;
            }
        }

        callback(rows[0]);
    });
};

module.exports = {
	query,
    init,
    isAccountExist,
    createAccount,
    getAccountInfo,
}