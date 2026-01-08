<div align="center"> <p align="center"> <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=300&fit=crop" alt="ExploreWorld Banner" width="900"/> </p>
🌍 ExploreWorld 🌍
Discover. Explore. Experience.
<p align="center"> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="http://forthebadge.com/images/badges/built-with-love.svg" alt="built-with-love"></a> </p> <img src="https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge" alt="Version"> <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status"> <p align="center"> <br> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript"> </br> </p> <p align="center"> <img src="https://img.shields.io/badge/Mobile-Friendly-brightgreen?style=for-the-badge" alt="Mobile"> <img src="https://img.shields.io/badge/Fully-Responsive-orange?style=for-the-badge" alt="Responsive"> <img src="https://img.shields.io/badge/No-Dependencies-yellow?style=for-the-badge" alt="Dependencies"> </p>
A beautiful tourism platform crafted with vanilla web technologies. Bringing the world's most stunning destinations together in one elegant, responsive interface.

<p align="center"> <a href="#"><b>View Live</b></a> • <a href="https://github.com/yourusername/exploreworld/issues"><b>Issues</b></a> • <a href="#"><b>Documentation</b></a> </p> </div>
🎯 What is ExploreWorld?
ExploreWorld is a sleek tourism website that showcases breathtaking travel destinations and curated vacation packages. Built entirely with HTML, CSS, and JavaScript, it provides travelers with an inspiring, user-friendly platform to discover their next adventure.

Whether you're dreaming of the Eiffel Tower or tropical beaches, ExploreWorld brings these experiences to life through stunning visuals and intuitive design.

✨ What Makes It Special
Cinematic Hero Section: Auto-playing video background with elegant overlay
Interactive Gallery: Smooth hover effects on destination cards
Ready-to-Book Packages: 6 premium travel deals with instant contact
Social Proof: Authentic testimonials from real travelers
Smart Forms: Email-integrated booking system
Universal Compatibility: Works flawlessly on any device
<details> <summary><b>🧰 Technology Overview</b></summary>
Powered by core web technologies:

Structure: HTML5 with semantic elements
Styling: CSS3 featuring Grid, Flexbox, and animations
Functionality: Vanilla JavaScript (ES6+)
Iconography: Font Awesome v6.5.1
Typography: Google Fonts API
</details> <details> <summary><b>🚀 Installation Guide</b></summary>
Zero configuration needed. Just clone and launch!

Quick Setup
Get the Code:
bash
    git clone https://github.com/yourusername/exploreworld.git
    cd exploreworld
Launch the Site:
bash
    # For Windows users
    start index.html
    
    # For Mac users
    open index.html
    
    # For Linux users
    xdg-open index.html
No npm, no build tools, no hassle. Pure simplicity.

</details> <details> <summary><b>📂 File Organization</b></summary>
Minimalist structure for easy navigation:

exploreworld/
│
├── index.html          # Core HTML markup
├── style.css           # Complete styling
├── script.js           # All interactions
└── README.md           # You are here
</details> <details> <summary><b>🎯 Core Features</b></summary>
Fixed Navigation Bar
Sticky header with smooth scroll anchors
Mobile-optimized hamburger menu
Icon-based toggle animations
Video Hero Banner
Full-viewport background video
Semi-transparent overlay layer
Centered content with CTA button
Destinations Showcase
Grid display of 4 popular cities
Scale and zoom effects on interaction
Featured: Paris, London, Santorini, Bali
Package Listings
Six travel deals with full details
Price, duration, and imagery
One-click email booking
Covers: Paris, Bali, Swiss Alps, Dubai, Tokyo, Maldives
Review Section
Six genuine customer testimonials
Icon-enhanced quote cards
Elevated shadow effects on hover
Contact Form
Validated input fields
Dropdown destination selector
Mailto integration for submissions
Site Footer
Multi-column layout
Quick links and contact info
Embedded map widget
Copyright information
</details> <details> <summary><b>🎨 Visual Design</b></summary>
Brand Colors
Purpose	Hex Value	Application
Primary Navy	
#0e3959	Navigation, headings, buttons
Highlight Gold	
#ffca28	Accents, hover states
Pure White	
#fdfdfd	Backgrounds
Charcoal	#333	Body text
Muted Gray	#555	Captions, subtext
Font System
Body Text: Poppins (Regular 400, Medium 500, SemiBold 600)
Display Text: Baloo 2, Protest Strike
Symbols: Font Awesome 6.5.1
Screen Adaptability
Small Screens: Up to 767px
Medium Screens: 768px to 1023px
Large Screens: 1024px and above
</details> <details> <summary><b>🔧 Customization Options</b></summary>
Change Contact Email
Edit the email variable in script.js:

javascript
const email = 'contact@yourcompany.com';
Adjust Theme Colors
Modify these values in style.css:

css
header {
    background-color: #0e3959; /* Main color */
}

.btn {
    background: #ffca28; /* Accent color */
}
Insert New Destinations
Add this block inside .destinations-grid in index.html:

html
<article class="destinations-card">
    <img src="your-photo-url" alt="place name"/>
    <h3>Location Name</h3>
</article>
Create Additional Packages
Place this inside .packages-grid in index.html:

html
<article class="packages">
    <img src="package-image-url" alt="tour description"/>
    <h3>Tour Title</h3>
    <p>Duration | Starting from $XXXX</p>
    <button onclick="sendBookingEmail('Tour Title', '$XXXX')">
        Book Now
    </button>
</article>
</details> <details> <summary><b>🤝 How to Contribute</b></summary>
Contributions are welcome! Help make ExploreWorld even better.

Fork this repository
Create a new branch (git checkout -b feature/YourFeature)
Make your changes and commit (git commit -m 'Add YourFeature')
Push to your branch (git push origin feature/YourFeature)
Submit a Pull Request
Guidelines for Contributors
Clean Code: Maintain readability and proper formatting
Browser Testing: Verify changes across Chrome, Firefox, Safari
Clear Commits: Write meaningful commit descriptions
Update Docs: Reflect changes in documentation when needed
</details> <details> <summary><b>📜 Legal Information</b></summary>
Released under the MIT License. Full details in the LICENSE file.

What You Can Do:

Right	Details
✅ Use Freely	Personal and commercial projects allowed
✅ Modify	Adapt and customize as needed
✅ Share	Distribute original or modified versions
✅ Sublicense	Include in larger projects
📝 Credit Required	Keep original license notice intact
❌ No Warranty	Provided "as-is" without guarantees
</details> <details> <summary><b>💭 Get Help</b></summary>
Questions? Issues? We're here to assist!

🐞 Bug Reports & Enhancement Ideas
Submit Issues: GitHub Issues Page
Discussions: GitHub Discussions
📬 Direct Contact
Business Email: info@exploreworld.com
Support Line: +91 98765 43210
</details>
🏆 Acknowledgments
Project Creator

GitHub Profile: @yourusername
Position: Lead Developer
Asset Providers

Photography: Unsplash - Premium free images
Icons: Font Awesome - Comprehensive icon set
Web Fonts: Google Fonts - Typography collection
Community Thanks

Open Source Contributors worldwide
Web Standards Community for documentation and resources
<div align="center">
✈️ Crafted for Wanderers & Dreamers ✈️
Enjoying this project? Drop a ⭐ on GitHub!

<p> <a href="https://github.com/yourusername/exploreworld"> <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="Repository"> </a> <a href="mailto:info@exploreworld.com"> <img src="https://img.shields.io/badge/Email-Get%20In%20Touch-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"> </a> </p> </div>
