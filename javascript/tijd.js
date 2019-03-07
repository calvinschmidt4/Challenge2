var date, h, m, s, count;

function load(){
    clock();
    background();
    zeroAdded();
    riseFall();      
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

function riseFall() {
    if (h > 17 && h < 20){
        document.body.className = "sunfall";
    }
}


load();











