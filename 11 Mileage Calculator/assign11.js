

function checkTitleCase(item)
{
    return item.replace(/\w\S*/g, function (txt)
    {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function checkPlaces(sCity, sState, eCity, eState)
{

    if (sCity.value == "")
    {
        sCity.style.background = 'Red';
        return false;
    }
    else if (sState.value == "")
    {
        sState.style.background = 'Red';
        return false;
    }
    else if (eCity.value == "")
    {
        eCity.style.background = 'Red';
        return false;
    }
    else if (eState.value == "")
    {
        eState.style.background = 'Red';
        return false;
    }
    else
    {
        sCity.value = checkTitleCase(sCity.value);
        eCity.value = checkTitleCase(eCity.value);
        sState.value = sState.value.toUpperCase();
        eState.value = eState.value.toUpperCase();
        return true;
    }
}

function loadDocument(sCity, sState, eCity, eState)
{
    var startC = "?startCity=" + sCity;
    var startS = "&startState=" + sState;
    var endC = "&endCity=" + eCity;
    var endS = "&endState=" + eState;

    var merge = startC + startS + endC + endS;

    var website = "http://157.201.194.254/cgi-bin/ercanbracks/mileage/mileageAjaxXML" + merge;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function ()
    {
        if (xhttp.readyState == 4 && xhttp.status == 200)
        {
            var xmlObject = xhttp.responseXML.documentElement;
            
            var startCity = xmlObject.getElementsByTagName("startcity")[0].childNodes[0].nodeValue;
            var startState = xmlObject.getElementsByTagName("startstate")[0].childNodes[0].nodeValue;
            var endCity = xmlObject.getElementsByTagName("endcity")[0].childNodes[0].nodeValue;
            var endState = xmlObject.getElementsByTagName("endstate")[0].childNodes[0].nodeValue;
            var miles = xmlObject.getElementsByTagName("miles")[0].childNodes[0].nodeValue;

            var transportMode = xmlObject.getElementsByTagName("tmode");
            var transport = "";

            for (var i = 0; i < transportMode.length; i++)
            {
                transport += transportMode[i].childNodes[0].nodeValue;
                if (i != transportMode.length - 1)
                {
                    transport += ", ";
                }
            }

            var displayDistance = document.getElementById("distance");
            //var displayTransportationModes = document.getElementById("distance");
            displayDistance.innerHTML
                = "<div class='display'> The distance from " + startCity + ", " + startState + " to " + endCity + ", " + endState + " is " + miles + " miles." + "<br />" + "The types of transportation are by: " + transport + "</div>";
        }
    };

    xhttp.open("GET", website, true);
    xhttp.send(null);
}


function startValidation()
{
    var sCity = document.getElementById("startCity");
    var sState = document.getElementById("startState");
    var eCity = document.getElementById("endCity");
    var eState = document.getElementById("endState");

    if (!checkPlaces(sCity, sState, eCity, eState))
        return false;

    loadDocument(sCity.value, sState.value, eCity.value, eState.value);

    return true;
}
