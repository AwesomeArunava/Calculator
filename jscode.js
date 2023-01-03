
function display(value){
    document.getElementById("output_value").value += value;
}

function calculate(){
    try{
        
            document.getElementById("output_value").value = eval(document.getElementById("output_value").value);
        
                
    }
    catch(err){
        alert("Invalid");
    }
}

function cle(){
    document.getElementById("output_value").value = '';
    // document.getElementById("output_value").value = document.getElementById("output_value").value.slice(0, 0);
}

function del(){
    document.getElementById("output_value").value = document.getElementById("output_value").value.slice(0, -1);
}

function per(){
    
    document.getElementById("output_value").value = eval(document.getElementById("output_value").value)/100;
}


// var input = document.getElementById("output_value");

// Execute a function when the user presses a key on the keyboard
addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    
        try{
            
                document.getElementById("output_value").value = eval(document.getElementById("output_value").value);
            
                    
        }
        catch(err){
            alert("Invalid");
        }
    
    // Cancel the default action, if needed
    // event.preventDefault();
    // Trigger the button element with a click
    
  }
}); 