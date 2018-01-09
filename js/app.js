//do not under any circumstance remove this line
$(document).foundation();

(function() {
    "use strict";
    
    //icon hover
    var icons = document.querySelectorAll('.icons');
    var img = document.querySelectorAll('.icons img');

    function iconHover() {
        let icon = "#" + this.id + " img";
        let img = document.querySelector(icon);
        img.src="images/icons/"+this.id+".svg";
    }

    function iconReturn() {
        let icon = "#" + this.id + " img";
        let img = document.querySelector(icon);
        img.src="images/icons/"+this.id+"-white.svg";
    }

    icons.forEach(function(element, index) {
        element.addEventListener('mouseover', iconHover, false);
        element.addEventListener('mouseout', iconReturn, false);
    });

    //lightbox
    var lb = document.querySelectorAll(".lbLink");
    var lbImg = document.querySelectorAll(".lbImg");

    function popLightbox() {
        //debugger;
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";

        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';

        let lightboxClose = lightbox.querySelector('.close-lightbox');
        lightboxClose.addEventListener('click', closeLightbox, false);
    }

    function closeLightbox() {
        //debugger;
        document.body.style.overflow = "scroll";
        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = "none";
        let lightboxImg = lightbox.querySelector('img');
        lightboxImg.src = "";
    }

    for (var i=0; i<lb.length; i++) {
        lb[i].addEventListener("click", popLightbox, false);
        lbImg[i].addEventListener("click", popLightbox, false);
    }

})();