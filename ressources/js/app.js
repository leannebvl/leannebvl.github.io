
document.addEventListener('scroll', () => {
const fleche = document.getElementById('fleche');
const ecran = document.getElementById('select');
const ecranPosition = ecran.getBoundingClientRect().top;

// Vérifie si le haut de la div ecran3 est visible
if (ecranPosition <= window.innerHeight) {
    fleche.classList.add('hidden'); // Cache la flèche
} else {
    fleche.classList.remove('hidden'); // Affiche la flèche
}
});

