const seatSelectedEi = document.getElementById('seatSelected')
const totalSeat = document.getElementById('totalSeat')
const seatCount = []
const priceIncrease = document.getElementById('priceIncrease')
let totalPrice = 0;
const cupon_input = document.getElementById('cupon-input')
const cupon_btn = document.getElementById('cupon-btn')

function handlreSeat(event){
    // console.log(event)
    // const value = event.innerText
    // if(seatCount.includes(value){
    //     alert("already booked")
    // })
    const value = event.innerText;
    if(seatCount.includes(value)){
       return alert('seat already booked')
    }else if(seatCount.length < 4 ){
        event.classList.add('bg-primary','text-white')
        seatSelectedEi.innerHTML += `
        <li class="text-base flex font-normal justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li> 
        `
        // count and show seat
        seatCount.push(event.innerText)
        totalSeat.innerText = seatCount.length
        // price Update
        totalPrice +=550
        priceIncrease.innerText = totalPrice;
        const default_textEi = document.getElementById('default-text') 
        default_textEi.classList.add('hidden')

        if(seatCount.length > 3){
            cupon_input.removeAttribute('disabled')
            cupon_btn.removeAttribute('disabled')
        }
    }else{
        return alert("You booking maximun 4 seat")
    }
}