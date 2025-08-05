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