let bill = document.getElementById("bill")
let btns = document.querySelectorAll(".btn")
let tipp 
let percentage
let billv , peoplev
let people = document.getElementById("people")
let tipAmountE = document.getElementById("tip-amount")
let totalAmountE = document.getElementById("total-amount")
let tipAmount 
let totalAmount 
let reset = document.getElementById("reset")


btns.forEach(btn =>{
    btn.addEventListener('click' , () => {
        btns.forEach(b => b.classList.remove("active"))
        btn.classList.add("active")
        tipp = btn.innerHTML
        Percentage(tipp)
        calc()
    })
    btn.addEventListener('input' , () => {
        btns.forEach(b => b.classList.remove("active"))
        btn.classList.add("active")
        tipp = btn.value
        Percentage(tipp)
        calc()
    })
})

bill.addEventListener("input" , () => {
    billv = bill.value 
    calc()
})
people.addEventListener("input" , () => {
    peoplev = people.value
    calc()
})
reset.addEventListener("click" , () => Reset())


function calc(){
    if(billv && peoplev && percentage != null ){
        tipAmount = (billv * percentage) / peoplev 
        totalAmount = (billv/peoplev) + tipAmount
    
        tipAmountE.innerHTML = tipAmount.toFixed(2)
        totalAmountE.innerHTML = totalAmount.toFixed(2)
    }
   
}
function Percentage(tip){
    switch(tip){
        case "5%":
            percentage = 0.05
            break
        case "10%":
            percentage = 0.1
            break
        case "15%":
            percentage = 0.15
            break
        case "25%":
            percentage = 0.25
            break
        case "50%":
            percentage = 0.5
            break
        default : 
            percentage = document.getElementById("custom").value/100
            break 
    }
    
}

function Reset(){
    tipAmountE.innerHTML = "0.00"
    totalAmountE.innerHTML = "0.00"
    bill.value = ""
    people.value = ""
}



