// import the data from data.js
const tableData = data;
var tbody = d3.select("tbody");
function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}


var filters = {};

function updateFilters() {
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#cityfilter").property("value");
    let state = d3.select("#statefilter").property("value");
    let country = d3.select("#countryfilter").property("value");
    let shape = d3.select("#shapefilter").property("value"); 
    if (date) {
        filters.datetime = date;    
    } else {
        filters.datetime = null;
    }
    
    if (city) {
        filters.city = city;
    } else {
        filters.city = null;
    }
    
    if (state) {
        filters.state = state;
    } else {
        filters.state = null;
    }
    
    if (country) {
        filters.country = country;
    } else {
        filters.country = null;
    }
    
    if (shape) {
        filters.shape = shape;
    } else {
       filters.shape = null;
    }
    filterTable();
}

function filterTable() {

    let filteredData = tableData; 
    for(const [key, value] of Object.entries(filters)) {  
        if (value) {
            filteredData = filteredData.filter(row => row[key] === value);
        }
    }
  buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", updateFilters);
buildTable(tableData);
