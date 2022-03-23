'use strict';
// .gallery>ul>li a0.jpg~a4.jpg 배경이미지
// 배열, push(), for문 이용해서 설정

const gallery = document.querySelector('.gallery')
const galleryUl = gallery.querySelector('.gallery>ul')
const galleryUlLi = galleryUl.querySelectorAll('li')
const liSize = galleryUlLi.length;
const arrBg = [];

for (let i = 0; i < liSize; i++) {
  arrBg.push(`url(img/a${i}.jpg) no-repeat 50%/cover`)
  galleryUlLi[i].style.background = arrBg[i];
}

let i = -1;

const autoGallery = () => {
  i++;
  // console.log(`i -> ${i}`);

  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft
  const goto = (-i * gap) + 'px'

  gallery.style.left = goto;
  gallery.style.transition = 'all 0.5s ease-in-out'

  if (i >= liSize - 1) i = -1;
}

let setIn = setInterval(autoGallery, 2000);

/*'span.arrow'*/
// span.arrow를 마우스 오버시 setInterval 중지
const arrow = document.querySelectorAll('span.arrow')
/*
// arrow[0].addEventListener('mouseover', fnOver);
// arrow[1].addEventListener('mouseover', fnOver);
// function fnOver() {
//   clearInterval(setIn);
//   console.log(event.type, event.target)
// }
*/
// forEach문
// arrow.forEach(el=>el.addEventListener('mouseover', ()=>{
//   clearInterval(setIn);
// }));

// span.arrow 마우스 아웃시 setInterval 다시 시작
/*
// arrow[0].addEventListener('mouseout', fnOut);
// arrow[1].addEventListener('mouseout', fnOut);
// function fnOut() {
//   console.log(event.type, event.target)
//   setIn = setInterval(autoGallery, 2000);
// }
*/
// forEach문
// arrow.forEach(el=>el.addEventListener('mouseout', ()=>{
//   setIn = setInterval(autoGallery,2000);
// }));

arrow.forEach(el => {
  el.addEventListener('mouseover', () => clearInterval(setIn));
  el.addEventListener('mouseout', () => setIn = setInterval(autoGallery, 2000));
});

/*'.items>ul>li'*/
// .items>ul>li 마우스 오버시 setInterval 중지
const itemLi = document.querySelectorAll('.items>ul>li')

/*
itemLi[0].addEventListener('mouseover', fnOver);
itemLi[1].addEventListener('mouseover', fnOver);
itemLi[2].addEventListener('mouseover', fnOver);
itemLi[3].addEventListener('mouseover', fnOver);
itemLi[4].addEventListener('mouseover', fnOver);
// .items>ul>li 마우스 아웃시 setInterval 다시 시작
itemLi[0].addEventListener('mouseout', fnOut);
itemLi[1].addEventListener('mouseout', fnOut);
itemLi[2].addEventListener('mouseout', fnOut);
itemLi[3].addEventListener('mouseout', fnOut);
itemLi[4].addEventListener('mouseout', fnOut);
*/

// for문으로 .items>ul>li 마우스 오버시 setInterval 중지
/*
for(let i=0;i<itemLi.length;i++){
  itemLi[0].addEventListener('mouseover', fnOver);
}
*/
// for문으로 .items>ul>li 마우스 아웃시 setInterval 다시 시작
/*
for(let i=0;i<itemLi.length;i++){
  itemLi[i].addEventListener('mouseout', fnOut);
}
*/

// forEach로 .items>ul>li 마우스 오버시 setInterval 중지
/*
// itemLi.forEach((el)=>{
//   el.addEventListener('mouseover', fnOver);
// });
// forEach로 .items>ul>li 마우스 아웃시 setInterval 다시 시작
// itemLi.forEach((el)=>{
//   el.addEventListener('mouseout', fnOut);
// });
*/

// 함수 만들지 않고..
/*
// itemLi.forEach(function(el){
//   el.addEventListener('mouseover',function(){
//     clearInterval(setIn)
//   });
// });
*/
// forEach문
/*
// itemLi.forEach(el=>el.addEventListener('mouseover',()=>{
//   clearInterval(setIn)
// }));
// itemLi.forEach(el=>el.addEventListener('mouseover',()=>{
//   setIn = setInterval(autoGallery,2000)
// }));
*/

itemLi.forEach(el => {
  el.addEventListener('mouseover', () => clearInterval(setIn));
  el.addEventListener('mouseout', () => setIn = setInterval(autoGallery, 2000));
});

(() => autoGallery())();