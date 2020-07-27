// When called by the button in the HTML this function makes 2 random numbers between 1 and 6 and adds 6, (emulating
// rolling 2 six sided dice and adding 6 for character generation in Dungeons & Dragons)
// then displays the result in the HTML.



function rollAttribute(att) {
    var Result = document.getElementById(att);
    var roll = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1) + 6;
    Result.innerHTML = roll;
    };
