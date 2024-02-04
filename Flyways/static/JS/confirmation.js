
document.addEventListener("DOMContentLoaded", function () {

    async function sendMail(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("ph-no").value;
        var message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        var params = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };

        const serviceID = "service_ofas2nw";
        const templateID = "template_d9568r8";

        try {
            const res = await emailjs.send(serviceID, templateID, params);
            console.log(res);
            alert("Your message sent successfully!!");
        } catch (err) {
            console.error("Error sending email:", err);
            alert("There was an error sending your message. Please try again later.");
            return;
        }

        // Reset the form after successful submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("ph-no").value = "";
        document.getElementById("message").value = "";
    }

    document.getElementById('form').addEventListener("submit", sendMail);

});
