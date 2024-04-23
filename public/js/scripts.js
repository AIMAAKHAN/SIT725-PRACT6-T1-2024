const cardList = [
    {
        title: "Room 1",
        image:"images/H5.JPG",
        link: "https://www.booking.com/",
        description: "Welcome to our cozy small hotel room, where comfort meets convenience in a compact space designed for a delightful stay"
    },
    {
        title: "Room 2",
        image:"images/H2.jpg",
        link: "https://www.booking.com/",
        description: "Welcome to our charming small hotel room, where intimate comfort and convenience blend seamlessly to create a delightful retreat for your stay. Step inside and discover a cozy sanctuary designed with your relaxation in mind."
    },
    {
        title: "Room 3",
        image:"images/H3.JPG",
        link: "https://www.booking.com/",
        description: "Welcome to our intimate small hotel room, where every detail is meticulously curated to provide you with a comfortable and memorable stay. Step inside and experience a blend of modern amenities and cozy charm in a compact yet inviting space."
    },
    {
        title: "Room 4",
        image:"images/H4.jpg",
        link: "https://www.booking.com/",
        description: "Welcome to our charming small hotel room, where comfort meets style in a cozy and inviting setting. Step inside and discover a space designed to make you feel right at home, with thoughtful touches and modern conveniences at every turn."
    },
    // Add more card objects as needed
];

function addCards() {
    const cardContainer = document.getElementById("card-container");
    
    cardList.forEach(cardData => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        // Construct card content
        cardElement.innerHTML = `
            <h2>${cardData.title}</h2>
            <img src="${cardData.image}" alt="${cardData.title}">
            <p>${cardData.description}</p>
            <a href="${cardData.link}" target="_blank">Read more</a>
        `;
        
        cardContainer.appendChild(cardElement);
    });
}

// Call the function to add cards when the page loads
window.onload = addCards;


function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function submitForm() {
    // Retrieve form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Print form data to console
    console.log("Form Data:");
    console.log(formData);

    // Close the modal
    closeModal();
}

