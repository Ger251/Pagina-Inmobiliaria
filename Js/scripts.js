const navToggle = document.querySelector(".toogle");
const menu = document.querySelector(".nav-menu");
navToggle.addEventListener("click",()=>{
menu.classList.toggle("nav-menu_active")
} 
);


var lista = document.querySelectorAll(".box-busqueda-li");
var boxBusqueda = document.getElementById("input-busqueda")

var inputBuscar = document.getElementById ("input-busqueda");

document.addEventListener("keyup", e =>{
     var inputTexto = e.target.value.toUpperCase();
     

    //console.log (inputTexto);
    for (let i = 0; i < lista.length; i++) {
        //  console.log(lista[i].textContent);
       var a = lista[i].innerText;
                   
       if ( a.includes( inputTexto)) {
        //boxBusqueda.style.display = "block";
          
          lista[i].classList.remove("box-busqueda-li");
          lista[i].classList.add("filtro");
          if(inputTexto =="" ){ 
              lista[i].classList.remove("filtro");
             lista[i].classList.add("box-busqueda-li");

          }
          
    }
   


       else {
        
        lista[i].classList.remove("filtro");
        lista[i].classList.add("box-busqueda-li");
         
            }
     
    }});




