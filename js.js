let textRow=''
function addRow(){
    let table=document.getElementById("mytable")
    let numRow=table.getElementsByTagName("tr").length
    let row=table.insertRow(numRow)
    let cell1=row.insertCell(0)
    let cell2=row.insertCell(1)
    let cell3=row.insertCell(2)
    let cell4=row.insertCell(3)
    let cell5=row.insertCell(4)
    cell1.innerHTML='<button type="button" value="erase" onclick="deleteRow(this)">x</button>'
    cell2.innerHTML='<input type="text" size="15">'
    cell3.innerHTML='<input type="number" size="5">' 
    cell4.innerHTML='<input type="checkbox">'
    cell5.innerHTML='<div class="input-group"><input type="radio" value="Male">Male<input type="radio" value="Female">Female'  
}
function deleteRow(cell){
    let i=cell.parentNode.parentNode.rowIndex
    mytable.deleteRow(i)
    
}

