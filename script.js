    
    //The dictionary to keep track of locations for the interactive map
    const myCoordnates = {
        Schewe: "39.73132677118451,-90.24614954675675"
    };

    // Declaring variables
    let currentCoordinates; // This will hold the coordinates depending on which item is chosen.
    const dropDown = document.getElementById("options");
    const originalContainer = document.querySelector('.maps_flag_marker'); // This is a copy of the feedback div, the original

    
    dropDown.addEventListener("change", function() {
        currentValue = dropDown.value;
        currentCoordinates = myCoordnates[currentValue];
        console.log(currentCoordinates)
        if (currentValue !== "Choose One"){
            originalContainer.className = "d-flex"
            originalContainer.setAttribute("position", currentCoordinates);
        }
        

});