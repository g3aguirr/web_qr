let NETBOXKEY = 'NetboxToken'

function Login()
{
    var a = new Array();

    var username = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;

    sessionStorage.setItem("currentloggedin", username);
    localStorage.setItem('all_users', JSON.stringify(a));

    a=JSON.parse((localStorage.getItem("all_users")));
    a.push({name: username, password: password});
    localStorage.setItem('name',JSON.stringify(a));
    for(var i=0; i<a.length; i++)
    {
        var li = document.createElement("li");
        li.innerHTML=a[i]['name'];
        document.getElementById("listuser").appendChild(li);
    }
    
}

function getAPIURL(scannedURL) {
    return newString = "https://safe-retreat-14607.herokuapp.com/"
                    + scannedURL
}


function GetToken(){


   /*  if(localStorage.getItem(NETBOXKEY) != null){
        TestToken();
        return;
    } */
        
    var url = getAPIURL("https://netbox.nrp-nautilus.io/api/users/api-tokens/provision/");
    var request = new XMLHttpRequest();
    request.open("POST", url, true);

    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.setRequestHeader("Accept", "application/json; indent=4");

    request.onreadystatechange = function () {
    if (request.readyState === 4) {

        console.log(JSON.parse(request.responseText).key);
        StoreToken(JSON.parse(request.responseText).key);
    }};
 
    var data = '{"username":"hardcodedUser","password":"HardcodedPassword"}';



      /* 
    request.onerror = function() { // only triggers if the request couldn't be made at all
        alert(`Network Error`);
    };
      
    request.onprogress = function(event) { // triggers periodically
        
        alert(`Received ${event.loaded} of ${event.total}`);
    }; */
    request.send(data);
}

function StoreToken(response){
    let token = response;
    localStorage.setItem(NETBOXKEY, JSON.stringify(token));
    TestToken();
}

function TestToken(){
    console.log(localStorage.getItem(NETBOXKEY));
}