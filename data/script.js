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