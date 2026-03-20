// titleElmt = document.querySelector('#title')
// descriptionElmt = document.querySelector('#description')
// categoryElmt = document.querySelector('#category')
// brandElmt = document.querySelector('#brand')
// PriceElmt = document.querySelector('#Price')
// quantityElmt = document.querySelector('#quantity')


// const renderProductsElmt = document.querySelector('#renderProducts')



// products = []

// function saveToLocal(p) {
//     localStorage.setItem('B81', JSON.stringify(p))
// }
// function getFromLocal() {
//     return JSON.parse(localStorage.getItem('B81'))
// }


// function renderProducts() {
//     renderProducts = getFromLocal()
//     renderProductsElmt.innerHTML = renderProducts.map((prod, i) => `
//         <div class='col-12 col-md-6 col-lg-3'>

//         <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${prod.title}</h5>
//     <h6 class="card-subtitle mb-2 text-body-secondary">${prod.description}</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>

//         </div>
//     `)
// }


// function AddNewProduct() {
//     titleV = titleElmt.value
//     descrV = descriptionElmt.value
//     categoryV = categoryElmt.value
//     brandV = brandElmt.value
//     priceV = Number(PriceElmt.value)
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

//     getProd = getFromLocal()
//     console.log(getProd)
//     getProd.push(newProduct)
//     console.log(getProd)
//     saveToLocal(getProd)



//     titleElmt.value = ''
//     descriptionElmt.value = ''
//     categoryElmt.value = ''
//     brandElmt.value = ''
//     PriceElmt.value = ''
//     quantityElmt.value = ''
// }





// window.addEventListener('DOMContentLoaded', () => {
//     renderProducts()
//     getProd = getFromLocal()


//     if (!getProd) {
//         saveToLocal(products)
//     }

// })




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

    // create new object for id,name and price and new property as quantity only 
    // Before add check that item is presnt or not in cart array 
    // if present increase quantity by 1
    // add this object to cart

    getCArtFromLocal.push(newCartItem)
    saveCartToLocal(getCArtFromLocal)
    console.log(getCArtFromLocal)
    cartLengthElmt.textContent = getCArtFromLocal.length
}




window.addEventListener('DOMContentLoaded', () => {
renderProducts()
    getProd = getFromLocal()

    if (!getProd) {
        saveToLocal(products)
    }

    getCart = getCartFromLocal()
    if(!getCart){
        saveCartToLocal(cart)
    }
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




















// // Input elements
// titleElmt = document.querySelector('#title')
// descriptionElmt = document.querySelector('#description')
// categoryElmt = document.querySelector('#category')
// brandElmt = document.querySelector('#brand')
// PriceElmt = document.querySelector('#Price')
// quantityElmt = document.querySelector('#quantity')

// // Render element
// const renderProductsElmt = document.querySelector('#renderProducts')

// // Default array
// products = []

// // Save to localStorage
// function saveToLocal(p) {
//     localStorage.setItem('B81', JSON.stringify(p))
// }

// // Get from localStorage (FIXED)
// function getFromLocal() {
//     return JSON.parse(localStorage.getItem('B81')) || []
// }


// // ================= RENDER =================
// function renderProducts() {

//     let renderProductsData = getFromLocal()   // ✅ FIX (no overwrite)

//     if (renderProductsData.length === 0) {
//         renderProductsElmt.innerHTML = "<p>No products available</p>"
//         return
//     }

//     renderProductsElmt.innerHTML = `
//     <div class="row justify-content-center">

//         ${renderProductsData.map((prod, i) => `

//             <div class="col-12 col-sm-6 col-lg-4 mb-4">

//                 <div class="card h-100 shadow-sm">
//                     <div class="card-body d-flex flex-column">
                        
//                         <h5 class="card-title">${prod.title}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">${prod.description}</h6>
                        
//                         <p class="card-text">${prod.category}</p>

//                         <div class="mt-auto">
//                             <a href="#" class="card-link">${prod.brand}</a><br>
//                             <a href="#" class="card-link">₹${prod.price}</a>
                            
//                         </div>

//                         <button class="btn btn-primary">Add To Cart</button>

//                     </div>
//                 </div>

//             </div>

//         `).join("")}

//     </div>
//     `
// }


// // ================= ADD PRODUCT =================
// function AddNewProduct() {

//     let titleV = titleElmt.value
//     let descrV = descriptionElmt.value
//     let categoryV = categoryElmt.value
//     let brandV = brandElmt.value
//     let priceV = Number(PriceElmt.value)
//     let quantityV = Number(quantityElmt.value)

//     let newProduct = {
//         id: Date.now(),
//         title: titleV,
//         description: descrV,
//         category: categoryV,
//         brand: brandV,
//         price: priceV,
//         quantity: quantityV
//     }

//     let getProd = getFromLocal()   // ✅ always array

//     getProd.push(newProduct)

//     saveToLocal(getProd)

//     renderProducts()   // ✅ refresh UI

//     // Clear inputs
//     titleElmt.value = ''
//     descriptionElmt.value = ''
//     categoryElmt.value = ''
//     brandElmt.value = ''
//     PriceElmt.value = ''
//     quantityElmt.value = ''
// }


// // ================= INITIAL LOAD =================
// window.addEventListener('DOMContentLoaded', () => {

//     let getProd = getFromLocal()

//     if (!getProd || getProd.length === 0) {
//         saveToLocal(products)   // initialize empty array
//     }

//     renderProducts()
// })