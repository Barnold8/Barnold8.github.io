const hoverTexts = document.querySelectorAll('.hover-text');
const hoverCard = document.getElementById('hoverCard');

hoverTexts.forEach((hoverText) => {
  hoverText.addEventListener('mousemove', (e) => {
    const content = hoverText.getAttribute('data-info');
    const formatted = content.replace(/(\r\n|\n|\r|&#10;|&#13;)/g, '<br>');
    hoverCard.innerHTML = formatted; 
    hoverCard.style.left = `${e.clientX + 10}px`; 
    hoverCard.style.top = `${e.clientY + 10}px`;
    hoverCard.style.display = 'block';
  });

  hoverText.addEventListener('mouseleave', () => {
    hoverCard.style.display = 'none';
  });
});


// cos im lazy im adding class to all slide elements here after dom load


slides = document.getElementsByClassName("slide")
// two for loops but its HIGHLY unlikely ill be adding sub images in here, 
// its more a precautionary measure that theres some img before the actual one thats non existant and it messes it all up
for (let elem of slides) {
  images = elem.getElementsByTagName("img")
  for (let img of images) {
     img.classList.add('slideImg')
  }
}

