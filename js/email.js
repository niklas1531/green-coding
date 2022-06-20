


document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const serviceID = "service_i52o6nq";
        const templateID = "template_m7s278d";

        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                $("#alert").css("display", "block");
                document.getElementById('contact-form').reset();
            },
            (error) => {
                console.log("FAILED...", error);
                alert("FAILED...", error);
            }
        );
    });