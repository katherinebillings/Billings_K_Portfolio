(function() {

    //filter menu
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
    });


})();