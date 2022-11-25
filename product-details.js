var productImg = document.getElementById("product-img");
var smallImg=document.getElementsByClassName("small-img");
for(let i=0;i<smallImg.length;i++){
    smallImg[i].onclick=function(){
        
        productImg.src=smallImg[i].src
        // smallImg[i].src=productImg.src
    }
}
