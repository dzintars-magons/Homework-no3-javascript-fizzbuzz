'use strict'

   const mainElement = document.createElement("main");
   document.body.appendChild(mainElement);
   
   
   function addHundredDivs (min, max, divisorOne, divisorTwo){ 
       for (let i = min; i <= max; i++){
           let divElement = document.createElement("div");
           let paragraphElement = document.createElement("p");
           mainElement.appendChild(divElement).appendChild(paragraphElement);
                if(i % divisorOne === 0 && i % divisorTwo === 0) 
                    {console.log("FizzBuzz"),
                    divElement.setAttribute("id", "element" +i);
                    divElement.setAttribute("class", "Fizzbuzz");
                    paragraphElement.innerText=i + " FIZZBUZZ";
                }
                else if (i % divisorOne === 0) 
                    {console.log("Fizz"),
                    divElement.setAttribute("id", "element" +i);
                    divElement.setAttribute("class", "Fizz");
                    paragraphElement.innerText=i + " FIZZ";
                }
                else if (i % divisorTwo === 0) 
                    {console.log("Buzz"),
                    divElement.setAttribute("id", "element" +i);
                    divElement.setAttribute("class", "Buzz");
                    paragraphElement.innerText=i + " BUZZ";
                }
                else 
                    {console.log(i),
                    divElement.setAttribute("id", "element" +i);
                    divElement.setAttribute("class", "number");
                    paragraphElement.innerText=i;
                }
       }
       console.log("finished adding divs");
    }
      addHundredDivs(1,100,3,5);

      //MIN AND MAX on input

 document.getElementById("start-value").addEventListener("change", function (event) {
     console.log("listening start");
     deleteDivs();
    var startVal = parseFloat(event.target.value);
    var inputEnd = parseFloat(document.getElementById("end-value").value);
    console.log(Number.isInteger(startVal),Number.isInteger(inputEnd));
    let divisorOneVal = document.getElementById("change-fizz").value;
    let divisorTwoVal = document.getElementById("change-buzz").value;
     addHundredDivs(startVal,inputEnd,divisorOneVal,divisorTwoVal);
 });

 document.getElementById("end-value").addEventListener("change", function (event) {
    console.log("listening end");
    deleteDivs();
    let inputEnd = parseFloat(event.target.value);
    console.log(inputEnd);
    let startVal = parseFloat(document.getElementById("start-value").value);
    let divisorOneVal = document.getElementById("change-fizz").value;
    let divisorTwoVal = document.getElementById("change-buzz").value;
     addHundredDivs(startVal,inputEnd,divisorOneVal,divisorTwoVal);
});

function deleteDivs () {
    while(mainElement.firstChild){
        mainElement.firstChild.remove();
    }
}

//CHANGING FIZZ AND BUZZ VALUES

document.getElementById("change-fizz").addEventListener("change", function (){
    let startVal = parseFloat(document.getElementById("start-value").value);
    let inputEnd = parseFloat(document.getElementById("end-value").value);
    let retrievedFizzValue = parseFloat(event.target.value);
    let retrievedBuzzValue = parseFloat(document.getElementById("change-buzz").value);
    deleteDivs();
    addHundredDivs(startVal,inputEnd,retrievedFizzValue,retrievedBuzzValue);

});

document.getElementById("change-buzz").addEventListener("change", function (){
    let startVal = parseFloat(document.getElementById("start-value").value);
    let inputEnd = parseFloat(document.getElementById("end-value").value);
    let retrievedBuzzValue = parseFloat(event.target.value);
    let retrievedFizzValue = parseFloat(document.getElementById("change-fizz").value);
    deleteDivs();
    addHundredDivs(startVal,inputEnd,retrievedFizzValue,retrievedBuzzValue);
});