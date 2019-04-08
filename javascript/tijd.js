var date, h, m, s, count;

function clock(){
    date = new Date();
    // de huidige uren, minuten en secondes worden opgevraagd.
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    // de opgevraagde tijden worden gekoppeld aan de functie zeroAdded(i).
    h = zeroAdded(h);
    m = zeroAdded(m);
    s = zeroAdded(s);    
    
    // de vorige waardes worden vervolgens in de div met id clock geplaatst.
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    message();
    animate(); 
    count=setTimeout(clock,1000);
}
// de opgevraagde tijden worden gecontroleerd, wanneer een uur, minuut of seconde kleiner is dan 10 wordt daar een 0 aan vastgeplakt, zodat de klok er als een echte digitale klok uitziet.
function zeroAdded(i) {
    if (i < 10){
        i = "0" + i};
        return i;
};

// maakt een variabele aan met de id sun  
var sunAnimate = document.getElementById("sun");

function animate() {         
    // op basis van hoe laat het is wordt berekent hoeveel de zon zich moet verplaatsen 
    var moveValueUp = (date.getHours() + (date.getMinutes() / 60) + (date.getSeconds() / 3600) - 6) * (100 / 7);
    var moveValueDown = (date.getHours() + (date.getMinutes() / 60) + (date.getSeconds() / 3600) - 13) * (100 / 7);
    var moveValueRight = (date.getHours() + (date.getMinutes() / 60) + (date.getSeconds() / 3600) - 6) * (100 / 14);
    // als tijd tussen onderstaande uren is dan wordt de zon verplaatst over de afstand van moveValue in percentages
    // moveValueRight verplaats de zon constant naar rechts en moveValueUp en moveValueDown verplaatsen de zon eerst omhoog en dan omlaag.
    // als de tijd buiten die uren is dan wordt er een class toegevoegd waarmee de zon op display: none wordt gezet en de achtergrond wordt zwart gemaakt.
       
    if (h >= 6 && h < 13){
        TweenMax.to(sunAnimate, 0, {bottom: moveValueUp += '%', left: moveValueRight += '%'});
    }

    else if (h >= 13 && h < 20){
        TweenMax.to(sunAnimate, 0, {top: moveValueDown += '%', left: moveValueRight += '%'});
    }
          
    else {
    var image = document.getElementById("sun");
    image.classList.add("sun_remove");
    var backgroundColor = document.getElementById("change_color");
    backgroundColor.classList.add("night");
    }
};

// tussen bepaalde uren wordt er tekst in de zwarte blak geplakt afhankelijk van de fase van de dag
function message(){                            
    if (h >= 6 && h <8){
        document.getElementById("tekst").innerHTML = 'Sunrise';
    } 
    else if (h >= 8 && h <18){
        document.getElementById("tekst").innerHTML = 'Day';   
    }
    else if (h >= 18 && h <20){
        document.getElementById("tekst").innerHTML = 'Sunset';
    }        
    else {
        document.getElementById("tekst").innerHTML = 'Night';
    }        

};

//bij een onclick op de zon gaat die naar de helft van de grootte en vervolgens weer terug naar de normale grootte
var degrees = 0;
sunAnimate.onclick = function (){
    degrees += 360;
    TweenMax.fromTo(sunAnimate, 2, {scale: 0.5}, {scale: 1});
};
    
clock();    
zeroAdded();
animate(); 
message();











