var images = ["img/bannerpic-1.jpg", "img/bannerpic-2.jpg", "img/bannerpic-3.jpg","img/bannerpic-4.jpg","img/bannerpic-5.jpg"]
var currentImgIndex = 0;

setInterval(function() {
    currentImgIndex++;

    if (currentImgIndex == images.length) {
        currentImgIndex = 0;
    }

    document.getElementById("bannerimg").src = images[currentImgIndex];
}, 8000);