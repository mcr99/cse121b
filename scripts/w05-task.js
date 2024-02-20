/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = null;


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const templeArticle = document.createElement("article");
        const templeName = document.createElement("h3");
        const templeImage = document.createElement("img");
        templeName.textContent = temple.templeName;
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.location;
        templeArticle.appendChild(templeName);
        templeArticle.appendChild(templeImage);
        templesElement.appendChild(templeArticle);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}


/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}


/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;

        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
            break;

        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            displayTemples(temples.filter(temple => temple));
    }

}


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
