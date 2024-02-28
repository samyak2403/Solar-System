// const planets = [
//     { name: "mercury", distance: 50, speed: 2 },
//     { name: "venus", distance: 100, speed: 1.5 },
//     { name: "earth", distance: 150, speed: 1 },
//     { name: "mars", distance: 200, speed: 0.8 },
//     { name: "jupiter", distance: 300, speed: 0.5 },
//     { name: "saturn", distance: 400, speed: 0.4 },
//     { name: "uranus", distance: 500, speed: 0.3 },
//     { name: "neptune", distance: 600, speed: 0.2 }
//     // Add more planets as needed
//   ];
  
//   function movePlanets() {
//     const currentTime = Date.now();
//     planets.forEach(planet => {
//       const { name, distance, speed } = planet;
//       const planetElement = document.getElementById(name);
//       const angle = (currentTime / 1000) * speed;
//       const x = distance * Math.cos(angle);
//       const y = distance * Math.sin(angle);
//       planetElement.style.left = `${50 + x}px`;
//       planetElement.style.top = `${50 + y}px`;
//     });
//     requestAnimationFrame(movePlanets);
//   }
  
//   movePlanets();
const planets = [
    { name: "mercury", distance: 50, speed: 2 },
    { name: "venus", distance: 100, speed: 1.5 },
    { name: "earth", distance: 150, speed: 1 },
    
    { name: "mars", distance: 200, speed: 0.8 },
    { name: "jupiter", distance: 300, speed: 0.5 },
    { name: "saturn", distance: 400, speed: 0.4 },
    { name: "uranus", distance: 500, speed: 0.3 },
    { name: "neptune", distance: 600, speed: 0.2 }
    // Add more planets as needed
];

function movePlanets() {
    const currentTime = Date.now();
    const satelliteElement = document.getElementById("satellite");
    const angle = (currentTime / 1000) * 1.2; // Adjust satellite speed
    const x = 20 * Math.cos(angle); // Adjust satellite distance from Earth
    const y = 20 * Math.sin(angle); // Adjust satellite distance from Earth

    planets.forEach(planet => {
        const { name, distance, speed } = planet;
        const planetElement = document.getElementById(name);
        const angle = (currentTime / 10000) * speed;
        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);
        planetElement.style.left = `${400 + x}px`; // 400 is half of the solar system's width
        planetElement.style.top = `${400 + y}px`; // 400 is half of the solar system's height
         // Place the satellite around Earth
    satelliteElement.style.left = `${400 + x}px`; // 400 is half of the solar system's width
    satelliteElement.style.top = `${400 + y}px`; // 400 is half of the solar system's height
    });
    requestAnimationFrame(movePlanets);
    requestAnimationFrame(moveSatellite);


    
}

movePlanets();
