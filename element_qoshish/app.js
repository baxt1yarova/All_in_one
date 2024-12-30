let message=document.getElementById('message')
let clearButton = document.getElementById('clear')
let addButton = document.getElementById('add')
let input=document.getElementById('product-name')
let productList=document.querySelector('.list-products')
let mahsulotlar=[]

clearButton.onclick= () => habar('Mahsulot o`chirildi!')
addButton.onclick= () => {
    if(input.value==''){
        habar('Mahsulot nomi kiritilmagan')
    }
    else{
        mahsulotlar.push(input.value)
        input.value=''
        display(mahsulotlar)
        habar('Mahsulot qo`shildi!')
    } 
}

function display(m){
    productList.innerHTML=''
    m.forEach(item => {
        let li=document.createElement('li')
        li.textContent=item
        productList.appendChild(li)
    })
}

function habar(xat){
    message.style.display='flex'
    message.textContent=xat
    setTimeout(function(){
        message.style.display='none'
    },2000)
}
clearButton.onclick=()=>{
    productList.innerHTML=''
    mahsulotlar=[]
}