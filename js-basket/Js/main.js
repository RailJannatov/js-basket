let btnAdd = document.querySelectorAll("#gallery button");

let popup = document.querySelector(".popup");

let modalBasket = document.querySelector(".modalBasket");

let iconClose  =document.querySelector (".popup i");

iconClose.addEventListener("click",function(e){
    popup.classList.add("d-none");
})
window.addEventListener("click",function(e){
    if(e.target === popup){
        popup.classList.add("d-none");
    }
})



const items = [
    {
    name:"American Hot",
    inBasket: 0
     },
     {
         name:"Spicy Chicken Ranch",
           inBasket: 0
     },
     {
         name:"Chicken Ranch",
           inBasket: 0
     },
     {
         name:"Papa Mixs",
           inBasket: 0
     }
];

let pizzaItem = localStorage.setItem("pizzaItem",JSON.stringify(items));

    let parsedPizzaItem = JSON.parse( localStorage.getItem("pizzaItem"));

    
btnAdd.forEach((button)=>{
    button.onclick = function(e){
      popup.classList.remove("d-none");
      let getNumbers = localStorage.getItem("itemNumbers");     
      getNumbers = parseInt(getNumbers);
       if(getNumbers)
       {
            localStorage.setItem("itemNumbers",getNumbers +1);
            document.querySelector(".basket span").textContent = getNumbers +1;
       
            items.forEach((item)=>{
            let countPizza = document.createElement("H3");
            countPizza = item.inBasket;
            let hTag = document.createElement("H3");
            let tbody= document.querySelector("tbody");   

            if(item.inBasket === 0 )
                {
                hTag = this.previousElementSibling.innerText;
                     item.inBasket++;
                 }

                 else
                 {

                 item.inBasket++;
                         
                 }
                  tbody.append(hTag,countPizza)})
           
        }
          else {
                   localStorage.setItem("itemNumbers",1);

                }
    }
    
          
           
})
