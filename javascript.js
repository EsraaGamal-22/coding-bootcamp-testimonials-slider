const slide_1=document.getElementById('slider-1');
const slide_2=document.getElementById('slider-2');
const img=document.getElementById('img-slider'); 
var images=["images/image-tanya.jpg","images/image-john.jpg"];
const slider=[slide_1,slide_2];
var i=0;
function nextBtn()
{
    slider[i].style.display="none";
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    slider[i].style.display="block";
    img.src=images[i];
}
function preBtn(){
    slider[i].style.display="none";
   if(i===0){
    i=1;
   }
   else{
    i--;
   }
    slider[i].style.display="block";
    img.src=images[i];
}

