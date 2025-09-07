// Intersection Observer API initialisieren
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
});

// Elemente auswählen und den Observer hinzufügen
const fadeElements = document.querySelectorAll('.fade-in-up');
fadeElements.forEach(element => {
    observer.observe(element);
});
window.addEventListener('scroll', function () {
    var object = document.getElementById('container');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 100) {
        object.style.opacity = '0';
    } else {
        object.style.opacity = '1';
    }
});

// Uhrzeit-Funktion
function updateClock() {
  const now = new Date();
  let h = String(now.getHours()).padStart(2, '0');
  let m = String(now.getMinutes()).padStart(2, '0');
  let s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("uhr").textContent = h + ":" + m + ":" + s;
}

// Sofort starten + jede Sekunde updaten
updateClock();
setInterval(updateClock, 1000);
