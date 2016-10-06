/* JavaScript Text, used to error check each field in the form*/

function validField(input)
{
    if (input.fname.value == "") {
        input.fname.style.background = 'Red';
        return false;
    }
    if (input.lname.value == "") {
        input.lname.style.background = 'Red';
        return false;
    }
    if (input.mi.value == "") {
        input.mi.style.background = 'Red';
        return false;
    }
    if (input.address.value == "") {
        input.address.style.background = 'Red';
        return false;
    }
    if (input.city.value == "") {
        input.city.style.background = 'Red';
        return false;
    }
    if (input.st.value == "") {
        input.st.style.background = 'Red';
        return false;
    }
    if (input.zip.value == "") {
        input.zip.style.background = 'Red';
        return false;
    }
    if (input.fname.value == "") {
        input.fname.style.background = 'Red';
        return false;
    }
    if (input.phone.value == "") {
        input.phone.style.background = 'Red';
        return false;
    }
    else if (isNaN(parseInt(input.phone.value.replace(/[\(\)\.\-\ ]/g, '')))) {
        input.phone.style.background = 'Red';
        return false;
    }
    else if (!(input.phone.value.replace(/[\(\)\.\-\ ]/g, '').length == 10)) {
        input.phone.style.background = 'Red';
        return false;
    }
    return true;

}

function total()
{
    var laptop = document.getElementById("firstItem");
    var xbox = document.getElementById("secondItem");
    var tv = document.getElementById("thirdItem");
    var ps4 = document.getElementById("fourthItem");
    var ipad = document.getElementById("fifthItem");
    var wii = document.getElementById("sixthItem");
    
    var total = parseFloat(laptop.value) + parseFloat(xbox.value) +
                parseFloat(tv.value) + parseFloat(ps4.value) +
                parseFloat(ipad.value) + parseFloat(wii.value);

    if (laptop.checked)
        total += 0;
    else
        total -= parseFloat(laptop.value);

    if (xbox.checked)
        total += 0;
    else
        total -= parseFloat(xbox.value);

    if (tv.checked)
        total += 0;
    else
        total -= parseFloat(tv.value);

    if (ps4.checked)
        total += 0;
    else
        total -= parseFloat(ps4.value);

    if (ipad.checked)
        total += 0;
    else
        total -= parseFloat(ipad.value);

    if (wii.checked)
        total += 0;
    else
        total -= parseFloat(wii.value);

    if (onreset)
        document.getElementById("total").innerHTML = " ";
    else
        document.getElementById("total").innerHTML
            = "Total Amount:  $" + parseFloat(total.toFixed(2));

}

function validCheckBox(form)
{
    if (!form.lap.checked && !form.xbox.checked && !form.tv.checked
        && !form.ps4.checked && !form.ipad.checked && !form.wii.checked)
    {
        document.getElementById("error").innerHTML
            = "** You must select an item to purchase";
        return false;
    }
    
    return true;
}

function termBox(isChecked)
{
    if (!(isChecked.check.checked))
        return false;
    else
        return true;
}

function validCardNumber(number)
{
    var valid = /^\d{16}$/;
    if (!valid.test(number))
        return false;
    else
        return true;   
}



function validCardType(type)
{
    if (!type.visa.checked && !type.master.checked && !type.express.checked)
    {
        document.getElementById("noCardType").innerHTML = "** Please select your card type!";
        return false;
    }
    else
        return true;

}

function checkDate() {
    var expire_month = document.getElementById("month");
    var expire_year = document.getElementById("year");

    var today = new Date();
    var selDate = new Date();

    if (today.getTime() > selDate.setFullYear(expire_year.value, expire_month.value))
    {
        expire_month.style.background = 'Red';
        expire_year.style.background = 'Red';
        return false;
    }
    else
        return true;
}

function onSubmit(theForm) 
{
    if (!validField(theForm))
        return false;

    if (!validCheckBox(theForm))
        return false;

    document.getElementById("error").innerHTML = "";

    if (!validCardType(theForm))
        return false;

    document.getElementById("noCardType").innerHTML = "";
    
    if (!validCardNumber(parseInt(theForm.cardNum.value)))
    {
        theForm.cardNum.style.background = 'Red';
        return false;
    }

    if (!checkDate())
        return false;

    return true;
    
}
