document.body.insertAdjacentHTML('afterbegin', '<div id="loading" aria-live="polite" role="status">Laddar...</div>');

window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});