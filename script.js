document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById("consortium-track");
    function slideRight() {
        const slide = track.children[0];
        const slideWidth = slide.offsetWidth;
        const gap = parseInt(window.getComputedStyle(track).gap) || 0;
        const moveDistance = slideWidth + gap;

        track.style.transition = "none";
        track.prepend(track.lastElementChild);
        track.style.transform = `translateX(-${moveDistance}px)`;
            
        track.offsetHeight; 
            
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = "translateX(0)";
    }

    setInterval(slideRight, 1500); 
});