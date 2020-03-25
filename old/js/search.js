function getNewProduct() {
	const noOfProducts=10;
	product_list = document.getElementById("product-list");
	body = document.querySelector("html");
	fetch(
		"https://shopping-backend-sparkjava.herokuapp.com/api/getMoreProducts/"+noOfProducts
	)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log("Request successful", data);
			data.forEach(product => {
				product_list.innerHTML += `
              	<div class="product">
			  		<img class="product-image" src="https://shopping-backend-sparkjava.herokuapp.com/pics/${product.ImagePath}" alt="${product.ImagePath}" />
			  		<div>
			  			<h3>${product.name}</h3>
			  			<div class="product-describtion">
							<div>${product.description}</div>
							<div>${product.description}</div>
						</div>
						<div class="buy-button">
							<div class="price">$${product.price}</div>
							<div>Buy</div>
						</div>
			  		</div>
			  	</div>
                 `;
			});
		})
		.catch(function(error) {
			console.log("Request failed", error);
		});
}

let options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.01
};

let observer = new IntersectionObserver(getNewProduct, options);
observer.observe(document.querySelector("footer"));
