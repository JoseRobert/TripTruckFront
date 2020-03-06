//  index.js

console.log('index.js');

var path = window.location.pathname;   // HTML name current

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
function start(){
   console.log('start()') ;
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



