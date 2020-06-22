const con1=document.getElementById('con-1');
const con2=document.getElementById('con-2');
const con3=document.getElementById('con-3');
const img=document.getElementById('img-slider'); 
var i=0;
var images=["images/image-tanya.jpg","images/image-john.jpg"];
var cont1=["“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so xcited about the future. ”",
"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"]
var cont2=["Tanya Sinclair","John Tarkpor"];
var cont3=[" UX Engineer","Junior Front-end Developer"];
function mySlider(param)
{
if(param==='next')
{
i++;
if(i===images.length){ i=images.length-1;}
}
else{
    i--;
    if(i<0){i=0;}
}
con1.innerText=cont1[i];
con2.innerText=cont2[i];
con3.innerText=cont3[i];
img.src=images[i];
}
