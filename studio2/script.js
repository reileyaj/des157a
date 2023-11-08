(function(){
    'use strict';
    console.log(`running JS!`);
    
    const hotSpots = document.querySelectorAll('figure div') //makes a variable for all hotspots
    const hoverPic = document.querySelectorAll('.hoverPic') //makes a variable for all overlays that should appear when hovering

    hotSpots.forEach(function(eachSpot){
        eachSpot.addEventListener('mouseover', showHoverPic); //tells browser what to do when mouse is hovering over a div
        eachSpot.addEventListener('mouseout', function(){ //tells browser what to do when mouse stops hovering over that div
            hoverPic.forEach(function(eachHoverPic){
                eachHoverPic.className = 'hoverPic hidden';
            }); // for each function so browser knows when mouseout of that div every hoverPic becomes hidden.
        })
    }); // for each function so browser knows when the mouse is hovering over or not hovering over each hotspot

    function showHoverPic(e){
        const specificDiv = e.target.id; //makes a const for each div ID.
        //console.log(specificDiv); //console tells me which div I'm hovering over

        switch (specificDiv){
            case 'ts1': hoverPic[0].className = 'hoverPic showing'; break;
            case 'ts2': hoverPic[1].className = 'hoverPic showing'; break;
            case 'ts3': hoverPic[2].className = 'hoverPic showing'; break;
            case 'm1': hoverPic[3].className = 'hoverPic showing'; break;
            case 'm2': hoverPic[4].className = 'hoverPic showing'; break;
            case 'm3': hoverPic[5].className = 'hoverPic showing'; break;
            case 'z1': hoverPic[6].className = 'hoverPic showing'; break;
            case 'z2': hoverPic[7].className = 'hoverPic showing'; break;
            case 'z3': hoverPic[8].className = 'hoverPic showing'; break;
            case 'f1': hoverPic[9].className = 'hoverPic showing'; break;
            case 'f2': hoverPic[10].className = 'hoverPic showing'; break;
            case 'f3': hoverPic[11].className = 'hoverPic showing'; break;
        }; // when each div is hovered over, it shows its corresponding picture, organized as a member of the hoverPic array and specified by its order in the array
    }

/*     hotSpots.forEach( function(eachSpot){
        eachSpot.addEventListener('mouseover', function(){
            console.log(`ur mousing overrrrrr`);
        });
        eachSpot.addEventListener('mouseout', function(){
            console.log(`you're mousing outtttt`);
        });
    });
 */ // checked that mouseover & mouseout on each div was done correctly by telling me in the console log.
})();