root = document.getElementById("root");
page('/', ()=>{
	root.innerHTML=`
	<h1>This is home page<h1>
	`
	var script = document.createElement('script')
	script.src="./js/home.js"
	root.append(script)
})
page('/search_result',()=>{
	root.innerHTML=`
	<div id="product-list"></div>
	<footer></footer>
	<h2>Loading...</h2>
	`
	var script = document.createElement('script')
	script.src="./js/search.js"
	root.append(script)
})
page('/about', ()=>{
	root.innerHTML=`
	<h1>this is about page<h1>
	`
})
page('/login',()=>{
	document.getElementById("root").innerHTML=`
	<h1>this is logins page<h1>
	`
})
page('*', ()=>{
	document.getElementById("root").innerHTML=`
	<h1>404 Not found<h1>
	`
	console.error("error")
})
page();
