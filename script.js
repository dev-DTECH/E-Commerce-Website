product_list = document.getElementById("product-list");
body = document.querySelector("html");

function getmorepdt() {
    console.log(body.offsetHeight - body.scrollTop - 524);
    getNewProduct();
}
function getNewProduct(){
if (body.offsetHeight - body.scrollTop - 524 <= 1000) {
	// loadproducts();
	axios
		.get(
			"https://shopping-backend-sparkjava.herokuapp.com/api/getMoreProducts/1"
		)
		.then(function(response) {
			// handle success
			let data = JSON.parse(response.request.response)[0];

			product_list.innerHTML += `
              <div id="product">
			  Name: ${data.name}
			  <br>
			  description: ${data.description}
			  <br>
			  <img src="${data.ImagePath}" />
              </div>
                 `
            console.log(data);
            return data
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		});
}
}
for(i=0;i<20;i++)
{
	getNewProduct()
}