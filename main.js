// prof calc By Abdelrahman
function plus() {
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let PlusPoint = Int1 + Int2;
 document.getElementById("Result").value = PlusPoint;
};

function minus() {
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let MinusPoint = Int1 - Int2;
  document.getElementById("Result").value = MinusPoint;
};

function multyply() {
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let MultyplyPoint = Int1 * Int2;
  document.getElementById("Result").value = MultyplyPoint;
};
function divide() {
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let DividePoint = Int1 / Int2;
  document.getElementById("Result").value = DividePoint;
};
function os2() {
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let osPoint = Int1 * Int1;
  let osPoint2 = Int2 * Int2;
  document.getElementById("Result").value = osPoint || osPoint2;
  
};
function os3() {
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let os3Point = Int1 * Int1 * Int1;
  let os3Point2 = Int2 * Int2 * Int2;
  document.getElementById("Result").value = os3Point || os3Point2;

};
function square() {
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let squarePoint = Math.sqrt(Int1);
  let squarePoint2 = Math.sqrt(Int2);
  document.getElementById("Result").value = squarePoint || squarePoint2;

};
function cube() {
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let cubePoint = Math.cbrt(Int1);
  let cubePoint2 = Math.cbrt(Int2);
  document.getElementById("Result").value = cubePoint || cubePoint2;

};
function round(){
  let Num1 = document.getElementById("First Num").value;
  let Num2 = document.getElementById("Second Num").value;
  let Int1 = Number(Num1);
  let Int2 = Number(Num2);
  let roundPoint = Math.round(Int1);
  let roundPoint2 = Math.round(Int2);
  document.getElementById("Result").value = roundPoint || roundPoint2;
}
function darkmode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
};

function lightmode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
};
function classicmode() {
  document.body.style.backgroundColor = '#678267';
  document.body.style.color = "#0020C2";
};
  function colore() {
    let a = document.getElementById("coloreid").value.toString();
    document.body.style.backgroundColor = a;
  }
function colorf(){
  let v = document.getElementById("colorfid").value.toString();
  document.body.style.color = v;
}
function reset(){
  document.getElementById("Result").value = null;
}
