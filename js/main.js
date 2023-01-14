let BtnGroup = document.querySelector(".wrapper-btn-group")
// let Btns = document.querySelectorAll(".btns")
let monitor = document.querySelector(".wrapper-calculator-monitor")


let viewChar = []
let toStringElements = ""
let firsValue = 0;
let secondValue = 0;
let plus = 0;
let minus = 0;
let multiplication = 0;
let division = 0;
let result2 = 0;
BtnGroup.addEventListener("click", (e) => {
  if (e.target.classList.contains("btns")) {

    // if(viewChar.charAt(0))
    // console.log(toStringElements);

    if (e.target.textContent === "Del" || e.target.textContent === "Reset") {
      viewChar = []
      monitor.textContent = 0

    }

    else {
      viewChar.push(e.target.textContent)

      toStringElements = viewChar.join("")

      if (toStringElements.charAt(0) === "+" || toStringElements.charAt(0) === "-" || toStringElements.charAt(0) === "x" || toStringElements.charAt(0) === "/" || (toStringElements.charAt(0) === "0" && toStringElements.charAt(1) !== ".")) {
        viewChar = []
      }
      else if (toStringElements.charAt(0) === ".") {
        monitor.textContent = "0" + toStringElements
      }
      else if (e.target.textContent === "=") {
        monitor.textContent = result2
        // console.log(result2);
        viewChar = [result2]
      }
      else {
        monitor.textContent = toStringElements

        // operator plus
        if (toStringElements.includes("+")) {
          plus = toStringElements.split("+")

          firsValue = plus[0] * 1
          secondValue = plus[1] * 1
          result2 = firsValue + secondValue
        }

        // operator minus
        else if (toStringElements.includes("-")) {
          minus = toStringElements.split("-")

          firsValue = minus[0] * 1
          secondValue = minus[1] * 1
          result2 = firsValue - secondValue
        }

        // operator multiplication
        else if (toStringElements.includes("x")) {
          multiplication = toStringElements.split("x")
          console.log(toStringElements);

          firsValue = multiplication[0] * 1
          secondValue = multiplication[1] * 1
          result2 = firsValue * secondValue
        }

        // operator division
        else if (toStringElements.includes("/")) {
          division = toStringElements.split("/")

          firsValue = division[0] * 1
          secondValue = division[1] * 1
          result2 = firsValue / secondValue
        }


      }


    }
  }

})