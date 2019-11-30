'use strict'

   const mainElement = document.createElement("main");
   document.body.appendChild(mainElement);
   
   
   function addHundredDivs (min, max){ 
       for (let i = min; i <= max; i++){
           let divElement = document.createElement("div");
           let paragraphElement = document.createElement("p");
           mainElement.appendChild(divElement).appendChild(paragraphElement);
                if(i % 3 === 0 && i % 5 === 0) 
                    {console.log("FizzBuzz"),
                    divElement.setAttribute("id", "element" +i);
                    divElement.setAttribute("class", "Fizzbuzz");
                    paragraphElement.innerText=i + " FIZZBUZZ";
                }
                else if (i % 3 === 0) 
                    {console.log("Fizz"),
                    divElement.setAttribute("id", "element" +i);
                    divElement.setAttribute("class", "Fizz");
                    paragraphElement.innerText=i + " FIZZ";
                }
                else if (i % 5 === 0) 
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
      addHundredDivs(1,100);

 document.getElementById("start-value").addEventListener("change", function (event) {
     console.log("listening start");
     deleteDivs();
    var startVal = parseFloat(event.target.value);
    var inputEnd = parseFloat(document.getElementById("end-value").value);
    console.log(Number.isInteger(startVal),Number.isInteger(inputEnd));
     addHundredDivs(startVal,inputEnd);
 });

 document.getElementById("end-value").addEventListener("change", function (event) {
    console.log("listening end");
    deleteDivs();
    let inputEnd = parseFloat(event.target.value);
    console.log(inputEnd);
    let startVal = parseFloat(document.getElementById("start-value").value);
     addHundredDivs(startVal,inputEnd);
});

function deleteDivs () {
    while(mainElement.firstChild){
mainElement.firstChild.remove();
    }
}