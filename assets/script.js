let itemQuantity = localStorage.getItem('itemquantity');
if(itemQuantity === null){
    itemQuantity = 0;
}else {
    itemQuantity = parseInt(itemQuantity)
}

// selectors
let upQuantityBtn = document.querySelector("#quantity-up");
let downQuantityBtn = document.querySelector('#quantity-down')
let quantityDiv = document.querySelector(".total-quantity");
let quantityBtn = document.querySelector('#total-quantity-button');

quantityBtn.textContent = itemQuantity
upQuantityBtn.addEventListener('click',
function(){
    itemQuantity = itemQuantity + 1
    console.log(itemQuantity)
    quantityBtn.textContent = itemQuantity
    localStorage.setItem("itemquantity",itemQuantity)
})

downQuantityBtn.addEventListener('click',function(){
    if(itemQuantity > 0){
    itemQuantity = itemQuantity - 1
    console.log(itemQuantity)
    quantityBtn.textContent = itemQuantity
    localStorage.setItem("itemquantity",itemQuantity)
    }
})
