document.addEventListener('DOMContentLoaded', function() {
    let acEl = document.querySelectorAll(".accord .title");

    acEl.forEach(function(item){
        item.addEventListener("click",function(e){
            target = e.target;
            
            content = target.nextElementSibling;

            content.classList.toggle("active");
        })
    });

    let tabEl = document.querySelectorAll(".tabs .tab .title");

    let tabs = document.querySelectorAll(".tabs .tab .desc");


    tabEl.forEach(function(item){
        item.addEventListener("click", function(e){
           let target = e.target;

            tabEl.forEach(function(item){
                item.classList.remove("open");
            })

            target.classList.add("open")

            let content = target.nextElementSibling;


            tabs.forEach(function(item){
                item.classList.remove("active");
            });

            content.classList.add("active");
        })
    })

    let elSl = 1; 
    let elWidth = 1280;

    let slItem = document.querySelectorAll(".slider-view .slider-item");

    document.querySelector(".controls .next").addEventListener("click", function(){
      
        document.querySelector(".slider .slider-view").style.marginLeft = "-" + elWidth * elSl + "px";
        elSl++

        if(elSl == slItem.length+1) {
            document.querySelector(".slider .slider-view").style.marginLeft = 0;
            elSl = 1;
        }
    })

    document.querySelector(".controls .prev").addEventListener("click", function(){
        if(elSl == 1) {
            document.querySelector(".slider .slider-view").style.marginLeft = "-" + elWidth * (slItem.length -1) + "px";
            elSl = slItem.length+1;
        }
        elSl--
        document.querySelector(".slider .slider-view").style.marginLeft = "-" + elWidth * (elSl -1) + "px";
        
    })
  })