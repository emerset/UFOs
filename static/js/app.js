// 12.2.4
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// 12.5.1
function buildTable(data) {
    // clear table
    tbody.html("");

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