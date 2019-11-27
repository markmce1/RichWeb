addLi= document.getElementById('addLi')
Rx.Observable.fromEvent(addLi, 'click')
    .subscribe(e => add())

editLi= document.getElementById('editLi')
Rx.Observable.fromEvent(editLi, 'click')
    .subscribe(e => edit())

removeLi= document.getElementById('removeLi')
Rx.Observable.fromEvent(removeLi, 'click')
        .subscribe(e => remove())

function add()
{
    var txtVal = document.getElementById('txtVal').value;
    if (txtVal === '') { alert("Text Field Cannot Be Empty"); return;}

    listNode = document.getElementById('List');
    liNode = document.createElement("LI");
    txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

}


function remove() 
{
    var list = document.getElementById("List");
    var remVal = document.getElementById('remVal').value;
    list.removeChild(list.childNodes[remVal]);
}


function edit() 
{
    var list = document.getElementById("List");
    var editVal = document.getElementById('editVal').value;
    list.removeChild(list.childNodes[editVal]);        
    var txtVal = document.getElementById('txtVal').value;
    if (txtVal === '') { alert("Text Field Cannot Be Empty"); return;}        
    listNode = document.getElementById('List');
    liNode = document.createElement("LI");
    txtNode = document.createTextNode(txtVal);
        
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
        
}           

