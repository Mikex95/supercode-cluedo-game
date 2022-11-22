
let Person = [
    {
        alias: "MrGreen",
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green",
    },
    
    {
        alias: "DrOrchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "https://assets.reedpopcdn.com/so-long-mrs-white-cluedos-housekeeper-is-no-more-146789820404.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/so-long-mrs-white-cluedos-housekeeper-is-no-more-146789820404.jpg",
        color: "orange",
    },
    {
        alias: "ProfPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple",
    },
    {
        alias: "MissScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg",
        color: "red",
    },

    {
        alias: "mrsPeacock",
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description:
            "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg",
        color: "blue",
    },

    {
        alias: "MrMustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description:
            "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow",
    },
];

let Weapons = [
    "rope",
    "knife",
    "candlestiick",
    "dumbbell",
    "poison",
    "axe",
    "bat",
    "trophy",
    "pistol",
];
let Rooms = [
    "Dinning Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Libary",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "Patio",
];
let button = document.getElementById('button');
let txtOutput = document.getElementById('output');
let imageOutput = document.getElementById('img');
let aliasOutput = document.querySelector('.alias-container');
let fullNameOutput = document.querySelector('.full-name-container');
let aboutOutput = document.querySelector('.about-container');
let weaponOutput = document.querySelector('.weapon');
let roomOutput = document.querySelector('.room');
let hiddenOutput = document.querySelector('.hidden');

let randomPlayer;
let randomWeapon;
let randomRoom;

button.addEventListener('click', function(){
    hiddenOutput.classList.remove("hidden");
    randomPlayer = (random(Person));
    randomWeapon = (random(Weapons));
    randomRoom = (random(Rooms));
    aliasOutput.innerHTML = randomPlayer.alias;
    fullNameOutput.innerHTML = `${randomPlayer.firstName} ${randomPlayer.lastName} (${randomPlayer.age})`;
    imageOutput.src = randomPlayer.image;  
    aboutOutput.innerHTML = randomPlayer.description;
    weaponOutput.innerHTML = randomWeapon;
    roomOutput.innerHTML = randomRoom;
    txtOutput.innerHTML = `<span style=color:${randomPlayer.color}> ${randomPlayer.firstName} ${randomPlayer.lastName}</span> killed Mr. Boddy using the ${randomWeapon} in the ${randomRoom}`
    
    console.log(randomPlayer);
})

const random = function(x) {
    return x[Math.floor((Math.random()* x.length))];
}
