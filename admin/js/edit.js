let hash = location.hash
let id = hash.slice(1)

let product = JSON.parse(localStorage.getItem(`productAdmin_${id}`))

document.getElementById('name').value = product.productName
document.getElementById('price').value = product.productPrice
document.getElementById('img').src = `./img/${product.productImage}`

function edit(){
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value
    let image = ''

    if(document.getElementById('image').files.length === 0){
        image = document.getElementById('img').getAttribute("src")
        image = image.slice(6)
    }else{
        image = document.getElementById('image').files[0]['name']
    }

    let newProduct = {
        productId: id,
        productName: name,
        productPrice: price,
        productImage: image
    }

    localStorage.setItem(`productAdmin_${id}`, JSON.stringify(newProduct))
    
    location.href = 'admin.html'
}

function setImage(){
    let imgName = document.getElementById('image').files[0]['name']
    document.getElementById('img').src = `./img/${imgName}`
}