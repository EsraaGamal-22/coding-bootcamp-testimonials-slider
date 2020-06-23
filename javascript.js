const con1=document.getElementById('con-1');
const con2=document.getElementById('con-2');
const con3=document.getElementById('con-3');
const img=document.getElementById('img-slider'); 


var images=["images/image-john.jpg","images/image-tanya.jpg"];
var cont1=["“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"]
var cont2=["John Tarkpor","Tanya Sinclair"];
var cont3=["Junior Front-end Developer"," UX Engineer"];
var i=images.length;
function nextBtn()
{
    if(i<images.length)
    {
      
        i++;
    }
   
    else{
      
        i=1;
       
    }

    con1.innerText=cont1[i-1];
    con2.innerText=cont2[i-1];
    con3.innerText=cont3[i-1];
    img.src=images[i-1];
}
function preBtn(){
    if(i<images.length+1 && i>1)
    {
        i--;
    }
    else{
        i=images.length;
    }
    con1.innerText=cont1[i-1];
    con2.innerText=cont2[i-1];
    con3.innerText=cont3[i-1];
    img.src=images[i-1];
}

