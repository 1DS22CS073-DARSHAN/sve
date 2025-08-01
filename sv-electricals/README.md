# S V Electricals and Engineering Works - Website

A modern, responsive showcase website for S V Electricals and Engineering Works, a leading manufacturer of industrial cranes and constructor of industrial sheds.

## Features

- **Modern Design**: Beautiful gradient backgrounds with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: Smooth scrolling navigation and animated elements
- **Service Showcase**: Detailed sections for cranes, sheds, and maintenance services
- **Photo Gallery**: Filterable project gallery with lightbox functionality
- **Contact Form**: Validated contact form with real-time validation
- **Map Integration**: Interactive map showing company location
- **Performance Optimized**: Built with React.js and Tailwind CSS for fast loading

## Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Leaflet** - Map integration
- **Lucide React** - Modern icon library

## Services Featured

### Industrial Cranes
- Overhead Cranes
- Jib Cranes  
- A-Frame Cranes
- Gantry Cranes
- Custom Designs

### Industrial Sheds
- Pre-Engineered Buildings
- Warehouse Construction
- Factory Sheds
- Storage Facilities
- Steel Structures

### Maintenance Services
- Preventive Maintenance
- Emergency Repairs
- Parts Replacement
- Performance Upgrades
- 24/7 Support

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sv-electricals
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with scroll effects
│   ├── Hero.js            # Hero section with animated background
│   ├── About.js           # Company information and statistics
│   ├── Services.js        # Service offerings with detailed cards
│   ├── Gallery.js         # Project gallery with filtering
│   ├── Contact.js         # Contact form and map integration
│   └── Footer.js          # Footer with company links
├── index.css              # Global styles and Tailwind imports
├── App.js                 # Main app component
└── index.js               # Application entry point
```

## Customization

### Company Information
Update company details in:
- `src/components/Contact.js` - Contact information and location
- `src/components/About.js` - Company description and statistics
- `src/components/Footer.js` - Footer contact details

### Gallery Images
Replace sample images in `src/components/Gallery.js` with actual project photos.

### Map Location
Update coordinates in `src/components/Contact.js`:
```javascript
const companyLocation = [latitude, longitude];
```

### Colors and Branding
Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ }
}
```

## Performance Features

- Lazy loading for images
- Optimized animations with Framer Motion
- Responsive images with proper sizing
- CSS-in-JS for component-based styling
- Smooth scrolling navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for S V Electricals and Engineering Works.

## Contact

For any questions about the website or services:

**S V Electricals and Engineering Works**
- **Phone**: +91 98765 43210
- **Email**: info@svelectricals.com
- **Address**: Industrial Area, Sector 15, New Delhi, India - 110001

---

Built with ❤️ using React.js and Tailwind CSS
