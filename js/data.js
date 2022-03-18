window.onload = function () {
    loadData();
};

function loadData(){
    
    if(sessionStorage.getItem('DeviceInfo') == null){
        console.log("data loaded incorrectly");
        return;
    }
    let data = sessionStorage.getItem('DeviceInfo');

    document.getElementById("site").innerHTML = data.site.name;
};