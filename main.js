let input= document.querySelector("input");

let allBtns = document.querySelectorAll(".btn")

allBtns.forEach(btn => {
   btn.onclick=function () {
        input.value+=btn.innerHTML;
   }
})

let equel = document.querySelector(".equel");


equel.onclick=function () {
    input.value = eval(input.value);
}


let ac = document.querySelector(".ac");

ac.onclick=function () {
    input.value="";
}


let remove = document.querySelector(".remove");

remove.onclick=function () {
    input.value = input.value.slice(0,input.value.length-1);

}

// handel thems

let thmesIcon = document.querySelectorAll(".thems i");

themsIcon.forEach(icon =>{
   icon.onclick=function () {
      document.documentElement.style.setProperty("--them-color",icon.dataset.color);
      if (icon.classList.contains("fa-moon")) {
          themsIcon.forEach((icon, i) => {
                 icon.style.backgroundColor="white";
          });

      }else{
        themsIcon.forEach((icon, i) => {
               icon.style.backgroundColor="black";
        });
      }
   }
})
