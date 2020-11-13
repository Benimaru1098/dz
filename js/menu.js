document.addEventListener("DOMContentLoaded", function(){
   let menu = document.querySelector(".menu .level-1");
   
   let menuWidth = document.querySelector(".menu").offsetWidth;

   let menuItem = document.querySelectorAll(".menu ul .first");

   let widthLimit = menuWidth;

   let hideItem = [];

   let windowWidth = window.innerWidth;
   

   menuItem.forEach(function (item){  
            
      widthLimit = (widthLimit) - item.offsetWidth;
    
     if(widthLimit < 55) {
         hideItem.push(item);
     }
   })


   let newItemLi = document.createElement("li");
   let newItemDiv = document.createElement("div");
   newItemLi.innerHTML = '<a>...</a>';
   newItemLi.classList.add("more");
   menu.appendChild(newItemLi);
   newItemLi.appendChild(newItemDiv);
   newItemDiv.classList.add("list");
   

   for(let i = 0; i < hideItem.length; i++) {

        newItemDiv.appendChild(hideItem[i]);
    
    }

    let itemHover = document.querySelectorAll(".menu ul li");
    let leaveTime

    itemHover.forEach(function(item){
        item.addEventListener("mouseenter", function(e) {

            if (leaveTime) {
                clearTimeout(leaveTime);
            }

            let target = e.target.querySelector("ul");

               if(target) {
                target.classList.add("active");
                let direct = target.getBoundingClientRect();

                if (direct.right > windowWidth) {
                    target.classList.add("direct");
                    // target.style.left = "auto";
                    // target.style.right = "100%";

                } else if (direct.left <= 0) {
                    target.classList.add("direct-right");
                    // target.style.left = "100%";
                    // target.style.right = "auto";
                }
               
               }
            
        })

        

        item.addEventListener("mouseleave", function(e) {
            let target = e.target.querySelector("ul");

            
                // leaveTime = setTimeout(function(){
                if(target) {
                target.classList.remove("active");
                target.classList.remove("direct");
                target.classList.remove("direct-right");
                }
                //  },500)
                
            
            
        })
    })

})