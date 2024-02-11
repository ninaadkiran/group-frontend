// Array for Images
var imageArray = [
    "https://i.postimg.cc/15d5F4NG/csptest.jpg",
    "https://i.postimg.cc/nhkXW02q/cspimage1.jpg",
    "https://i.postimg.cc/nzsMCZJ1/cspimage2.jpg",
    "https://i.postimg.cc/XqdJk8XG/cspimage3.jpg",
    "https://i.postimg.cc/dtcDtzS8/cspimage4.jpg",
    "https://i.postimg.cc/7LZ5r0td/cspimage5.jpg",
    "https://i.postimg.cc/wT5Mt0Sn/cspimage6.jpg",
    "https://i.postimg.cc/Y2Wh7p8r/cspimage7.jpg",
    "https://i.postimg.cc/CxF1bb05/cspimage8.jpg",
    "https://i.postimg.cc/cHVC3j1G/cspimage9.jpg",
    "https://i.postimg.cc/YSDhr0J9/cspimage10.jpg",
    "https://i.postimg.cc/pLqdCyVZ/cspimage11.jpg",
    "https://i.postimg.cc/jj1SV97n/cspimage12.jpg",
    "https://i.postimg.cc/XvqYz3p0/cspimage13.jpg",
    "https://i.postimg.cc/NMrfQ46J/cspimage14.jpg",
    "https://i.postimg.cc/fynWy95w/cspimage15.jpg",
    "https://i.postimg.cc/PJWXw5F1/cspimage16.jpg",
    "https://i.postimg.cc/XNd7hs7X/cspimage17.jpg",
    "https://i.postimg.cc/ncxctqC2/cspimage18.jpg",
    "https://i.postimg.cc/BQCZZtF0/cspimage19.jpg",
    "https://i.postimg.cc/YSvtx3sr/cspimage20.jpg",
    "https://i.postimg.cc/Qdx8FsgW/cspimage21.jpg",
    "https://i.postimg.cc/NjJgTVbC/cspimage22.jpg",
    "https://i.postimg.cc/k5LqYb0x/cspimage23.jpg",
    "https://i.postimg.cc/pT8xwdv3/cspimage24.jpg",
    "https://i.postimg.cc/5yV1bMNy/cspimage25.jpg",
    "https://i.postimg.cc/BbB3vwXg/cspimage26.jpg",
    "https://i.postimg.cc/Dfrn5mBX/cspimage27.jpg",
    "https://i.postimg.cc/gkGd7dTB/cspimage28.jpg",
    "https://i.postimg.cc/dV1Fq6v2/cspimage29.jpg",
    "https://i.postimg.cc/GhzrwV03/cspimage30.jpg",
    "https://i.postimg.cc/pL6HyjXg/cspimage31.jpg"
];

// Function to set put random images from image array into question
function randomImage() {
    // Get all random image index and ensure no repeats
    var randomIndex1 = Math.floor(Math.random() * 32);

    var randomIndex2 = Math.floor(Math.random() * 32);
    while (randomIndex2 == randomIndex1) {
        var randomIndex2 = Math.floor(Math.random() * 32);
    }

    var randomIndex3 = Math.floor(Math.random() * 32);
    while (randomIndex3 == randomIndex2 || randomIndex3 == randomIndex1) { // || is or
        var randomIndex3 = Math.floor(Math.random() * 32);
    }

    var randomIndex4 = Math.floor(Math.random() * 32);
    while (randomIndex4 == randomIndex3 || randomIndex4 == randomIndex2 || randomIndex4 == randomIndex1) {
        var randomIndex4 = Math.floor(Math.random() * 32);
    }

    // Set image for question 1 using randomIndex1
    var randomImage1 = imageArray[randomIndex1];
    document.getElementById('imageq1').src = randomImage1;

    // Set image for question 2 using randomIndex2
    var randomImage2 = imageArray[randomIndex2];
    document.getElementById('imageq2').src = randomImage2;

    // Set image for question 3 using randomIndex3
    var randomImage3 = imageArray[randomIndex3];
    document.getElementById('imageq3').src = randomImage3;

    // Set image for question 4 using randomIndex4
    var randomImage4 = imageArray[randomIndex4];
    document.getElementById('imageq4').src = randomImage4;

    // console.log(document.getElementById('imageq1'))
    // testing: console.log(document.getElementById('imageq1')) // outputs random image link and actually updates it
    // works now

} // note: redundant, so maybe try to find a way (maybe loop? and like concatenate strings with imageq + 1, 2, 3, 4) to make cleaner