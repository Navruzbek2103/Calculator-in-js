let BtnGroup = document.querySelector(".wrapper-btn-group")
// let Btns = document.querySelectorAll(".btns")
let monitor = document.querySelector(".wrapper-calculator-monitor")

console.log(BtnGroup);

BtnGroup.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  if(e.target.textContent === "Del" || e.target.textContent === "Reset"){
    monitor.textContent = 0

  }
  else{
    monitor.textContent = e.target.textContent

  }

})