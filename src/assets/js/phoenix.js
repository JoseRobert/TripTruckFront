// phoenix.js

'use strict';

function ventanaModal(msj){
	console.log('crearModalTexto(){'+msj+'}');
	// ------ Parametros -------
	//var text=par.text;
	var fondoContenedor='';
	var colorFondo='white';

	var fondo=document.createElement('div');		// fondo
	var modal=document.createElement('div');		// modal
	var cabecera=document.createElement('div');	 	// cabecera-modal
	var titulo=document.createElement('div');		// titulo-modal
	var cerrar=document.createElement('div');		// cerrar-contenedor
	var txtTit=document.createTextNode(' ');		// titulo-modal
	var x=document.createTextNode('X');				// cerrar
	
	var texto=document.createTextNode(msj);			// texto-modal
	var p=document.createElement('p');				// parrafo

	// Estilos al contenedor
	fondo.className="vmodal-contenedor1";
	fondo.style.position='fixed';
	fondo.style.width='100vw';
	fondo.style.height='100vh';
	fondo.style.top="0";
	fondo.style.left="0";
	fondo.style.backgroundColor="rgba(0,0,0,0.35)";  // 0.4	

	fondo.style.display='flex';		// centrado horizontal-vertical
	fondo.style.justifyContent='center';
	fondo.style.alignItems='center';
	// fondo.style.visibility='hidden';

	// Estilos al modal
	modal.className="vmodal-modal1";
	// modal.style.display='inline-block';
	modal.style.boxSizing='border-box';

	modal.style.backgroundColor=colorFondo;
	// modal.style.border='1px solid dimgray';
	modal.style.borderRadius='0.20rem';
	modal.style.padding='0.4rem';
	modal.style.minWidth='35%';
	modal.style.minHeight='15%';
	// modal.style.boxShadow='0.125rem 0.125rem 0.25rem gainsboro';

	// Estilos Cabecera
	cabecera.className="vmodal-cabecera";
	cabecera.style.display='block';
	cabecera.style.paddind='0.30rem';	

	// Titulo de Cabecera
	titulo.className="titulo1";
	titulo.appendChild(txtTit);
	titulo.style.display='inline-block';
	titulo.style.boxSizing='border-box';
	titulo.style.padding='0.30rem';
	titulo.style.width='91%';
	titulo.style.disabled='true';

	// Estilos-Avento al cerrar
	cerrar.appendChild(x);
	cerrar.className="vmodal-cerrar1";
	cerrar.style.display='inline-block';
	cerrar.style.boxSizing='border-box';
	cerrar.style.width='8%';
	cerrar.style.textAlign='center';
	cerrar.style.lineHeight='1.3rem';
	cerrar.style.width='1.3rem';
	cerrar.style.height='1.3rem';

	cerrar.addEventListener('mouseover',function(e){
		cerrar.style.backgroundColor='darkgray';
		cerrar.style.color=colorFondo;
		cerrar.style.cursor='pointer';
		cerrar.style.borderRadius='50%';
	});
	cerrar.addEventListener('mouseout',function(e){
		cerrar.style.backgroundColor=colorFondo;
		cerrar.style.color='';
		cerrar.style.cursor='';
		cerrar.style.borderRadius='';
	});	
	cerrar.addEventListener('click', function(){
		document.body.removeChild(fondo);
	}, false);	
	// Estilos al parrafo
	p.className="vmodal-mensaje1";
	p.style.padding='0.30rem';	
	p.style.textAlign='center';
	p.appendChild(texto);
	
	// Agregar elementos
	cabecera.appendChild(titulo);
	cabecera.appendChild(cerrar);

	modal.appendChild(cabecera);
	modal.appendChild(p);

	fondo.appendChild(modal);
	document.body.appendChild(fondo);
}	// End ventanaModal()

