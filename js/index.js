const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//remove DOM from title
const newTitle = document.querySelector('title')
newTitle.textContent = 'Great Idea!';

//***add text content to nav a tags***

const newA = Array.from(document.querySelectorAll('nav a'))
const siteNav = siteContent['nav']
Object.keys(siteNav).forEach((key, index) => { 
  if(key.includes('nav-item')){
newA[index].textContent = siteNav[key]
newA[index].style.color = 'green'
  }
})

//append and prepend

//Parent Element
const navItems =  document.querySelector('nav')

//New Links

let newNav1 = document.createElement('a')
newNav1.textContent = 'Append'
navItems.appendChild(newNav1)

let newNav2 = document.createElement('a')
newNav2.textContent = 'Prepend'
navItems.prepend(newNav2)


//***add h1 content***

// //use split and join
const newH1 = document.querySelector('h1');
// newH1.innerText = 'DOM\n Is\n Awesome\n'
const objString = siteContent['cta']['h1'].toString();
// console.log(objString)
let brk = objString.split(' ');
// console.log(brk)
let joinedBrk = brk.join("\n")

newH1.innerText = joinedBrk




const newButton = document.querySelector('button')
newButton.textContent = siteContent['cta']['button'];

const newImg = document.querySelector('#cta-img')
newImg.src = siteContent['cta']['img-src']

//***add top content***

const newH4 = document.querySelectorAll('.main-content h4')
const mainContent = siteContent['main-content']
// console.log(newH4)
// console.log(mainContent)
const newMainContentKeys = Object.keys(mainContent).filter(key => key.includes('h4'))
newMainContentKeys.forEach((key, index) => {
  newH4[index].textContent = mainContent[key]
  }
)

const newP = document.querySelectorAll('.main-content p')
const newPKeys = Object.keys(mainContent).filter(key => key.includes('content'))
newPKeys.forEach((key, index) => {
    newP[index].textContent = mainContent[key]
  }
)

const newMiddleImg = document.querySelector('.middle-img')
newMiddleImg.src = 'img/mid-page-accent.jpg';

//***Contact Content ***/


const newContactH4 = document.querySelector('.contact h4')
newContactH4.textContent = siteContent['contact']['contact-h4']

const newContactAddress = document.querySelectorAll('.contact p')
// console.log(newContactAddress)

//use split and join

// const objString2 = siteContent['contact']['address'].toString();
// console.log(objString2)
// let brk2 = objString2.split('Street');
// console.log(brk2)
// let joinedBrk2 = brk2.join("\n")
newContactAddress[0].textContent = siteContent['contact']['address']
newContactAddress[1].textContent = siteContent['contact']['phone']
newContactAddress[2].textContent = siteContent['contact']['email']


/***Footer***/
const newFooter = document.querySelector('footer p')
newFooter.textContent = siteContent['footer']['copyright']




