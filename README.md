# Infinite Sticker Grid

A beautiful, infinite scrolling grid of stickers built with React and Framer Motion. Click any sticker to copy it to your clipboard!

## ✨ Features

- **Infinite Grid**: Smooth, infinite scrolling in all directions
- **Click to Copy**: Copy any sticker image directly to your clipboard
- **Smart Layout**: No duplicate stickers appear adjacent to each other
- **Responsive**: Works on all screen sizes
- **Clean UI**: Minimal design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd infinite-grid/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Adding Your Own Stickers

1. Place your image files in the `public/` folder
2. Update the `IMAGES` array in `src/components/StickerGrid.jsx` with your filenames:

```javascript
const IMAGES = [
  "your-image-1.jpeg",
  "your-image-2.png",
  // ... add more images
];
```

## 🛠️ Built With

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Styling
- **DM Sans & Inter** - Typography

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Grid Settings
Modify these constants in `StickerGrid.jsx`:
- `CELL_SIZE` - Size of each grid cell (default: 250px)
- `GAP` - Space between images (default: 32px)

### Styling
The app uses Tailwind CSS. Main colors and fonts are defined in `src/index.css`.

## 📱 Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid
- Clipboard API
- Canvas API

---

Made using React and Framer Motion