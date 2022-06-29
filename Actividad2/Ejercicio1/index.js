let recarga = document.getElementById('recargar')
let resul =document.getElementById('resultado')
let i=0
const papeleria = 20000
const carnet = 8000
resultado=0
pago=0
pagomaterias=0
calculodescuento=0

document.getElementById("divtabla").hidden = true;  

function capturar(){
    //console.log("capturado")
    //Constructor de materias
    function Materia(materia,valor){
        this.nombre=materia
        this.valor=valor
    }
     materiaCapturar = document.getElementById('materia').value
    //comprueba que no se envie vacio o con numero
    if(materiaCapturar.length === 0){
        alert("Debe ingresar una materia")
    }else{
        //comprueba que se envie un valor numerico al costo
        let valorCapturar = document.getElementById('valormateria').value
        costomate = parseInt(valorCapturar)
        //Incrementa en 1 el valor del codigo de la materia para validar        

        if((costomate === null) || (costomate === ' ') || (costomate <= 0) || (isNaN(costomate))){
            alert("Debe ingresar un costo valido")
        }else{
            nuevamateria = new Materia(materiaCapturar,costomate) //sin colocar let se vuelve en una variable global
            //console.log(nuevamateria)
                //Coloca limite a la cantidad de materias a ingresar
                if(i==7){
                    alert("No puede inscribir mas materias")
                }else{
                    agregar()
                    //Guarda el valor del pago
                    pago = costomate + pago 
                    //Resetea el formulario para agregar mas datos
                    document.getElementById('formulario').reset()
                     //Oculta el campo nombre
                    i++
                }
            


        }
    }
    //console.log(valorCapturar)
}
//funcion para sacar el descuento
function descuento(){
        pagomaterias= pago + papeleria + carnet
        calculodescuento= pagomaterias*0.2
        descuentototal= pagomaterias - calculodescuento
        resultado = descuentototal.toFixed(2)
        resul.innerHTML = `El monto a pagar con el descuento del 20% es ${resultado}$ por la cantidad de ${i} materias inscritas`
        document.getElementById("divresultado").hidden = false;
        document.getElementById('formulario').reset()
}

//Funcion para validar solo letras
function soloLetras(e) {
    let key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (let i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

datosMaterias= []
function agregar(){

                datosMaterias.push(nuevamateria)
                document.getElementById("tabla").innerHTML+= '<tbody><td>'+nuevamateria.nombre+'</td><td>'+nuevamateria.valor+'</tbody>'
                document.getElementById("nom").hidden = true;
                document.getElementById("divresultado").hidden = true;
                document.getElementById("divtabla").hidden = false;        
}




//Recarga la pagina
recarga.addEventListener('click', function(){
    location.reload();
})