// DARK/LIGHT MODE STORAGE
const currentTheme = localStorage.getItem("theme");
if(currentTheme == "dark"){
    setDarkTheme();
} else if(currentTheme == "light"){
    setLightTheme();
}

//BUTTON ACTION
$('#dark-mode-btn').click(function () {
    if ($('.beige-section').css('background-color') === 'rgb(227, 226, 222)') {  //Light
        setDarkTheme();
    }
    else {
       setLightTheme();
    }
});

//FUNCTIONS FOR LIGHT AND DARK THEME
function setLightTheme(){

    $(".grey-section").css("backgroundColor", "rgb(245,245,245)");
    $(".beige-section").css("backgroundColor", "#e3e2de");
    $(".box-shadow").css("box-shadow", "10px 20px 15px silver");
    $(".quiz-container").css("backgroundColor", "#fff");
    $("li").css("color", "#000");
    $(".member-name").css("color", "#8f8f8f");
    $(".black-text-color").css("color", "#000");
    $(".grey-text-color").css("color", "#8f8f8f");
    $(".navbar-brand h3").css("color", "#fff");
    $(".heading-1").css("color", "#fff");
    localStorage.setItem("theme", "light");
}
function setDarkTheme(){
    $(".grey-section").css("backgroundColor", "#474747");
    $(".beige-section").css("backgroundColor", "#403f3d");
    $(".quiz-container").css("backgroundColor", "#474747");
    $(".box-shadow").css("box-shadow", "10px 20px 15px #000");
    $(".black-text-color").css("color", "#fff");
    $(".grey-text-color").css("color", "#fff");
    $("li").css("color", "#fff");
    localStorage.setItem("theme", "dark");
}
