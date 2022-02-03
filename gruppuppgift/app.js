//hamburger-menu

const toggleBtn = document.getElementsByClassName("toggle-btn") [0]
const navbarLinks = document.getElementsByClassName("navbar-links") [0]

toggleBtn.addEventListener("click", () =>{
    navbarLinks.classList.toggle("active")
});


//image-slider-code

const images = [{
        name: "art1.jpg"
    },
    {
        name: "art2.jpg"
    },
    {
        name: "art3.jpg"
    },
    {
        name: "art4.jpg"
    },
    {
        name: "art5.jpg"
    },
    {
        name: "art6.jpg"
    },
    {
        name: "art7.jpg"
    },
    {
        name: "art8.jpg"
    },
    {
        name: "art9.jpg"
    },
    {
        name: "art10.jpg"
    },
    {
        name: "art11.jpg"
    },
];

//opens modal
const openGalleryModal = () => {
    document.getElementById("gallery-modal-wrapper").style.display = "flex";
};

//closes modal
const closeModal = () => {
    document.getElementById("gallery-modal-wrapper").style.display = "none";
};

//When clicking on thumbnails it will display that image as main image by using the src below that iterates through the thumbnails array.
const setMainImage = (src) => {
    document.getElementById("main-image").setAttribute("src", src);
    setActiveThumbnail();
};

window.addEventListener("load", () => {
    document
        .getElementById("main-image")
        .setAttribute("src", `./img/${images[0].name}`); //set the first image in the images array as the main image.
    document
        .getElementById("thumbnail-wrapper").innerHTML = images.map( 
            (img) => `<img src="./img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">` //fills the thumbnail wrapper with images from array and gives the thumbnails a onclick event so you can change image.
        ).join(""); //changes the array to a string to delete commas.
    
//
    setActiveThumbnail();
    document.getElementById("lb-prev-btn").addEventListener("click", prevImage);
    document.getElementById("lb-next-btn").addEventListener("click", nextImage);
});

//if thumbs src is equal to main image src it will create a border around the thumbnail image. And if the src is not equal to main image then display none.
const setActiveThumbnail = () => {
    const thumbs = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbs.length; i++) { 
        if (thumbs[i].src === document.getElementById("main-image").src) {
            thumbs[i].style.border = "3px solid black";
        } else {
            thumbs[i].style.border = "0px";
        }
    }
};



//prevImage is a function that contains a for loop that iterates through the thumbnail images. if the thumbnail src is equal main-image src and the iteration value is not equal to zero, the src of main-image will be set to the previous thumbnail iteration.
const prevImage = () => {
    const thumbs = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbs.length; i++) { 
        if (
            thumbs[i].src === document.getElementById("main-image").src &&
            i !== 0 
        ) {
            document
                .getElementById("main-image")
                .setAttribute("src", thumbs[(i -= 1)].src); //goes to previous object in array.
            setActiveThumbnail();
        }
    }
};

//nextImage is a function that contains a for loop that iterates through the thumbnail images. if the thumbnail src is equal main-image src and the iteration value is not equal to thumbnail.length -1 the src of main-image will be set to the next thumbnail iteration.
const nextImage = () => {
    const thumbs = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbs.length; i++) { 
        if (
            thumbs[i].src === document.getElementById("main-image").src && i !== thumbs.length - 1) { 
            document
                .getElementById("main-image")
                .setAttribute("src", thumbs[(i += 1)].src); //goes to next object in array
            setActiveThumbnail();
        }
    }
};

//opens the image modal 
const openLightBox = (src) => {
    document.getElementById("lb-thumbnails-wrapper").innerHTML = images
        .map(
            (img) =>
            `<img src="./img/${img.name}" class="lb-thumbnail" onclick="setMainLbImage(this.src)">`
        )
        .join("");
    document.getElementById("gallery-modal-wrapper").style.display = "flex";
};

const closeLightBox = () => {
    document.getElementById("gallery-modal-wrapper").style.display = "none";
};

//service section

const services = [{
        name: "Chloé Dupont",
        content: "French modern art painter",
        picture: "painter1.jpg",
    },

    {
        name: "Elise brown",
        content: "British old school painter",
        picture: "painter2.jpg",
    },

    {
        name: "George Johnson",
        content: "American art student",
        picture: "painter3.jpg",
    },
];

//loops through all service cards and gives them an onClick event that will then open a popup(modal)
const openServiceModal = () => {
    const cards = document.getElementsByClassName("service-card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            document.getElementById("service-modal-wrapper").style.display = "flex";
            for (let j = 0; j < services.length; j++) {
                if (i === j) {
                    document.getElementById("service-modal-content").innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p><img src="./img/${services[j].picture}">`;
                }
            }
        });
    }
};

//closes the service modal 
const closeServiceModal = () => {
    document.getElementById("service-modal-wrapper").style.display = "none";
};

window.addEventListener("load", openServiceModal);