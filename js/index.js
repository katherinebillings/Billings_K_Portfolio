(function() {

    //index filter buttons
    var desButton = document.querySelector('#design');
    var devButton = document.querySelector('#development');

    function indexFilter() {
        window.location="http://localhost/portfolio_original/gallery.html";
    }

    desButton.addEventListener('click', indexFilter, false);
    devButton.addEventListener('click', indexFilter, false);

})();