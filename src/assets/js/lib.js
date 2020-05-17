// lib.js

export function disabledForm(idForm, YesNo, ElementsForm){
    //  Habilita/Deshabilita (YesNo = boolean), todos los elementos del form () o una lista especifica (ElementsForm)
    // console.log('disabledForm('+idForm+')');
    // console.log('boolean: ', YesNo);
    if( !idForm || !YesNo ){
        console.log('disabledForm(idForm - String, YesNo - Boolean)');
        return null;
    }
    const objForm = document.getElementById(idForm).elements;
	if( !objForm ){ console.log('Form (Form ='+idForm+'), not found.'); return null; };
	console.log(objForm);
    // if( objForm.nodeName !== 'FORM' ){ console.log('Form = '+idForm+', no es un FORM'); return null;}
    // console.dir(objForm);
    if( !ElementsForm ){        // Todos los elementos del form
        for(let e=0; e < objForm.length ; e++){
            // console.log(objForm[e]);
            objForm[e].disabled = YesNo; 
        }
    }else{  // Algunos elementos "array" del form 
        // console.log(typeof(ElementsForm));  // Array
        for(let e=0; e < ElementsForm.length ; e++){
            objForm[ElementsForm[e]].disabled = YesNo; 
        }        
    }

}

export function idGenerator(Id, lenghtId){
	let sintaxis ='idGenerator(Id string [, lenghtId integer])'
	let len = 0;
	let value = 0;
	let newId = '';
	console.log('---------');
	console.log('Id = ', Id, 'string:', is_string(Id) );

	console.log('lenghtId', lenghtId, 'number:', typeof(lenghtId));

	if( !is_string(Id) || !Id ) { console.log(sintaxis+' => Id'); return ''; }

	if( lenghtId && !is_number(lenghtId) ) { console.log(sintaxis+' => lenghtId'); return ''; }
	len = Id.trim().length;
	console.log('1. len = ', len);
	len = ( len == 0 && !lenghtId )? 1: lenghtId;
	console.log('2. len = ', len);
	value = parseInt(Id, 10)+1;
	newId = '0'.repeat(len)+value.toString()
	newId = newId.substr(len*-1);

	return newId;
}

