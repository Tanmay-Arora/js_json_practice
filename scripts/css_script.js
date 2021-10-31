function toggleFunction(btnElement) {
  let dispEle = document.getElementById("displayElement");
  let recEle = document.getElementById("addRecordElement");
  dispEle.classList.toggle("d-none");
  recEle.classList.toggle("d-none");
  if (btnElement === null) {
    printData(empData);
  } else {
    formBuilder(btnElement);
  }
}

function errorClassToggle() {
  if (searchFormError == true) {
    document.getElementById("errorRow").classList.toggle("d-none");
  }
}

function clearBtnToggle() {
  if (filterApplied == false) {
    document.getElementById("clearFilterBtn").classList.toggle("d-none");
  }
}
