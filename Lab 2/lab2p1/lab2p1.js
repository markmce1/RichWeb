function addLi(){
    //making the variables and getting the info from the text fields
    var phoneVal = document.getElementById('phoneVal').value;
    var nameVal = document.getElementById('nameVal').value;
    var emailVal = document.getElementById('emailVal').value;
    var counter = 0;
    var emaillength = emailVal.length;
    var bool = false;
    //if the fields are empty, it'll will pop up a text box
    if (phoneVal === '' || nameVal === '' || emailVal === '') 
    { 
        alert("Text Field Cannot Be Empty"); 
        return;
    }
    // Checking if they're the right lengths
    if(nameVal.length >= 20)
    {
        alert("Name can't be over 20 letters long");
        return;
    }

    while(counter != emaillength)
    {
        
        //counter adds up while while loop goes through emails letters for @
        if(emailVal.charAt(counter) != '@')
        {
            counter ++;
        }
        if(emailVal.charAt(counter) == '@')
        {

            bool = true;
            counter = emaillength;
        }
        
    }

    if(bool == false)
    {
        alert("Email must be in valid format")
        return;
    }


    if(phoneVal.length != 10)
    {
        alert("phone must be 10 numbers long");
        return;
    } 

    

    if(emailVal.length > 40)
    {
        alert("email can't be over 40 letters long");
        return;
    }

    phoneVal.value ="";
    nameVal.value ="";
    emailVal.value ="";

    listNode = document.getElementById('name');
    liNode = document.createElement("LI");
    nameNode = document.createTextNode(nameVal);

    liNode.appendChild(nameNode);
    listNode.appendChild(liNode);

    listNode = document.getElementById('phone');
    liNode = document.createElement("LI");
    phoneNode = document.createTextNode(phoneVal);

    liNode.appendChild(phoneNode);
    listNode.appendChild(liNode);

    listNode = document.getElementById('email');
    liNode = document.createElement("LI");
    emailNode = document.createTextNode(emailVal);

    liNode.appendChild(emailNode);
    listNode.appendChild(liNode);



}

function nameSort(){


}


function numberSort(){


}


