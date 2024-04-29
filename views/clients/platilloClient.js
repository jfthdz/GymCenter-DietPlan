async function registrarPlatillo(event){
    event.preventDefault();
    const formData = new FormData(document.querySelector("#form-registrar-platillo"));

    const platilloObjeto = {};
    formData.forEach((value, key)=>{
        platilloObjeto[key]=value;
    });

    try {
        const response = await fetch("/platillos/addPlatillo", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(platilloObjeto)
        });

        if(response.ok){
            console.log("Platillo registrado con éxito");
        } else {
            console.log("Error al registrar el platillo");
        }
    } catch (error) {
        console.log(error);
    }
}

function subirImagen(){
    let fotoPlatillo = document.getElementById("img-platillo");
    let inputFotoPlatillo = document.getElementById("input-foto-platillo");
    
    inputFotoPlatillo.onchange = function(){
        fotoPlatillo.src = URL.createObjectURL(inputFotoPlatillo.files[0]);
    }
    console.log(fotoPlatillo);
}

function validarFormRegistroPlatillo(){
    event.preventDefault();
}

function mostrarPopupBusqueda() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.addEventListener('click', ocultarPopupBusqueda);
    document.body.appendChild(overlay);

    document.getElementById('search-section').classList.add('show');
}

function ocultarPopupBusqueda() {
    document.getElementById('search-section').classList.remove('show');

    var overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.parentNode.removeChild(overlay);
    }
}



