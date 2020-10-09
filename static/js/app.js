
// from data.js
var tableData = data;

// YOUR CODE HERE!
// Add Data To Table and display all data.

//Assign Table to Variable
var tbody = d3.select("tbody");

//add all table data to table.
tableData.forEach((report) => {
    //console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});



//Create the function
function runfilters() {

    //remove the current data from tbody
    d3.select("tbody").html("");

    //Don't refresh the page
    d3.event.preventDefault();


    //Set the filter keywords to variables and make them all lowercase
    var FilterCountry = d3.select("#country").property("value");

    var FilterCity = d3.select("#city").property("value");


    //Select filters based on inputs
    FilteredData = tableData;

        if (FilterCountry) {
        FilteredData = FilteredData.filter(record => record.Country_or_area === FilterCountry);
        }
        if (FilterCity) {
        FilteredData = FilteredData.filter(record => record.City_Area === FilterCity);
        }

    //Re-Enter the table based on Filters

    FilteredData.forEach((report) => {
        var row = tbody.append('tr');

        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
}


function runreset() {

d3.select("tbody").html("");

//add all table data to table.
tableData.forEach((report) => {
    //console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
}


//Selecting ID filter button and create the clicking event.
var resetbutton = d3.select("#reset-btn");
resetbutton.on("click", runreset);

//Selecting ID filter button and create the clicking event.
var filterbutton = d3.select("#filter-btn");
filterbutton.on("click", runfilters);
//or pressing enter
