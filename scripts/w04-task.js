/* LESSON 4 - Programming Tasks */
let photoElement = document.querySelector("#photo");

/* Profile Object  */
let myProfile = {
    name: "Marvin Canastuj",
    photo: {
        src: "images/marvin.jpg",
        alt: "My picture"
    },

    favoriteFoods: [
        "Pizza", 
        "Fries", 
        "Salad",
        "Lasagna",
        "Ice Cream"
    ],

    hobbies: [
        "Watch videos",
        "Walk",
        "Play video games",
        "Indexing",
        "coock"
    ],

    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Villa Nueva, Guatemala",
        length: "20 years"
    },
    {
        place: "Monterrey, Mexico",
        length: "2 years"
    },
    {
        place: "Totonicapan, Guatemala",
        length: "1 year"
    },
    {
        place: "Escuintla, Guatemala",
        length: "1 year"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
/*  document.querySelector("#photo").src = myProfile.photo.src; this is one way to do it*/
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */

myProfile.hobbies.forEach( hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})
