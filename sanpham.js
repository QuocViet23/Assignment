const mainImg = document.getElementById('main');
console.log(mainImg);
const images = document.querySelectorAll('.img');

images.forEach(img => {
    img.addEventListener('click', changeImage)
})

function changeImage(){
    let path = this.getAttribute('src');
    mainImg.setAttribute('src', path);
}
