const imagenes = document.querySelectorAll('.producto__imagen');
const productos = document.querySelector('.productos');

window.addEventListener('scroll', () => {
    const scroll = this.scrollY;

    imagenes.forEach( imagen => {
        if( scroll > productos.offsetTop) {
             imagen.style.backgroundPositionY = `${(scroll - productos.offsetTop) / -20}px`
        }
    })
});