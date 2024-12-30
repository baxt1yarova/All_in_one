let imgs=document.querySelectorAll('.human')
let icon=document.querySelectorAll('.icon')
let img=document.querySelectorAll('.human img')

imgs.forEach((x, index)=>{
    x.onclick=()=>{
        if (img[index].style.transform==='translateY(-20px)') {
            img[index].style.transform='translateY(0)';
            img[index].style.borderRadius='50%';
            x.style.height='120px';
            x.style.width='120px';
            x.style.borderRadius='50%';
            x.style.overflow='hidden';
        }
        else {
            img[index].style.transform='translateY(-20px)';
            img[index].style.borderRadius='15px';
            x.style.height='220px';
            x.style.width='150px';
            x.style.borderRadius='15px';
            x.style.overflow='unset';
        }
    }
});

icon.forEach((z)=>{
    z.onclick=()=>{
        if(z.style.height==='200px'){
            z.style.height='100px';
        }
        else {
            z.style.height = '200px';
        }
    }
});
