function addLi()
            {

			var txtVal = document.getElementById('txtVal').value;
					if (txtVal === '') { alert("Text Field Cannot Be Empty"); return;}
				
                    listNode = document.getElementById('list');
                    liNode = document.createElement("LI");
                    txtNode = document.createTextNode(txtVal);
            
                 liNode.appendChild(txtNode);
                 listNode.appendChild(liNode);
            
		
            }
