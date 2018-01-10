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

        "use strict";
      // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
      //var Img = document.querySelectorAll('.data-ref');
    
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
          
          let file = document.querySelector('.gfile');
          console.log(file);
      function processResult(data) {
        //debugger;
        const {port_title, port_position, port_summary, port_image, port_outside, outside_name} = data;
        // statement chaining lets you go lots of stuff on one line
        let gallery = document.querySelector('#gallery');
        
        
        let title = port_title;
        //debugger;
    
        //opacity change
    
            data.video_name.forEach(function(element, index){
              let vid = document.createElement('video');
    
              // add a css class
              vid.classList.add('media', 'responsive', 'small-12', 'medium-4', 'cell');
              // add an image source
              //vid.src = "video/" + objectIndex.images[index] + ".webm";
              
              var source= document.createElement('source');
                source.type= 'video/webm';
                source.src= "video/" + data.videoName[index] + ".webm";
                vid.appendChild(source);
                source= document.createElement('source');
                source.type= 'video/mp4';
                source.src= "video/" + data.videoName[index] + ".mp4";
                vid.appendChild(source);
    
              // add an index number to the thumbnail for array reference
              vid.dataset.index = index;
    
              // add some event handling
              vid.addEventListener('click', popLightbox(index), false);
    
              // append it to the container
              contentArea.appendChild(vid);
            });
    
        // the backticks are a new ES6 thing called a template string (look it up)
        //document.querySelector(`#${data.video_name}`).classList.add(".media")
    
        //console.log(this.id);
        }
})();