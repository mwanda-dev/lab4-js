// script.js

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
}

// Contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();

        if (name === "" || message === "") {
            alert("Please fill out all fields.");
        } else {
            document.getElementById("response").innerText = `Thanks, ${name}. We will contact you soon!`;
            contactForm.reset();
        }
    });
}

// FAQ toggle
document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
    });
});

// Fetch API: Load users
const loadUsersBtn = document.getElementById("loadUsersBtn");
if (loadUsersBtn) {
    loadUsersBtn.addEventListener("click", async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await res.json();
            const userList = document.getElementById("userList");
            userList.innerHTML = "";
            users.forEach((user) => {
                const li = document.createElement("li");
                li.textContent = user.name;
                userList.appendChild(li);
            });
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    });
}

//clock
const clock = document.getElementById("clock");
if (clock) {
    setInterval(() => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }, 1000);
}

//Image slider
const sliderImage = document.getElementById("sliderImage");
const sliderImages = ["images/image1.jpg", "images/image2.png", "images/image3.jpg", "images/image4.png"];
let currentImage = 0;

if (sliderImage) {
    setInterval(() => {
        currentImage = (currentImage + 1) % sliderImages.length;
        sliderImage.src = sliderImages[currentImage];
    }, 5000);
}

// Back to top button
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
