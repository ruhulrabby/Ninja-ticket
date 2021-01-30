function ticketBookingChange (category, isIncrease) {
    const ticketInput = document.getElementById( category + '-input');
    const ticketCount = parseInt(ticketInput.value);
         let ticketNewCount = ticketCount;
         if (isIncrease == true) {
            ticketNewCount = ticketCount + 1;
         }
         if (isIncrease == false && ticketCount > 0) {
            ticketNewCount = ticketCount - 1;
         }
         ticketInput.value = ticketNewCount;   
         calculateTotal();       
}

function calculateTotal() {
    const firstClassInput = document.getElementById('first-class-input');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById('economy-class-input');
    const economyClassCount = parseInt(economyClassInput.value);

    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById("sub-total").innerText = '$' + totalPrice;

    const vat = Math.round(totalPrice * 0.1);
    document.getElementById("vat-amount").innerText = '$' + vat;

    const grandTotal = totalPrice + vat;
    document.getElementById("grand-total").innerText = "$" + grandTotal;

} 

// const firstClassInput = document.getElementById('first-class-input');
// const firstClassCount = parseInt(firstClassInput.value);

// const economyClassInput = document.getElementById('economy-class-input');
// const economyClassCount = parseInt(economyClassInput.value);


// const totalPrice = firstClassCount * 150 + economyClassCount * 100;
// document.getElementById("sub-total").innerText = '$' + totalPrice;

// const vat = Math.round(totalPrice * 0.1);
// document.getElementById("vat-amount").innerText = '$' + vat;

// const grandTotal = totalPrice + vat;
// document.getElementById("grand-total").innerText = "$" + grandTotal;


// function handleFirstClassBookingChange (isIncrease) {
//     const firstClassInput = document.getElementById("first-class-input");
//     const firstClassCount = parseInt(firstClassInput.value);
//          let firstClassNewCount = firstClassCount;
//          if (isIncrease == true) {
//              firstClassNewCount = firstClassCount + 1;
//          }
//          if (isIncrease == false && firstClassCount > 0) {
//             firstClassNewCount = firstClassCount - 1;
//          }
//          firstClassInput.value = firstClassNewCount;
      
// }

// function handleEconomyClassBookingChange (isIncrease) {
//     const economyClassInput = document.getElementById("economy-class-input");
//     const economyClassCount = parseInt(economyClassInput.value);
//          let economyClassNewCount = economyClassCount;
//          if (isIncrease == true) {
//             economyClassNewCount = economyClassCount + 1;
//          }
//          if (isIncrease == false && economyClassCount > 0) {
//             economyClassNewCount = economyClassCount - 1;
//          }
//          economyClassInput.value = economyClassNewCount;
      
// }



// //First class increment button event listener
// document.getElementById('first-class-increment-btn').addEventListener("click", function() {
//     const firstClassInput = document.getElementById("first-class-input");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;

    
// });

// // First class Decrement button event handler
// document.getElementById('first-class-decrement-btn').addEventListener("click", function(){
//     const firstClassInput = document.getElementById("first-class-input");
//     const firstClassCount = parseInt(firstClassInput.value);
//     if (firstClassCount > 0) {
//     const firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;
//     };
// });


// // Economy class Increment button event listener
// document.getElementById("economy-class-increment-btn").addEventListener("click", function(){
//     const economyClassInput = document.getElementById("economy-class-input");
//     const economyClassCount = parseInt(economyClassInput.value);
//     const economyClassNewCount = economyClassCount + 1;
//     economyClassInput.value = economyClassNewCount;
// } );


// // Economy class Decrement button event listener
// document.getElementById("economy-class-decrement-btn").addEventListener("click", function(){
//     const economyClassInput = document.getElementById("economy-class-input");
//     const economyClassCount = parseInt(economyClassInput.value);
//     if (economyClassCount > 0) {
//     const economyClassNewCount = economyClassCount - 1;
//     economyClassInput.value = economyClassNewCount;
//     };
// } );



