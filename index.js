// call all the id's

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxs');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let create = document.getElementById('create');

// get total

function gettotal(){
    // get all the values typed inside the input for each 
    // and do the calculation
if(price.value != ''){
    let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
    total.innerHTML = result;
    // if the is total the background color will change to green
    total.style.background = '#040';
}else{
    // if price is empty the total set to empty and the background color to red 
    total.innerHTML="";
    total.style.background = '#a00d02';


}


}

//create product 

let datapro= [];
create.onclick = function(){
    let newpro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    // this puches the array in to set of arrays
    datapro.push(newpro);
    console.log(datapro);
}

