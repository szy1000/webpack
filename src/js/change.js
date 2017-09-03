// import {} from ''
import 'jquery';
import Swiper from 'swiper';
import "../css/style.scss";
import "../users.html";
// import "../js/swiper.js"

const btn = document.getElementById('btn');
const para = document.getElementById('para');

let bool = true;

const toggle = () => {
	if(bool){
		bool = false;
		para.style.display = 'none'
	}else{
		bool = true;
		para.style.display = 'block';
	}
}

btn.addEventListener('click',toggle);


$(document).ready(function(){
	var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical',
    loop: true,
    autoPlay: true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
  })      
})
