var date, h, m, s, count;

function load(){
    clock();    
    zeroAdded();
    Animate(); 
}    
  
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
    // background();
    Animate(); 
    count=setTimeout(clock,1000);
}
// de opgevraagde tijden worden gecontroleerd, wanneer een uur, minuut of seconde kleiner is dan 10 wordt daar een 0 aan vastgeplakt, zodat de klok er als een echte digitale klok uitziet.
function zeroAdded(i) {
    if (i < 10){
        i = "0" + i};
        return i;
}

function Animate() {
    // maakt een variabele aan met de id sun    
    var sunAnimate = document.getElementById("sun");  
    // op basis van hoe laat het is wordt berekent hoeveel de zon zich moet verplaatsen 
    var moveValueUp = (date.getHours() + (date.getMinutes() / 60) + (date.getSeconds() / 3600) - 6) * (80 / 7);
    var moveValueDown = (date.getHours() + (date.getMinutes() / 60) + (date.getSeconds() / 3600) - 13) * (80 / 7);
    var moveValueRight = (date.getHours() + (date.getMinutes() / 60) + (date.getSeconds() / 3600) - 6) * (80 / 14);
    console.log(moveValueUp);
    // als tijd tussen onderstaande uren is dan wordt de zon verplaatst over de afstand van moveValue in percentages
    // als de tijd buiten die uren is dan wordt er een class toegevoegd waarmee de zon op display: none wordt gezet.
      
    if (h >= 6 && h < 13){
        TweenMax.to(sunAnimate, 1, {bottom: moveValueUp += '%', left: moveValueRight += '%'});
    }

    else if (h >= 13 && h < 20){
        TweenMax.to(sunAnimate, 1, {top: moveValueDown += '%', left: moveValueRight += '%'});
    }
    
    
    
    
    // if (h >= 6 && h <20){        
        
    //     TweenMax.to(sunAnimate, 1, {bottom: moveValueUp += '%'});
        
    //     if (h >= 6 && h <8){
    //         document.getElementById("tekst").innerHTML = 'Sunrise';
    //     } 
    //     else if (h >= 8 && h <18){
    //         document.getElementById("tekst").innerHTML = 'Day';   
    //     }
    //     else if (h >= 18 && h <20){
    //         document.getElementById("tekst").innerHTML = 'Sunset';
    //     }        
    //     else {
    //         document.getElementById("tekst").innerHTML = 'Night';
    //     }        
    // } 
    // else {
    //     var image = document.getElementById("sun");
    //     image.classList.add("sun_remove");
    // }
}

load();

// function Animate() {
//     var sunAnimate = document.getElementById("sun");    
//     var tl1 = new TimelineMax({repeat:1});
//     tl1.to(sunAnimate, 2, {top: '50%', left: '50%', ease:Linear.easeNone})
//         .to(sunAnimate, 2, {top: '100%', left: '100%', ease:Linear.easeNone});
   
// }   













