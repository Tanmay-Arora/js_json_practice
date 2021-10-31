//search field selection
function selectSearchField(selection) {
  let eve = selection.getAttribute("data-selection");
  fieldToSearch = eve;
  if (eve == "code") {
    document.getElementById("searchFieldMenu").textContent = "Employee Code";
    document
      .getElementById("searchBox")
      .setAttribute("placeholder", "Search Employee Code");
  } else if (eve == "name") {
    document.getElementById("searchFieldMenu").textContent = "Employee Name";
    document
      .getElementById("searchBox")
      .setAttribute("placeholder", "Search Employee Name");
  } else if (eve == "desg") {
    document.getElementById("searchFieldMenu").textContent = "Designation";
    document
      .getElementById("searchBox")
      .setAttribute("placeholder", "Search By Role");
  }
}

//search data
function searchFunc(ele) {
  errorClassToggle();
  searchFormError = false;
  searchResult = new Array();
  item = document.getElementById("searchBox").value;
  temp = null;
  eve = ele.getAttribute("data-task");
  if (eve == "search") {
    if (item == "") {
      printSearchData(searchResult);
      return;
    }
    if (fieldToSearch == null) {
      //some code for error handling
    } else if (fieldToSearch === "code") {
      temp = empData.filter(
        (data) => data.code.toLowerCase().search(item.toLowerCase()) != -1
      );
    } else if (fieldToSearch === "name") {
      temp = empData.filter(
        (data) => data.name.toLowerCase().search(item.toLowerCase()) != -1
      );
    } else if (fieldToSearch === "desg") {
      temp = empData.filter(
        (data) =>
          data.designation.toLowerCase().search(item.toLowerCase()) != -1
      );
    }
    if (temp == null) {
      return;
    }
    searchResult = [...temp];
    printSearchData(searchResult);
  } else if (eve == "clear") {
    printSearchData(empData);
    document.getElementById("searchBox").value = "";
    document.getElementById("searchFieldMenu").textContent =
      "Select Search Filter";
    document.getElementById("searchBox").setAttribute("placeholder", "");
  }
}
