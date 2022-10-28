//Define valor del ticket
const valorTickets = 200;

//Define porcentaje de descuento según la categoría elegida
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;
let descuentoSinCategoria = 0;

//Recopilar datos en variables
let nombre =document.getElementById("nombre");
let apellido =document.getElementById("apellido");
let correo =document.getElementById("correo");
let cantidad =document.getElementById("cantidad");
let categoria =document.getElementById("categoria");

//Botón Resumen
resumen.addEventListener("click",total);

//Botón Borrar
borrar.addEventListener("click",borrarTotal);

//Función Borrar
function borrarTotal ()
{
    quitarClaseError();
    totalt.innerHTML="Total a pagar: $ ";
}

//Función Clase Error
function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}

//Función Resumen
function total ()
{
   quitarClaseError ();
   //Verifico Nombre
   if(nombre.value==="")
   {
    alert("Completar Nombre")
    nombre.classList.add ("is-invalid");
    nombre.focus();
    return ;
   }
    //Verifico Apellido
    if(apellido.value==="")
    {
     alert("Completar Apellido.")
     apellido.classList.add ("is-invalid");
     apellido.focus();
     return ;
    }
     //Verifico Correo
   if(correo.value==="")
   {
    alert("Completar Correo.")
    correo.classList.add ("is-invalid");
    correo.focus();
    return ;
   }
   //Determinar validez del correo
   const correoValido = mail => 
   {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
   }
   if(!correoValido(correo.value))
   {
      alert("Completar con una cuenta de correo valida.");
      correo.classList.add("is-invalid");
      correo.focus();
      return ;
   }
   //Verificar Cantidad de Tickets
   if( (cantidad.value<=0) || (isNaN(cantidad.value)))
    {
        alert("CComplete una cantidad.");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return ;
    }
    //Verificar Categoría
    if(categoria.value==="")
    {
        alert("Elija la categoria correspondiente.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return ;
    }
    //Valor * entradas y descuentos
    let totalValorTickets =(cantidad.value)*valorTickets;

    if(categoria.value==0)
    {
        totalValorTickets=valorTickets;
    }
    if(categoria.value==1)
    {
        totalValorTickets=valorTickets-(descuentoEstudiante/100*valorTickets);
    }
    if(categoria.value==2)
    {
        totalValorTickets=valorTickets-(descuentoTrainee/100*valorTickets);
    }
    if(categoria.value==3)
    {
        totalValorTickets=valorTickets-(descuentoJunior/100*valorTickets);
    }
    //Total
    totalt.innerHTML=("Total a pagar: $ "+totalValorTickets);
}