function elementFocus(idForm){
    console.log('elementFocus('+idForm+')');
    const objForm = document.getElementById(idForm).elements;
    if( !objForm ){ console.log('Form (id='+idForm+'), not found.'); return false; };
    if( objForm.nodeName !== 'FORM' ){ console.log('Id = '+idForm+', no es un FORM'); return false;}

    // if(document.forms.length > 0) {
        for(let i=0; i < objForm.elements.length; i++) {
          let field = objForm.elements[i];
          if(field.type != "hidden") {
            field.focus();
            break;
          }
        }
    //   }
}
function evaluaForm(idForm){
	if( !idForm) return false;
	var oForm=document.getElementById(idForm);
	if( !oForm ){ console.log('Form (id='+idForm+'), not found.'); return false; };
	if( oForm.nodeName !== 'FORM' ){ console.log('Id = '+idForm+', no es un FORM'); return false;}
	//console.log('oForm=', oForm);	
	if ( !oForm.checkValidity() ){
		//console.log('Form invalido!');
		return false;
	}
	//console.log('Form valido!');
	return true;				
}
function formatoNumero(){
	var formatNumber = {
	separador: ",",  // separador para los miles
	sepDecimal: '.', // separador para los decimales
	formatear:function (num){
		 num +='';
		 var splitStr = num.split('.');
		 var splitLeft = splitStr[0];
		 var splitRight = splitStr.length &gt; 1 ? this.sepDecimal + splitStr[1] : '';
		 var regx = /(\d+)(\d{3})/;
		 while (regx.test(splitLeft)) {
		 	splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
		 }
		 return this.simbol + splitLeft +splitRight;
	},
	format:function(num, simbol){
		 this.simbol = simbol ||'';
		 return this.formatear(num);
		}
	} 
 // Forma de utilizar:
 //formatNumber.format(123456779.18, "$") 	// retorna "$123.456.779,18"
 //formatNumber.format(123456779.18) 		// retorna "123.456.779,18"
 //formatNumber.format(123456779) 			// retorna "$123.456.779"
}
function fadeIn(ele) {
	//console.log('ele = ', ele);	
	ele.style.opacity = 0;
	var tick = function() {
		ele.style.opacity = +ele.style.opacity + 0.04;
		if (+ele.style.opacity < 1) {
		  (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
		}
	};
	tick();
}
function paisIdioma(navegador){
	var idioma=navegador.substr(0,2);
	var pais=navegador.substr(3,2);
	//console.log('==> '+pais+'/'+idioma);
	switch (idioma){
		case "es":
			break;
		case "en":
			break;
		default:		
	}
	return [pais,idioma];
}
function fechaHoy(dia){
	// Devuelve la fecha en formato: Mes.dia horas:minutos am/pm
	// console.log('dia = ', dia);
	var mes='';
	var dias=dia.getDate();
	var horas=dia.getHours()-12;
	var minutos=dia.getMinutes();
	var ampm='';

	switch (dia.getMonth()){
		case 0:
			mes='Jan';
			break;
		case 1:
			mes='Feb';
			break;
		case 2:
			mes='Mar';
			break;
		case 3:
			mes='Apr';
			break;
		case 4:
			mes='May';
			break;
		case 5:
			mes='Jun';
			break;
		case 6:
			mes='Jul';
			break;
		case 7:
			ms='Aug';
			break;
		case 8:
			mes='Sep';
			break;
		case 9:
			mes='Oct';
			break;
		case 10:
			mes='Nov';
			break;
		case 11:
			mes='Dec';
			break;										
	}
 
	dias=(dias<10)?'0'+dias:dias+'';
	horas=(horas<10)?'0'+horas:horas+'';
	minutos=(minutos<10)?'0'+minutos:minutos+'';
	ampm=(dia.getHours()<12)?'am':'pm';
	return mes+'.'+dias+', '+horas+':'+minutos+ampm;
}	// End fecha()
function hora(dia){
	var horas=dia.getHours();
	if(horas>12) horas=horas-12;
	var minutos=dia.getMinutes();
	var ampm='';

	horas=(horas<10)?'0'+horas:horas+'';
	minutos=(minutos<10)?'0'+minutos:minutos+'';
	ampm=(dia.getHours()<12)?'am':'pm';	
	switch (dia.getDay()){
		case 0:
			dia='Sun';
			break;
		case 1:
			dia='Mon';
			break;
		case 2:
			dia='Tue';
			break;
		case 3:
			dia='Wed';
			break;
		case 4:
			dia='Thu';
			break;
		case 5:
			dia='Fri';
			break;
		case 6:
			dia='Sat';
			break;										
	}	
	return dia+'. '+horas+':'+minutos+ampm
}	// End hora()
function fadeOut(ele) {
	//console.log('ele = ', ele);	
	ele.style.opacity = 1;
	var tick = function() {
		ele.style.opacity = -ele.style.opacity + 0.04;
		if (+ele.style.opacity < 1) {
		  (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
		}
	};
	tick();
}
function redondeo(numero, decimales){
	var flotante = parseFloat(numero);
	var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
	return resultado;
}

// -------------------------------------------
function is_string(s) { return typeof(s) == 'string'; }			// true-false
function is_array(a) { return a && a.constructor == Array; }	//
function is_number(n) { return typeof(n) == 'number'; }			// true-false
function is_function(f) { return typeof(f) == 'function'; }		// 
function is_object(o) { return typeof(o) == 'object'; }
function now() { return ( new Date()).getTime(); }				// devuelve fecha completa actual segun formato juliano