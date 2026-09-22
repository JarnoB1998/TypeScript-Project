import planets from "./planets.json" with {type: "json"};
import galaxies from "./galaxies.json" with {type: "json"};

const planetList = document.querySelector("#planet-list");
const planetGalaxyList = document.querySelector("#planet-galaxy-list");
const galaxyList = document.querySelector("#galaxy-list");

planets.forEach(planet => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = planet.imageUrl;
    a.target = "_blank";
    a.textContent = planet.name;

    li.appendChild(a);
    planetList.appendChild(li);
// ---------------------------------------------
    const liGalaxy = document.createElement("li");
    const aGalaxy = document.createElement("a");

    aGalaxy.href = planet.galaxy.imageUrl;
    aGalaxy.target = "_blank";
    aGalaxy.textContent = planet.galaxy.name;

    liGalaxy.appendChild(aGalaxy);
    planetGalaxyList.appendChild(liGalaxy);
});

galaxies.forEach(galaxy => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = galaxy.imageUrl;
    a.target = "_blank";
    a.textContent = galaxy.name

    li.appendChild(a);
    galaxyList.appendChild(li);
})