/*File: tableError.js
GUI Assignment: Creating an Interactive Dynamic Table
Paschal Ojatabu , UMass Lowell Computer Science,
Paschal_Ojatabu@student.uml.edu
This file checks to see if the user input is valid with jquery, and calls generates multiplication table based on user input.
Copyright (c) 2023 by Paschal. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by PO on December 3, 2023 at 6:00pM
*/
// waits for the html wediste to run first 

var tabIndex = 1;
$(function(){



    $("#minHorizSlider").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#minHoriz").val(ui.value);
            $("#tableForm").submit();
        }
    });
    $("#minHoriz").on("keyup", function() {
        $("#minHorizSlider").slider("value", this.value);
        $("#tableForm").submit();  
      });
    $("#maxHorizSlider").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#maxHoriz").val(ui.value);
            $("#tableForm").submit();
        }
    });
    $("#maxHoriz").on("keyup", function() {
        $("#maxHorizSlider").slider("value", this.value);
        $("#tableForm").submit();  
      });
    $("#minVertSlider").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#minVert").val(ui.value);
            $("#tableForm").submit();
        }
    });
    $("#minVert").on("keyup", function() {
        $("#minVertSlider").slider("value", this.value);
        $("#tableForm").submit();  
      });
    $("#maxVertSlider").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#maxVert").val(ui.value);
            $("#tableForm").submit();
        }
    });
    $("#maxVert").on("keyup", function() {
        $("#maxVertSlider").slider("value", this.value);
        $("#tableForm").submit();  
      });

    $("#tableForm").validate({
        rules:  {
            minHoriz: {
            //the key name on the left side. validation rules are defined on the right side 

                required: true,
                number: true,
                min: -50,
                max: 50
            },
            maxHoriz:  {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            minVert:  {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            maxVert:  {
                required: true,
                number: true,
                min: -50,
                max: 50
            },        
        },
        //this are the message that will be displayed if ruless not met 
        messages: {
            minHoriz: {
                required: "Please enter a minimum Horizontal number between -50 and 50.",
                number: "Please enter a valid number for the minimum Horizontal value.",
                min: "The number entered is too small. Please enter a number between -50 and 50 for the minimum Horizontal value.",
                max: "The number entered is too large. Please enter a number between -50 and 50 for the minimum Horizontal value."
            },
            maxHoriz: {
                required: "Please enter a maximum Horizontal number between -50 and 50.",
                number: "Please enter a valid number for the maximum Horizontal value.",
                min: "The number entered is too small. Please enter a number between -50 and 50 for the maximum Horizontal value.",
                max: "The number entered is too large. Please enter a number between -50 and 50 for the maximum Horizontal value."
            },
            minVert: {
                required: "Please enter a minimum Vertical number between -50 and 50.",
                number: "Please enter a valid number for the minimum Vertical value.",
                min: "The number entered is too small. Please enter a number between -50 and 50 for the minimum Vertical value.",
                max: "The number entered is too large. Please enter a number between -50 and 50 for the minimum Vertical value."
            },
            maxVert: {
                required: "Please enter a maximum Vertical number between -50 and 50.",
                number: "Please enter a valid number for the maximum Vertical value.",
                min: "The number entered is too small. Please enter a number between -50 and 50 for the maximum Vertical value.",
                max: "The number entered is too large. Please enter a number between -50 and 50 for the maximum Vertical value."
            },

        },
        //makes table only when input is valid 
        submitHandler: function() {
            generate_mult_table();
            return false;
        },
        
        //if the input are invalid 
        invalidHandler: function() {
            $("#mult_table").empty();
        },
         // submits the form automatically
         onkeyup: function( element, event ) {
            submitForm();
          }


    });
});