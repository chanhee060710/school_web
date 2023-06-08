var index = 0;   //이미지에 접근하는 인덱스
window.onload = function(){
    slideShow();
}

function slideShow() {
var i;
var x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 참조
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
}
index++;
if (index > x.length) {
    index = 1;  //인덱스가 초과되면 1로 변경
}   
x[index-1].style.display = "block";  //해당 인덱스는 block으로
setTimeout(slideShow, 4000);   //함수를 4초마다 호출

}
const modal = document.querySelector(".modal")
const lead = document.querySelector(".lead")
const bg = document.querySelector(".modal_bg")
const work = document.querySelector(".modal_w")
const body = document.querySelector(".body")
const head = document.querySelector(".head")
const  div = document.querySelector(".last_name")
lead.addEventListener("click",()=>{
    
    bg.setAttribute("style","display:block")
    
    modal.setAttribute("style","display: block; ")
    
    div.textContent = "선도부"
    
    head.textContent = "최종호"
    
    body.textContent = "이찬희"
    
    work.textContent = "학교에서 학생들의 복장을 단속하는 일을 합니다"
})

bg.addEventListener("click",()=>{
    modal.setAttribute("style","display:none")
    bg.setAttribute("style","display:none")
})
const manage = document.querySelector(".manage")
manage.addEventListener("click",()=>{
    bg.setAttribute("style","display:block")
    modal.setAttribute("style","display: block; ")
    div.textContent = "시설관리부"
    head.textContent = "이시형"
    body.textContent = "류채연"
   work.textContent = "학교의 시설을 관리하는 일을 주로 합니다"
})
const gen = document.querySelector(".general")
gen.addEventListener("click",()=>{
    bg.setAttribute("style","display:block")
    modal.setAttribute("style","display: block; ")
    div.textContent = "총무부"
    head.textContent = "유주형"
    body.textContent = "윤진혁"
    work.textContent = "우리 학교에 일반적인 사무를 맡는 일을합니다"

})

const culture = document.querySelector(".culture")
culture.addEventListener("click",()=>{
    bg.setAttribute("style","display:block")
    modal.setAttribute("style","display: block; ")
    div.textContent = "문체부"
    head.textContent ="변윤진"
    body.textContent ="박천휘"
    work.textContent ="학교 행사들을 관리하는 일을 주로합니다"
})

