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

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        const visibleEntries = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

        visibleEntries.forEach((entry, index) => {
            const el = entry.target;
            const delay = index * 0.1;
            el.style.transitionDelay = `${delay}s`;
            el.classList.add('is-visible');
            observer.unobserve(el);
        });
    }, {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -15% 0px'
    });

    revealElements.forEach((el) => {
        if (el.closest('#hero')) {
            el.classList.add('is-visible');
        } else {
            revealObserver.observe(el);
        }
    });
});

document.addEventListener('click', () => {
  const toggleBtn = document.getElementById('toggle-btn');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  })
})