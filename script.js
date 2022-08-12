
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
                <img src ="${item.productsImages}" alt="${item.producType}" >
                <p class ="title">Item Type: ${item.producType}</p>
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

