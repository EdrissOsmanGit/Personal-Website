
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('to');
        } else {
            entry.target.classList.remove('to');
        }
    });
});

const hiddenElements = document.querySelectorAll('.from');
hiddenElements.forEach((el) => observer.observe(el))