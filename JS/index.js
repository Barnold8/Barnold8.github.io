const hoverText = document.querySelector('.hover-text');
const hoverCard = document.getElementById('hoverCard');

hoverText.addEventListener('mousemove', (e) => {
const content = hoverText.getAttribute('data-info');
hoverCard.textContent = content;
hoverCard.style.left = `${e.clientX + 10}px`; // add some offset
hoverCard.style.top = `${e.clientY + 10}px`;
hoverCard.style.display = 'block';
});

hoverText.addEventListener('mouseleave', () => {
hoverCard.style.display = 'none';
});
