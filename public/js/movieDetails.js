/*
 * @Author: zhouyou@werun 
 * @Descriptions: 电影详情 js 文件
 * @TodoList: 无
 * @Date: 2018-11-01 17:23:20 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-11-01 19:50:14
 */


$(function () {
  var id = location.href.split("?")[1];
  getMovieDetails(id);
  getMovieTimeList(id);
});


/**
 * @description 获取电影详情
 * @param {number} [id=0]
 */
function getMovieDetails(id = 0) {

  $.ajax({
    url: "/getMovieDetails",
    data: {
      id: id
    },
    success: function (data) {
      if (data.success) {
        renderMovieDetails(data.data);
      }
    }
  });
}

/**
 * @description 获取电影详情
 * @param {number} [id=0]
 */
function getMovieTimeList(id = 0) {

  $.ajax({
    url: "/getMovieTimeList",
    data: {
      id: id
    },
    success: function (data) {
      if (data.success) {
        renderMovieTimeList(data.data.times);
      }
    }
  });
}

/**
 * @description 渲染电影信息
 * @param {*} [movie={}}]
 */
function renderMovieDetails(movie = {}) {
  $(".movie-name").text(movie.movie_name);
  $("#movie-description").text(movie.movie_description);
  $("#movie-img").text(movie.movie_img);
  $("#movie-adult-price").text(movie.movie_adult_price);
  $("#movie-student-price").text(movie.movie_student_price);
  $("#movie-img").attr("src", movie.movie_img);

}

/**
 * @description 渲染电影时间列表
 * @param {*} [movie=[]]
 */
function renderMovieTimeList(times = []) {

  times.forEach(time => {
    $("#movie-times").append(`
    <li>${time.show_time || time}</li>
    `)
  })
}