const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const buttonadd = document.getElementById("buttonadd");
const buttonsub = document.getElementById("buttonsub");
const buttonmul = document.getElementById("buttonmul");
const buttoneq = document.getElementById("buttoneq");
const button0 = document.getElementById("button0");
const displaytext = document.getElementById("display");

button1.addEventListener(
    "click",
    () => (displaytext.value += button1.value)
  );

button2.addEventListener(
    "click",
    () => (displaytext.value += button2.value)
  );

button3.addEventListener(
    "click",
    () => (displaytext.value += button3.value)
  );
  
button4.addEventListener(
    "click",
    () => (displaytext.value += button4.value)
  );
  
button5.addEventListener(
    "click",
    () => (displaytext.value += button5.value)
  );
  
button6.addEventListener(
    "click",
    () => (displaytext.value += button6.value)
  );
  
button7.addEventListener(
    "click",
    () => (displaytext.value += button7.value)
  );
  
button8.addEventListener(
    "click",
    () => (displaytext.value += button8.value)
  );
  
button9.addEventListener(
    "click",
    () => (displaytext.value += button9.value)
  );
  
button0.addEventListener(
    "click",
    () => (displaytext.value += button0.value)
  );
  buttonadd.addEventListener(
    "click",
    () => (displaytext.value += buttonadd.value)
  );
  buttonsub.addEventListener(
    "click",
    () => (displaytext.value += buttonsub.value)
  );
  buttonmul.addEventListener(
    "click",
    () => (displaytext.value += buttonmul.value)
  );
  buttondiv.addEventListener(
    "click",
    () => (displaytext.value += buttondiv.value)
  );
  clearButton.addEventListener(
    "click",
    () => (displaytext.value="")
  );
  buttoneq.addEventListener(
    "click",
    () => (displaytext.value=eval(displaytext.value))
  );