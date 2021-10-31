//filter type selection
function selectFilterType(selection) {
  let eve = selection.getAttribute("data-selection");
  filtertype = eve;
  resultArray = [...empData];
  clearBtnToggle();
  filterApplied = true;
  switch (filtertype) {
    case "ctcdesc":
      document.getElementById("filterMenu").textContent = "CTC: High To Low";
      ctcSortDescending(resultArray);
      break;
    case "ctcasc":
      document.getElementById("filterMenu").textContent = "CTC: Low To High";
      ctcSortAscending(resultArray);
      break;
    case "nameasc":
      document.getElementById("filterMenu").textContent = "Name: Ascending";
      nameSortAscending(resultArray);
      break;
    case "namedesc":
      document.getElementById("filterMenu").textContent = "Name: Descending";
      nameSortDescending(resultArray);
      break;
  }
}

//sort ascending based on ctc
function ctcSortAscending(arrayParam) {
  arrayParam.sort((a, b) => {
    return parseInt(a.ctc) - parseInt(b.ctc);
  });
  printSearchData(arrayParam);
}

//sort descending based on ctc
function ctcSortDescending(arrayParam) {
  arrayParam.sort((a, b) => {
    return parseInt(a.ctc) - parseInt(b.ctc);
  });
  printSearchData(arrayParam.reverse());
}

//sort ascending based on name
function nameSortAscending(arrayParam) {
  arrayParam.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  printSearchData(arrayParam);
}

//sort descending based on name
function nameSortDescending(arrayParam) {
  arrayParam.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  printSearchData(arrayParam.reverse());
}

function clearFilter() {
  document.getElementById("filterMenu").innerHTML =
    '<i class="fa fa-sliders"></i>&nbsp;&nbsp;Filter Data';
  printSearchData(empData);
  filterApplied = false;
  clearBtnToggle();
}
