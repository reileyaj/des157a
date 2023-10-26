(function(){
    'use strict';
    console.log(`reading JS`);

    const form = document.querySelector('form');
    const madLib = document.querySelector('#madlib');
    const overlay = document.querySelector('#overlay')
    const errorContainer = document.querySelector('#errorContainer')
    const error = document.querySelector('#errorMsg');

    form.addEventListener( 'submit', function(e){
        e.preventDefault();

        const recipientName = document.querySelector('#recipientName').value;
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const emotion = document.querySelector('#emotion').value;
        const pluralNoun1 = document.querySelector('#pluralNoun1').value;
        const pluralNoun2 = document.querySelector('#pluralNoun2').value;
        const food = document.querySelector('#food').value;
        const adj3 = document.querySelector('#adj3').value;
        const pluralNoun3 = document.querySelector('#pluralNoun3').value;
        const pluralNoun4 = document.querySelector('#pluralNoun4').value;
        const adj4 = document.querySelector('#adj4').value;
        const yourName = document.querySelector('#yourName').value;

        if (recipientName && adj1 && adj2 && emotion && pluralNoun1 && pluralNoun2 && food && adj3 && pluralNoun3 && pluralNoun4 && adj4 && yourName){
            let myText = `Happy Birthday, ${recipientName}! <br>Another year has passed, and it's time to celebrate the ${adj1} person you are! I hope this ${adj2} day is filled with ${emotion} and ${pluralNoun1}. <br>As you blow out the ${pluralNoun2} and eat the ${food}, I hope you remember how valued and loved you are. It's been a privilege to watch you become more and more ${adj3} this past year. May this new chapter of your life be filled with ${pluralNoun3}, laughter, and ${pluralNoun4}. <br>With love and ${adj4} wishes, <br>${yourName}`;
            document.querySelector('#recipientName').value = '';
            document.querySelector('#adj1').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#pluralNoun1').value = '';
            document.querySelector('#pluralNoun2').value = '';
            document.querySelector('#food').value = '';
            document.querySelector('#adj3').value = '';
            document.querySelector('#pluralNoun3').value = '';
            document.querySelector('#pluralNoun4').value = '';
            document.querySelector('#adj4').value = '';
            document.querySelector('#yourName').value = '';
            madLib.innerHTML = myText;
            overlay.className = 'showing';
            error.className = 'hidden';
        } else {
            let myText = `Please fill out all fields!`;
            error.innerHTML = myText;
            errorContainer.className = 'showing';
        }

    });

    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();

        overlay.className = 'hidden';
    })

    document.addEventListener('keydown', function(event){
        if (event.key == 'Escape') {
            overlay.className = 'hidden';
        }
    })

})();