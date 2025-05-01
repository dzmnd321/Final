const img = document.getElementById('Images')
let toggle = true;
img.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle){
        img.src = 'Images/TEEPEEsd.jpg';
    }else{
        img.src = 'Images/RENfair.jpg';
    }
})