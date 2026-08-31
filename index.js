let button = document.getElementById("button");
button.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
    button.textContent = "☀️";
        }
    else{
    button.textContent = "🌙";
        }
});

