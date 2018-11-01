/*
 * @Author: zhouyou@werun 
 * @Descriptions:  执行对应 mysql 查询
 * @TodoList: 无
 * @Date: 2018-11-01 16:25:49 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-11-01 20:13:41
 */


var mysql = require('mysql');

// 建立数据库连接
var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'zhouyou',
  password: '123456',
  database: 'movies'
});


// 获取电影列表
exports.getMovieList = function (res, date) {
  var query = "SELECT distinct movie_details.movie_id,movie_name,movie_img FROM movie_time,movie_details WHERE movie_details.movie_id=movie_time.movie_id AND show_date=? ";
  db.query(
    query,
    [date],
    function (err, rows) {
      if (err) throw err;
      var response = {
        success: true,
        data: {
          movies: rows
        }
      }
      res.send(response);
    }
  );
};


// 获取电影详情
exports.getMovieDetails = function (res, id) {
  var query = "SELECT * FROM movie_details WHERE movie_id= ? ";
  db.query(
    query,
    [id],
    function (err, rows) {
      if (err) throw err;
      var response = {
        success: true,
        data: rows[0]
      };
      res.send(response);
    }
  );
};


exports.getMovieTimeList = function (res, id) {
  var query = "SELECT distinct show_time FROM movie_time WHERE movie_id=? ";
  db.query(
    query,
    [id],
    function (err, rows) {
      if (err) throw err;
      var response = {
        success: true,
        data: {
          times: rows
        }
      }
      res.send(response);
    }
  );
};