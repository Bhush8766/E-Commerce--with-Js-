
// /***********local storage concept***********/
// // str = 'Batch81'

// // localStorage.setItem('batch', str)
// // str2 = localStorage.getItem('batch')
// // console.log(str2)

// // objBatch = {
// //     id:243,
// //     name:'Batch81'
// // }

// // localStorage.setItem('b', JSON.stringify(objBatch))
// // newObj = JSON.parse(localStorage.getItem('b'))
// // console.log(newObj)
// // console.log(typeof(newObj))









// titleElmt = document.querySelector('#title')
// descriptionElmt = document.querySelector('#description')
// categoryElmt = document.querySelector('#category')
// brandElmt = document.querySelector('#brand')
// priceElmt = document.querySelector('#price')
// quantityElmt = document.querySelector('#quantity')
// cartLengthElmt = document.getElementById('cartLength')

// const renderProductsElmt = document.querySelector('#renderProducts')

// products = []
// cart = []

// function saveToLocal(p) {
//     localStorage.setItem('B81', JSON.stringify(p))
// }

// // ✅ FIX
// function getFromLocal() {
//     return JSON.parse(localStorage.getItem('B81')) || []
// }

// function saveCartToLocal(c){
//     localStorage.setItem('Cart81', JSON.stringify(c))
// }

// // ✅ FIX
// function getCartFromLocal (){
//     return JSON.parse(localStorage.getItem('Cart81')) || []
// }


// // ================= RENDER =================
// function renderProducts() {

//     let renderProductsData = getFromLocal()   // ✅ FIX

//     if (renderProductsData.length === 0) {
//         renderProductsElmt.innerHTML = "<p>No Products</p>"
//         return
//     }

//     renderProductsElmt.innerHTML = `
//     <div class="row">

//     ${renderProductsData.map((prod, index) => `
//         <div class='col-12 col-md-6 col-lg-4 mb-3'>

//             <div class="card h-100">
//                 <div class="card-body">
//                     <h4>${prod.title}</h4>
//                     <p>${prod.description}</p>
//                     <h5>Price : ₹${prod.price}</h5>

//                     <button class="btn btn-primary" onclick="addToCart(${prod.id})">
//                         Add To Cart
//                     </button>
//                 </div>
//             </div>

//         </div>
//     `).join('')}

//     </div>
//     `
// }


// // ================= ADD PRODUCT =================
// function AddNewProduct() {

//     titleV = titleElmt.value
//     descrV = descriptionElmt.value
//     categoryV = categoryElmt.value
//     brandV = brandElmt.value
//     priceV = Number(priceElmt.value)
//     quantityV = Number(quantityElmt.value)

//     newProduct = {
//         id: Date.now(),
//         title: titleV,
//         description: descrV,
//         category: categoryV,
//         brand: brandV,
//         price: priceV,
//         quantity: quantityV
//     }

//     getProd = getFromLocal()  // ✅ always array

//     getProd.push(newProduct)

//     saveToLocal(getProd)

//     renderProducts()

//     // clear inputs
//     titleElmt.value = ''
//     descriptionElmt.value = ''
//     categoryElmt.value = ''
//     brandElmt.value = ''
//     priceElmt.value = ''
//     quantityElmt.value = ''
// }


// // ================= ADD TO CART =================
// function addToCart(id){

//     const getCArtFromLocal = getCartFromLocal()  // ✅ FIX

//     getProd = getFromLocal()

//     findIndex1 = getProd.findIndex((p)=> p.id == id)

//     if(findIndex1 == -1 ){
//         alert('Cant add to cart')
//         return
//     }

//     newCartItem = getProd[findIndex1]

//     // ✅ CHECK IF ALREADY IN CART
//     let existingIndex = getCArtFromLocal.findIndex((c)=> c.id == id)

//     if(existingIndex !== -1){
//         getCArtFromLocal[existingIndex].quantity += 1
//     } else {
//         getCArtFromLocal.push({
//             id: newCartItem.id,
//             title: newCartItem.title,
//             price: newCartItem.price,
//             quantity: 1
//         })
//     }

//     saveCartToLocal(getCArtFromLocal)

//     cartLengthElmt.textContent = getCArtFromLocal.length
// }


// // ================= LOAD =================
// window.addEventListener('DOMContentLoaded', () => {

//     getProd = getFromLocal()

//     if (!getProd) {
//         saveToLocal(products)
//     }

//     getCart = getCartFromLocal()

//     if(!getCart){
//         saveCartToLocal(cart)
//     }

