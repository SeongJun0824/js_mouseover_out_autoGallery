'use strict';

const gallery = document.querySelector('.gallery')
const galleryUlLi = document.querySelectorAll('.gallery>ul>li')

const centerBtn = document.querySelector('.center-btn')
const arrow = document.querySelectorAll('.arrow')

let i = -1;

function autoGallery() {
	i++;
	// console.log(`i -> ${i}`);
	//이동거리 .gallery				//offset위치
	const gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft
	const goto=(-i*gap)+'px';
	
	gallery.style.left=goto;
	gallery.style.transition='all 0.5s'
	// console.log(`gap -> ${gap}`)
	// console.log(`goto -> ${goto}`)
	
	
	if (i >= galleryUlLi.length-1) i = -1;

	//setTimeOut
	// setTimeout(autoGallery,3000);
}

// 3초 마다
let setIn=setInterval(autoGallery, 3000);

centerBtn.addEventListener('mouseover', (e)=>{
	arrow.forEach(el=>{
		if(e.target===el){
			clearInterval(setIn);
		}
	})
});
centerBtn.addEventListener('mouseover', (e)=>{
	arrow.forEach(el=>{
		if(e.target===el){
			setIn=setInterval(autoGallery, 3000);
		}
	})
});
// let j=-1;
// // 3초 후에 한번만 실행
// setTimeout(()=>{
// 	j++
// 	console.log(`j -> ${j}`)
// },3000);

(() => autoGallery())();