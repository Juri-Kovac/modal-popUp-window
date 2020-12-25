let parent  = document.querySelector(".window-parent"),
    btn     = document.querySelector('button'),
    x       = document.querySelector(".X"),
    section = document.querySelector("section");
btn.addEventListener('click', () => {
    parent.style.display = "block";
    section.style.filter ="blur(10px)"
})
x.addEventListener("click", () =>{
    parent.style.display = "none";
    section.style.filter ="blur(0px)";
});
parent.addEventListener("click", (e) =>{
    if(e.target.className === "window-parent")
    parent.style.display = "none";
    section.style.filter ="blur(0px)";
})