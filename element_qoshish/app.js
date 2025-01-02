let message=document.getElementById('message')
let clearButton = document.getElementById('clear')
let addButton = document.getElementById('add')
let input=document.getElementById('product-name')
let productList=document.querySelector('.list-products')
let mahsulotlar=[]

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
clearButton.onclick=()=>{
    productList.innerHTML=''
    mahsulotlar=[]
    habar('Mahsulot o`chirildi!')
}
function display(m){
    productList.innerHTML=''
    m.forEach(item => {
        let li=document.createElement('li')
        li.textContent=item
        let btn=document.createElement('button')
        btn.textContent='delete'
        btn.classList.add('ochirish')
        li.appendChild(btn)
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


function display(m){
    productList.innerHTML = ''
    m.forEach((item, index) => {
        let li = document.createElement('li')
        li.textContent = item
        let btn = document.createElement('button')
        btn.textContent = 'delete'
        btn.classList.add('ochirish')
        btn.onclick = () => {
            mahsulotlar.splice(index, 1)
            display(mahsulotlar)
            habar('Mahsulot o`chirildi!')
        }
        li.appendChild(btn)
        productList.appendChild(li)
    })
}