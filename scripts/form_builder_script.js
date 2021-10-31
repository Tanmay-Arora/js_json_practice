//form builder
function formBuilder(btnElement) {
  let eve = btnElement.getAttribute("data-task");
  if (eve == "add") {
    formHead.textContent = "Add New Employee Record";
    formbtn.textContent = "Submit";
    fieldValueSetter("", "", "", "");
    formbtn.removeEventListener("click", function () {
      updateRecord(i);
    });
    formbtn.addEventListener("click", addRecord);
  } else if (eve == "update") {
    formHead.textContent = "Update Employee Record";
    formbtn.textContent = "Update";
    let i = btnElement.getAttribute("data-id");
    fieldValueSetter(
      empData[i].code,
      empData[i].name,
      empData[i].designation,
      empData[i].ctc
    );
    formbtn.removeEventListener("click", addRecord);
    formbtn.addEventListener("click", function () {
      updateRecord(i);
    });
  }
}

//form field value setter
function fieldValueSetter(code, name, designation, ctc) {
  formCodeSel.value = code;
  formNameSel.value = name;
  formDesgSel.value = designation;
  formCtcSel.value = ctc;
}
