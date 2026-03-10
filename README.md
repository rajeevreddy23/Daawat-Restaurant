# 🍽️ Daawat Restaurant - Fine Dining Website

A modern, responsive restaurant website showcasing authentic Indian cuisine with interactive features and professional design.

## 📋 Project Overview

**Daawat Restaurant** is a professional web application built for a fine dining Indian restaurant. The website features a complete menu system, online reservations, customer reviews, promotional offers, and contact information. The name "Daawat" means "feast" in Urdu/Hindi, representing our commitment to delivering an unforgettable culinary experience.

## ✨ Key Features

### 🎯 Core Functionality
- **Menu Display**: Categorized menu with starters, main courses, and desserts
- **Product Cards**: Beautiful cards with images, descriptions, prices, and ratings
- **Online Reservations**: Easy-to-use booking form for table reservations
- **Customer Reviews**: Testimonial section with real customer feedback
- **Promotion Management**: Display special offers and packages

### 🎨 Design Features
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Sticky Navigation**: Easy access to all sections while browsing
- **Interactive Elements**: Hover effects and transitions for better user experience
- **Color Scheme**: Warm, appetizing colors (brown, gold, cream) for restaurant theme

### 📱 Sections
1. **Header** - Restaurant branding with contact information and GitHub link
2. **About** - Restaurant history, operating hours, achievements, and values
3. **Starter Menu** - 7 appetizers with descriptions and ratings
4. **Main Course** - 7 signature dishes (biryani and fried rice varieties)
5. **Desserts** - Sweet treats to complete the meal
6. **Special Offers** - Birthday packages, family combos, app discounts
7. **Customer Reviews** - Testimonials from satisfied customers
8. **Reservations** - Online booking system
9. **Contact** - Address, phone, email, and social media links

## 🛠️ Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and Gradients
- **Font Awesome Icons**: Beautiful icons throughout the site
- **Responsive Design**: Mobile-first approach with media queries

## 📁 File Structure

```
RestoMenu/
├── index.html          # Main HTML file
├── style.css           # Styling and layouts
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor for modifications (VS Code, Sublime, etc.)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/RestoMenu.git
cd RestoMenu
```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

3. **Access in browser**
   - Navigate to `http://localhost:8000`

## 📝 Configuration

### Update Restaurant Details
Edit the following in `index.html`:
- **Restaurant Name**: Change "Daawat Restaurant" to your name
- **Contact Info**: Update phone, email, and address
- **Operating Hours**: Modify hours in the About section
- **Menu Items**: Add or remove dishes as needed
- **Images**: Replace placeholder URLs with real food images
- **Social Links**: Update Facebook, Instagram, Twitter, GitHub links

### Customize Styling
Edit `style.css` to modify:
- Color scheme (primary color: `#d4a574`)
- Fonts and typography
- Spacing and layout
- Responsive breakpoints

## 🎨 Custom Styling Guide

### Main Colors
- **Primary (Gold)**: `#d4a574`
- **Dark (Brown)**: `#c17a4a`
- **Text**: `#333`
- **Background**: `#f5f5f5`

### Key CSS Classes
- `.header-main` - Header container
- `.sticky-nav` - Sticky navigation bar
- `.products-grid` - Product card grid
- `.product-card` - Individual dish card
- `.promo-card` - Promotional offer card
- `.reservation-form` - Booking form
- `.contact-grid` - Contact information grid

## 📱 Responsive Breakpoints

The website is optimized for:
- **Desktop**: Full features and layout (1200px+)
- **Tablet**: Adjusted grid layout (768px - 1200px)
- **Mobile**: Single column layout (below 768px)

## 🔗 Links & Integration

### Social Media
- **Facebook**: Update the href in footer
- **Instagram**: Update the href in footer
- **Twitter**: Update the href in footer
- **GitHub**: Project repository link

### External Resources
- **Font Awesome**: Icons library (CDN)
- **Google Fonts**: Can be added for custom typography

## ✅ Features to Implement

Future enhancements to consider:
- [ ] Form validation and submission backend
- [ ] Menu filtering and search functionality
- [ ] Online ordering and payment system
- [ ] Customer login/accounts
- [ ] Email notifications for reservations
- [ ] Admin dashboard for menu management
- [ ] Photo gallery with lightbox
- [ ] Customer rating system
- [ ] Google Maps integration
- [ ] Mobile app version

## 🚨 Testing Checklist

Before deploying, test:
- [ ] All navigation links work correctly
- [ ] Forms are properly formatted
- [ ] Images load from placeholders (or your URLs)
- [ ] Responsive design on mobile, tablet, desktop
- [ ] All social links open correctly
- [ ] Hover effects work smoothly
- [ ] Footer links are functional
- [ ] No console errors in browser

## 📞 Contact Information

For the restaurant:
- **Phone**: +91-9876543210, +91-7654321098
- **Email**: info@daawatrestaurant.com, orders@daawatrestaurant.com
- **Address**: 123 Food Street, City Center, Main Plaza, Downtown Area
- **GitHub**: [github.com](https://github.com)

## 📊 Performance Tips

1. **Image Optimization**: Use compressed images for faster loading
2. **Caching**: Enable browser caching for static assets
3. **CDN**: Use CDN for Font Awesome icons (already implemented)
4. **Lazy Loading**: Consider lazy loading for images
5. **Minification**: Minify CSS and HTML for production

## 🔐 Security Considerations

1. Validate all form inputs on the server side
2. Use HTTPS for production deployment
3. Sanitize user data from reservation forms
4. Protect email addresses from bots using contact forms
5. Regular security audits and updates

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💼 Author

Created for Daawat Restaurant - Authentic Indian Cuisine

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Changelog

### Version 1.0.0 (Initial Release)
- Complete restaurant website with menu
- Reservation system
- Customer reviews section
- Promotional offers
- Responsive design
- Social media integration
- GitHub integration

## ❓ FAQ

**Q: How do I change the restaurant name?**
A: Edit the `<h1>` tag in the header section and update all references throughout the HTML.

**Q: Can I add more menu items?**
A: Yes! Duplicate any `.product-card` div and update the content, image, price, and ratings.

**Q: How do I deploy this to the web?**
A: You can use GitHub Pages, Netlify, Vercel, or any web hosting service that supports static HTML/CSS.

**Q: Is the reservation form functional?**
A: Currently, it's a front-end form. You'll need to add backend functionality or use a service like Formspree to handle submissions.

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ for Daawat Restaurant**

*"Experience the finest flavors with premium quality ingredients"*