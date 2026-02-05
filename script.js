// Mobiilivalikko
function toggleMenu() {
    document.getElementById('navContainer').classList.toggle('active');
}

// Scroll Reveal -animaatio (elementit ilmestyvät kun rullataan alas)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        // Kun elementti on 100px ikkunan alareunan yläpuolella, näytä se
        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Ajetaan kerran heti latauksen yhteydessä

// Before/After Slider (Ennen/Jälkeen liukuri)
const sliderInput = document.getElementById('baSliderInput');
const sliderContainer = document.getElementById('baSliderContainer');

if(sliderInput && sliderContainer) {
    sliderInput.addEventListener('input', function() {
        // Muutetaan CSS-muuttujaa sliderin arvon mukaan
        sliderContainer.style.setProperty('--slider-pos', this.value + '%');
    });
}

// Lomakkeen lähetys (Demo)
function submitMockForm(e) {
    e.preventDefault();
    alert("Kiitos! Viestisi on lähetetty (tämä on demo). Muista asentaa Formspree tai vastaava backend.");
}