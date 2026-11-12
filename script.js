const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const roleElement = document.querySelector('.typed-role');
const roles = ['Web Developer', 'Freelancer', 'Salesforce Developer', 'Digital Marketing'];
if (roleElement && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let deleting = true;
  const typeRole = () => {
    const word = roles[roleIndex];
    roleElement.textContent = word.slice(0, characterIndex);
    if (deleting && characterIndex > 0) {
      characterIndex--;
      window.setTimeout(typeRole, 48);
    } else if (deleting) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      window.setTimeout(typeRole, 180);
    } else if (characterIndex < roles[roleIndex].length) {
      characterIndex++;
      window.setTimeout(typeRole, 85);
    } else {
      deleting = true;
      window.setTimeout(typeRole, 1600);
    }
  };
  window.setTimeout(typeRole, 1600);
}
