let btnsSwitch = document.querySelectorAll(".toggle-button");
let btnsDeletePlatillo = document.querySelectorAll(".btn-delete-platillo");
let btnEdit = document.querySelector("#btn-editar");
let btnConfirm = document.querySelector("#btn-confirm");
let vistaSemana = document.getElementById("vista-semana");
let vistaDia = document.getElementById("vista-dia");

btnsSwitch.forEach(btn => {
    btn.addEventListener("click", function() {
        btnsSwitch.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

btnEdit.addEventListener("click", function() {
    btnsDeletePlatillo.forEach(b => b.style.display = "block");
    this.style.display = "none";
    btnConfirm.style.display = "inline-flex"
});

btnConfirm.addEventListener("click", function() {
    btnsDeletePlatillo.forEach(b => b.style.display = "none");
    this.style.display = "none";
    btnEdit.style.display = "inline-flex"
});

document.getElementById("btn-semana").addEventListener("click", function() {
    vistaSemana.style.display = "grid";
    vistaDia.style.display = "none";
});

document.getElementById("btn-dia").addEventListener("click", function() {
    vistaDia.style.display = "block";
    vistaSemana.style.display = "none";
});