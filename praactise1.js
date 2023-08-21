document.getElementById('btn-apply').addEventListener('click',function(){
    // getting coupon
    const coupon = document.getElementById('input-field').value;
    // verifying coupon
    if(coupon === 'DISCOUNT30'){
        document.getElementById('input-field').value = '';
        // getting product price
        const priceInString = document.getElementById('price').innerText.split(' ')[2];
        const price = parseInt(priceInString);
        // discount
        const discount = (price/100)*30;
        const afterDiscountPrice =  price - discount;
        // showing afterDiscountPrice
        const Show = document.getElementById('show');
        Show.innerText = afterDiscountPrice ;
    }
    else{
        alert('Wrong coupon');
    }
})