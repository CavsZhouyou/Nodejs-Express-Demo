/*
 * @Author: zhouyou@werun 
 * @Descriptions: 电影列表 js 文件
 * @TodoList: 无
 * @Date: 2018-11-01 16:50:58 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-11-01 17:26:07
 */


$(function () {
  var date = location.href.split("?")[1];
  getMovieList(date);
});


/**var movieTemplate;
 * @description 获取电影列表
 * @param {string} [date=""]
 */
function getMovieList(date = "") {

  $.ajax({
    url: "/getMovieList",
    data: {
      date: date
    },
    success: function (data) {
      if (data.success) {
        renderMovieList(data.data.movies);
      }
    }
  });
}

/**
 * @description 渲染电影列表
 * @param {*} [movies=[]]
 */
function renderMovieList(movies = []) {
  var $movieContainer = $("#movie-container");

  movies.forEach(movie => {
    $movieContainer.append(`
    <div class="movie-content">
      <img src="${movie.movie_img}" alt="movie">
      <span>${movie.movie_name}</span>
      <br>
      <a class="view" href="../html/movieDetails.html?${movie.movie_id}"> 查看详情</a>
    </div>
    `);
  });
}