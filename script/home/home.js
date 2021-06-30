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
  addGuest.classList.toggle("activeAddGuest");
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
let d=document.querySelector("#time");
d.value=Date();