document.getElementById('addSigneItem').addEventListener('click', function(){
 window.localStorage.setItem('name', 'Anna');
 updateUI();
});
document.getElementById('addAnotherItem').addEventListener('click', function(){
    localStorage.setItem('users',
    JSON.stringify({name: "Anna", food: "pizza"})
    );
    updateUI();
});
document.getElementById('Get1Item').addEventListener('click', function(){
    const user =JSON.parse(localStorage.getItem('users'));
    document.getElementById('ls-currently').textContent = user.food;
});
document.getElementById('Remove1Item').addEventListener('click', function(){
    localStorage.removeItem('name');
    updateUI();

});
document.getElementById('RemoveAllItems').addEventListener('click', function(){
localStorage.clear();
updateUI();
});

function updateUI (){
    let values:string[] = [], keys = Object.keys(localStorage), i= keys.length;
    while (i--){values.push(localStorage.getItem(keys[i]));} 
   document.getElementById('ls-currently').textContent =values+"";
}

if(typeof(Storage) !== "undefined" ){

}else{

}