function product_show(id){
  const container = document.getElementById("container");
  const productName = document.getElementById("product-info-name");
  document.getElementById("product-info-name").innerHTML = "Product no."+id;
  console.log(productName);
  container.classList.add("active");
}
function closePopup() {
  container.classList.remove("active");
}

function navSlide(){
  const nav = document.getElementById("nav");

  nav.classList.toggle("active-nav");
}
