let user = "No User"

function getEmployee() {


    event.preventDefault();
    ourid = document.getElementById("seeEmployeeById").value
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        console.log(this.readyState)

        if (this.readyState == 4 && this.status == 200) {
            console.log("Successful Call")

            console.log(this.responseText);
            let employee = JSON.parse(this.responseText)
            console.log(employee)
            console.log(employee.employeeId)

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("employee_id").innerHTML = employee.employeeId
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId
            console.log("user is " + user)
        }

    }

    url = "http://127.0.0.1:5000/employees/" + ourid

    xhttp.open("GET", url, true)
    xhttp.send()


}

function makeEmployee() {

    event.preventDefault();

    nam = document.getElementById("makeEmpName").value
    dep = document.getElementById("makeEmpDep").value
    sup = document.getElementById("makeEmpSup").value

    newemployee = {
        name: nam,
        requests: null,
        employee_id: 0,
        supervisor_id: sup,
        dep_id: dep,
        is_benco: false,
        is_dep_head: false
}

    var json = JSON.stringify(newemployee)
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        console.log(this.readyState)

        if (this.readyState == 4 && this.status == 200) {
            console.log("Successful Call")

            console.log(this.responseText);
            let employee = JSON.parse(this.responseText)
            console.log(employee)

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("employee_id").innerHTML = employee.employeeId
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId
            console.log("user is " + user)
        }

    }

    url = "http://127.0.0.1:5000/employees/"

    xhttp.open("POST", url, true)
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
    xhttp.send(json)


}

function makeRequest() {

    event.preventDefault();

    rqfor = document.getElementById("new-request-request_for").value
    rqfund = document.getElementById("new-request-req_funds").value
    rqreqtype = document.getElementById("new-request-req_type").value
    rqinfo = document.getElementById("new-request-info").value
    rqpassgrade = document.getElementById("new-request-pass_grade").value
    rqeventdate = document.getElementById("new-request-event_date").value


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    newrequest = {
        added_info: "",
        denied_reason: "",
        employeeId: user.employee_id,
        employee_name: user.employee_name,
        event_date: rqeventdate, 
        info: rqinfo, 
        is_approved: false,
        is_denied: false,
        pass_grade: rqpassgrade, 
        req_funds: rqfund,
        req_type: rqreqtype, 
        requestId: 0,
        request_for: rqfor,
        submit_date: today
    }

    let json = JSON.stringify(newrequest)
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        console.log(this.readyState)

        if (this.readyState == 4 && this.status == 200) {
            console.log("Successful Call")

            console.log(this.responseText);
            let employee = JSON.parse(this.responseText)
            console.log("response was:")
            console.log(employee)

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("employee_id").innerHTML = employee.employeeId
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId
            console.log("user is " + user)
            document.getElementById("request_id").innerHTML = employee.requestId
            document.getElementById("req_name").innerHTML = employee.employee_name
            document.getElementById("request_for").innerHTML = employee.request_for
            document.getElementById("req_funds").innerHTML = employee.req_funds
            document.getElementById("req_type").innerHTML = employee.req_type
            document.getElementById("info").innerHTML = employee.info
            document.getElementById("added_info").innerHTML = employee.added_info
            document.getElementById("pass_grade").innerHTML = employee.pass_grade
            document.getElementById("event_date").innerHTML = employee.event_date
            document.getElementById("submit_date").innerHTML = employee.submit_date
            document.getElementById("is_denied").innerHTML = employee.is_denied
            document.getElementById("denied_reason").innerHTML = employee.denied_reason
            document.getElementById("is_approved").innerHTML = employee.is_approved
        }

    }
    empid = user.employeeId
    url = "http://127.0.0.1:5000/employees/" + empid + "/requests/"

    xhttp.open("POST", url, true)
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
    xhttp.send(json)


}

function updateRequest() {

    event.preventDefault();

    rqfor = document.getElementById("new-request-request_for").value
    rqfund = document.getElementById("new-request-req_funds").value
    rqreqtype = document.getElementById("new-request-req_type").value
    rqinfo = document.getElementById("new-request-info").value
    rqpassgrade = document.getElementById("new-request-pass_grade").value
    rqeventdate = document.getElementById("new-request-event_date").value

    newrequest = {
        added_info: "null",
        denied_reason: "null",
        employeeId: user.employee_id,
        employee_name: user.employee_name,
        event_date: rqeventdate, 
        info: rqinfo, 
        is_approved: false,
        is_denied: false,
        pass_grade: rqpassgrade, 
        req_funds: rqfund,
        req_type: rqreqtype, 
        request_for: rqfor
    }

    let json = JSON.stringify(newrequest)
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        console.log(this.readyState)

        if (this.readyState == 4 && this.status == 200) {
            console.log("Successful Call")

            console.log(this.responseText);
            let employee = JSON.parse(this.responseText)
            console.log("response was:")
            console.log(employee)

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("employee_id").innerHTML = employee.employeeId
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId
            console.log("user is " + user)
            document.getElementById("request_id").innerHTML = employee.requestId
            document.getElementById("req_name").innerHTML = employee.employee_name
            document.getElementById("request_for").innerHTML = employee.request_for
            document.getElementById("req_funds").innerHTML = employee.req_funds
            document.getElementById("req_type").innerHTML = employee.req_type
            document.getElementById("info").innerHTML = employee.info
            document.getElementById("added_info").innerHTML = employee.added_info
            document.getElementById("pass_grade").innerHTML = employee.pass_grade
            document.getElementById("event_date").innerHTML = employee.event_date
            document.getElementById("submit_date").innerHTML = employee.submit_date
            document.getElementById("is_denied").innerHTML = employee.is_denied
            document.getElementById("denied_reason").innerHTML = employee.denied_reason
            document.getElementById("is_approved").innerHTML = employee.is_approved
        }

    }
    empid = user.employeeId
    reqid = request.requestId
    url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid

    xhttp.open("PUT", url, true)
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
    xhttp.send(json)


}

