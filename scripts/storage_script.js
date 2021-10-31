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
