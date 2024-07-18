document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Disable submit button to prevent multiple submissions
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        // Send form data to Formspree using fetch
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                responseMessage.textContent = "Thank you! Your message has been sent.";
            } else {
                responseMessage.textContent = "Oops! Something went wrong and we couldn't send your message.";
            }
        })
        .catch(error => {
            responseMessage.textContent = "Oops! Something went wrong and we couldn't send your message.";
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";
        });
    });
});
