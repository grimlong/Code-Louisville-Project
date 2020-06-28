function rollAttribute(att) {
    var Result = document.getElementById(att);
    var roll = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1) + 6;
    Result.innerHTML = roll;
    };
