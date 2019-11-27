
			function remove() {
			var list = document.getElementById("List");
			var remVal = document.getElementById('remVal').value;
			list.removeChild(list.childNodes[remVal]);
			}

            function addLi()
            {

			var txtVal = document.getElementById('txtVal').value;
					if (txtVal === '') { alert("Text Field Cannot Be Empty"); return;}
				
                    listNode = document.getElementById('List');
                    liNode = document.createElement("LI");
                    txtNode = document.createTextNode(txtVal);
            
                 liNode.appendChild(txtNode);
                 listNode.appendChild(liNode);
            
		
            }
			
 			function edit() {
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

