let list_json={
    "1":{
        "img": "1.jpg",
        "cost": "15000"
    },
    "2":{
        "img": "2.webp",
        "cost": "30000"
    },
    "3":{
        "img": "3.webp",
        "cost": "25000"
    },
    "4":{
        "img": "4.webp",
        "cost": "21000"
    },
    "5":{
        "img": "5.jpg",
        "cost": "17000"
    },
    "6":{
        "img": "6.jpeg",
        "cost": "25000"
    },
    "7":{
        "img": "7.webp",
        "cost": "27000"
    },
    "8":{
        "img": "8.jpg",
        "cost": "30000"
    },
    "9":{
        "img": "9.jpg",
        "cost": "35000"
    },
    "10":{
        "img": "10.jpg",
        "cost": "38000"
    }
}

let imgs=document.querySelector('.imgs')
let tr=document.querySelectorAll('tr')
tr.forEach((x,index)=>{
    x.onclick=()=>{
        imgs.innerHTML=`<img src="mevalar/${list_json[index]["img"]}" alt="">
                        <p>Narxi: ${list_json[index]["cost"]} so'm</p>`
    }
})