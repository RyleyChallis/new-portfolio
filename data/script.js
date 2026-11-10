const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');

    questionButton.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});

const retainerItem = document.querySelectorAll('.retainer-item');

retainerItem.forEach(item => {
    const retainerButton = item.querySelector('.retainer-button');

    retainerButton.addEventListener('click', () => {
        retainerItem.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});

document.addEventListener('click', () => {
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        document.body.classList.add('no-scroll');
        document.documentElement.classList.add('no-scroll');
        sidebarOverlay.classList.add('active');
    })
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
        sidebarOverlay.classList.remove('active');
    })

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
        sidebarOverlay.classList.remove('active');
    })
})

const projectData = {
  "tipsy": {
    "title": "Tipsy Kisses | Luxury Mobile Bar",
    "subtitle": "A premier mobile bar service delivering high-end cocktail experiences, bespoke drink menus, and professional bartending for private events and luxury gatherings.",
    "metrics": "Pure HTML5/CSS3/JS · Zero External Libraries",
    "problem": "Traditional hospitality sites rely on heavy page builders and bloated WordPress themes. Slow load times and clunky layouts cause high-value clients to bounce before submitting an inquiry.",
    "solution": "Zero external frameworks or runtime bloat ensure instantaneous page loads, optimised WebP asset delivery, and frictionless lead capture.",
    "hero": "assets/tipsy.webp"
  },
  "cortile": {
    "title": "Il Cortile | Fine Dining Experience",
    "subtitle": "An independent Italian restaurant concept rooted in classic courtyard dining, offering artisanal small plates, handmade pasta, and an intimate neighborhood atmosphere.",
    "metrics": "Zero-Framework Build · Native CSS Layouts",
    "problem": "High-end dining sites often suffer from slow reservation flows, heavy third-party plugins, and poor mobile responsiveness that degrade the customer experience.",
    "solution": "Engineered as a zero-bloat web platform with native CSS layout mechanics and fluid typography. Delivers instant menu access and seamless multi-device navigation without sacrificing design prestige or loading speed.",
    "hero": "assets/cortile1.webp"
  }
};


document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');

    if (!projectId) {
        console.warn('No project specified in URL parameters.');
        return;
    }

    const project = projectData[projectId];

  if (project) {
    const titleEl = document.getElementById('project-title');
    const subtitleEl = document.getElementById('project-subtitle');
    const metricsEl = document.getElementById('project-metrics');
    const problemEl = document.getElementById('project-problem');
    const solutionEl = document.getElementById('project-solution');
    const heroImgEl = document.getElementById('project-hero-img');

    if (titleEl) titleEl.textContent = project.title;
    if (subtitleEl) subtitleEl.textContent = project.subtitle;
    if (metricsEl) metricsEl.textContent = project.metrics;
    if (problemEl) problemEl.textContent = project.problem;
    if (solutionEl) solutionEl.textContent = project.solution;
    if (heroImgEl && (project.images?.hero || project.hero)) {
      heroImgEl.src = project.images?.hero || project.hero;
      heroImgEl.alt = project.title || 'Project Case Study';
    }
  } else {
    console.error(`Project with ID '${projectId}' not found in data.`);
  }
});

// START OF CONTACT FORM 

const formURL = "https://script.google.com/macros/s/AKfycbwxijOF-M-rfitNRjxqI3wyBsEGAsIxwAFVmAJAFS8TgD7ToL5fBbTv3-_RXkawCcPDAw/exec";
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

if (!form) {
    console.error("CRITICAL: Form cannot be found");
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let firstInvalidInput = null;

    requiredFields.forEach(field => {
        if (!field.checkValidity() && !firstInvalidInput) {
            firstInvalidInput = field;
        }
    });

    if (firstInvalidInput) {
        firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidInput.focus();
        return;
    }

    const formData = new FormData(form);

    fetch(formURL, { 
        method: 'POST', 
        mode: 'no-cors',
        body: formData 
    })
    .then(response => {
        console.log('Success!', response);
        submitBtn.style.backgroundColor = "#598738";
        submitBtn.innerText = "Success!";
        form.reset();
    })
    .catch(error => {
        console.error('Error!', error);
    });
});