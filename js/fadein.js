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

window.addEventListener('scroll', () => { /*window = das sichtbare Browserfenster. addEventListener: füge etwas hinzu, 
    das auf ein Ereignis hört. Alles, was zwischen {} steht, passiert beim Scrollen.*/
  const scrollTop = window.scrollY; /*.scrollY ist eine Eigenschaft von window. Sie sagt dir: wie viele
   Pixel die Seite von oben nach unten gescrollt wurde.*/
  const docHeight = document.body.scrollHeight - window.innerHeight; /*Um zu wissen, wie weit man maximal scrollen kann. 
  document.body.scrollHeight gibt die gesamte Höhe des Dokuments zurück.
   window.innerHeight ist die Höhe des sichtbaren Bereichs im Browser*/
  const scrollPercent = scrollTop / docHeight; /*scrollPercent ist ein Wert zwischen 0 und 1. Bsp. scrollTop = 1100px 
  (du bist 1100 Pixel nach unten gescrollt), docHeight = 2200px (maximal scrollbare Höhe), scrollPercent = 1100 / 2200 = 0,5. 
  Das bedeutet: 50 % der Seite wurden gescrollt*/

  // Breite des Balkens
  const maxWidth = window.innerWidth;
  const newWidth = scrollPercent * maxWidth; /*newWidth ist die neue Breite des Balkens in Pixel.
   Bsp. scrollPercent = 0,5 (50 % der Seite wurden gescrollt), maxWidth = 1200px (Breite des sichtbaren Bereichs im Browser), 
   newWidth = 0,5 * 1200px = 600px. Der Balken soll also 600 Pixel breit sein*/

  // Balken aktualisieren
  const bar = document.getElementById('scrollBar');
  bar.style.width = newWidth + 'px'; /*bar.style.width → greift auf die CSS-Eigenschaft width des Balkens zu*/

  // Affe bewegt sich parallel zum Balken, von derselben Startposition
  const monkey = document.getElementById('monkey');
  monkey.style.left = newWidth - monkey.offsetWidth + 'px'; /*monkey.offsetWidth → Breite des Affen-Bildes. 
  Setze den Affen so, dass er genau am Ende des Balkens hängt, nicht davor.*/
});
function setCursor(emoji) {
  // Neues kleines Canvas erstellen
  const canvas = document.createElement('canvas');
  canvas.width = 64;  // Breite
  canvas.height = 64; // Höhe

  // 2D-Zeichenwerkzeug holen
  const ctx = canvas.getContext('2d');

  // Emoji in die Mitte zeichnen
  ctx.font = '24px serif';       // Grösse des Emojis
  ctx.textAlign = 'center';      // Horizontal zentrieren
  ctx.textBaseline = 'middle';   // Vertikal zentrieren
  ctx.fillText(emoji, 16, 16);   // Zeichnen bei (16,16) = Mitte

  // Canvas in ein Bild umwandeln
  const image = canvas.toDataURL();

  // Cursor auf der Seite ändern
  document.body.style.cursor = `url(${image}) 16 16, auto`;
}
function updateCountdown() {
  // heutiges Datum
  const today = new Date();

  // Halloween-Datum für dieses Jahr
  const year = today.getFullYear();
  const halloween = new Date(`October 31, ${year} 00:00:00`);

  // Differenz in Millisekunden
  const diff = halloween - today;

  // in Tage umrechnen
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  // Zahl im HTML setzen
  document.getElementById("days-left").textContent = daysLeft;
}

// direkt beim Laden starten
updateCountdown();

// einmal pro Stunde aktualisieren
setInterval(updateCountdown, 1000 * 60 * 60);

