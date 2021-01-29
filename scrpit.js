//First class increment button event listener
document.getElementById('first-class-increment-btn').addEventListener("click", function() {
    const firstClassInput = document.getElementById("first-class-input");
    const firstClassCount = parseInt(firstClassInput.value);
    const firstClassNewCount = firstClassCount + 1;
    firstClassInput.value = firstClassNewCount;
    
});

// First class Decrement button event handler
document.getElementById('first-class-decrement-btn').addEventListener("click", function(){
    const firstClassInput = document.getElementById("first-class-input");
    const firstClassCount = parseInt(firstClassInput.value);
    const firstClassNewCount = firstClassCount - 1;
    firstClassInput.value = firstClassNewCount;
});


// Economy class Increment button event listener
document.getElementById("economy-class-increment-btn").addEventListener("click", function(){
    const economyClassInput = document.getElementById("economy-class-input");
    const economyClassCount = parseInt(economyClassInput.value);
    const economyClassNewCount = economyClassCount + 1;
    economyClassInput.value = economyClassNewCount;
} );


// Economy class Decrement button event listener
document.getElementById("economy-class-decrement-btn").addEventListener("click", function(){
    const economyClassInput = document.getElementById("economy-class-input");
    const economyClassCount = parseInt(economyClassInput.value);
    const economyClassNewCount = economyClassCount - 1;
    economyClassInput.value = economyClassNewCount;
} );



