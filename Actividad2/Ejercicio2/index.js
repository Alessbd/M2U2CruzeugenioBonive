let valorA = document.getElementById('A')
let valorB = document.getElementById('B')
let valorC = document.getElementById('C')
let valorD = document.getElementById('D')
const boton = document.getElementById('enviar')
let resul =document.getElementById('resultado')
let recarga = document.getElementById('recargar')
let mayor = 0
let menor = 0



boton.addEventListener('click', function(){
    event.preventDefault();
    
    let numeroA = parseInt(valorA.value) // Para convertir si ingresan un string a int
    let numeroB = parseInt(valorB.value)
    let numeroC = parseInt(valorC.value)
    let numeroD = parseInt(valorD.value)

    //Evalua cual es el dato mayor
    if((numeroA > numeroB && numeroA > numeroC && numeroA > numeroD)){
        mayor= numeroA           
    }else{
        if((numeroB > numeroA && numeroB > numeroC && numeroB > numeroD)){
            mayor= numeroB
        }else{
            if((numeroC > numeroA && numeroC > numeroB && numeroC > numeroD)){
                mayor= numeroC
            }else{
                if((numeroD > numeroA && numeroD > numeroB && numeroD > numeroC)){
                    mayor= numeroD
                }
            }
        }
    }

        //Evalua cual es el dato menor
        if((numeroA < numeroB && numeroA < numeroC && numeroA < numeroD)){
            menor= numeroA           
        }else{
            if((numeroB < numeroA && numeroB < numeroC && numeroB < numeroD)){
                menor= numeroB
            }else{
                if((numeroC < numeroA && numeroC < numeroB && numeroC < numeroD)){
                    menor= numeroC
                }else{
                    if((numeroD < numeroA && numeroD < numeroB && numeroD < numeroC)){
                        menor= numeroD
                    }
                }
            }
        }

    //Evalua que los campos no se envien vacios
    if((numeroA === null || numeroB === null || numeroC === null || numeroD === null) || (numeroA === ' ' || numeroB === ' ' || numeroC === ' ' || numeroD === ' ') || (isNaN(numeroA) || isNaN(numeroB) || isNaN(numeroC) || isNaN(numeroD)) ){
        alert("Debe llenar los campos con valores")
    }else{
        //Evalua que los valores no sean iguales
        if((numeroA === numeroB || numeroA === numeroC || numeroA === numeroD) || (numeroB=== numeroC || numeroB === numeroD) || (numeroC=== numeroD)){
            document.getElementById('formulario').reset()
            alert("Los datos no pueden ser iguales")
        }else{
            resul.innerHTML = `El número con mayor valor es ${mayor} y el número con el menor valor es ${menor}`
        }
    }

})

//Recarga la pagina, una vez imprimido los valores

recarga.addEventListener('click', function(){
    location.reload();
})