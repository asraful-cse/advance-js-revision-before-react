// console.log('fsdf');

const images = ['images/pic-1.jpg', 'images/pic-2.jpg'];



let ingIndex = 0;
const imageElement = document.getElementById('image-select')
setInterval(() => {
if (ingIndex >= images.length) {
    ingIndex = 0;
}
    // console.log(ingIndex);
    const imgUrl = images[ingIndex];
    console.log(imgUrl);
    imageElement.setAttribute('src' , imgUrl );

    ingIndex++;
}, 1000);