
$('#dark-mode-btn').click(function () {
    if ($('.beige-section').css('background-color') === 'rgb(227, 226, 222)') {  //Light
       
        $(".grey-section").css("backgroundColor", "#474747");
        $(".beige-section").css("backgroundColor", "#403f3d");
        $(".contact-form").css("box-shadow", "10px 20px 15px #000");
        $(".about-text-color").css("color", "#000");
        $(".kpi-item").css("box-shadow", "10px 20px 15px #000");
        $(".kpi2-item-box").css("box-shadow", "10px 20px 15px #000");
        $(".team-member").css("box-shadow", "10px 20px 15px #000");
        $("h1").css("color", "#fff");
        $("h2").css("color", "#fff");
        $("h3").css("color", "#fff");
        $("p").css("color", "#fff");
        $("li").css("color", "#fff");
        $("span").css("color", "#fff");
    }
    else {
        $(".grey-section").css("backgroundColor", "rgb(245,245,245)");
        $(".beige-section").css("backgroundColor", "#e3e2de");
        $(".contact-form").css("box-shadow", "10px 20px 15px silver");
        $(".kpi-item").css("box-shadow", "10px 20px 15px silver");
        $(".kpi2-item-box").css("box-shadow", "10px 20px 15px silver");
        $(".team-member").css("box-shadow", "10px 20px 15px silver");
        $("h1").css("color", "#000");
        $("h2").css("color", "#000");
        $("h3").css("color", "#000");
        $("p").css("color", "#8f8f8f");
        $("li").css("color", "#000");
        $("span").css("color", "#000");
        $(".about-text-color").css("color", "#000");
        $(".navbar-brand h3").css("color", "#fff");
        $(".heading-1").css("color", "#fff");
    }
});
