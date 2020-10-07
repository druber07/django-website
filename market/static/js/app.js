function validateEmail(email) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
    return (true)
  }
  return (false)
}

function product_show(id){
  const popUp = document.getElementById("container "+id);
  popUp.classList.add("active");
}
  
function aboutUs_info() {
  const containerUse = document.getElementById("containerUse");
  containerUse.classList.add("active");
}

function send_msg(){
  console.log('asdfasdfasd');
  const containerUse = document.getElementById("containerUse");
  const SendersName = document.getElementById("SendersName");
  const SendersGmail = document.getElementById("SendersEmail");
  const SendersData = document.getElementById("SendersData");
  
  if (SendersName.value != "" && validateEmail(SendersGmail.value) && SendersData.value != ""){
      document.getElementById("close_btn").style.visibility = 'hidden';
      document.getElementById("popup_name").innerHTML = "Message was sended succesfully";
      document.getElementById("popup_text").innerHTML = SendersName.value + ", you'r message was sended.<br>The answer will be sended to: " + SendersGmail.value + ".<br>The message is:<br>" + SendersData.value;
      containerUse.classList.add("active");
  }
}
  
function closePopup() {
  try{
      const containerUse = document.getElementById("containerUse");
      containerUse.classList.remove("active");
  }catch(err){
      console.log("Done");
  }
  
  try{
      let x = 0;
      while(true){
          const popUp = document.getElementById("container "+x);
          popUp.classList.remove("active");
          x++;
      }
  }catch(err){
      console.log("Done");
  }
}
  
function navSlide(){
  const nav = document.getElementById("nav");
  nav.classList.toggle("active-nav");
}