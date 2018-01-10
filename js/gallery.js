(function() {

    //filter menu
    /*var menu = document.querySelector("#filterMenu"),
        listTime = menu.querySelector("#timeMenu"),
        listStage = menu.querySelector("#stageMenu"),
        listType = menu.querySelector("#typeMenu"),
        optionsTi = listTime.querySelectorAll("li a"),
        optionsSt = listStage.querySelectorAll("li a"),
        optionsTy = listType.querySelectorAll("li a"),
        appliedFilterTi,
        appliedFilterSt,
        appliedFilterTy,
        appliedArray;

    function changeOptions(evt) {
        appliedArray=evt.currentTarget.parentElement.parentElement;
        if(appliedFilterTi===evt.currentTarget || appliedFilterSt===evt.currentTarget || appliedFilterTi===evt.currentTarget) {
            evt.currentTarget.classList.remove("activeFilter");
        }
        else if(appliedArray===listTime){
            if(appliedFilterTi != undefined) {
                appliedFilterTi.classList.remove("activeFilter");
            }
            evt.currentTarget.classList.add("activeFilter");
            appliedFilterTi = evt.currentTarget;
        }
        else if(appliedArray===listStage){
            if(appliedFilterSt != undefined) {
                appliedFilterSt.classList.remove("activeFilter");
            }
            evt.currentTarget.classList.add("activeFilter");
            appliedFilterSt = evt.currentTarget;
        }
        else if(appliedArray===listType){
            if(appliedFilterTy != undefined) {
                appliedFilterTy.classList.remove("activeFilter");
            }
            evt.currentTarget.classList.add("activeFilter");
            appliedFilterTy = evt.currentTarget;
        }
    }

    optionsTi.forEach(function(element, index) {
        element.addEventListener('click', changeOptions, false);
    });
    optionsSt.forEach(function(element, index) {
        element.addEventListener('click', changeOptions, false);
    });
    optionsTy.forEach(function(element, index) {
        element.addEventListener('click', changeOptions, false);
    });*/

    //gallery
      const httpRequest = new XMLHttpRequest();
        //1. make an AJAX call to the databse; handle any errors first
        if (!httpRequest) {
          alert('giving up, your browser sucks!');
          return false;
        }
    
        httpRequest.onreadystatechange = processRequest;
        httpRequest.open('GET', 'admin/scripts/getFiles.php');
        httpRequest.send();
    
    function processRequest() {
        // handle the stages of our AJAX call
        let reqIndicator = document.querySelector('.request-state');
        reqIndicator.textContent = httpRequest.readyState;
    
        //debugger;
    
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {// request worked, all is good
            //debugger;
            let data = JSON.parse(httpRequest.responseText);
            processResult(data);
          } else {
            alert('There was a problem with the request');
          }
        }
    }
    

        


      function processResult(data) {
        //debugger;
        
        // statement chaining lets you go lots of stuff on one line
        let gallery = document.querySelector('#gallery');
        var file = document.querySelector(".gFile");
            data.forEach(function(element, index){
                const [{port_title, port_position, port_summary, port_image, port_outside, outside_name}] = data;
                let cln = file.cloneNode(true);
                let title = cln.querySelector('.title').innerHTML = data[index].port_title;
                let position = cln.querySelector('.position').innerHTML = data[index].port_position;
                let summary = cln.querySelector('.summary').innerHTML = data[index].port_summary;
                let image = cln.querySelector('.lbImg').src = "images/gallery/" + data[index].port_image + "-large.jpg";
                let outside = cln.querySelector('.outsideLink a').innerHTML = "View on " + data[index].outside_name;
                let outsideL = cln.querySelector('.outsideLink a').href = data[index].port_outside;
                let lb = cln.querySelector(".lbLink");
                let lbImg = cln.querySelector(".lbImg");

                lb.id = index + 1;
                lbImg.id = index + 1;

                lb.addEventListener("click", popLightbox, false);
                lbImg.addEventListener("click", popLightbox, false);
        
                // append it to the container
                gallery.appendChild(cln);
            });

        file.classList.add('hide');
    
        //console.log(this.id);
        }

        //console.log(lb.dataset.index);

    function popLightbox() {
        //debugger;
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";

        const httpRequest = new XMLHttpRequest();
        //1. make an AJAX call to the databse; handle any errors first
        if (!httpRequest) {
          alert('giving up, your browser sucks!');
          return false;
        }
    
        httpRequest.onreadystatechange = processRequestL;
        httpRequest.open('GET', 'admin/scripts/getFiles.php?id=' + this.id);
        httpRequest.send();
    
        function processRequestL() {
            // handle the stages of our AJAX call
            let reqIndicator = document.querySelector('.request-state');
            reqIndicator.textContent = httpRequest.readyState;
        
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {// request worked, all is good
                let data = JSON.parse(httpRequest.responseText);
                processResultLight(data);
            } else {
                alert('There was a problem with the request');
            }
            }
        }

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

    function processResultLight(data) {
        //debugger;

        // statement chaining lets you go lots of stuff on one line
        let detailsBox = document.querySelector(".gDetails");
        const [{port_title, port_position, port_details, port_date, port_image, port_outside, outside_name, program_name}] = data;
        let title = detailsBox.querySelector('.title').innerHTML = port_title;
        let position = detailsBox.querySelector('.position').innerHTML = port_position;
        let details = detailsBox.querySelector('.date').innerHTML = port_date;
        let date = detailsBox.querySelector('.details').innerHTML = port_details;
        let image = detailsBox.querySelector('.imgS').src = "images/gallery/" + port_image + ".jpg";
        let imageM = detailsBox.querySelector('.imgM').src = "images/gallery/" + port_image + ".jpg";
        let outside = detailsBox.querySelector('.outsideLink').innerHTML = "View on " + outside_name;
        let outsideL = detailsBox.querySelector('.outsideLink').href = port_outside;
        console.log(program_name);
        let program = detailsBox.querySelector('.program h6').innerHTML = program_name;

    
        //console.log(this.id);
    }

    //filters
    var listStage = document.querySelector("#stageMenu"),
        listType = document.querySelector("#typeMenu"),
        optionsSt = listStage.querySelectorAll("li a"),
        optionsTy = listType.querySelectorAll("li a");
    
        function changeOptionsSt() {
            
            const httpRequest = new XMLHttpRequest();
            //1. make an AJAX call to the databse; handle any errors first
            if (!httpRequest) {
                alert('giving up, your browser sucks!');
                return false;
            }
            
            httpRequest.onreadystatechange = processRequestF;
            httpRequest.open('GET', 'admin/scripts/getFiles.php?stage="' + this.id + '"');
            httpRequest.send();
            debugger;
        }

        function changeOptionsTy() {
            const httpRequest = new XMLHttpRequest();
            if (!httpRequest) {
                alert('giving up, your browser sucks!');
                return false;
            }

            httpRequest.onreadystatechange = processRequestF;
            httpRequest.open('GET', 'admin/scripts/getFiles.php?type="' + this.id + '"');
            httpRequest.send();
        }

        function processResultF(data) {
            //debugger;
            
            // statement chaining lets you go lots of stuff on one line
            let gallery = document.querySelector('#gallery');
            var file = document.querySelector(".gFile");
                data.forEach(function(element, index){
                    const [{port_title, port_position, port_summary, port_image, port_outside, outside_name}] = data;
                    let cln = file.cloneNode(true);
                    let title = cln.querySelector('.title').innerHTML = data[index].port_title;
                    let position = cln.querySelector('.position').innerHTML = data[index].port_position;
                    let summary = cln.querySelector('.summary').innerHTML = data[index].port_summary;
                    let image = cln.querySelector('.lbImg').src = "images/gallery/" + data[index].port_image + "-large.jpg";
                    let outside = cln.querySelector('.outsideLink a').innerHTML = "View on " + data[index].outside_name;
                    let outsideL = cln.querySelector('.outsideLink a').href = data[index].port_outside;
                    let lb = cln.querySelector(".lbLink");
                    let lbImg = cln.querySelector(".lbImg");
    
                    lb.id = index + 1;
                    lbImg.id = index + 1;
    
                    lb.addEventListener("click", popLightbox, false);
                    lbImg.addEventListener("click", popLightbox, false);
            
                    // append it to the container
                    gallery.appendChild(cln);
                });
    
            file.classList.add('hide');
        
            //console.log(this.id);
            }

        optionsSt.forEach(function(element, index) {
            element.addEventListener('click', changeOptionsSt, false);
        });
        optionsTy.forEach(function(element, index) {
            element.addEventListener('click', changeOptionsTy, false);
        });
})();