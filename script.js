const iconMenu = document.querySelector('#ml');
const menu = document.getElementById('it-nav');
const navLink = document.querySelectorAll('.nav-link');
const btnP = document.querySelectorAll('.btnP');
const header = document.getElementById('header');

iconMenu.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
  iconMenu.classList.toggle('changeIcon');
  document.body.classList.toggle('no-scroll');
});

navLink.forEach((navUrl) => {
  navUrl.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
    menu.classList.remove('showMenu');
    iconMenu.classList.remove('changeIcon');
  });
});

// Object Array for details card

const myWork = [{
  name: 'Vacay Inn',
  infoproject: ['Front-end / Back-end Dev', '2023'],
  image: './images/vacay-inn-dev.jpeg',
  projectDescription: '"Vacay Inn" is a feature-rich application meticulously crafted to simplify the hotel reservation experience. From the user-friendly registration process and robust authentication to reservation management and responsive design, the app strives to deliver a user-centric and seamless journey for reserving rooms at captivating hotel branches.',
  proTech: ['React', 'Rails', 'RoR', 'PostgreSQL'],
  liveUrl: 'https://vacay-inn.onrender.com',
  repoUrl: 'https://github.com/fredo509/Capstone-Front-End',
},

{
  name: 'Action Comics',
  infoproject: ['Front-end Dev', '2023'],
  image: './images/act-movies.jpeg',
  projectDescription: "Action Comics is the ultimate app for movie enthusiasts and cinephiles, designed to enhance your movie-watching experience like never before. With Action Comics, you can easily browse and explore a vast collection of movies, showcasing stunning images and captivating titles. Whether you're looking for your next cinematic adventure or just want to discover hidden gems, Action Comics has got you covered.",
  proTech: ['HTML5', 'JavaScript', 'CSS', 'Webpack'],
  liveUrl: 'https://actioncomics.netlify.app',
  repoUrl: 'https://github.com/fredo509/Javascript-capstone-Project',
},

{
  name: 'Crypto Metrics',
  infoproject: ['Frony-end Dev', '2023'],
  image: './images/cryp.png',
  projectDescription: 'Welcome to Crypto Metric, the cutting-edge cryptocurrency analytics app built with React, designed to empower both seasoned traders and newcomers in the world of digital currencies. With CryptoMetric, you gain access to comprehensive data, real-time insights, and powerful tools to make informed decisions in the fast-paced crypto market.',
  proTech: ['HTML', 'JavaScript', 'CSS', 'React'],
  liveUrl: 'https://cryptometrics-cm.netlify.app',
  repoUrl: 'https://github.com/fredo509/CryptoCurrencies-metrics',
},

{
  name: 'Food App',
  infoproject: ['Back end Dev', '2023'],
  image: './images/food-in.jpeg',
  projectDescription: 'The Ruby on Rails Food application exemplifies the MVC architecture and leverages the Devise gem for authentication and the CanCanCan gem for authorization. Demonstrating the robust capabilities of Ruby on Rails, this app seamlessly interacts with a database to deliver an impressive user experience.<br> With a focus on food- related functionalities, the app offers a comprehensive view interface encompassing foods, recipes, and inventories.Through this interface, users are empowered to perform a range of actions.They can effortlessly add, delete, or edit items, provided they possess the necessary authorization based on their assigned role within the system.',
  proTech: ['Ruby', 'RoR', 'PostgreSQL', 'Boostrap'],
  liveUrl: 'https://rails-mquh.onrender.com/',
  repoUrl: 'https://github.com/fredo509/App-Food',
},

{
  name: 'Trading Forum',
  infoproject: ['Back end Dev', '2023'],
  image: './images/blog-dev.jpeg',
  projectDescription: "Trading Forum is built on the robust and efficient Ruby on Rails framework. Rails, known for its elegant syntax and developer-friendly conventions, forms the backbone of our platform. It enables us to develop and deploy features rapidly, ensuring a smooth user experience.At the heart of our application is Ruby, a dynamic and versatile programming language. Ruby's simplicity and flexibility allow us to create elegant solutions, from intricate backend logic to user-friendly interfaces.",
  proTech: ['Ruby', 'Rails', 'RoR', 'PostgreSQL'],
  liveUrl: 'https://blog-app-uwjf.onrender.com',
  repoUrl: 'https://github.com/fredo509/Blog_App',
}];

// Action performing when btn see project is pressed

function openPopUp(id) {
  document.body.classList.add('no-scroll');
  const popUpView = document.createElement('div');
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('dataContainer');
  popUpView.classList.add('overlay');
  document.body.appendChild(popUpView);
  document.body.appendChild(dataContainer);

  dataContainer.innerHTML = `
  <div class="pop-card">
    <div class="project-details pd">
      <h2 class="project-title js-title">${myWork[id].name}<span class="closeB"><img src="./images/closeB.svg"
            alt="closingIcon"></span>
      </h2>
      <div class="client-info clI">
        <p class="canopy">CANOPY</p>
        <ul class="Cinf list">
          <li>${myWork[id].infoproject[0]}</li>
          <li>${myWork[id].infoproject[1]}</li>
        </ul>
      </div>
    </div>
    <div class="pI1"><img src='${myWork[id].image}' alt='projectimage'></div>
    <div class="crop">
      <div class="b1">
        <div class="pInf">
          <p>
            ${myWork[id].projectDescription}
          </p>
        </div>
      </div>
      <div class="b2">
        <div class="p-tag">
          <ul class="pl plp">
            <li>${myWork[id].proTech[0]}</li>
            <li>${myWork[id].proTech[1]}</li>
            <li>${myWork[id].proTech[2]}</li>
            <li>${myWork[id].proTech[3]}</li>
          </ul>
        </div>
        <div class="redirect">
          <a class="myBtns" href='${myWork[id].liveUrl}' target="_blank" rel="noopener">
            See live
            <img src="./images/seeL.svg" alt="live-icon">
          </a>
          <a class="myBtns" href="${myWork[id].repoUrl}" target="_blank" rel="noopener">
            See source
            <img src="./images/seeS.svg" alt="github-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
  `;

  // Action for closing popUp window

  const hideWin = dataContainer.querySelectorAll('.closeB');
  hideWin.forEach((closeMe) => {
    closeMe.addEventListener('click', () => {
      document.body.classList.remove('no-scroll');
      popUpView.style.display = 'none';
      dataContainer.style.display = 'none';
    });
  });
}

// javascript action on clicking see project

btnP.forEach((navUrl, index) => {
  navUrl.addEventListener('click', () => {
    openPopUp(index);
    header.scrollIntoView();
  });
});

// validation for Uppercase in email

const myMessage = document.getElementById('message');
const form = document.myForm;

function validate() {
  function validateLetter() {
    return Boolean(form.Email.value.match(/[A-Z]/));
  }

  if (validateLetter() === true) {
    myMessage.innerHTML = "Please don't use UPPERCASE in your email adresse";
    myMessage.classList.add('errorM');
    form.Email.focus();
    return false;
  }
  return (true);
}

validate();