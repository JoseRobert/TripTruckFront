//  index.js

console.log('index.js');

var path = window.location.pathname;   // HTML name current

function menuLocation(){
    console.log('path = ', path);
    let mHome = document.getElementById('mHome');
    let mUsers = document.getElementById('mUsers');
    let mTrucks = document.getElementById('mTrucks');
    let mTrailers = document.getElementById('mTrailers');
    let mTables = document.getElementById('mTables');

    // mHome.classList.remove('menuLocation');
    mUsers.classList.remove('menuLocation');
    mTrucks.classList.remove('menuLocation');
    mTrailers.classList.remove('menuLocation');
    mTables.classList.remove('menuLocation');
    
    // if( mCollection ) mCollection.classList.remove('menuLocation');

    // if(path=='/') mHome.classList.add('menuLocation');
    if(path=='/users/') mUsers.classList.add('menuLocation');
    if(path=='/trucks/') mTrucks.classList.add('menuLocation');
    if(path=='/trailers/') mTrailers.classList.add('menuLocation');
    if(path=='/tables/') mTables.classList.add('menuLocation');
}
function start(){
   console.log('start()') ;
}
// -------- Events ----------
(function(){
    window.addEventListener('load', start, false);
    if( path=='/country/' || path=='/club/' || path=='/players/') {

    }
    // menuLocation();
})();



