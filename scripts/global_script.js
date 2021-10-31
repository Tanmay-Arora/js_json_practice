//global variables
let empData;
let tempEmpData;
const method = "GET";
const url = "../resources/data.json";
let rowCount = 0;
let fieldToSearch = null;
let filtertype = null;
let searchFormError = false;
let filterApplied = false;

//form fields
let formCodeSel = document.getElementById("code");
let formNameSel = document.getElementById("name");
let formDesgSel = document.getElementById("designation");
let formCtcSel = document.getElementById("ctc");
let formHead = document.getElementById("formHeading");
let formbtn = document.getElementById("formButton");

//table selector
let tableSelector = document
  .getElementById("empList")
  .getElementsByTagName("tbody")[0];

// Webpage Starter Function
window.onload = () => {
  fetchDataFromJson();
  tempEmpData = empData;
  printData(empData);
};
