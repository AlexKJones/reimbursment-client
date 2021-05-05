function getEmployee() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        console.log(this.readyState)

        if (this.readyState == 4 && this.status == 200) {
            console.log("Successful Call")

            console.log(this.responseText);
            let employee = JSON.parse(this.responseText)
            console.log(employee)

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId
        }

    }

    url = "http://127.0.0.1:5000/employees/5"

    xhttp.open("GET", url, true)
    xhttp.send()


}

function login() {

    event.preventDefault();

    let xhttp = new XMLHttpRequest();
    nameos = document.getElementById(nameField)
    console.log(nameos)


    xhttp.onreadystatechange = function () {

        
        console.log(this.readyState)

        if (this.readyState == 4 && this.status == 200) {
            console.log("Successful Call")

            

            console.log(this.responseText);
            let employee = JSON.parse(this.responseText)
            console.log(employee)


        }

    }

    url = "http://127.0.0.1:5000/login/" + nameos

    xhttp.open("GET", url, true)
    xhttp.send(nameos)


}