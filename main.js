let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./img/sunlight.jpg";
    } else{
        icon.src = "./img/moon.jpg";
    }
}
