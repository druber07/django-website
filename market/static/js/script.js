const container = document.getElementById("container");
function product_show(id){
  document.getElementById("popup_name").innerHTML  = "Product no." + id;
  document.getElementById("popup_text").innerHTML  = 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  container.classList.add("active");
}
function aboutUs_info() {
  document.getElementById("popup_name").innerHTML  = "About us";
  document.getElementById("popup_text").innerHTML  =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Ipsum consequat nisl vel pretium lectus quam id. Pellentesque elit eget gravida cum sociis natoque penatibus et. A lacus vestibulum sed arcu non. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Aliquam malesuada bibendum arcu vitae.";
  container.classList.add("active");
}
function send_msg(){
  const SendersName = document.getElementById("SendersName");
  const SendersGmail = document.getElementById("SendersGmail");
  const SendersData = document.getElementById("SendersData");

  if (SendersName.value != "" && SendersGmail.value != "" && SendersData.value != ""){
    document.getElementById("popup_name").innerHTML = "Message was sended succesfully";
    document.getElementById("popup_text").innerHTML = SendersName.value + ", you'r message was sended.<br>The answer will be sended to: " + SendersGmail.value + ".<br>The message is:<br>" + SendersData.value;
    container.classList.add("active");
  }else{
    document.getElementById("popup_name").innerHTML = "Error";
    document.getElementById("popup_text").innerHTML = "Enter all the inputs";
    container.classList.add("active");
  }
}
function closePopup() {
  container.classList.remove("active");
}

function navSlide(){
  const nav = document.getElementById("nav");

  nav.classList.toggle("active-nav");
}
