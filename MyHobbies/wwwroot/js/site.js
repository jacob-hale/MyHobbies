// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Calculate cost based on hours input (jQuery)
function calculateCost() {
    const hours = parseFloat($('#hours').val()) || 0;

    const total = hours * 15;

    if (hours > 0) {
        $('#totalCost').val(`$${total.toFixed(2)}`);
    }
    else {
        alert("Please enter a valid number of hours.")
    }
}