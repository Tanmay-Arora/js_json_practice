//fetch data
/*
const xhr_fetch = new XMLHttpRequest();
xhr_fetch.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        empData = JSON.parse(this.responseText);
        printData(empData);
    } 
};
xhr_fetch.open(method, url, true);
xhr_fetch.send();
*/

window.onload = () => {
    
    fetchDataFromJson();
    tempEmpData = empData;
    printData();
}

//save data
function saveDataToJson() {
    let jsonData = JSON.stringify(empData);
    localStorage.setItem("data", jsonData);
}


//fetch data
function fetchDataFromJson() {
    let jsonData = localStorage.getItem("data");
    empData = JSON.parse(jsonData);
}


//print data
function printData() {
    //tableSelector.innerHTML = '';
    for (let i = 0; i < empData.length; i++) {
        
        if(i<rowCount && empData[i] !== tempEmpData[i]){
            let selRow = tableSelector.rows[i];
            selRow.cells[0].innerHTML = empData[i].code;
            selRow.cells[1].innerHTML = empData[i].name;
            selRow.cells[2].innerHTML = empData[i].designation;
            selRow.cells[3].innerHTML = empData[i].ctc;
        }
        else if(i >= rowCount){
        
            let addRow = tableSelector.insertRow(tableSelector.length);
            //defining cells
            empCode = addRow.insertCell(0);
            empName = addRow.insertCell(1);
            empDesg = addRow.insertCell(2);
            empCTC = addRow.insertCell(3);
            empAction = addRow.insertCell(4);
            //assign data to cell
            empCode.innerHTML = empData[i].code;
            empName.innerHTML = empData[i].name;
            empDesg.innerHTML = empData[i].designation;
            empCTC.innerHTML = empData[i].ctc;
            empAction.innerHTML = '<a type="button" id="updateBtn" data-id="' + i + '" data-task="update" onclick="toggleFunction(this)"><i class="fa fa-edit text-success"></a></i>&nbsp;&nbsp;&nbsp;&nbsp;<a type="button" id="delBtn" data-id="' + i + '" onclick="deleteRecord(this)"><i class="fa fa-trash text-danger"></i></a>';
            rowCount++;
        }
        else{
            tableSelector.rows[i].cells[4].getElementsByTagName("a")[0].setAttribute("data-id", i);
            tableSelector.rows[i].cells[4].getElementsByTagName("a")[1].setAttribute("data-id", i);
        }
    }
}

//form builder
function formBuilder(btnElement){
        let eve = btnElement.getAttribute('data-task')
        if(eve == 'add'){
            formHead.textContent = "Add New Employee Record";
            formbtn.textContent = "Submit";
            fieldValueSetter('','','','');
            formbtn.removeEventListener("click", function(){ updateRecord(i); });
            formbtn.addEventListener("click", addRecord);
        }
        else if(eve == 'update'){
            formHead.textContent = "Update Employee Record";
            formbtn.textContent = "Update";
            let i = btnElement.getAttribute('data-id');
            fieldValueSetter(empData[i].code, empData[i].name, empData[i].designation, empData[i].ctc);
            formbtn.removeEventListener("click", addRecord);
            formbtn.addEventListener("click", function(){ updateRecord(i); });
        }
}

//form field value setter
function fieldValueSetter(code, name, designation, ctc){
    formCodeSel.value = code;
    formNameSel.value = name;
    formDesgSel.value = designation;
    formCtcSel.value = ctc;
}

//save data
function addRecord() {
    console.log("In func add Record")
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
    let i = btnEelement.getAttribute('data-id');
    console.log(i);
    empData.splice(i,1);
    console.log(empData);
    tableSelector.deleteRow(i);
    rowCount--;
    saveDataToJson();
    printData();
}