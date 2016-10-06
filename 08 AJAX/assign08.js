
function loadDoc(file) {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            document.getElementById("city").innerHTML = request.responseText;
        }
    };
    request.open("GET", "../~ercanbracks/" + file, true);
    request.send();
}

function styleJson()
{
    document.getElementById("Json").style.fontWeight = "bold";
    document.getElementById("Json").style.fontSize = "12px";
}

function loadJson()
{
    styleJson();
    httpRequest = new XMLHttpRequest();
		
    if (httpRequest)
    {
        var fileName = document.getElementById("file").value;
        httpRequest.onreadystatechange = function ()
        {
            var object = JSON.parse(httpRequest.responseText);
            var data = "<br/>";
            for (var i = 0; i < object.students.length; i++)
            {
                data += "Name: " + object.students[i].first;
                data += " " + object.students[i].last + "<br/>";
                data += "Address: <br/>" + "   City: ";
                data += object.students[i].address.city + "<br/>";
                data += "   State: " + object.students[i].address.state;
                data += "<br/>";
                data += "   Zip: " + object.students[i].address.zip + "<br/>";
                data += "Major: " + object.students[i].major + "<br/>";
                data += "GPA: " + object.students[i].gpa + "<br/>";
                data += "<br/>";
            }
            document.getElementById("getData").innerHTML = data;
        }
    }
    else
    {
        alert('Error! Could not read requested file');
    }
    httpRequest.open("GET", fileName, true);
    httpRequest.send();
}

