window.addEventListener('load', function () {
  // 电影滚动图片
  // 1.鼠标移入moviehot，按钮显示，移除按钮隐藏
  var movieTab = document.getElementById('movie-tab');
  var movieTabLi = movieTab.getElementsByTagName('li');
  var movieTabTriangle = movieTab.getElementsByClassName('triangle ');
  var movieShow = document.getElementById('movie-show');
  var movieShowClass = movieShow.getElementsByClassName('moviehot');

  console.log(movieShowClass);

  var movieLeft = document.getElementById('arr_l');
  var movieRight = document.getElementById('arr_r');
  var nowhot = document.getElementById('nowhot');
  // console.log(nowhot);

  movieShow.onmouseover = function () {
    movieLeft.style.display = 'block';
    movieRight.style.display = 'block';
  };
  movieShow.onmouseout = function () {
    movieLeft.style.display = 'none';
    movieRight.style.display = 'none';
  };
  // 2.鼠标点击即将上映，下面的三角显示
  movieTabLi[1].onmouseover = function () {
    movieShowClass[0].style.display = 'block';
    movieShowClass[1].style.display = 'none';
    movieTabTriangle[0].style.display = 'block';
    movieTabTriangle[1].style.display = 'none';
  };
  movieTabLi[2].onmouseover = function () {
    movieShowClass[0].style.display = 'none';
    movieShowClass[1].style.display = 'block';
    movieTabTriangle[1].style.display = 'block';
    movieTabTriangle[0].style.display = 'none';
  };
  //左右箭头被点击切换图片
  let num = 0;
  movieRight.addEventListener('click', function () {
    num++;
    animate(nowhot, -1150 * num);
  
    if(nowhot.style.left = -3490 + 'px'){
        // animate(nowhot, -1150 * 2);
        movieRight.disabled='disabled'
    }
    console.log(num);
  });

  movieLeft.addEventListener('click', function () {
    num--;
    animate(nowhot,-1150 * num );
    if(num<0){
        animate(nowhot, 0);
        movieLeft.disabled='disabled'
    }
    console.log(num);
  });
});
