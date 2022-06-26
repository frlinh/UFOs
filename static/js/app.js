// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row =tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}