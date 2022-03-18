
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
        
var apiURL = ""
var request = new XMLHttpRequest()
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
    //console.log(getAPIURL(decodedText));
    apiURL = getAPIURL(decodedText);
    netboxRequest();
    html5QrcodeScanner.clear();

    
    
    // ...
    // ^ this will stop the scanner (video feed) and clear the scan area.
}

function getAPIURL(scannedURL) {
    posToAddAPI = scannedURL.split('/', 3).join('/').length+1;
    return newString = "https://safe-retreat-14607.herokuapp.com/"
                    + scannedURL.slice(0, posToAddAPI)
                    + "api/"
                    + scannedURL.slice(posToAddAPI);
}

function netboxRequest(){
    // Open a new connection, using the GET request on the URL endpoint
    //console.log(apiURL);
    request.open('GET', apiURL, true);//, "rabbit", "vernor1607");
    
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.setRequestHeader("Authorization", "Token " + 'HardCodedToken');
    request.setRequestHeader("Accept", "application/json; indent=4");


    request.onload = function() {
        alert(`Loaded: ${request.status} ${request.response}`);
        //sessionStorage.setItem('DeviceInfo', 'test')
        //location.href = "data.html"

        //open and fill data page here
    };
      
    request.onerror = function() { // only triggers if the request couldn't be made at all
        alert(`Network Error`);
    };
      
    request.onprogress = function(event) { // triggers periodically
        /* event.loaded - how many bytes downloaded
        event.lengthComputable = true if the server sent Content-Length header
        event.total - total number of bytes (if lengthComputable) */
        alert(`Received ${event.loaded} of ${event.total}`);
    };
    // Send request
    request.send();
}

html5QrcodeScanner.render(onScanSuccess);
// Create a request variable and assign a new XMLHttpRequest object to it.


