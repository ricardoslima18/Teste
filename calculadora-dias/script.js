const btn = document.querySelector('.submit-btn');

btn.addEventListener('click', () => {
    const dayInput = document.querySelector('.input-group:nth-child(1) input').value;
    const monthInput = document.querySelector('.input-group:nth-child(2) input').value;
    const yearInput = document.querySelector('.input-group:nth-child(3) input').value;

    const today = new Date();
    const birthDate = new Date(yearInput, monthInput - 1, dayInput);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += lastMonth;
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    const results = document.querySelectorAll('.result-section span');
    
    animateValue(results[0], years);
    animateValue(results[1], months);
    animateValue(results[2], days);
});

function animateValue(element, value) {
    let start = 0;
    const duration = 500; // ms
    const step = value / (duration / 10);
    
    const timer = setInterval(() => {
        start += step;
        if (start >= value) {
            element.textContent = value;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 10);
}