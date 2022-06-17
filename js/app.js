const switchElement = document.querySelector('.switch')



localStorage.setItem("mode","light")

let modeItem=localStorage.getItem("mode")
 
switchElement.addEventListener('click', function () {
  
  // Hint: Add 'dark' class to body :))
   if(modeItem=="light"){
    document.body.classList.add ("dark")
    
    modeItem="dark"

  
    
   }else{

    document.body.classList.remove ("dark")
  
    modeItem="light"

   }
  
})

window.onload=function(){


if(modeItem=="dark"){
  document.body.classList.add("dark")
}
}

