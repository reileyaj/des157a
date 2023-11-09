(function(){
    'use strict';
    console.log('running js');

    let figArray = []; //empty array for each ID of a figure to be pushed into later
    let hotSpotArray = []; //empty array for each div in a figure to be pushed into later

    const figures = document.querySelectorAll('figure'); // makes array of all figures
    const hotSpots = document.querySelectorAll('figure div'); // makes array of divs inside figures
    const hoverPic = document.querySelectorAll('.hoverPic'); // makes array of all imgs with class of hoverPic

    for(const eachFig of figures){
        figArray.push(eachFig.id); //puts IDs of each figure into figArray
    };
    //console.log(figArray);

    for (const eachHotSpot of hotSpots){
        hotSpotArray.push(eachHotSpot.id);  //puts every id of a div in a figure into hotSpotArray
    }
    //console.log(hotSpotArray);

    hotSpots.forEach(function(eachSpot){
        eachSpot.addEventListener('mouseover', showHoverPic); //tells browser to call showHoverPic function when mouse hovers over a hot spot
        eachSpot.addEventListener('mouseout', hideHoverPic); //tells browser to call hideHoverPic function when mouse stops hovering over a hot spot
    });

    function showHoverPic(e){
        const divId = e.target.id;
        //console.log(divId);

        switch(divId){
            case `${divId}`: document.querySelector(`.${divId}`).className = `hoverPic showing ${divId}`; break; //utilizes that overlay images have a class named after the ID of the div they are in: hovering over the div with a certain div id will give the overlay image with the corresponding class name a class name of 'showing'
        }
    };

    function hideHoverPic(e){
        const divId2 = e.target.id;
        console.log(divId2);

        switch(divId2){
            case `${divId2}`: document.querySelector(`.${divId2}`).className = `hoverPic hidden ${divId2}`; break;
        }
    }

})();