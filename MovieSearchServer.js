/*
 * @Author: zhouyou@werun 
 * @Descriptions: 电影搜索 server 
 * @TodoList: 无
 * @Date: 2018-11-01 16:25:14 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-11-01 21:26:00
 */
var express = require('express');
var search = require('./lib/MovieSearchMySql.js');
//var search = require('./lib/MovieSearchMongodb.js');
var app = express();

app.use(express.static('public'));

// 获取当日电影列表
app.get('/getMovieList', function (req, res) {
  search.getMovieList(res, req.param('date'));
})

// 获取电影详情
app.get('/getMovieDetails', function (req, res) {
  search.getMovieDetails(res, req.param('id'));
})

// 获取电影放映时间表
app.get('/getMovieTimeList', function (req, res) {
  search.getMovieTimeList(res, req.param('id'));
})

// 在 9000 端口下监听
var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Cavs Cinema app listening at http://%s:%s", host, port)
})