console.log('hello1')
document.querySelectorAll('.picture-box img').forEach(image =>{
    image.onclick = () =>{
        console.log('hello')
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-image .span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}
