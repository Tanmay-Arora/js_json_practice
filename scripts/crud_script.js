//save data
function addRecord() {
  console.log("In func add Record");
  let empFormData = {};
  empFormData["code"] = formCodeSel.value;
  empFormData["name"] = formNameSel.value;
  empFormData["designation"] = formDesgSel.value;
  empFormData["ctc"] = formCtcSel.value;
  empData.push(empFormData);
  tempEmpData = empData;
  saveDataToJson();
  toggleFunction(null);
}

//update data
function updateRecord(i) {
  console.log(i);
  tempEmpData[i] = empData[i];
  let temp = empData[i];
  temp["code"] = formCodeSel.value;
  temp["name"] = formNameSel.value;
  temp["designation"] = formDesgSel.value;
  temp["ctc"] = formCtcSel.value;
  empData[i] = temp;
  saveDataToJson();
  toggleFunction(null);
}

//delete data
function deleteRecord(btnEelement) {
  let i = btnEelement.getAttribute("data-id");
  console.log(i);
  empData.splice(i, 1);
  deleteNull(empData);
  console.log(empData);
  tableSelector.deleteRow(i);
  rowCount--;
  saveDataToJson();
  printData(empData);
}

function deleteNull(data) {
  return data.filter(x => x != null);
}
