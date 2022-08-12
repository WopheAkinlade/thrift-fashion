
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
                <p class ="title">${item.producType}</p>
                <p class ="gender">${item.gender}</p>
                <p class ="price">
                    <span>${item.price}</span>
                    <span>&euro;</span>
                </p>
                <button class='cart'>Add to cart</button>
            </div>
            `
        }

        document.querySelector(".products").innerHTML = output;
    }
}

