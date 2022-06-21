function hideCols(event){
    const btnID = event.target.id
    const btn = document.getElementById(btnID)
    const colID = btnID.slice(0, - 4)
    const col = document.getElementById(colID)

    if(col.style.visibility != "collapse"){
        col.style.visibility ="collapse"
        btn.style.backgroundColor = "rgb(245,245,245)"
        btn.style.color = "#000"
    }
        else if(col.style.visibility == "collapse"){
        col.style.visibility ="visible"
        btn.style.backgroundColor = "#000"
        btn.style.color = "#fff"
    }
}

document.getElementById("arraylist-btn").addEventListener("click", hideCols)
document.getElementById("attributelist-btn").addEventListener("click", hideCols)
document.getElementById("linkedlist-btn").addEventListener("click", hideCols)
document.getElementById("stack-btn").addEventListener("click", hideCols)
document.getElementById("vector-btn").addEventListener("click", hideCols)
