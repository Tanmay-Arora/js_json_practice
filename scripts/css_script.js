function toggleFunction(btnElement){
    let dispEle = document.getElementById("displayElement");
    let recEle = document.getElementById("addRecordElement");
    dispEle.classList.toggle("d-none");
    recEle.classList.toggle("d-none");
    if(btnElement === null){
        printData();
    }
    else{
        formBuilder(btnElement);
    }
}