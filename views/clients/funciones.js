function volverPaginaAnterior(){
    window.history.back();
}

function handleWindowSizeChange() {
    var screenWidth = window.innerWidth;
  
    if (screenWidth <= 604) {
        document.getElementById('img-404').src = '/images/gymCenter404mobile.png';
    } else {
        if (document.getElementById('img-404').src != '/images/gymCenter404.png') {
            document.getElementById('img-404').src = '/images/gymCenter404.png';
        }
    }
  }
  
  window.addEventListener('resize', handleWindowSizeChange);


let pasoActual = 1;
const botones = document.querySelectorAll('button');
const pasos = document.querySelectorAll('.paso');
const barraProgreso = document.querySelector('.indicador');

const continuarPaso = (e) =>  {
    event.preventDefault();
    const formularioActual = document.querySelector(`#paso1`);

    if(e.target.id === 'continuar'){
      switch(pasoActual){
        case 1:
          formularioActual.style.marginLeft = "-25%";
          break;
        case 2:
          formularioActual.style.marginLeft = "-50%";
          break;
        case 3:
          formularioActual.style.marginLeft = "-75%";
          break;
        default:
          break;
      }
      console.log(formularioActual.style.marginLeft);
      ++pasoActual;
    }else{
      switch(pasoActual){
        case 2:
          formularioActual.style.marginLeft = "0%";
          break;
        case 3:
          formularioActual.style.marginLeft = "-25%";
          break;
        case 4:
          formularioActual.style.marginLeft = "-50%";
          break;
        default:
          break;
      }
      console.log(formularioActual.style.marginRight);
      --pasoActual;
    }
  
  pasos.forEach((paso, index) => {
    paso.classList[`${index < pasoActual ? "add" : "remove"}`]("activo");
  })

  barraProgreso.style.width = `${((pasoActual - 1) / (pasos.length - 1)) * 100}%`;

  if(pasoActual === pasos.length){
    botones[1].disabled = true;
  }else if(pasoActual === 1){
    botones[0].disabled = true;
  }else{
    botones.forEach((button) => (button.disabled = false));
  }
}

botones.forEach((boton) => {
    boton.addEventListener('click', continuarPaso);
});

