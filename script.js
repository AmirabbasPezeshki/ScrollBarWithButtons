let prev = document.getElementById("prev")
let next = document.getElementById("next")
let boxes = document.getElementsByClassName("box")
let main = document.getElementById("main")
prev.addEventListener('click',function(){
    main.scrollBy(-200, 0);
})
next.addEventListener('click',function(){
    main.scrollBy(200, 0);
})