function modalYesNo(Parametros){
	console.log('modalYesNo(){'+Parametros+'}');
	//Parametros={titulo: '', pregunta: ''}
	var txtTitulo, txtPregunta;
	var colorFondo='white';
	var color='black';
	var btnFondo='silver';
	var btnColor='dimgray';

	txtTitulo=( Parametros.titulo )? Parametros.titulo.trim() : "";
	txtPregunta=( Parametros.pregunta )? Parametros.pregunta.trim() : "";

	var fondo=document.createElement('div');		// fondo-modal
	var modal=document.createElement('div');		// modal-ventana
	var titulo=document.createElement('div');	 	// titulo
	var pregunta=document.createElement('div');		// pregunta
	var respuesta=document.createElement('div');	// respuesta

	var txtTit=document.createTextNode(txtTitulo);		// titulo-modal
	var txtPre=document.createTextNode(txtPregunta);	// texto-modal
	var Yes=document.createElement('button');
	var txtYes=document.createTextNode('Yes');
	var No=document.createElement('button');
	var txtNo=document.createTextNode('No');

	// Eventos
	Yes.addEventListener('click', function(){
		Parametros.rpta='Hello';
		document.body.removeChild(fondo);
		//console.log('window.parent', window.parent.appPar);
		//window.parent.appPar.rpta=true;
		return Parametros;
	}, false);
	Yes.addEventListener('mouseover',function(e){
		Yes.style.color=colorFondo;
		Yes.style.cursor='pointer';
	});
	Yes.addEventListener('mouseout',function(e){
		Yes.style.backgroundColor=btnFondo;
		Yes.style.color='';
	});
	No.addEventListener('click', function(){
		//rpta=false;
		document.body.removeChild(fondo);
		return false;

	}, false);	
	No.addEventListener('mouseover',function(e){
		No.style.color=colorFondo;
		No.style.cursor='pointer';
	});
	No.addEventListener('mouseout',function(e){
		No.style.backgroundColor=btnFondo;
		No.style.color='';
	});	
	// Estilos al contenedor
	fondo.className="vmodal-contenedor1";
	fondo.style.position='fixed';
	fondo.style.width='100vw';
	fondo.style.height='100vh';
	fondo.style.top="0";
	fondo.style.left="0";
	fondo.style.backgroundColor="rgba(0,0,0,0.35)"; 

	fondo.style.display='flex';		// centrado horizontal-vertical
	fondo.style.justifyContent='center';
	fondo.style.alignItems='center';

	// Estilos al modal
	modal.className="vmodal-modal1";
	modal.style.boxSizing='border-box';
	modal.style.backgroundColor=colorFondo;
	modal.style.color=color;
	modal.style.borderRadius='0.20rem';
	modal.style.width='20%';

	modal.style.padding='0.4rem';
	modal.style.display='flex';	
	modal.style.flexDirection='column';
	modal.style.justifyContent='center';
	modal.style.alignItems='center';	

	// Titulo
	titulo.className="vmodal-titulo1";
	titulo.appendChild(txtTit);
	//titulo.style.backgroundColor='lightsteelblue';
	titulo.style.boxSizing='border-box';
	titulo.style.padding='0.40rem';
	titulo.style.width='95%';
	titulo.style.display='flex';
	titulo.style.justifyContent='center';		
	titulo.style.disabled='true';

	// Pregunta
	pregunta.className='vmodal-pregunta1';
	pregunta.appendChild(txtPre);
	//pregunta.style.backgroundColor='peachpuff';	
	pregunta.style.boxSizing='border-box';
	pregunta.style.padding='0.40rem';
	pregunta.style.width='95%';
	pregunta.style.display='flex';
	pregunta.style.justifyContent='center';	
	pregunta.style.disabled='true';

	// Respuesta
	respuesta.className='vmodal-respuesta1';
	//respuesta.style.backgroundColor='coral';
	respuesta.style.boxSizing='border-box';
	respuesta.style.display='flex';
	respuesta.style.alignItems='center';
	respuesta.style.padding='0.30rem';
	respuesta.style.width='95%';

	Yes.className="";
	Yes.style.backgroundColor=btnFondo;
	Yes.style.boxSizing='border-box';
	Yes.style.padding='0.30rem';
	Yes.style.width='50%';
	Yes.style.borderRadius='0.20rem';
	Yes.style.marginRight='0.09rem';
	Yes.appendChild(txtYes);

	No.className="";
	No.style.backgroundColor=btnFondo;
	No.style.boxSizing='border-box';
	No.style.padding='0.30rem';	
	No.style.width='50%';	
	No.style.borderRadius='0.20rem';
	No.style.marginLeft='0.09rem';
	No.appendChild(txtNo);

	// Agregar elementos
	titulo.appendChild(txtTit);
	respuesta.appendChild(Yes);
	respuesta.appendChild(No);

	modal.appendChild(titulo);
	modal.appendChild(pregunta);
	modal.appendChild(respuesta);
	fondo.appendChild(modal);
	document.body.appendChild(fondo);

}	// End modalYesNo()
function resetForm(idForm){
	document.getElementById(idForm).reset();
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
function muestraBtn(idBtn){
	console.log("habilitaBtn("+idBtn+")")
	var oBtn=document.getElementById(idBtn);
	if(!oBtn){ console.log("muestraBtn("+idBtn+") {id no existe.}")}
	if(oBtn.nodeName!=='BUTTON') {console.log("muestraBtn('+idBtn+'){no es un boton.}"); return false;};
	//console.log('oBtn = ', oBtn);
	var oPadre=oBtn.parentNode;

	console.log('oPadre = ', oPadre);
	var oHijos=oPadre.childNodes;
	console.log('oHijos = ', oHijos);
	for(var i=0; i<oHijos.length; i++){
		//console.log('->', oHijos[i]);
		//console.log('oHijos[i].nodeName = ', oHijos[i].nodeName);
		if(oHijos[i].nodeName=='BUTTON') oHijos[i].style.display='none';	
	}
	oBtn.style.display='inline-block';
}
function muestraBtns(idPadre, aIdBtns){
	console.log("habilitaBtns("+idPadre+', '+aIdBtns+")");
	var oPadre=document.getElementById(idPadre);
	if(!oPadre){ console.log("muestraBtns("+idPadre+") {id no existe.}"); return false;};
	if(aIdBtns || typeof(aIdBtns)!=='Array' ) { };
	var oHijos=oPadre.childNodes;
	for(var i=0; i<oHijos.length; i++){
		if(oHijos[i].nodeName=='BUTTON') oHijos[i].style.display='none';	
	}
	for(var i=0, ele; i<aIdBtns.length; i++){
		ele=document.getElementById(aIdBtns[i]);
		if(ele.nodeName=='BUTTON') ele.style.display='inline-block';	
	}
}
function habilitaInput(idForm, valor, aInverso){
	console.log("habilitaInput("+idForm+","+valor+")");

	var inputs=document.querySelectorAll('#'+idForm+' input');
	for(var i=0; i<inputs.length; i++){
		if(valor){
			inputs[i].removeAttribute('disabled');
		}else{
			inputs[i].setAttribute('disabled','true');

		}

	}
}	// end habilitaInput()
function cambiaMostrar(s){	
	console.log('cambiaMostrar(){...}');	// s=selectores
	if(!s) return false;	// 
	var eles=[];
	if( is_array(s) ){
		eles=s;
	}else{
		eles.push(s);
	}
	// console.log('eles = ', eles);	
	for(var i=0, selector, ele; i<eles.length; i++){
		selector=eles[i];
		if(typeof(selector)=='string'){
			selector=selector.trim();
			ele=document.querySelector(selector);
			// console.log('ele = ', ele);
			// console.log('obj = ', typeof(ele));
			if(ele){
			// console.log('display: ',ele.style.display);
				if(ele.style.display=='none'){
					ele.style.display='';
					// ele.setAttribute('display','');
				}else{
					//ele.setAttribute('display','none');
					ele.style.display='none';
				}
			}
		}
	}
}	// End cambiaMostrar()
function esconder(s){
	console.log('esconder(s){...}');
	if(!s) return false;	// 
	var eles=[];
	if( is_array(s) ){
		eles=s;
	}else{
		eles.push(s);
	}
	// console.log('eles = ', eles);	
	for(var i=0, selector, ele; i<eles.length; i++){
		selector=eles[i];
		if(typeof(selector)=='string'){
			selector=selector.trim();
			ele=document.querySelector(selector);
			ele.style.display='none';
		}
	}	
}	// End esconder()
function mostrar(s){
	console.log('mostrar(s){...}');
	if(!s) return false;	// 
	var eles=[];
	if( is_array(s) ){
		eles=s;
	}else{
		eles.push(s);
	}
	// console.log('eles = ', eles);	
	for(var i=0, selector, ele; i<eles.length; i++){
		selector=eles[i];
		if(typeof(selector)=='string'){
			selector=selector.trim();
			ele=document.querySelector(selector);
			ele.style.display='';
		}
	}	

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
