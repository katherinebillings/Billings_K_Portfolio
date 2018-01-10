(function() {

    /*//filter menu
    var menu = document.querySelector("#filterMenu"),
        listTime = menu.querySelector("#timeMenu"),
        listStage = menu.querySelector("#stageMenu"),
        listType = menu.querySelector("#typeMenu"),
        optionsTi = listTime.querySelectorAll("li a"),
        optionsSt = listStage.querySelectorAll("li a"),
        optionsTy = listType.querySelectorAll("li a"),
        appliedFilterTi,
        appliedFilterSt,
        appliedFilterTy,
        appliedArray;*/

    /*function changeOptions(evt) {
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
    
         /* function processResult(data) {
            //debugger;
            const { modelName, pricing, modelDetails} = data;
            // statement chaining lets you go lots of stuff on one line
            let model = document.querySelector('.modelName').textContent = modelName;
            let price = document.querySelector('.priceInfo').innerHTML = pricing;
            let details = document.querySelector('.modelDetails').textContent = modelDetails;
            //debugger;
            //changeModel text
            let objectIndex = carData[this.id];
        
            //model.firstChild.nodeValue = objectIndex.model;
            //price.firstChild.nodeValue = objectIndex.price;
            //details.firstChild.nodeValue = objectIndex.description;
        
            //opacity change
        
            Img.forEach(function(element, index) {
              element.classList.remove("focusMini");
            });
            // the backticks are a new ES6 thing called a template string (look it up)
            document.querySelector(`#${data.model}`).classList.add("focusMini");
        
            //console.log(this.id);
          }*/
            
            //outsideL.style.color = "#00ffff";

        
          var lb, lbImg;

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
                lb = cln.querySelector(".lbLink");
                lbImg = cln.querySelector(".lbImg");

                lb.id = index + 1;
                lbImg.id = index + 1;

                lb.addEventListener("click", popLightbox, false);
                lbImg.addEventListener("click", popLightbox, false);
        
                // add an index number to the thumbnail for array reference
                //lb.dataset.index = index;
                //lbImg.dataset.index = index;
                /*lb.id = index;
                lbImg.id = index;
                console.log(lb.id);*/

                //console.log(lb.dataset.index);
        
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

        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';

        let lightboxClose = lightbox.querySelector('.close-lightbox');
        lightboxClose.addEventListener('click', closeLightbox, false);

        const httpRequest = new XMLHttpRequest();
        //1. make an AJAX call to the databse; handle any errors first
        if (!httpRequest) {
          alert('giving up, your browser sucks!');
          return false;
        }
    
        httpRequest.onreadystatechange = processRequestL(this.id);
        httpRequest.open('GET', 'admin/scripts/getFiles.php?id=' + this.id);
        httpRequest.send();
    
        function processRequestL(id) {
            // handle the stages of our AJAX call
            let reqIndicator = document.querySelector('.request-state');
            reqIndicator.textContent = httpRequest.readyState;
        
            //debugger;
        
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {// request worked, all is good
                //debugger;
                let data = JSON.parse(httpRequest.responseText);
                console.log(data);
                processResultLight(data);
            } else {
                alert('There was a problem with the request');
            }
            debugger;
            }
        }
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
        //let id = this.dataset.index;
        console.log("data");
        // statement chaining lets you go lots of stuff on one line
        let detailsBox = document.querySelector(".gDetails");
        const [{port_title, port_position, port_details, port_date, port_image, port_outside, outside_name, program_name}] = data;
        let title = detailsBox.querySelector('.title').innerHTML = port_title;
        let position = detailsBox.querySelector('.position').innerHTML = port_position;
        let details = detailsBox.querySelector('.details').innerHTML = port_details;
        let image = detailsBox.querySelector('.imgS').src = "images/gallery/" + port_image + ".jpg";
        let imageM = detailsBox.querySelector('.imgM').src = "images/gallery/" + port_image + ".jpg";
        let outside = detailsBox.querySelector('.outsideLink a').innerHTML = "View on " + outside_name;
        let outsideL = detailsBox.querySelector('.outsideLink a').href = port_outside;
        let program = detailsBox.querySelector('.program h6').innerHTML = program_name;

    
        //console.log(this.id);
    }
})();