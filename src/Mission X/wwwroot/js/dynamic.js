

/**
 * Function that is responsible for adding and deleting the text fields in Simple Plan View Problems - Without Tabs.
 * This function is called as soon as the document is ready and loaded.
*/

$(document).ready(function () {





    // Counter initiated to 2.
    var counter = 2;
    

    // Function invoked as soon as the 'Add' button is clicked.

    $("#addButton").click(function () {

        // Checks if counter is greater than 10, then throws an error message.

        if (counter > 5) {
            $("#errormsg").html("Limit of legs exceeded...!!!");
            return false;
        }
       
        
        
         // If the counter is less than one - Creates a parent element 'div'.
        var panel = $(document.createElement('div'))
             .attr({
                 class: "panel panel-default",
                 id: "leg"+counter
             });

        // After creating the parent element, creates a child elements.
        panel.after().html('<div class="panel panel-heading">Leg ' + counter + '</div>'+
                            '<div class="panel panel-body">'+
                            '<div class="form-group">'+
                                                    
                                                   '<div class="col-sm-10">'+
                                                        '<select id="select111" class="form-control">'+
                                                            '<option value="NE">North - East</option>'+
                                                           ' <option value="NW">North - West</option>'+
                                                           ' <option value="SE">South - East</option>'+
                                                           ' <option value="SW">South - West</option>'+
                                                       ' </select>'+
                                                  '</div>'+
                                               '</div>' + '<br/><br/>Degrees: <p id="degreeResult' + counter + '">');

        
        

        // Appending of child elements.
        panel.appendTo("#TextBoxesGroup");

        // Incrementing the counter.
        counter++;

        // End of function that handles Add button.
    });


    // Button clicked as soon as the 'Delete' button is clicked.

    $("#removeButton").click(function () {

        $("#errormsg").hide();

        // Checks the counter if less than 1 - Throws an error.
        if (counter == 1) {
            alert("No more directions to remove");
            return false;
        }

            // Else decrements the counter and removes the respective child element.

        else {



            counter--;
            $("#leg" + counter).remove();
        }



        // End of function that handles remove button

    });


    // End of document ready function.
});



function degreeResult(x) {

    $("#degreeResult1").html(x);

}



function pacesResult(x) {

    $("#pacesResult1").html(x);
}

