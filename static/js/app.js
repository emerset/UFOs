// 12.2.4
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// 12.5.1
function buildTable(data) {
    // clear table
    tbody.html("");

    // 12.5.2
    // loop through data array
    data.forEach((dataRow) => {
        // assign row to local variable
        let row = tbody.append("tr");

        // loop through values in row
        Object.values(dataRow).forEach((val) => {
       
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// 12.5.3
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // 12.5.4
     // Check to see if a date was entered and filter the data using that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);