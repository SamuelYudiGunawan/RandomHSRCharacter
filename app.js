// API Configuration
const API_BASE_URL = 'https://vizualabstract.github.io/StarRailStaticAPI/db/en';
const ASSETS_BASE_URL = 'https://vizualabstract.github.io/StarRailStaticAPI/assets';

// Global variables
let charactersData = {};
let characterIds = [];

// DOM Elements
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const characterCardEl = document.getElementById('character-card');
const randomizeBtn = document.getElementById('randomize-btn');

// Element colors mapping
const elementColors = {
    'Physical': 'element-Physical',
    'Fire': 'element-Fire',
    'Ice': 'element-Ice',
    'Lightning': 'element-Lightning',
    'Wind': 'element-Wind',
    'Quantum': 'element-Quantum',
    'Imaginary': 'element-Imaginary'
};

// Initialize the application
async function init() {
    try {
        await loadCharacters();
        displayRandomCharacter();
        
        // Hide loading, show character card
        loadingEl.style.display = 'none';
        characterCardEl.style.display = 'flex';
        
        // Add event listener to randomize button
        randomizeBtn.addEventListener('click', displayRandomCharacter);
    } catch (error) {
        console.error('Initialization error:', error);
        showError();
    }
}

// Load characters from API
async function loadCharacters() {
    try {
        const response = await fetch(`${API_BASE_URL}/characters.json`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const allCharacters = await response.json();
        
        // Filter out characters with placeholder names
        charactersData = {};
        for (const [id, character] of Object.entries(allCharacters)) {
            // Skip characters with placeholder names like {NICKNAME} or missing names
            if (character.name && 
                !character.name.includes('{NICKNAME}') && 
                !character.name.includes('{') &&
                character.name.trim() !== '') {
                charactersData[id] = character;
            }
        }
        
        characterIds = Object.keys(charactersData);
        
        if (characterIds.length === 0) {
            throw new Error('No characters found');
        }
        
        console.log(`Loaded ${characterIds.length} valid characters (filtered out placeholders)`);
    } catch (error) {
        console.error('Error loading characters:', error);
        throw error;
    }
}

// Get random character
function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characterIds.length);
    const characterId = characterIds[randomIndex];
    return charactersData[characterId];
}

// Display random character
function displayRandomCharacter() {
    const character = getRandomCharacter();
    
    // Disable button during loading
    randomizeBtn.disabled = true;
    randomizeBtn.textContent = '⏳ Loading...';
    
    // Hide character info during loading
    const characterInfo = document.querySelector('.character-info');
    characterInfo.style.opacity = '0.3';
    characterInfo.style.pointerEvents = 'none';
    
    // Update character image with preloading
    const characterImage = document.getElementById('character-image');
    
    // Try multiple image sources in order of preference
    const imageSources = [
        character.portrait ? `${ASSETS_BASE_URL}/${character.portrait}` : null,
        character.preview ? `${ASSETS_BASE_URL}/${character.preview}` : null,
        character.icon ? `${ASSETS_BASE_URL}/${character.icon}` : null
    ].filter(url => url !== null);
    
    console.log(`Loading ${character.name}:`, imageSources);
    
    // Function to update all character info
    function updateCharacterInfo() {
        // Update character name
        document.getElementById('character-name').textContent = character.name;
        
        // Update element with color
        const elementEl = document.getElementById('character-element');
        elementEl.textContent = character.element || 'Unknown';
        elementEl.className = `value ${elementColors[character.element] || ''}`;
        
        // Update path
        document.getElementById('character-path').textContent = character.path || 'Unknown';
        
        // Update rarity
        const rarityEl = document.getElementById('character-rarity');
        rarityEl.textContent = `${character.rarity || 0} ⭐`;
        
        // Update rarity stars
        const rarityStars = document.getElementById('rarity-stars');
        rarityStars.textContent = '⭐'.repeat(character.rarity || 0);
        
        console.log('Displayed character:', character.name);
    }
    
    // Try loading images in order
    let currentImageIndex = 0;
    
    function tryLoadImage() {
        if (currentImageIndex >= imageSources.length) {
            // All images failed, show placeholder
            console.error(`All images failed for ${character.name}`);
            characterImage.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"%3E%3Crect fill="%23667eea" width="400" height="500"/%3E%3Ctext fill="white" font-size="24" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Not Available%3C/text%3E%3C/svg%3E';
            characterImage.alt = character.name;
            
            // Update info and show
            updateCharacterInfo();
            characterInfo.style.opacity = '1';
            characterInfo.style.pointerEvents = 'auto';
            
            randomizeBtn.disabled = false;
            randomizeBtn.textContent = '🎲 Randomize Character';
            return;
        }
        
        const imageUrl = imageSources[currentImageIndex];
        const img = new Image();
        
        img.onload = function() {
            characterImage.src = imageUrl;
            characterImage.alt = character.name;
            console.log(`Successfully loaded image for ${character.name}`);
            
            // Update info and show
            updateCharacterInfo();
            characterInfo.style.opacity = '1';
            characterInfo.style.pointerEvents = 'auto';
            
            // Re-enable button
            randomizeBtn.disabled = false;
            randomizeBtn.textContent = '🎲 Randomize Character';
            
            // Add animation effect
            characterCardEl.style.animation = 'none';
            setTimeout(() => {
                characterCardEl.style.animation = 'fadeIn 0.5s ease-in';
            }, 10);
        };
        
        img.onerror = function() {
            console.warn(`Failed to load image ${currentImageIndex + 1}/${imageSources.length} for ${character.name}: ${imageUrl}`);
            currentImageIndex++;
            tryLoadImage(); // Try next image
        };
        
        img.src = imageUrl;
    }
    
    tryLoadImage();
}

// Show error message
function showError() {
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
    characterCardEl.style.display = 'none';
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

