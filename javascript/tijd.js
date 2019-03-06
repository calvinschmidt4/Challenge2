var d,h,m,s,animate;

function init(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    clock();
    background();
};

function clock(){;
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
            if(h==24){
                h=0;
            }
        }    
    }
    $('sec',s);
    $('min',m);
    $('hr',h);
    animate=setTimeout(clock,1000);
};
function $(id, val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

function background(){
    if(h > 19 || h < 6){
        document.body.className = "night";
    } else if (h > 16 && h < 19){
        document.body.className = "sunset";
    } else {
        document.body.className = "day";
    }
};


window.onload=init;
