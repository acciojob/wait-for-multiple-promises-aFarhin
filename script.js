// Get a reference to the output table body
const tableBody = document.getElementById("output");

// Create an array of three Promises
const promises = [
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => resolve(time), time * 1000);
  }),
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => resolve(time), time * 1000);
  }),
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => resolve(time), time * 1000);
  }),
];

// Add a row to the table to indicate that data is loading
const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.innerText = "Loading...";
loadingRow.appendChild(loadingCell);
tableBody.appendChild(loadingRow);

// Use Promise.all to wait for all the Promises to resolve
Promise.all(promises).then((results) => {
  // Remove the loading row
  tableBody.removeChild(loadingRow);

  // Add a row for each Promise's result
  for (let i = 0; i < promises.length; i++) {
    const resultRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.innerText = `Promise ${i + 1}`;
    resultRow.appendChild(nameCell);

    const timeCell = document.createElement("td");
    timeCell.innerText = `${results[i]}`;
    resultRow.appendChild(timeCell);

    tableBody.appendChild(resultRow);
  }

  // Add a row for the total time taken
  const totalTime = results.reduce((acc, cur) => acc + cur, 0);
  const totalRow = document.createElement("tr");

  const totalNameCell = document.createElement("td");
  totalNameCell.innerText = "Total";
  totalRow.appendChild(totalNameCell);

  const totalTimeCell = document.createElement("td");
  totalTimeCell.innerText = `${totalTime.toFixed(3)}`;
  totalRow.appendChild(totalTimeCell);

  tableBody.appendChild(totalRow);
});
