
let http = new XMLHttpRequest();

http.open('get','data.json', true)

http.send();

http.onload =function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);

        let output = '';

        for (let item of products){
            output +=`
            <div class='product'>
                <img src ="${item.productsImages}" alt="" >
                <h3 class ="title">Item Type: ${item.producType}</h3>
                <p class ="gender">Category: ${item.gender}</p>
                <p class ="price">
                    <span>Price: ${item.price}</span>
                    <span>&euro;</span>
                </p>
                <button class='cart'>Add to cart</button>
            </div>
            `
        }

        document.querySelector(".products").innerHTML = output;
    }
}

const searchBar = () =>{
    const searchPlace = document.getElementById("searchProduct").value.toUpperCase();
    const storeBar = document.getElementById("product-list");
    const productItems = document.querySelectorAll(".product");
    const searchedItem = storeBar.getElementsByTagName("h4");

    for(var i = 0; i < searchedItem.length; i++){
        let matchProduct = productItems[i].getElementsByTagName('h4')[0];

        if(matchProduct){
            let valueOfSearch = matchProduct.textContent || matchProduct.innerHTML

            if(valueOfSearch.toUpperCase().indexOf(searchPlace) > -1){
                productItems[i].style.display = "";

            } else {
                productItems[i].style.display = "none";
            }
        }
    }
}

