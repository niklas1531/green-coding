const checked = []
const a = document.getElementById("quiz2-img1")
const b = document.getElementById("quiz2-img2")

a.addEventListener("click", function () {
    if (checked.includes(a)) {
        a.style.border = "none"
        delete checked[checked.indexOf(a)]
    } else {
        checked.push(a);
        a.style.border = "4px solid orange"
    }
})
b.addEventListener("click", function () {
    if (checked.includes(b)) {
        b.style.border = "none"
        delete checked[checked.indexOf(b)]
    } else {
        checked.push(b);
        b.style.border = "4px solid orange"
    }
})


document.getElementById("submit2").addEventListener("click", function () {
    if (checked.includes(a) && !checked.includes(b)) {
        a.style.border = "4px solid red"
        b.style.border = "4px solid red"
        checked.pop()
    } else if (!checked.includes(a) && checked.includes(b)) {
        a.style.border = "4px solid green"
        b.style.border = "4px solid green"
        checked.pop()

    } else if (checked.includes(a) && checked.includes(b)) {
        a.style.border = "4px solid red"
        b.style.border = "4px solid red"
        checked.pop()
        checked.pop()

    }

})