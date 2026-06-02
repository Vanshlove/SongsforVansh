// Songs data with real music links
const songs = [
    {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        link: "https://www.youtube.com/watch?v=4NRXx6U8ABQ"
    },
    {
        id: 2,
        title: "Shape of You",
        artist: "Ed Sheeran",
        link: "https://www.youtube.com/watch?v=JGwWNGJdvx8"
    },
    {
        id: 3,
        title: "Levitating",
        artist: "Dua Lipa",
        link: "https://www.youtube.com/watch?v=TUVcZfQe-Kw"
    },
    {
        id: 4,
        title: "Anti-Hero",
        artist: "Taylor Swift",
        link: "https://www.youtube.com/watch?v=r5oWcv3n0xQ"
    },
    {
        id: 5,
        title: "Flowers",
        artist: "Miley Cyrus",
        link: "https://www.youtube.com/watch?v=W0C-gTOcaZE"
    },
    {
        id: 6,
        title: "Heat Waves",
        artist: "Glass Animals",
        link: "https://www.youtube.com/watch?v=mRD0O8Zuid8"
    },
    {
        id: 7,
        title: "As It Was",
        artist: "Harry Styles",
        link: "https://www.youtube.com/watch?v=H5v3kS3FFcE"
    },
    {
        id: 8,
        title: "Vampire",
        artist: "Olivia Rodrigo",
        link: "https://www.youtube.com/watch?v=8m92mE-Z8Jo"
    }
];

// Populate songs grid on page load
document.addEventListener('DOMContentLoaded', function() {
    populateSongs();
    setupScrollAnimation();
});

function populateSongs() {
    const songsGrid = document.getElementById('songsGrid');
    
    songs.forEach((song) => {
        const songCard = createSongCard(song);
        songsGrid.appendChild(songCard);
    });
}

function createSongCard(song) {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.innerHTML = `
        <div class="song-number">${song.id}</div>
        <h3 class="song-title">${song.title}</h3>
        <p class="song-artist">${song.artist}</p>
        <a href="${song.link}" target="_blank" class="play-button">▶ Play Now</a>
    `;
    return card;
}

// Scroll animation for song cards
function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all song cards when they're added
    document.querySelectorAll('.song-card').forEach((card) => {
        observer.observe(card);
    });
}

// Smooth scroll for scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        document.querySelector('.songs-container').scrollIntoView({ behavior: 'smooth' });
    });
}

// Handle responsive album cover
window.addEventListener('resize', function() {
    const albumCover = document.getElementById('albumCover');
    if (window.innerWidth < 768) {
        albumCover.style.width = '200px';
        albumCover.style.height = '200px';
    } else {
        albumCover.style.width = '300px';
        albumCover.style.height = '300px';
    }
});
