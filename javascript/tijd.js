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

// // de achtergrond verandert afhankelijk van hoe laat het is. Dit gebeurt alleen op uur niveau. Bij een bepaald tijdstip wordt er aan body een class toegevoegd.
// function background(){
//     if(h > 19 || h < 6){
//         document.body.className = "night";
        
//     } else if (h > 16 && h < 19){
//         document.body.className = "sunset";
//     } else {
//         document.body.className = "day";
//         document.getElementById("tekst").innerHTML = 'Day';
        
//     }
// };

// function Animate() {
//     // maakt een variabele aan met de id sun    
//     var sunAnimate = document.getElementById("sun");   
   
//     // als tijd tussen die uren is dan wordt de zon verplaatst voor een duratie van het aantal seconden dat het nog duurt tot het 20:00 is
//     // als de tijd buiten die uren is dan wordt er een class toegevoegd waarmee de zon op display: none wordt gezet.
//     if (h >= 6 && h <20){
//         TweenMax.to(sunAnimate, (20 * 60 * 60) - ((h * 60 * 60) + (m * 60) + (s)), {bottom:'100%'});
//     } else {
//         var image = document.getElementById("sun");
//         image.classList.add("sun_remove");
//     }
// }

function Animate() {
    // maakt een variabele aan met de id sun    
    var sunAnimate = document.getElementById("sun");  
    // op basis van hoe laat het is wordt berekent hoeveel de zon zich moet verplaatsen 
    // var moveValue = (h - 6) * (100 / 13);
    var moveValue = (date.getHours() + (date.getMinutes() / 60) + (date.getSeconds() / 3600) - 6) * (100 / 14);
    console.log(moveValue);
    // als tijd tussen onderstaande uren is dan wordt de zon verplaatst over de afstand van moveValue in percentages
    // als de tijd buiten die uren is dan wordt er een class toegevoegd waarmee de zon op display: none wordt gezet.
      
    if (h >= 6 && h <20){        
        TweenMax.to(sunAnimate, 1, {bottom: moveValue +='%', scale: 0.5, rotationY: 1080});
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
    } 
    else {
        var image = document.getElementById("sun");
        image.classList.add("sun_remove");
    }
}

load();







