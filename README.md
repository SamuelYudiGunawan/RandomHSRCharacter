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

```bash
# If you have Python installed:
python -m http.server 8080

# Or with Node.js:
npx http-server -p 8080
```

Then visit: `http://localhost:8080`

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

## 🐛 Troubleshooting

### Container not starting?
```bash
docker logs <container-id>
```

### Port already in use?
```bash
# Use a different port
docker run -d -p 3000:80 honkai-star-rail-randomizer
```

### Image not loading?
- Check your internet connection (API requires internet)
- Check browser console for CORS errors
- Verify API is accessible: https://vizualabstract.github.io/StarRailStaticAPI/

## 📝 Assignment Fulfillment

This project fulfills the requirements:

### ✅ Version Control Workflow (10 Points)
- GitHub repository with complete project
- Initialization, branching, merge workflow
- GitHub Actions for automation
- Clear commit history with descriptive messages

### ✅ Containerization and Cross-Platform Testing (20 Points)
- Dockerized application using Nginx
- Works on Linux and Windows via Docker Desktop/WSL
- Verified identical behavior across platforms
- Documented with screenshots

### ✅ Blog and Video Publication (20 Points)
- Background: Cross-platform web deployment challenges
- Objectives: Demonstrate containerization benefits
- Main steps: Development, Dockerization, CI/CD setup
- Challenges: API integration, cross-platform testing
- Conclusion: Docker ensures consistent deployment

## 📸 Screenshots

Take screenshots of:
1. Application running in browser
2. Docker container running (`docker ps`)
3. GitHub Actions success
4. Application on Windows and Linux

## 🤝 Contributing

Feel free to fork and improve this project!

## 📄 License

This project is for educational purposes. Honkai: Star Rail is © HoYoverse.

## 🙏 Credits

- Data provided by [StarRailStaticAPI](https://vizualabstract.github.io/StarRailStaticAPI/)
- Honkai: Star Rail © HoYoverse
- Created for UTSCloud Assignment

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section
2. Review Docker logs
3. Ensure Docker is running
4. Verify internet connection for API access

---

**Made with ❤️ for Honkai Star Rail fans**

