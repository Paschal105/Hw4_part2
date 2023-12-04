/*
File: table.js
GUI Assignment: Creating an Interactive Dynamic Table
Paschal Ojatabu , UMass Lowell Computer Science,
Paschal_Ojatabu@student.uml.edu
This file checks to see if the user input is valid, and then generates a multiplication table based on user input.
Copyright (c) 2023 by Paschal. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by PO on December 3, 2023 at 6:00pM
*/

//This function will check for valid input by the user. If the input is not valid, an error message will appear and the input form that was not valid will turn red to indicate it needs to be fixed. Once it has confirmed valid input, the function will take the paramters entered by the user to generate a multiplication table. This is achieved by constructing a 2D array with the multiplication values. Then, a string variable is concatenated with html tags to form a table with the first column and the first column being the range of parameters. 

    function generate_mult_table() {
    // cast values entered by users into numbers to ensure proper result when doing comparisions.
    // https://www.w3schools.com/js/js_comparisons.asps
    var minHoriz = Number(document.getElementById('minHoriz').value);
    var maxHoriz = Number(document.getElementById('maxHoriz').value);
    var minVert = Number(document.getElementById('minVert').value);
    var maxVert = Number(document.getElementById('maxVert').value);
 
        //swaps min and max horizontal values if mins > maxs
        if (minHoriz > maxHoriz) {
            var temp = minHoriz;
            minHoriz = maxHoriz;
            maxHoriz = temp;
        }
        //swaps min and max vertical values if mins > maxs
        if (minVert > maxVert) {
            var temp = minVert;
            minVert = maxVert;
            maxVert = temp;
        }

        // calculate the rows and columns by taking absolute difference of mins and maxs
        var rows = Math.abs(minVert - maxVert)
        var columns = Math.abs(minHoriz - maxHoriz)

        var horiz = minHoriz;
        var vert = minVert;

        // 1D array with enough elements for the rows 
        var mult_table = new Array(rows + 1);
        //each element inside 1D array becomes an array with enough space for columns, mult_table is now 2D
        //https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
        for (var i = 0; i < mult_table.length; i++) {
            mult_table[i] = new Array(columns + 1);
        }
        // iterates over rows and columns and calculates multiplication value for each cell
        for (var i = 0; i < mult_table.length; i++) {
            for (var j = 0; j < mult_table[i].length; j++) {
                mult_table[i][j] = vert * horiz;
                horiz++;
            }
            //reset horizontal value because the next row will be calculated
            horiz = minHoriz;
            vert++;
        }

        //create a string with HTML tags to create a table with bootstrap, first element in first row is blank
        var fill_table = '<table class="table table-bordered"><tr><td></td>';
        //creating the rest of the first row
        for (var head = minHoriz; head <= maxHoriz; head++) {
            fill_table += "<td>" + head + "</td>";
        }

        fill_table += "</tr>"

        for (var i = 0; i <= rows; i++) {
            //creating the first column
            fill_table += "<tr><td>" + minVert + "</td>";
            //filling the rest of the table with mult values
            for (var j = 0; j <= columns; j++) {
                fill_table += "<td>" + mult_table[i][j] + "</td>";
            }
            minVert++;

            fill_table += "</tr>";
        }

        fill_table += "</table>";
        //add the code to the HTML file to print the table
        //https://www.tutorialrepublic.com/faq/how-to-assign-block-of-html-code-to-a-javascript-variable.php
        //https://www.w3schools.com/html/html_tables.asp
        //https://getbootstrap.com/docs/4.0/content/tables/
        var final_table = document.getElementById('mult_table');
        final_table.innerHTML = fill_table;

   // }
    }
    function saveTable() {

        $("#tableTabs").tabs();
        //get the values for each input
        var minHoriz = Number(document.getElementById('minHoriz').value);
        var maxHoriz = Number(document.getElementById('maxHoriz').value);
        var minVert = Number(document.getElementById('minVert').value);
        var maxVert = Number(document.getElementById('maxVert').value);
        //increment tab index
        tabIndex++;
    
        //creates a tab with a header lisitng the paramters
        var params = "<li class='tab'><a href='#tab-" + tabIndex + "'>" + minHoriz +
            " x " + maxHoriz + " with " + minVert + " x " + maxVert + "</a>" +
            "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";
    
    
        $("#tableTabs ul").append(params);
    
        // saves the mult table to the tab
        $("#tableTabs").append('<div id="tab-' + tabIndex + '">' + $("#mult_table").html() + '</div>');
    
        // new tab visible
        $("#tableTabs").tabs("refresh");
    
        // new tab active
        $("#tableTabs").tabs("option", "active", -1);
    
        // https://jqueryui.com/tabs/#manipulation
        $("#tableTabs").delegate("span.ui-icon-close", "click", function() {
            var panelID = $(this).closest("li").remove().attr("aria-controls");
            $("#" + panelID).remove();
    
    
            $("#tabs").tabs("refresh");
    
            // https://api.jqueryui.com/tabs/#method-destroy
            if ($('#tabs ul li.tab').length == 0) {
                try {
                    $("#tabs").tabs("destroy");
                } catch (e) {}
    
                return false;
            }
        });
    }
