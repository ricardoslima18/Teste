window.addEventListener('scroll'), () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <100){
            const activeLink = document.querySelector('.active');
            if (activeLink) {
                activeLink.classList.remove('active');
            }
            const titulo = section.querySelector('h1, h2');
            const h2id = titulo?.id;
            
            if (h2id) {
                const link = document.querySelector(`a[href="#${h2id}"]`);

                if (link) {
                    link.classList.add('active');
                }
            }
        }
    });
};

document.querySelectorAll(`a[href^="#"]`).forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}); 