// Add this JavaScript code after your CSS code

// Function to handle the intersection of the content element
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-scroll');
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Trigger the animation when at least 50% of the element is visible
  });
  
  // Select the content element and observe it
  const contentElement = document.querySelector('.container .content');
  observer.observe(contentElement);


//   music
const backgroundMusic = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');

function toggleMute() {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteButton.classList.remove('muted');
        muteIcon.classList.remove('fa-volume-off');
        muteIcon.classList.add('fa-volume-up');
    } else {
        backgroundMusic.muted = true;
        muteButton.classList.add('muted');
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-off');
    }
}