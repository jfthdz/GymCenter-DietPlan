async function registrarAlimento(event){
    event.preventDefault();
    const formData = new FormData(document.querySelector("#form-registrar-alimento"));

    const alimentoObjeto = {};
    formData.forEach((value, key)=>{
        alimentoObjeto[key]=value;
    });

    try {
        const response = await fetch("/alimentos/addAlimento", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(alimentoObjeto)
        });

        if(response.ok){
            console.log("Alimento registrado con éxito");
            // Actualizar la interfaz de usuario según sea necesario
        } else {
            console.log("Error al registrar el alimento");
        }
    } catch (error) {
        console.log(error);
    }
}

function subirImagen(){
    let fotoAlimento = document.getElementById("img-alimento");
    let inputFotoAlimento = document.getElementById("input-foto-alimento");
    
    inputFotoAlimento.onchange = function(){
        fotoAlimento.src = URL.createObjectURL(inputFotoAlimento.files[0]);
    }
    console.log(fotoAlimento);
}
