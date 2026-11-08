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

document.addEventListener('DOMContentLoaded', async () => {
    // Grab the project ID from the URL query string (e.g., case-study.html?project=il-cortile)
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');

    if (!projectId) {
        console.warn('No project specified in URL parameters.');
        return;
    }

    try {
        const response = await fetch('data/pf.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const project = data[projectId];

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
            if (heroImgEl && project.images?.hero) {
                heroImgEl.src = project.images.hero;
                heroImgEl.alt = project.title || 'Project Case Study';
            }
        } else {
            console.error(`Project with ID '${projectId}' not found in pf.json.`);
        }
    } catch (error) {
        console.error('Failed to load project data:', error);
    }
});