
function checkInput(input) {
    if (input.value == "" || input.value == "blankField")
        input.style.background = 'Yellow';
    else
        input.style.background = 'White';
}


function checkeachOne(check) {
    if (check.value == "")
        return false;
    else
        return true;
}

function checkDropDownList(check) {
    if (check.value == "blankField")
        return false;
    else
        return true;
}

function validateFields(pianoForm) {
    if (!checkeachOne(pianoForm.fname))
        pianoForm.fname.style.background = 'Yellow';
    else
        pianoForm.fname.style.background = 'White';

    if (!checkeachOne(pianoForm.lname))
        pianoForm.lname.style.background = 'Yellow';
    else
        pianoForm.lname.style.background = 'White';

    if (!checkeachOne(pianoForm.studentID))
        pianoForm.studentID.style.background = 'Yellow';
    else
        pianoForm.studentID.style.background = 'White';

    if (!checkDropDownList(pianoForm.typePer))
        pianoForm.typePer.style.background = 'Yellow';
    else 
        pianoForm.typePer.style.background = 'White';

    if (!checkDropDownList(pianoForm.skillLev))
        pianoForm.skillLev.style.background = 'Yellow';
    else
        pianoForm.skillLev.style.background = 'White';

    if (!checkDropDownList(pianoForm.inst))
        pianoForm.inst.style.background = 'Yellow';
    else 
        pianoForm.inst.style.background = 'White';

    if (!checkDropDownList(pianoForm.locate))
        pianoForm.locate.style.background = 'Yellow';
    else
        pianoForm.locate.style.background = 'White';

    if (!checkeachOne(pianoForm.room))
        pianoForm.room.style.background = 'Yellow';
    else
        pianoForm.room.style.background = 'White';

    if (!checkDropDownList(pianoForm.time))
        pianoForm.time.style.background = 'Yellow';
    else
        pianoForm.time.style.background = 'White';
}

function checkField(form) {
    if (form.style.background == 'Yellow')
        return false;
    else
        return true;
}

function clearFields(clear) {
    clear.fname.style.background = 'White';
    clear.lname.style.background = 'White';
    clear.studentID.style.background = 'White';
    clear.typePer.style.background = 'White';
    clear.skillLev.style.background = 'White';
    clear.inst.style.background = 'White';
    clear.locate.style.background = 'White';
    clear.room.style.background = 'White';
    clear.time.style.background = 'White';

    clear.fname.value = "";
    clear.lname.value = "";
    clear.studentID.value = "";
    clear.typePer.value = "";
    clear.skillLev.value = "";
    clear.inst.value = "";
    clear.locate.value = "";
    clear.room.value = "";
    clear.time.value = "";
}

function checkForm(formField) {
    validateFields(formField);

    if (!checkField(formField.fname))
        return false;
    else if (!checkField(formField.lname))
        return false;
    else if (!checkField(formField.studentID))
        return false;
    else if (!checkField(formField.typePer))
        return false;
    else if (!checkField(formField.skillLev))
        return false;
    else if (!checkField(formField.inst))
        return false;
    else if (!checkField(formField.locate))
        return false;
    else if (!checkField(formField.room))
        return false;
    else if (!checkField(formField.time))
        return false;
    else
        return true;
}

function buildRequest(php, getQuery) {
    if (getQuery) {
        var string
            = "?function=" + php
            + "&first" + document.getElementById("fname").value
            + "&last" + document.getElementById("lname").value
            + "&id" + document.getElementById("studentID").value
            + "&typePer" + document.getElementById("typePer").value
            + "&skill" + document.getElementById("skillLev").value
            + "&instrument" + document.getElementById("inst").value
            + "&locate" + document.getElementById("locate").value
            + "&room" + document.getElementById("room").value
            + "&time" + document.getElementById("time").value;

        if (document.getElementById("typePer").value == "duet") {
            var second
                = "&secondF" + document.getElementById("sfname").value
                + "&secondL" + document.getElementById("slname").value
                + "&secondID" + document.getElementById("secID").value;
            string = string.concat(secondStudent);
        }

    }
    else
        var string = "?function=" + php;
    return string;


}

function loadDoc() {

    var website = "assign12.php" + buildRequest();

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function () {
        var getStatus = xmlHttp.status;
        var getData = xmlHttp.responseText;

        var convertXML;
        if (window.DOMParser) {
            convertXML = function (xmlStr) {
                return (new window.DOMParser()).parseFromString(xmlStr, "text/xml");
            };
        }
        else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
            convertXML = function (xmlStr) {
                var xml = new window.ActiveXObject("Microsoft.XMLDOM");
                xml.async = "false";
                xml.loadXML(xmlStr);
                return xml;
            };
        } 
        else 
            return null; 
        

        document.getElementById("load").innerHTML = getData;
    }

    xmlHttp.open("GET", website, true);
    xmlHttp.send();
}
