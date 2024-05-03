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
    const formularioPrincipal = document.querySelector(`#paso1`);
    const formularioActual = document.querySelector(`#paso${pasoActual}`);
    const formWrapper = document.getElementById("form-wrapper");
    const btnEntrar = document.getElementById("btn-entrar");
    const btnWrapper = document.querySelector(".btn-entrar");

    if (e.target.id === 'continuar') {
      switch (pasoActual) {
          case 1:
              formWrapper.style.overflowY = "hidden";
              formularioPrincipal.style.marginLeft = "-25%";
              formularioActual.classList.remove("mostrar");
              document.querySelector(`#paso${pasoActual + 1}`).classList.toggle("mostrar");
              break;
          case 2:
              formWrapper.style.overflowY = "hidden";
              formularioPrincipal.style.marginLeft = "-50%";
              formularioActual.classList.remove("mostrar");
              document.querySelector(`#paso${pasoActual + 1}`).classList.toggle("mostrar");
              break;
          case 3:
              formWrapper.style.overflowY = "scroll";
              formularioPrincipal.style.marginLeft = "-75%";
              formularioActual.classList.remove("mostrar");
              document.querySelector(`#paso${pasoActual + 1}`).classList.toggle("mostrar");
              break;
          default:
              break;
      }
      ++pasoActual;
  } else {
      switch (pasoActual) {
          case 2:
              formWrapper.style.overflowY = "hidden";
              formularioPrincipal.style.marginLeft = "0%";
              formularioActual.classList.remove("mostrar");
              document.querySelector(`#paso${pasoActual - 1}`).classList.toggle("mostrar");
              break;
          case 3:
              formWrapper.style.overflowY = "hidden";
              formularioPrincipal.style.marginLeft = "-25%";
              formularioActual.classList.remove("mostrar");
              document.querySelector(`#paso${pasoActual - 1}`).classList.toggle("mostrar");
              break;
          case 4:
              formWrapper.style.overflowY = "hidden";
              formularioPrincipal.style.marginLeft = "-50%";
              formularioActual.classList.remove("mostrar");
              document.querySelector(`#paso${pasoActual - 1}`).classList.toggle("mostrar");
              break;
          default:
              break;
      }
      --pasoActual;
  }
  
  pasos.forEach((paso, index) => {
    paso.classList[`${index < pasoActual ? "add" : "remove"}`]("activo");
  })

  barraProgreso.style.width = `${((pasoActual - 1) / (pasos.length - 1)) * 100}%`;

  pasoActual === pasos.length-1 ? botones[1].innerText = "Finalizar" : botones[1].innerText = "Continuar";
  if(pasoActual === pasos.length){
    botones.forEach((button) => (button.style.display = "none"));
    btnEntrar.style.display = "block";
    btnEntrar.style.backgroundColor = "#039200";
    btnWrapper.style.justifyContent = "center"

  }else if(pasoActual === 1){
    botones[0].disabled = true;
  }else{
    botones.forEach((button) => (button.disabled = false));
  }
}

botones.forEach((boton) => {
    boton.addEventListener('click', continuarPaso);
});

function entrar(){
  location.href = "/web/Inicio.html";
}



