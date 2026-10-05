document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");
    function updateActiveNav() {
        let currentSection = "";
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });
        navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });

    }
    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

    allAnchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    const productDetails = document.querySelectorAll(".product-details");

    productDetails.forEach(function (details) {

        details.addEventListener("toggle", function () {

            if (details.open) {

                productDetails.forEach(function (otherDetails) {

                    if (otherDetails !== details) {
                        otherDetails.removeAttribute("open");
                    }

                });

            }

        });

    });

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value.trim();

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (email === "") {
                alert("Please enter your email address.");
                return;
            }

            if (message === "") {
                alert("Please enter your message.");
                return;
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }


        

            let subjectText = "General Inquiry";

            if (subject === "product") {
                subjectText = "Product Information";
            }

            else if (subject === "order") {
                subjectText = "Product Inquiry";
            }

            else if (subject === "distribution") {
                subjectText = "Distribution Inquiry";
            }

            else if (subject === "other") {
                subjectText = "Other";
            }


            const whatsappMessage =
                "Hello AllVet Marketing,%0A%0A" +

                "Name: " + encodeURIComponent(name) + "%0A" +

                "Email: " + encodeURIComponent(email) + "%0A" +

                "Phone: " + encodeURIComponent(phone || "Not provided") + "%0A" +

                "Subject: " + encodeURIComponent(subjectText) + "%0A%0A" +

                "Message:%0A" +
                encodeURIComponent(message);

            const whatsappNumber = "923214510279";

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappMessage;
            window.open(
                whatsappURL,
                "_blank"
            );
            contactForm.reset();

        });

    }

    const scrollTopButton = document.createElement("button");

    scrollTopButton.className = "scroll-top";
    scrollTopButton.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    scrollTopButton.setAttribute(
        "aria-label",
        "Scroll to top"
    );

    document.body.appendChild(scrollTopButton);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    });


    scrollTopButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    const revealElements = document.querySelectorAll(
        ".about-content, .about-card, .product-card, .contact-content"
    );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

    const externalLinks = document.querySelectorAll(
        'a[href^="https://"]'
    );

    externalLinks.forEach(function (link) {

        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");

    });

    console.log(
        "AllVet Marketing website loaded successfully."
    );

});