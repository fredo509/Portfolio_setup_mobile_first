const iconMenu = document.querySelector('#ml');
const menu = document.getElementById('it-nav');
const navLink = document.querySelectorAll('.nav-list');
const btnSeeP = document.querySelectorAll('.btn-project')
const btn1 = document.getElementById('btnp');
const sectionProject = document.getElementById('section-project');

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

// mywork section 
// btnSeeP.forEach((navUrl) => {
//   navUrl.addEventListener('click', () => {
//     openPopUp(0);
//     iconMenu.scrollIntoView();
//   });
// });

// btn1.addEventListener('click', () => {
//   openPopUp(0);
// });



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
  name: 'Tonic',
  infoproject: ['Back end Dev', '2015'],
  image: './images/project_1.svg',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  proTech: ['html', 'javascript', 'css'],
  liveUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
  repoUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',

 }


];


function openPopUp(id) {

  const popUpView = document.createElement('div');
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('dataContainer');
  popUpView.classList.add('overlay');
  document.body.appendChild(popUpView);
  document.body.appendChild(dataContainer);
  dataContainer.innerHTML = ` 
  		<span class="close">

		</span>
		
			<div class="pop-card">
				<div class="project-details">
					<h2 class="project-title js-title">${myWork[id].name}</h2>
					<div class="client-info clI">
						<p class="canopy">CANOPY</p>
						<ul class="Cinf list">
							<li>${myWork[id].infoproject[0]}</li>
							<li>${myWork[id].infoproject[1]}</li>
						</ul>
					</div>

				</div>

				<div class="pI1"><img src='${myWork[id].image}' alt = 'projectimage'></div>
				<div class="pInf">
					<p>
						${myWork[id].projectDescription}
					</p>
				</div>
				<div class="">
					<ul class="">
						<li>${myWork[id].proTech[0]}</li>
						<li>${myWork[id].proTech[1]}</li>
						<li>${myWork[id].proTech[2]}</li>
					</ul>
				</div>
			
			</div>
		</div>
    
 `;
}
openPopUp(0);


// function showPopUp(projectNumber) {

//   document.addEventListener('click', (action) => {
//     if (action.target.id === 'close-popUp') {
//       popUpView.style.display = 'none';
//       overlayView.style.display = 'none';
//     }
//   });
// }
// // export the function to use after rendering the projects dynamically
// export { showPopUp as default };
