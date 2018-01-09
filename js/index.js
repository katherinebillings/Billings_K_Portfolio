(function() {

    //index filter buttons
    var desButton = document.querySelector('#design');
    var devButton = document.querySelector('#development');

    function indexFilter(evt) {
        window.location="file:///D:/Documents/school/2nd%20year/1st%20semester/Portfolio_original/gallery.html";
    }

    desButton.addEventListener('click', indexFilter, false);
    devButton.addEventListener('click', indexFilter, false);

})();