//  form.js
console.log('form.js');

'use strict';

export function evalInput(obj){
	// console.log('evalua(name= '+obj.name+'){...}');
	//let ele = document.querySelector("#"+e.target.id);	// obj = objeto evento es pasado como argumento
	let idForm = obj.form.id;								// Id del formulario padre
	let objForm = document.getElementById(idForm);			// Form padre del input 
	if( !objForm ) console.log('Form no encontrado!');
	// let btnSave = objForm.getAttribute('data-btnSave');	/ objeto boton Save (form: data-btnSave='idBoton')
	let btnEnable = objForm.getAttribute('data-btnEnable');	// objeto boton por habilitar (form: data-btnEnable='idBoton')
		// let btnHabilita = objForm.getAttribute('data-btnHabilita');	// TemporaL
    let sPatron = obj.getAttribute("pattern");				// Valor del patron (string)
	let idInput = obj.getAttribute("id");					// Valor del id
	let lblError = document.getElementById(idInput+'Error');
	let txtError = '';
	if(lblError) txtError = lblError.textContent;			// Texto del label de error

	//let oExpReg = new RegExp(sPatron);					!');
	// Crea el objeto patron para el elemento
	//let maxLength = obj.getAttribute("maxlength");			// Longitud maxima definida por atributo

	let sValor = obj.value;									// Valor actual del elemento 'string'
	let nLonText = sValor.length;							// Longitud del valor
	let lValido = obj.checkValidity();						// test del input
	let lEstado = obj.validity.valid;						// estado resultante del conjunto de atributos del input
	let vForm = objForm.checkValidity();					// Evalua la valides inteegral del Form

	//console.log('idForm=', idForm);
	console.dir(btnEnable);
	console.dir(objForm);
	console.log('---------------------------------')
	// console.log(lblError);
    console.log('form.checkValidity= ' , vForm );
    console.log('Resultante final del input = ', lEstado);
	console.log('input.checkValidity= ', lValido);

	//texto = texto.substring(0,texto.length-1);	// elimina el caracter maximo

	if ( !evalExpReg(sPatron, sValor) ) {
		if( lblError && txtError.length>0 ) { lblError.classList.add('colorError'); }else{ obj.classList.add('colorError'); }
	}else{
		if( lblError && txtError.length>0 ) { lblError.classList.remove('colorError'); }else{ obj.classList.remove('colorError'); }
	};
	btnEnable = document.getElementById(btnEnable);		// Boton 
	if( vForm ) {
		if( btnEnable ) btnEnable.removeAttribute('disabled');
	}else{
		if( btnEnable ) btnEnable.setAttribute('disabled','');
	}
}

function evalExpReg(sPatron, sValor){
	// Evalua Expresion Regular del Input
	// if( arguments.length != 2) console.log('evalExpReg() -> Arguments no valid.');
	if( sPatron == null || sValor == null ) return false;	
	// console.log("evaluaPatron( "+sPatron+" , "+sValor+" )");
	let oExpReg = new RegExp(sPatron);
		if (!oExpReg.test(sValor)) {
			console.log("invalido");
			return false;
		}
		console.log("valido");
		return true;					
}

export function evalForm(idForm){
	if( !idForm) return false;
	var oForm=document.getElementById(idForm);
	if( !oForm ){ console.log('Form (id='+idForm+'), not found.'); return false; };
	if( oForm.nodeName !== 'FORM' ){ console.log('Id = '+idForm+', no es un FORM'); return false;}
	if ( !oForm.checkValidity() ){
		return false;
	}
	return true;			
}

export function seePassword(self, keys){
	// console.log('seePassword()');
	// if( arguments.length != 2) console.log('seePassword() -> Arguments no valid.');
	if( self == null || keys == null ) return false;
	// let text = 'password';
	let obj = null;
	let text = ( self.checked == true )? 'text': 'password';
    for(let e=0; keys.length > e; e++){  
		obj = document.getElementById( keys[e] );
		if (obj) obj.setAttribute('type',text);		// Modificando atributo
    }  
}
export function test(){
	console.log('func.test....export....');
}

// export default {
// 	evalInput,
// 	evalForm,
// 	seePassword,
// 	test

// }