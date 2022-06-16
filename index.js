
$('#dark-mode-btn').click(function () {
    if ($('.beige-section').css('background-color') === 'rgb(227, 226, 222)') {  //Light
       
        $(".grey-section").css("backgroundColor", "#474747");
        $(".beige-section").css("backgroundColor", "#403f3d");
        $(".quiz-container").css("backgroundColor", "#474747");
        $(".quiz-container").css("box-shadow", "10px 20px 15px #000");
        $(".contact-form").css("box-shadow", "10px 20px 15px #000");
        $(".text-color").css("color", "#000");
        $(".kpi-item").css("box-shadow", "10px 20px 15px #000");
        $(".kpi2-item-box").css("box-shadow", "10px 20px 15px #000");
        $(".team-member").css("box-shadow", "10px 20px 15px #000");
        $("h1").css("color", "#fff");
        $(".fa-angle-left").css("color", "#fff");
        $(".fa-angle-right").css("color", "#fff");
        $(".fa-sitemap").css("color", "#fff");
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
        $(".quiz-container").css("backgroundColor", "#fff");
        $(".quiz-container").css("box-shadow", "0 0 10px 2px rgba(100, 100, 100, 0.1)");
        $("h1").css("color", "#000");
        $(".fa-angle-left").css("color", "#000");
        $(".fa-angle-right").css("color", "#000");
        $(".fa-sitemap").css("color", "#000");
        $("h2").css("color", "#000");
        $("h3").css("color", "#000");
        $("p").css("color", "#8f8f8f");
        $("li").css("color", "#000");
        $("span").css("color", "#000");
        $(".text-color").css("color", "#000");
        $(".navbar-brand h3").css("color", "#fff");
        $(".heading-1").css("color", "#fff");
    }
});
