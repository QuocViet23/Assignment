const cards = document.querySelectorAll('.hinhanh')
const subMenus = document.querySelectorAll('.icons')

cards.forEach((hinhanh,index) =>{
    hinhanh.addEventListener('mouseover', ()=>{
        subMenus.item(index).classList.remove('hide')
    })
    hinhanh.addEventListener('mouseout', ()=>{
        subMenus.item(index).classList.add('hide')
    })
})

var arrSlide = [
    "./img/0.jpg",
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg"
];

var index = 0;


function right(){
    index++;
    if(index>= arrSlide.length) index = 0;
    var hinh = document.getElementById("slideImg");
    hinh.src=arrSlide[index];
}

function left(){
    index--;
    if (index<0) index = arrSlide.length-1;
    var hinh = document.getElementById("slideImg");
    hinh.src=arrSlide[index];
}

function fStart(){
    setInterval(right,3000);
}