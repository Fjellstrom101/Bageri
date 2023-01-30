if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else{
    ready();
}
function ready(){
    let removeButtons = document.getElementsByClassName("remove-item-button");

    for(let i=0; i<removeButtons.length; i++){
        const button = removeButtons[i];
        button.addEventListener("click", removeCartItem);
    }
}

function removeCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    updateCartTotal()
}


function updateCartTotal(){
    let cartItems = document.getElementsByClassName("cart-item");
    for (let i = 0; i < cartItems.length; i++) {
        
    }

}