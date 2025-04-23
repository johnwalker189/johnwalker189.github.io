// Example JavaScript code to change the text content dynamically
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement('button');
    button.textContent = "Click me!";
    
    button.addEventListener("click", function() {
        alert("Thank you for visiting my portfolio!");
    });
    
    document.body.appendChild(button);
});
