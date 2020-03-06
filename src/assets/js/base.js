// base.js

// "use strict";

function start(){
    console.log('window.load');
    console.log(window.location.pathname);
//     if('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('sw.js', {scope: '/'} )
//         .then(function(reg){ 
//             console.log('ServiceWorker registered!', reg.scope);
//         })
//         .catch(function(err){
//             console.log('ServiceWorker failed! : ', err);
//         });
//     }else{
//         console.log('Unsupported Service Worker');
//     }
    events();
}
function events(){
    // Registro de Eventos del Documento
    console.log('events');
}
// Variables publicas del contexto
var filterIdCountry = '';
var filterIdClub = '';
var filterIdPlayer = '';
var filterIdKit = '';
var filteridSeason = '';
var sortOrder = '';
var path = window.location.pathname;   // HTML name current
var parametersURL = '';

function applyFilter(){
    console.log('applyFilter()');
    var pageLimit = 0;
    resetParameters();   
    // Leer datos de los parametros (filters, sort, limit)
    if (path== '/country/') filterIdCountry = document.getElementById('idCountry').value;
    if (path== '/club/') filterIdClub = document.getElementById('idClub').value;   
    if (path== '/players/'){ 
        filterIdPlayer = document.getElementById('idPlayer').value; 
        filterIdCountry = document.getElementById('idCountry').value;
        filterIdClub = document.getElementById('idClub').value; 
    }
    filterIdKit = document.getElementById('idKit').value;
    filterIdSeason = document.getElementById('idSeason').value;
    
    sortOrder = document.getElementById('sortFilter').value;
    pageLimit = document.getElementById('idLimiter').value;

    // Aplicar parametros validos/ejecutar 'url'  --> Pending View!
    parametersURL = '?';
    
    if (filterIdCountry != '') parametersURL += '&country='+filterIdCountry;
    if (filterIdClub != '') parametersURL += '&club='+filterIdClub;
    if (filterIdPlayer != '') parametersURL += '&player='+filterIdPlayer;
    if (filterIdKit != '') parametersURL += '&kit='+filterIdKit;
    if (filterIdSeason != '') parametersURL += '&season='+filterIdSeason;

    if (parametersURL=='?') {
        parametersURL += 'orderby='+sortOrder
    }else{
        parametersURL += '&orderby='+sortOrder;
    }
    parametersURL += '&limit='+pageLimit;
    console.log('parametersURL=', parametersURL); 
    // Run URL
    location.href = path+parametersURL;
    return
}
function resetFilter(){
    resetParameters();

    if (path== '/country/') document.getElementById('idCountry').value = '';
    if (path== '/club/') document.getElementById('idClub').value = '';
    if (path== '/players/') document.getElementById('idPlayer').value = '';

    document.getElementById('idKit').value = '';
    document.getElementById('idSeason').value = '';

    document.getElementById('sortFilter').value = '';
    document.getElementById('idLimiter').value = '5';
    location.href=path;
}
function apllyChange(){
    // console.log(' apllyChange()');
    document.getElementById('applyFilter').disabled=false;
    // document.getElementById('resetClub').disabled=false;
}
function resetParameters(){
    filterIdCountry = '';
    filterIdClub = '';
    filterIdPlayer = '';

    filterIdKit='';
    filterSeason='';
    sortOrder = '';    
}
function limiter(){
    if (path=='/' || path=='/collection/') {
        location.href = path +'?limit='+document.getElementById('idLimiter').value;
    } else {
        applyFilter();
    }
}
function menuLocation(){
    console.log('path = ', path);
    let mHome = document.getElementById('mHome');
    let mCountry = document.getElementById('mCountry');
    let mClub = document.getElementById('mClub');
    let mPlayers = document.getElementById('mPlayers');
    let mCollection = document.getElementById('mCollection');

    // mHome.classList.remove('menuLocation');
    mCountry.classList.remove('menuLocation');
    mClub.classList.remove('menuLocation');
    mPlayers.classList.remove('menuLocation');
    if( mCollection ) mCollection.classList.remove('menuLocation');

    // if(path=='/') mHome.classList.add('menuLocation');
    if(path=='/country/') mCountry.classList.add('menuLocation');
    if(path=='/club/') mClub.classList.add('menuLocation');
    if(path=='/players/') mPlayers.classList.add('menuLocation');
    if(path=='/collection/') mCollection.classList.add('menuLocation');
}
function jerseyCurrent(self){
    console.log('jerseyCurrent()');
 //    console.dir(self);
    let objImagen = self.childNodes[1];
    if( objImagen.dataset.sm =='1') {
         let imgSmall = objImagen.src;
         let objLargeImg = document.getElementById('idLargeImg'); 
         objLargeImg.src = imgSmall;
    }
 }  
// -------- Events ----------
(function(){
    window.addEventListener('load', start, false);
    if( path=='/country/' || path=='/club/' || path=='/players/') {
        console.log('Botones');
        // Buttons
        document.getElementById('applyFilter').addEventListener('click', applyFilter, false);
        document.getElementById('resetFilter').addEventListener('click', resetFilter, false);
        // Inputs-Select
        if (path=='/country/') {
            document.getElementById('idCountry').addEventListener('change', apllyChange, false);
        }
        if (path=='/club/') {
            document.getElementById('idClub').addEventListener('change', apllyChange, false);
        }
        if (path=='/players/') {
            document.getElementById('idPlayer').addEventListener('change', apllyChange, false);
            document.getElementById('idCountry').addEventListener('change', apllyChange, false);
            document.getElementById('idClub').addEventListener('change', apllyChange, false);
        }
        document.getElementById('idKit').addEventListener('change', apllyChange, false);
        document.getElementById('idSeason').addEventListener('change', apllyChange, false);
        document.getElementById('sortFilter').addEventListener('change', apllyChange, false);
        
        document.getElementById('applyFilter').disabled=true;   // Default
        // document.getElementById('resetClub').disabled=true;
    }
    menuLocation();
})();

(function(){
   

  })();