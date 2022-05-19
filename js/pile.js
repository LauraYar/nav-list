window.addEventListener('load', function () {
  // 获取的img是数组,效果同document.querySelectorAll
  let img = document.getElementsByClassName('img');
  // lef和right是一个空数组
  let left = document.querySelectorAll('.left');
  let right = document.querySelectorAll('.right');
  let button = document.querySelectorAll('p');

  //1.设置一个数组，用来存id,共7张图则设7个元素。前面css中设置了这些id的属性，
  idArr = ['first', 'second', 'right', 'left', 'left', 'left', 'last'];

  // 6.设置一个变量来当图片的索引号
  let index = 0;
  // 2.2
initialize();
  // 4设置一个定时器，让图片轮播
  let timer = setInterval(next, 2000);

  // 3.创建切换图片的函数
  function prev() {
    // 3.1切换上一张也就是让数组的最后一个元素变成第一个元素
    idArr.push(idArr.shift());
    initialize();
    if(index=== 0){
      index = button.length - 1;
    }
    clearColor();
  }

  function next() {
    // 3.2跟上面反过来
    idArr.unshift(idArr.pop());
    initialize();
    clearColor();
  }

  // 5.创建一个函数用来让小方块跟随图片运动
  function clearColor(){
    for(let i =0 ;i<button.length;i++){
      button[i].style.backgroundColor = 'silver';
    }
  }

  // 7,让当前索引号变色
  button[index].style.backgroundColor = 'rgba(20, 134, 187)';
  // 2.创建一个函数用来初始化图片
  function initialize() {
    for (let i = 0; i < img.length; i++) {
      img[i].id = idArr[i];
    }
  }
});
