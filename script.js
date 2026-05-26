function addStudent() {
    let name=document.getElementById("studentName").value;
     let roll=document.getElementById("rollNumber").value;
     let dept=document.getElementById("department").value;
     document.getElementById("studentList").innerHTML=
        "Name: " + name +"<br>" + 
        "Roll Number: " + roll + "<br>" +
        "Department: " + dept;
     
}