//     cartLengthElmt.textContent = getCart.length

//     renderProducts()   // ✅ moved after init
// })


































titleElmt = document.querySelector('#title')
descriptionElmt = document.querySelector('#description')
categoryElmt = document.querySelector('#category')
brandElmt = document.querySelector('#brand')
priceElmt = document.querySelector('#price')
quantityElmt = document.querySelector('#quantity')
cartLengthElmt = document.getElementById('cartLength')

const renderProductsElmt = document.querySelector('#renderProducts')

products = []
cart = []

function saveToLocal(p) {
    localStorage.setItem('B81', JSON.stringify(p))
}
function getFromLocal() {
    return JSON.parse(localStorage.getItem('B81'))
}
function saveCartToLocal(c){
    localStorage.setItem('Cart81', JSON.stringify(c))
}

function getCartFromLocal (){
    return JSON.parse(localStorage.getItem('Cart81'))
}

function renderProducts() {
    renderProducts = getFromLocal()
    console.log(renderProducts)

    renderProductsElmt.innerHTML = renderProducts.map((prod, index) => `
            <div class='col-12 col-md-6 col-lg-4 mr-2'>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">${prod.title}</h4>
    <p class="card-text">${prod.description}</p>
    <h5>Price : &#8377; <span>${prod.price}</span></h5>
    <button class="btn btn-primary" onclick="addToCart(${prod.id})">Add To Cart</button>
  </div>
</div>

            </div>
    `).join('')
}



function AddNewProduct() {
    titleV = titleElmt.value
    descrV = descriptionElmt.value
    categoryV = categoryElmt.value
    brandV = brandElmt.value
    priceV = Number(priceElmt.value)
    quantityV = Number(quantityElmt.value)

    newProduct = {
        id: Date.now(),
        title: titleV,
        description: descrV,
        category: categoryV,
        brand: brandV,
        price: priceV,
        quantity: quantityV
    }
    getProd = getFromLocal()
    console.log(getProd)
    getProd.push(newProduct)
    console.log(getProd)
    saveToLocal(getProd)
    renderProducts()

    titleElmt.value = ''
    descriptionElmt.value = ''
    categoryElmt.value = ''
    brandElmt.value = ''
    priceElmt.value = ''
    quantityElmt.value = '' 
    // close the modal after succesfully added prodcut 
}

function addToCart(id){
    const getCArtFromLocal = getCartFromLocal()

    getProd = getFromLocal()

    findIndex1 = getProd.findIndex((p)=> p.id == id)
    if(findIndex1 == -1 ){
        alert('Cant add to cart')
    }

    newCartItem = getProd[findIndex1]

    // Before add check that item is presnt or not in cart array
    // if present increase quantity by 1

    productInCart = getCArtFromLocal.find((p,i)=>p.product_id == newCartItem.id)

    indexOfProdInCart = getCArtFromLocal.findIndex((p,i)=>p.product_id == newCartItem.id)



    if(indexOfProdInCart == -1){

    // create new object for product id, product name and product price 
    // and new property as quantity of number ofproduct in cart only 
    // product in cart new id 

    newProdINCart = {
        id:Date.now(),
        product_id:newCartItem.id,
        product_name:newCartItem.title,
        product_price:newCartItem.price,
        quantity_inCart:1
    }
    // add this object to cart

    // getCArtFromLocal.push(newCartItem)
    getCArtFromLocal.push(newProdINCart)

    saveCartToLocal(getCArtFromLocal)
    console.log(getCArtFromLocal)
    cartLengthElmt.textContent = getCArtFromLocal.length
    }else{
    getCArtFromLocal[indexOfProdInCart].quantity_inCart = productInCart.quantity_inCart + 1
    saveCartToLocal(getCArtFromLocal)
    }


}




window.addEventListener('DOMContentLoaded', () => {
    getProd = getFromLocal()

    if (!getProd) {
        saveToLocal(products)
    }

    getCart = getCartFromLocal()
    if(!getCart){
        saveCartToLocal(cart)
    }
renderProducts()
    cartLengthElmt.textContent = getCart.length

})





// *******************. localStorage concept. *************
// str = 'Batch81'

// localStorage.setItem('batch', str)
// str2 = localStorage.getItem('batch')
// console.log(str2)

// objBatch = {
//     id:243,
//     name:'Batch81'
// }

// localStorage.setItem('b', JSON.stringify(objBatch))
// newObj = JSON.parse(localStorage.getItem('b'))

// console.log(newObj)
// console.log(typeof(newObj))