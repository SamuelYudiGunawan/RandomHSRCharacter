# ⭐ Honkai Star Rail Character Randomizer

A simple, beautiful web application that displays random Honkai Star Rail characters using the [StarRailStaticAPI](https://vizualabstract.github.io/StarRailStaticAPI/).

![Preview](https://img.shields.io/badge/Status-Active-success)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![GitHub Actions](https://img.shields.io/badge/CI-Automated-green)

## 🎮 Features

- 🎲 Random character generation
- 🖼️ Beautiful character portraits
- ⭐ Display character details (name, element, path, rarity)
- 📱 Fully responsive design
- 🐳 Docker containerized
- 🔄 Automated CI/CD with GitHub Actions
- 🌐 Cross-platform compatible (Linux & Windows)

## 🚀 Quick Start

### Option 1: Run Locally (No Installation)

Simply open `index.html` in your web browser!

### Option 2: Run with Docker

#### Build and Run

```bash
# Build the Docker image
docker build -t honkai-star-rail-randomizer .

# Run the container
docker run -d -p 8080:80 --name honkai-app honkai-star-rail-randomizer

# Visit http://localhost:8080
```

#### Stop and Remove

```bash
docker stop honkai-app
docker rm honkai-app
```

### Option 3: Docker Compose (Optional)

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    container_name: honkai-star-rail-app
```

Then run:

```bash
docker-compose up -d
```

## 📋 Testing on Different Platforms

### Linux

```bash
# Build
docker build -t honkai-star-rail-randomizer .

# Run
docker run -d -p 8080:80 honkai-star-rail-randomizer

# Test
curl http://localhost:8080

# Check logs
docker logs $(docker ps -q --filter ancestor=honkai-star-rail-randomizer)
```

### Windows (PowerShell)

```powershell
# Build
docker build -t honkai-star-rail-randomizer .

# Run
docker run -d -p 8080:80 honkai-star-rail-randomizer

# Test in browser
Start-Process "http://localhost:8080"

# Check logs
docker logs $(docker ps -q --filter ancestor=honkai-star-rail-randomizer)
```

### Windows (WSL2)

Same commands as Linux will work in WSL2!

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: StarRailStaticAPI
- **Container**: Docker with Nginx Alpine
- **CI/CD**: GitHub Actions
- **No Framework**: Pure vanilla JavaScript for simplicity

## 📁 Project Structure

```
.
├── index.html              # Main HTML file
├── style.css               # Styling
├── app.js                  # JavaScript logic
├── Dockerfile              # Docker configuration
├── .github/
│   └── workflows/
│       └── docker.yml      # GitHub Actions workflow
└── README.md               # Documentation
```

## 🔄 GitHub Actions Workflow

The project includes automated CI/CD that:

1. ✅ Builds Docker image on every push
2. ✅ Tests container startup
3. ✅ Verifies application accessibility
4. ✅ Runs on Linux and can be tested on Windows
5. ✅ Optional: Pushes to Docker Hub (requires secrets)

### Setting Up GitHub Actions

1. Create a new repository on GitHub
2. Push this code to the repository
3. GitHub Actions will automatically run on push
4. Check the "Actions" tab to see the workflow

### Optional: Docker Hub Integration

To enable Docker Hub push, add these secrets to your GitHub repository:
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password/token

Go to: Repository Settings → Secrets and variables → Actions → New repository secret

## 🎯 API Usage

This application uses the following endpoints:

- **Characters Data**: `https://vizualabstract.github.io/StarRailStaticAPI/db/en/characters.json`
- **Character Images**: `https://vizualabstract.github.io/StarRailStaticAPI/assets/`

## 🌟 Features Explained

### Random Character Generation
Click the "Randomize Character" button to fetch a random character from the API.

### Character Information Displayed
- **Name**: Character's full name
- **Element**: Fire, Ice, Lightning, Wind, Physical, Quantum, or Imaginary
- **Path**: The character's path (role)
- **Rarity**: 4-star or 5-star characters
- **Portrait**: High-quality character image

### Responsive Design
Works perfectly on desktop, tablet, and mobile devices.

## 📄 License

This project is for educational purposes. Honkai: Star Rail is © HoYoverse.

## 🙏 Credits

- Data provided by [StarRailStaticAPI](https://vizualabstract.github.io/StarRailStaticAPI/)
- Honkai: Star Rail © HoYoverse
- Created for UTSCloud Assignment

