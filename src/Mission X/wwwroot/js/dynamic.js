

/**
 * Function that is responsible for adding and deleting the text fields in Simple Plan View Problems - Without Tabs.
 * This function is called as soon as the document is ready and loaded.
*/

$(document).ready(function () {

    // Counter initiated to 2.
    var counter = 2;
    var group = $("#TextBoxesGroup").val();

    // Function invoked as soon as the 'Add' button is clicked.

    $("#addButton").click(function () {

        // Checks if counter is greater than 10, then throws an error message.

        if (counter > 10) {
            $("#errormsg").html("Limit of legs exceeded...!!!");
            return false;
        }
       
        

         // If the counter is less than one - Creates a parent element 'div'.
        var newTextBoxDiv = $(document.createElement('div'))
             .attr({
                 class: "mdl-textfield mdl-js-textfield",
                 id: "field" + counter
             });

        // After creating the parent element, creates a child elements.
        newTextBoxDiv.after().html('<input class="mdl-textfield__input" type="text" id="direction' + counter + '">' +
            '<label class="mdl-textfield__label" for="direction' + counter + '" id="label' + counter + '">Direction ' + counter + '</label>' +

            '<div id="error' + counter + '" style="color:red"></div>');

        // Appending of child elements.
        newTextBoxDiv.appendTo("#TextBoxesGroup");

        // Incrementing the counter.
        counter++;

        // End of function that handles Add button.
    });


    // Button clicked as soon as the 'Delete' button is clicked.

    $("#removeButton").click(function () {

        // Checks the counter if less than 1 - Throws an error.
        if (counter == 1) {
            alert("No more directions to remove");
            return false;
        }

            // Else decrements the counter and removes the respective child element.

        else {



            counter--;
            $("#field" + counter).remove();
        }



        // End of function that handles remove button

    });


    // End of document ready function.
});

