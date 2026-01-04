    // Get the element by its ID
    var yearElement = document.getElementById("currentYear");
    
    // Check if the element exists to prevent errors
    if (yearElement) {
        // Create a new Date object and get the full 4-digit year
        var currentYear = new Date().getFullYear();
        
        // Set the innerHTML of the element to the current year
        yearElement.innerHTML = currentYear;
    }