function hideCols(event){
    //table1-col1-btn
    const btnID = event.target.id
    const btn = document.getElementById(btnID)
    const tableID = btnID.slice(0, -9)
    const table = document.getElementById(tableID)
    const col = btnID.charAt(10)
    const tr = table.getElementsByTagName("tr")

    for (let i = 0; i < tr.length; i++) {
        if(i===0){
            const th = tr[i].getElementsByTagName("th")[col]
            if(th.style.display == ""){
                th.style.display = "none"
            }else if(th.style.display =="none"){
                th.style.display =""
            }
        }
        else{
            const td = tr[i].getElementsByTagName("td")[col-1]
            if(td.style.display == ""){
                td.style.display = "none"
                btn.style.backgroundColor = "rgb(245,245,245)"
                    btn.style.color = "#000"
            }else if(td.style.display =="none"){
                td.style.display =""
                btn.style.backgroundColor = "#000"
                    btn.style.color = "#fff"
            }
        }

    }


    // if(col.style.visibility != "collapse"){
    //     col.style.visibility ="collapse"
    //     btn.style.backgroundColor = "rgb(245,245,245)"
    //     btn.style.color = "#000"
    // }
    //     else if(col.style.visibility == "collapse"){
    //     col.style.visibility ="visible"
    //     btn.style.backgroundColor = "#000"
    //     btn.style.color = "#fff"
    // }
}

document.getElementById("table1-col1-btn").addEventListener("click", hideCols)
document.getElementById("table1-col2-btn").addEventListener("click", hideCols)
document.getElementById("table1-col3-btn").addEventListener("click", hideCols)
document.getElementById("table1-col4-btn").addEventListener("click", hideCols)
document.getElementById("table1-col5-btn").addEventListener("click", hideCols)

document.getElementById("table2-col1-btn").addEventListener("click", hideCols)
document.getElementById("table2-col2-btn").addEventListener("click", hideCols)
document.getElementById("table2-col3-btn").addEventListener("click", hideCols)

document.getElementById("table3-col1-btn").addEventListener("click", hideCols)
document.getElementById("table3-col2-btn").addEventListener("click", hideCols)
document.getElementById("table3-col3-btn").addEventListener("click", hideCols)
document.getElementById("table3-col4-btn").addEventListener("click", hideCols)



function filterTableRows(event){
    const inputID = event.target.id
    const input = document.getElementById(inputID)
    const filter = input.value.toLowerCase()
    const tableID = event.target.id.slice(0,-12)
    const table = document.getElementById(tableID)
    const tr = table.getElementsByTagName("tr")

    for (let i = 2; i < tr.length; i++) {
        const th = tr[i].getElementsByTagName("th")[0];
            const txtValue = th.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
    }
}
document.getElementById("table1-filterInput").addEventListener("input", filterTableRows)
document.getElementById("table2-filterInput").addEventListener("input", filterTableRows)
document.getElementById("table3-filterInput").addEventListener("input", filterTableRows)