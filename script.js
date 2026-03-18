titleElmt = document.querySelector('#title')
descriptionElmt = document.querySelector('#description')
categoryElmt = document.querySelector('#category')
brandElmt = document.querySelector('#brand')
PriceElmt = document.querySelector('#Price')
quantityElmt = document.querySelector('#quantity')


const renderProductsElmt = document.querySelector('#renderProducts')



products = []

function saveToLocal(p) {
    localStorage.setItem('B81', JSON.stringify(p))
}
function getFromLocal() {
    return JSON.parse(localStorage.getItem('B81'))
}


function renderProducts() {
    renderProducts = getFromLocal()
    renderProductsElmt.innerHTML = renderProducts.map((prod, i) => `
        <div class='col-12 col-md-6 col-lg-3'>

        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

        </div>
    `)
}


function AddNewProduct() {
    titleV = titleElmt.value
    descrV = descriptionElmt.value
    categoryV = categoryElmt.value
    brandV = brandElmt.value
    priceV = Number(PriceElmt.value)
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



    titleElmt.value = ''
    descriptionElmt.value = ''
    categoryElmt.value = ''
    brandElmt.value = ''
    PriceElmt.value = ''
    quantityElmt.value = ''
}





window.addEventListener('DOMContentLoaded', () => {

    getProd = getFromLocal()


    if (!getProd) {
        saveToLocal(products)
    }

})




/***********local storage concept***********/
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