const iconMenu = document.querySelector('#ml');
const menu = document.getElementById('it-nav');
const navLink = document.querySelectorAll('.nav-list');
const btnP = document.querySelectorAll('.btnP');
const header = document.getElementById('header');

iconMenu.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
  iconMenu.classList.toggle('changeIcon');
});
navLink.forEach((navUrl) => {
  navUrl.addEventListener('click', () => {
    menu.classList.remove('showMenu');
    iconMenu.classList.remove('changeIcon');
  });
});

// Object Array for details card

const myWork = [{
  name: 'Tonic',
  infoproject: ['Back end Dev', '2015'],
  image: './images/project_1.svg',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  proTech: ['html', 'javascript', 'css'],
  liveUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
  repoUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
},

{
  name: 'Multi-Post Stories',
  infoproject: ['Back end Dev', '2015'],
  image: './images/project2.svg',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  proTech: ['html', 'javascript', 'css'],
  liveUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
  repoUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
},

{
  name: 'Tonic',
  infoproject: ['Back end Dev', '2015'],
  image: './images/project3.svg',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  proTech: ['html', 'javascript', 'css'],
  liveUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
  repoUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
},

{
  name: 'Multi-Post Stories',
  infoproject: ['Back end Dev', '2015'],
  image: './images/project2.svg',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  proTech: ['html', 'javascript', 'css'],
  liveUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
  repoUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
}];

// Action performing when btn see project ScriptProcessorNode

function openPopUp(id) {
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
          </ul>
        </div>
        <div class="redirect">
          <a class="myBtns" href='${myWork[id].liveUrl}'>
            See live
            <img src="./images/seeL.svg" alt="">
          </a>
          <a class="myBtns" href="${myWork[id].repoUrl}">
            See source
            <img src="./images/seeS.svg" alt="">
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
