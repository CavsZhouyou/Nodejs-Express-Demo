/*
 * @Author: zhouyou@werun 
 * @Descriptions: mongodb 数据库操作 
 * @TodoList: 无
 * @Date: 2018-11-01 20:19:25 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-11-01 21:25:02
 */
var mongoose = require('mongoose');

// 建立数据库连接
mongoose.connect('mongodb://127.0.0.1:27017/cinema_movies');

// 定义视图
var MovieSchema = new mongoose.Schema({
  date: String,
  movies: [{
    movie_id: Number
  }]
});

// 建立 Model
var Schedule = mongoose.model('movie_schedule', MovieSchema);

// 获取电影列表
exports.getMovieList = function (res, date) {
  Schedule.find({
    date: date
  }, function (err, scheduleObj) {
    if (err) {
      console.log(err);
    } else if (scheduleObj) {
      var response = {
        success: true,
        data: {
          movies: scheduleObj[0].movies
        }
      }
      res.send(response);
    }
  })
};


// 获取电影详细信息
exports.getMovieDetails = function (res, id) {
  Schedule.find({}, function (err, scheduleObj) {
    if (err) {
      console.log(err);
    } else if (scheduleObj) {
      var response = {
        success: true,
        data: {},
      }

      // 查找对应影片
      scheduleObj.forEach(Schedule => {
        Schedule.movies.forEach(movie => {
          if (movie.movie_id == id) {
            response.data = movie;
          }
        })
      });

      res.send(response);
    }
  })
};


// 获取电影时间表信息
exports.getMovieTimeList = function (res, id) {
  Schedule.find({}, function (err, scheduleObj) {
    if (err) {
      console.log(err);
    } else if (scheduleObj) {
      var response = {
        success: true,
        data: {},
      }

      // 查找对应影片时间表
      scheduleObj.forEach(Schedule => {
        Schedule.movies.forEach(movie => {
          if (movie.movie_id == id) {
            response.data = movie;
          }
        })
      });

      res.send(response);
    }
  })
};