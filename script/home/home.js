// document.getElementById("name").innerText=localStorage.getItem("Name");
// document.getElementById("date").innerHTML="Date()";]
// function toggleForm(){
//     console.log("hello");
// }
//| Form Animation starts
// let pop=document.querySelector("#pop");
// let close=document.querySelector(".close");
// let form=document.querySelector("#form");
// // console.log(pop);
// pop.addEventListener("click",()=>{
//        form.classList.toggle("active") ;
// });
// close.addEventListener("click",()=>{
//        form.classList.toggle("active") ;
// });
//| Form Animation ends
//| Ctrl Button Toggle
let CtrlDisplay = document.querySelector(".CtrlButtons");
function toggleCtrlBtns() {
  CtrlDisplay.classList.toggle("activeCtrlBtns");
  console.log(CtrlDisplay);
}
let UserCtrlDisplay = document.querySelector(".CtrlButtons_2");
function toggleUserCtrlBtns() {
  UserCtrlDisplay.classList.toggle("activeCtrlBtns");  
}
function toggleUp() {
  // document.querySelector(".CtrlButtons .activeCtrlBtns");
  // CtrlDisplay.style.bottom="10%";
}
//| Ctrl Button Toggle
let bookForm = document.querySelector("#bookingForm");
let container = document.querySelector(".container");
function toggleform() {
  container.classList.toggle("blurContainer");
  bookForm.classList.toggle("activeform");
}
//| Change page in form layout
let detailsPage = document.querySelector(".details");
let addGuest = document.querySelector(".addGuest");
function pageChangeToAdd() {
  const backBtn=document.querySelector(".backBtn");
  addGuest.classList.toggle("activeAddGuest");
  backBtn.style.visibility="visible";
  backBtn.style.opacity="1";
  let roomDetailsOverlay=document.querySelector(".roomdetailsOverlay");
  roomDetailsOverlay.classList.toggle("roomdetailsOverlayActive");
}
function pageChangeToBack() {
  addGuest.classList.remove("activeAddGuest");
}
//| Take only numbers as input
function onlyNumberKey(evt) {
         
       // Only ASCII character in that range allowed
       var ASCIICode = (evt.which) ? evt.which : evt.keyCode ;
       if (ASCIICode >=48 && ASCIICode <=57 ){
        return true ;   
       }
       else{
              return false;
       }
   }
  //|  Date Manipulation
let d=document.querySelector("#date");
d.innerHTML= new Date();
let bookDate=document.querySelector("#bookingDate");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
// let today=Date();
// let k=today.toString();
// console.log(k);
bookDate.setAttribute("min",today);