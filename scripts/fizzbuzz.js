'use strict'

   const mainElement = document.createElement("main");
   document.body.appendChild(mainElement);
   
   
   function addHundredDivs (){ 
       for (let i = 1; i <= 100; i++){
           let divElement = document.createElement("div");
           let paragraphElement = document.createElement("p");
           mainElement.appendChild(divElement).appendChild(paragraphElement);
                if(i % 3 === 0 && i % 5 === 0) 
                    {console.log("FizzBuzz"),
                    divElement.setAttribute("id", "element" +i),
                    divElement.setAttribute("class", "Fizzbuzz"),
                    paragraphElement.innerText=i + " FIZZBUZZ";
                }
                else if (i % 3 === 0) 
                    {console.log("Fizz"),
                    divElement.setAttribute("id", "element" +i),
                    divElement.setAttribute("class", "Fizz"),
                    paragraphElement.innerText=i + " FIZZ";
                }
                else if (i % 5 === 0) 
                    {console.log("Buzz"),
                    divElement.setAttribute("id", "element" +i),
                    divElement.setAttribute("class", "Buzz"),
                    paragraphElement.innerText=i + " BUZZ";
                }
                else 
                    {console.log(i),
                    divElement.setAttribute("id", "element" +i),
                    paragraphElement.innerText=i;
                }
       }
       
    }
      addHundredDivs();

    // function clearDivs () {
    //     if (document.getElementsByTagName("button").onclick)
    //         {document.getElementsByClassName("Fizz","Buzz","Fizzbuzz").style.display= "none";}
    //     }

    //asdads
    