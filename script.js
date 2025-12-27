/* ===========================
   MOBILE NAVBAR (PUBLIC SITE)
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
});

/* ===========================
   PACKAGE EMAIL BUTTON
   =========================== */

function sendBookingEmail(packageName, price) {
    const email = 'info@exploreworld.com';
    const subject = encodeURIComponent(`Booking Inquiry for ${packageName}`);
    const body = encodeURIComponent(`Hello,

I am interested in booking the ${packageName} package (${price}).

Please provide me with more information about:
- Available dates
- Detailed itinerary
- What's included in the package
- Payment options

Thank you!`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

/* ===========================
   BOOKING FORM SUBMIT
   =========================== */

function handleFormSubmit(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const userEmail = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const message = document.getElementById('message').value;

    const email = 'info@exploreworld.com';
    const subject = encodeURIComponent(`Travel Inquiry from ${fullname}`);
    const body = encodeURIComponent(`Name: ${fullname}
        
Email: ${userEmail}
Destination: ${destination}

Message:
${message}

---
This inquiry was submitted through the ExploreWorld booking form.`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
