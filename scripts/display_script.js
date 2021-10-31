//print data
function printData(data) {
  //tableSelector.innerHTML = '';
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    if (i < rowCount && data[i] !== tempEmpData[i]) {
      let selRow = tableSelector.rows[i];
      selRow.cells[0].innerHTML = data[i].code;
      selRow.cells[1].innerHTML = data[i].name;
      selRow.cells[2].innerHTML = data[i].designation;
      selRow.cells[3].innerHTML = data[i].ctc;
    } else if (i >= rowCount) {
      let addRow = tableSelector.insertRow(tableSelector.length);
      //defining cells
      empCode = addRow.insertCell(0);
      empName = addRow.insertCell(1);
      empDesg = addRow.insertCell(2);
      empCTC = addRow.insertCell(3);
      empAction = addRow.insertCell(4);
      //assign data to cell
      empCode.innerHTML = data[i].code;
      empName.innerHTML = data[i].name;
      empDesg.innerHTML = data[i].designation;
      empCTC.innerHTML = data[i].ctc;
      empAction.innerHTML =
        '<a type="button" id="updateBtn" data-id="' +
        i +
        '" data-task="update" onclick="toggleFunction(this)"><i class="fa fa-edit text-success"></a></i>&nbsp;&nbsp;&nbsp;&nbsp;<a type="button" id="delBtn" data-id="' +
        i +
        '" onclick="deleteRecord(this)"><i class="fa fa-trash text-danger"></i></a>';
      rowCount++;
    } else {
      tableSelector.rows[i].cells[4]
        .getElementsByTagName("a")[0]
        .setAttribute("data-id", i);
      tableSelector.rows[i].cells[4]
        .getElementsByTagName("a")[1]
        .setAttribute("data-id", i);
    }
  }
}

function printSearchData(data) {
  if (data == "") {
    searchFormError = true;
    errorClassToggle();
  }
  tableSelector.innerHTML = "";
  rowCount = 0;
  printData(data);
}
