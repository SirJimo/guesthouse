let tColorA = document.getElementById('tColorA');
let tColorB = document.getElementById('tColorB');
let tColorC = document.getElementById('tColorC');
let iconA = document.querySelector('.fa-credit-card');
let iconB = document.querySelector('.fa-building');
let iconC = document.querySelector('.fa-wallet');
let cInfo = document.querySelector('.card_info');

function doFunct()
{
    tColorA.style.color = "greenyellow";
    tColorB.style.color = '#444';
    tColorC.style.color = "#444";
    iconA.style.color = "greenyellow";
    iconB.style.color = "#aaa";
    iconC.style.color = "#aaa";
    cInfo.style.display = "block"
}

function doFunctA()
{
    tColorA.style.color = "#444";
    tColorB.style.color = "greenyellow";
    tColorC.style.color = "#444";
    iconA.style.color = "#aaa";
    iconB.style.color = "greenyellow";
    iconC.style.color = "#aaa";
    cInfo.style.display = "none"
}
function doFunctB()
{
    tColorA.style.color = "#444";
    tColorB.style.color = "#444";
    tColorC.style.color = "greenyellow";
    iconA.style.color = "#aaa";
    iconB.style.color = "#aaa";
    iconC.style.color = "greenyellow";
    cInfo.style.display = "none"
}
let cNumber = document.getElementById('number');
cNumber.addEventListener('keyup', function(e)
{
    let num = cNumber.value;
    let newValue = '';
    num = num.replace(/\s/g, '');
    for(var i =0; i<num.length; i++)
    {
        if(i%4 == 0 && i> 0) newValue = newValue.concat(' ') 
            newValue = newValue.concat(num[i]);
            cNumber.value = newValue;
    }

    let ccNum = document.getElementById('card-Number');
    if(num.length<16)
    {
        ccNum.style.border = "2px solid red";
    }
    else
    {
        ccNum.style.border="2px solid greenyellow";
    }
});
let eDate = document.getElementById('expiry-date');
eDate.addEventListener('keyup', function(e)
{
    let newInput = eDate.value;
    if(e.which !==8)
    {
        var numChars = e.target.value.length;
        if(numChars == 2)
        {
            var thisVal = e.target.value;
            thisVal += '/';
            e.target.value = thisVal;
            console.log(thisVal.length)
        }
    }
    if(newInput.length<5)
    {
        eDate.style.border="2px solid red";
    }
    else
    {
       eDate.style.border="2px solid greenyellow"; 
    }
});
let cvv = document.getElementById('cvv-number');
cvv.addEventListener('keyup', function(e)
{
    let elen = cvv.value;
    let cvvBox = document.getElementById('cvv');
    if(elen.length<3)
    {
        cvvBox.style.border="2px solid red";
    }
    else
    {
        cvvBox.style.border="2px solid greenyellow"
    }
})