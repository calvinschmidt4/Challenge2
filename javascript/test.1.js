var date, h, m, s, count;

function load(){
    
    animate(); 
   
}    
  
function animate() {
    
    var sun = document.getElementById('sun');
    var degrees = 0;
    sun.onclick = function (){
        degrees += 360;
        TweenMax.to('#sun', 1, {rotationY: degrees});
    };
    
    
    
}


load();













