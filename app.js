let imagenes = document.querySelectorAll('.imagen');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modalImg');
let boton = document.querySelector('#modalBtn');

for (let i = 0;i < imagenes.length; i++){
    imagenes[i].addEventListener('click', function(e){
        modal.classList.toggle('modalOpen')
        let src = e.target.src;
        img.setAttribute('src',src);
    })

}

boton.addEventListener('click',function(){
    modal.classList.toggle('modalOpen')
})
