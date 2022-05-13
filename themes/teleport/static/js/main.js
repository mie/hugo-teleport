(function(){
  var burger = document.querySelector('.burger-container'),
      header = document.querySelector('header');
  
  burger.onclick = function() {
    header.classList.toggle('menu-opened');
  }
}());
(function(){
  var bigPicture = document.querySelectorAll('img');
  for(var i=0;i<bigPicture.length;i++){
    bigPicture[i].onclick = function() {
      BigPicture({
        el: this,
        imgSrc: this.dataset.src
      })
    }
  }
  let imageLinks = document.querySelectorAll('.gallery a')
  for (var i = 0; i < imageLinks.length; i++) {
    imageLinks[i].addEventListener('click', function(e) {
      e.preventDefault()
      BigPicture({
        el: e.target,
        gallery: '.gallery'
      })
    })
  }
}());
(function(){
  var bigPicture = document.querySelectorAll('.yt-thumb');
  for(var i=0;i<bigPicture.length;i++){
    bigPicture[i].onclick = function() {
      BigPicture({
        el: this,
        ytSrc: this.dataset.yt
      })
    }
  }
}());
(function(){
  let mq = window.matchMedia( "(min-width: 80em)" );
  if(mq.matches){
    let sticky = new Sticky('.sticky');
  }
  mq = window.matchMedia( "(min-width: 30em)" );
  if(mq.matches){
    let stickys = new Sticky('.sticky-social');
  }
}());
