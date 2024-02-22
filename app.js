const images = [
    { "url": "images//img2.jpg" },
    { "url": "images//img3.jpg "},
    { "url": "images//img4.jpg" },
    { "url": "images//img5.jpg" },
    { "url": "images//img6.jpg" },
    { "url": "images//img7.jpg" },
    { "url": "images//img8.jpg "},
    { "url": "images//img9.jpg" },
    { "url": "images//img10.jpg" },
    { "url": "images//img11.jpg" },
    { "url": "images//img12.jpg" },
    { "url": "images//img13.jpg "},
    { "url": "images//img14.jpg" },
    { "url": "images//img1.jpg" },
    { "url": "images//img2.jpg" },
    { "url": "images//img3.jpg" },
    { "url": "images//img4.jpg "},
    { "url": "images//img5.jpg" },
    { "url": "images//img6.jpg" },
    { "url": "images//img7.jpg" },
    { "url": "images//img8.jpg" },
    { "url": "images//img9.jpg "},
    { "url": "images//img10.jpg" },
    { "url": "images//img11.jpg" },
];
const names = ["Tony ", "Vishal","Sandeep","Abhishek","Abhinav","Mayank","Tushar","Shekhar","Sumit","Vaibhav","Vikrant",
"Sohan","Ganesh","Shiva","Tony ", "Vishal","Sandeep","Abhishek","Abhinav","Mayank","Tushar","Shekhar","Sumit","Vaibhav"];


const imageContainer = document.querySelector('.image-container');

for (let i = 0; i < images.length; i++) {
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');
    
    const img = document.createElement('img');
    img.src = images[i].url;
    img.alt = 'User Image';
    
    const userName = document.createElement('p');
    userName.textContent = names[i];
    
    imageItem.appendChild(img);
    imageItem.appendChild(userName);
    imageContainer.appendChild(imageItem);
}