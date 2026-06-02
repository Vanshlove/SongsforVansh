# Songs for Vansh 🎵

A beautiful, interactive music website showcasing your favorite songs with an eye-catching album cover that pops in on load!

## ✨ Features

- **Album Cover Pop-In Animation** - When you load the page, the album cover dramatically pops into view
- **Scrollable Song List** - Scroll down to see all songs displayed in a gorgeous grid
- **Direct Play Links** - Click the play button on any song to open it in YouTube
- **Smooth Animations** - Beautiful fade and slide animations throughout
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Modern Design** - Glassmorphism UI with gradient backgrounds

## 📁 Files

- `index.html` - Main webpage structure
- `styles.css` - Beautiful styling and animations
- `script.js` - Interactive song list functionality
- `README.md` - This file

## 🚀 Getting Started

1. Open `index.html` in any web browser
2. Watch the album cover pop in!
3. Scroll down to see all the songs
4. Click "Play Now" on any song to listen on YouTube

## 🎵 How to Add Your Own Songs

Edit the `songs` array in `script.js`:

```javascript
const songs = [
    {
        id: 1,
        title: "Your Song Name",
        artist: "Your Artist Name",
        link: "https://www.youtube.com/watch?v=VIDEO_ID"
    },
    // Add more songs...
];
```

## 🎨 Customize Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1db954;      /* Change the green */
    --secondary-color: #191414;    /* Change the dark background */
    --accent-color: #1ed760;       /* Change the bright green */
}
```

## 🔗 Supported Platforms

Link to songs from:
- YouTube Music
- Spotify
- Apple Music
- SoundCloud
- Any streaming platform with shareable links

## 📱 Browser Support

- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Enjoy your music collection! 🎶**