function getRequests() {


    event.preventDefault();
    
    ourid = document.getElementById("empReqId").value
    ourreqid = document.getElementById("seeRequestById").value
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        console.log(this.readyState)

        if (this.readyState == 4 && this.status == 200) {
            console.log("Successful Call")

            console.log(this.responseText);
            let employee = JSON.parse(this.responseText)
            employee = employee[0]
            console.log(employee)
            supervisor = employee.employeeId -1
            console.log("supervisor is:")
            console.log(supervisor)
            if (user.name == employee.employee_name) {
                document.getElementById("name").innerHTML = employee.employee_name
                document.getElementById("employee_id").innerHTML = employee.employeeId
                document.getElementById("supervisor_id").innerHTML = employee.employeeId -1

                document.getElementById("request_id").innerHTML = employee.requestId
                document.getElementById("req_name").innerHTML = employee.employee_name
                document.getElementById("request_for").innerHTML = employee.request_for
                document.getElementById("req_funds").innerHTML = employee.req_funds
                document.getElementById("req_type").innerHTML = employee.req_type
                document.getElementById("info").innerHTML = employee.info
                document.getElementById("added_info").innerHTML = employee.added_info
                document.getElementById("pass_grade").innerHTML = employee.pass_grade
                document.getElementById("event_date").innerHTML = employee.event_date
                document.getElementById("submit_date").innerHTML = employee.submit_date
                document.getElementById("is_denied").innerHTML = employee.is_denied
                document.getElementById("denied_reason").innerHTML = employee.denied_reason
                document.getElementById("is_approved").innerHTML = employee.is_approved
            } else if (user.employeeId == supervisor) {
                document.getElementById("name").innerHTML = employee.employee_name
                document.getElementById("employee_id").innerHTML = employee.employeeId
                document.getElementById("supervisor_id").innerHTML = employee.employeeId -1

                document.getElementById("request_id").innerHTML = employee.requestId
                document.getElementById("req_name").innerHTML = employee.employee_name
                document.getElementById("request_for").innerHTML = employee.request_for
                document.getElementById("req_funds").innerHTML = employee.req_funds
                document.getElementById("req_type").innerHTML = employee.req_type
                document.getElementById("info").innerHTML = employee.info
                document.getElementById("added_info").innerHTML = employee.added_info
                document.getElementById("pass_grade").innerHTML = employee.pass_grade
                document.getElementById("event_date").innerHTML = employee.event_date
                document.getElementById("submit_date").innerHTML = employee.submit_date
                document.getElementById("is_denied").innerHTML = employee.is_denied
                document.getElementById("denied_reason").innerHTML = employee.denied_reason
                document.getElementById("is_approved").innerHTML = employee.is_approved
                
                var button = document.createElement("button")
                button.innerHTML = "Approve";
                var body = document.getElementById("Approval")
                body.appendChild(button, id="yesButton")
                button.addEventListener ("click", function() {
                })
                var button = document.createElement("button")
                button.innerHTML = "Request More Info";
                var body2 = document.getElementById("Approval")
                body2.appendChild(button, id="noButton")
                button.addEventListener ("click", function() {
                })


            } else {
                alert("not logged in as relevant user")
            }
            console.log("user is :")
            console.log(user)
        }

    }

    url = "http://127.0.0.1:5000/employees/" + ourid + "/requests/" + ourreqid

    xhttp.open("GET", url, true)
    xhttp.send()


}

function login() {
    if (user == "No User") {
        event.preventDefault();
        clear()
        ourid = document.getElementById("nameField").value
        let xhttp = new XMLHttpRequest();


        xhttp.onreadystatechange = function () {

            
            console.log(this.readyState)
            

            if (this.readyState == 4 && this.status == 200) {
                console.log("Successful Call")

                console.log(this.responseText);
                let employee = JSON.parse(this.responseText)
                user = employee
                console.log("current user is now:")
                console.log(user)
                alert("Logged In " + user.name)
                document.getElementById("name").innerHTML = employee.name
                document.getElementById("employee_id").innerHTML = employee.employeeId
                document.getElementById("supervisor_id").innerHTML = employee.supervisorId


            }

        }

        url = url = "http://127.0.0.1:5000/employees/" + ourid

        xhttp.open("GET", url, true)
        xhttp.send()
    } else {
    alert("Must log out first!")
}

}

function logout() {
    event.preventDefault();
    alert("Logged Out " + user.name)
    user = "No User"
    console.log("user is " + user)
    clear()
    pop = document.getElementById("Approval")
    pop.parentNode.removeChild(pop)
    pop.parentNode.removeChild(pop)
    
}
console.log("user is " + user)

function clear() {
    document.getElementById("name").innerHTML = ""
    document.getElementById("supervisor_id").innerHTML = ""
    document.getElementById("request_id").innerHTML = ""
    document.getElementById("req_name").innerHTML = ""
    document.getElementById("request_for").innerHTML = ""
    document.getElementById("req_funds").innerHTML = ""
    document.getElementById("req_type").innerHTML = ""
    document.getElementById("info").innerHTML = ""
    document.getElementById("added_info").innerHTML = ""
    document.getElementById("pass_grade").innerHTML = ""
    document.getElementById("event_date").innerHTML = ""
    document.getElementById("submit_date").innerHTML = ""
    document.getElementById("is_denied").innerHTML = ""
    document.getElementById("denied_reason").innerHTML = ""
    document.getElementById("is_approved").innerHTML = ""
    // document.getElementById("B").innerText = ""
    // document.getElementsByClassName("B").innerText = ""
}
