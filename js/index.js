(function() {

    //index filter buttons
    var desButton = document.querySelector('#design');
    var devButton = document.querySelector('#development');

    function indexFilter() {
        window.location="gallery.html";
    }

    desButton.addEventListener('click', indexFilter, false);
    devButton.addEventListener('click', indexFilter, false);

})();