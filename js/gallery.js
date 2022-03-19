let gallery = document.querySelector('#gallery');

let getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };

let getHeight = function (item) { return item.querySelector('.gallery__overlay').getBoundingClientRect().height; };

let resizeAll = function () {
    let altura = getVal(gallery, 'grid-auto-rows');
    let gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery__divzoom').forEach(function (item) {
        let el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};

window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery__divzoom').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});