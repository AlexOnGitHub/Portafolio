const githubButton = document.querySelector('.social__github');
const linkedinButton = document.querySelector('.social__linkedin');
const aluraButton = document.querySelector('.social__alura');
const instagramButton = document.querySelector('.social__instagram');

githubButton.addEventListener('click', function() {
  const link = this.getAttribute('data-link');
  window.location.href = link;
});

linkedinButton.addEventListener('click', function() {
    const link = this.getAttribute('data-link');
    window.location.href = link;
  });

aluraButton.addEventListener('click', function() {
    const link = this.getAttribute('data-link');
    window.location.href = link;
});  

instagramButton.addEventListener('click', function() {
    const link = this.getAttribute('data-link');
    window.location.href = link;
}); 

const cvButton = document.querySelector('#button_download-cv');

cvButton.addEventListener('click', function() {
  const pdfFilePath = 'CV-Cesar_Alejandro_CG.pdf';

  const downloadLink = document.createElement('a');
  downloadLink.href = pdfFilePath;
  downloadLink.download = 'CV-Cesar_Alejandro_CG.pdf'; 
  downloadLink.style.display = 'none';

  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
}); 

const form = document.getElementById('commentForm');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');
const okButton = document.getElementById('okButton');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');

closeBtn.addEventListener('click', function () {
  popup.style.display = 'none';
});

okButton.addEventListener('click', function () {
  popup.style.display = 'none';
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (nameInput.value !== '' && emailInput.value !== '' && commentInput.value !== '') {

    popup.style.display = 'flex';

    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';
  }
});

const menuLinks = document.querySelectorAll('.menu__list__link');
const mobileMenu = document.querySelector('.menu-options--aditional');
const menuToggle = document.querySelector('.menu__toggle');

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
}

function toggleMobileMenu() {
  if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
  } else {
      mobileMenu.style.display = 'block';
  }
}

menuToggle.addEventListener('click', toggleMobileMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const href = link.getAttribute('href');

      window.location.href = href;

      setTimeout(closeMobileMenu, 300); 
  });
});

        