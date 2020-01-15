(function(){
 'use strict';

 document.addEventListener('DOMContentLoaded', function(){
    
    // Campos Datos usuario
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('meail');

    // Campos pases
    let pase_dia = document.getElementById('pase_dia');
    let pase_dosdias = document.getElementById('pase_dosdias');
    let pase_completo = document.getElementById('pase_completo');
    
    //Botones y divs
    
    let calcular = document.getElementById('calcular');
    let errorDiv = document.getElementById('error');
    let botonRegistro = document.getElementById('btnRegistro');
    let lista_productos = document.getElementById('lista-productos');
    let suma_total = document.getElementById('suma-total');

    //Extras
    let regalo = document.getElementById('regalo');
    let etiquetas = document.getElementById('etiquetas');
    let camisas = document.getElementById('camisa_evento');
    
    calcular.addEventListener('click', calcularMontos);

    pase_dia.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);

    function calcularMontos(event){
        event.preventDefault();        
        if(regalo.value === ''){
            alert('Debes elegir un regalo')
            regalo.focus();
        } else {
            let boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value) || 0,
                boletoCompleto = parseInt(pase_completo.value) || 0,
                cantCamisas = parseInt(camisas.value) || 0,
                cantEtiquetas = parseInt(etiquetas.value) || 0;                
                
            var listadoProductos = [];
            if (boletosDia >= 1){
                listadoProductos.push(boletosDia + ' Pases por dia');
            }
            if (boletos2Dias >= 1){
                listadoProductos.push(boletos2Dias + ' Pases por 2 dias');
            }
            if (boletoCompleto >= 1){                
                listadoProductos.push(boletoCompleto + ' Pases Completos');
            }
            if (cantCamisas >= 1){                
                listadoProductos.push(cantCamisas + ' Camisas');
            }
            if (cantEtiquetas >= 1){                
                listadoProductos.push(cantEtiquetas + ' Etiquetas');
            }
            
            lista_productos.innerHTML = '';
            for(var i=0 ; i < listadoProductos.length; i++){
                lista_productos.innerHTML += listadoProductos[i] + '<br/>';
            }
                     
            suma_total.innerHTML = '';
            var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas  * 2);
            console.log(totalPagar);
            suma_total.innerHTML = '$ ' + totalPagar.toFixed(2); // toFixed sirve para la cantidad de decimales 

            if(totalPagar != 0){
                lista_productos.style.display = 'block';                 
            }else{
                lista_productos.style.display = 'none';              
            }         
        }
    }
    function mostrarDias(event){
        event.preventDefault(); 
        let  boletosDia = parseInt(pase_dia.value, 10) || 0,
             boletos2Dias = parseInt(pase_dosdias.value) || 0,
             boletoCompleto = parseInt(pase_completo.value) || 0;
        
             var diasElegidos = [];

             if(boletosDia > 0){
                 diasElegidos.push('viernes');
             }
             if(boletos2Dias>0){
                 diasElegidos.push('viernes','sabado')
             }
             if(boletoCompleto>0){
                 diasElegidos.push('viernes','sabado','domingo');
             }
             for(var i=0; i < diasElegidos.length; i++){
                 document.getElementById(diasElegidos[i]).style.display = 'block';
             }
    }



    
 }); // DOM CONTENT LOADED
})();