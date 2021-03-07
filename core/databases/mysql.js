const pool = require('../pool');
function database() {};

database.prototype = {
    get: function(callback)
    {
        let sql = "select * from user_sake order by stt_user desc";
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    get_status: function(callback){
        let sql = "select * from status_sake order by stt_status desc";
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        })
    }
    
}
module.exports = database;