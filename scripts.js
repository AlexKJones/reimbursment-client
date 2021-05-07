
let user = "No User"
let reqq = "No Request"
notification = document.getElementById("noti")


function getEmployee() {


    event.preventDefault();
    ourid = document.getElementById("seeEmployeeById").value
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let employee = JSON.parse(this.responseText)

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("employee_id").innerHTML = employee.employeeId
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId
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


        if (this.readyState == 4 && this.status == 200) {
            let employee = JSON.parse(this.responseText)

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("employee_id").innerHTML = employee.employeeId
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId
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

        if (this.readyState == 4 && this.status == 200) {
            let employee = JSON.parse(this.responseText)

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("employee_id").innerHTML = employee.employeeId
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId

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

// function updateRequest() {

//     event.preventDefault();

//     rqfor = document.getElementById("new-request-request_for").value
//     rqfund = document.getElementById("new-request-req_funds").value
//     rqreqtype = document.getElementById("new-request-req_type").value
//     rqinfo = document.getElementById("new-request-info").value
//     rqpassgrade = document.getElementById("new-request-pass_grade").value
//     rqeventdate = document.getElementById("new-request-event_date").value
    

//     newrequest = {
//         added_info: "null",
//         denied_reason: "null",
//         employeeId: user.employee_id,
//         employee_name: user.employee_name,
//         event_date: rqeventdate, 
//         info: rqinfo, 
//         is_approved: false,
//         is_denied: false,
//         pass_grade: rqpassgrade, 
//         req_funds: rqfund,
//         req_type: rqreqtype, 
//         request_for: rqfor,
//         phase: currentphase
//     }

//     let json = JSON.stringify(newrequest)
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {

//         if (this.readyState == 4 && this.status == 200) {
//             let employee = JSON.parse(this.responseText)

//             document.getElementById("name").innerHTML = employee.name
//             document.getElementById("employee_id").innerHTML = employee.employeeId
//             document.getElementById("supervisor_id").innerHTML = employee.supervisorId

//             document.getElementById("request_id").innerHTML = employee.requestId
//             document.getElementById("req_name").innerHTML = employee.employee_name
//             document.getElementById("request_for").innerHTML = employee.request_for
//             document.getElementById("req_funds").innerHTML = employee.req_funds
//             document.getElementById("req_type").innerHTML = employee.req_type
//             document.getElementById("info").innerHTML = employee.info
//             document.getElementById("added_info").innerHTML = employee.added_info
//             document.getElementById("pass_grade").innerHTML = employee.pass_grade
//             document.getElementById("event_date").innerHTML = employee.event_date
//             document.getElementById("submit_date").innerHTML = employee.submit_date
//             document.getElementById("is_denied").innerHTML = employee.is_denied
//             document.getElementById("denied_reason").innerHTML = employee.denied_reason
//             document.getElementById("is_approved").innerHTML = employee.is_approved
//         }

//     }
//     empid = user.employeeId
//     reqid = request.requestId
//     url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid

//     xhttp.open("PUT", url, true)
//     xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
//     xhttp.send(json)


// }

function getRequests() {


    event.preventDefault();
    
    
    ourid = document.getElementById("empReqId").value
    ourreqid = document.getElementById("seeRequestById").value
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let employee = JSON.parse(this.responseText)
            employee = employee[0]
            reqq = employee
            supervisor = employee.employeeId -1
            depHead = 1
            benCo = 2
            if (user.name == employee.employee_name || user.employeeId == supervisor || user.employeeId == depHead || user.employeeId == benCo) {
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
                document.getElementById("phase").innerHTML = employee.phase
            // } else if (user.employeeId == supervisor) {
            //     document.getElementById("name").innerHTML = employee.employee_name
            //     document.getElementById("employee_id").innerHTML = employee.employeeId
            //     document.getElementById("supervisor_id").innerHTML = employee.employeeId -1

            //     document.getElementById("request_id").innerHTML = employee.requestId
            //     document.getElementById("req_name").innerHTML = employee.employee_name
            //     document.getElementById("request_for").innerHTML = employee.request_for
            //     document.getElementById("req_funds").innerHTML = employee.req_funds
            //     document.getElementById("req_type").innerHTML = employee.req_type
            //     document.getElementById("info").innerHTML = employee.info
            //     document.getElementById("added_info").innerHTML = employee.added_info
            //     document.getElementById("pass_grade").innerHTML = employee.pass_grade
            //     document.getElementById("event_date").innerHTML = employee.event_date
            //     document.getElementById("submit_date").innerHTML = employee.submit_date
            //     document.getElementById("is_denied").innerHTML = employee.is_denied
            //     document.getElementById("denied_reason").innerHTML = employee.denied_reason
            //     document.getElementById("is_approved").innerHTML = employee.is_approved
            //     document.getElementById("phase").innerHTML = employee.phase
                
            } else {
                alert("not logged in as relevant user")
            }
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
            

            if (this.readyState == 4 && this.status == 200) {
                let employee = JSON.parse(this.responseText)
                user = employee
                document.getElementById("name").innerHTML = employee.name
                document.getElementById("employee_id").innerHTML = employee.employeeId
                document.getElementById("supervisor_id").innerHTML = employee.supervisorId
                notification.innerText = "Welcome " + employee.name

            }

        }

        url = url = "http://127.0.0.1:5000/employees/" + ourid

        xhttp.open("GET", url, true)
        xhttp.send()
    } else {
        notification.innerText = "Must logout First"
}

}

function logout() {
    event.preventDefault();
    notification.innerText = "Logged Out"
    user = "No User"   
}

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

function approve() {
    
    event.preventDefault();

    phase = reqq.phase
    sup = user.employeeId + 1
    // handles if the employee who made the request clicks approve
    if (user.employeeId == reqq.employeeId) {
        notification.innerText = "Cant use this button Right now"
        // handles if the supervisor clicks approve
    } else if (reqq.employeeId == sup && phase == 0 || reqq.employeeId == sup && phase == 2) {
        currentphase = 3
        if (reqq.added_info == null) {
            reqq.added_info = "null"
        } else {
            reqq.added_info = reqq.added_info
        }if (reqq.denied_reason == null) {
            reqq.denied_reason = "null"
        } else {
            reqq.added_info = reqq.added_info
        }
        newrequest = {
            "phase": currentphase,
            "req_funds": reqq.req_funds,
            "added_info": reqq.added_info,
            "is_denied": reqq.is_denied,
            "denied_reason": reqq.denied_reason,
            "is_approved": reqq.is_approved
        }

        let json = JSON.stringify(newrequest)
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                
                fillFields2()
                notification.innerText = "Approved by Supervisor awaiting Department Head approval"
            }

        }
        empid = sup
        reqid = reqq.requestId
        url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

        xhttp.open("PUT", url, true)
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
        xhttp.send(json)

    } // handles if the Department Head clicks approve 
    else if (user.employeeId == 1 && reqq.phase == 3) {
        console.log("IM THE DEPARTMENT HEAD")
        currentphase = 5
        if (reqq.added_info == null) {
            reqq.added_info = "null"
        } else {
            reqq.added_info = reqq.added_info
        }if (reqq.denied_reason == null) {
            reqq.denied_reason = "null"
        } else {
            reqq.added_info = reqq.added_info
        }
        newrequest = {
            "phase": currentphase,
            "req_funds": reqq.req_funds,
            "added_info": reqq.added_info,
            "is_denied": reqq.is_denied,
            "denied_reason": reqq.denied_reason,
            "is_approved": reqq.is_approved
        }

        let json = JSON.stringify(newrequest)
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                
                employee = reqq

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
                document.getElementById("phase").innerHTML = employee.phase
                notification.innerText = "Approved by DH awaiting approval from BenCo"
            }

        }
        empid = reqq.employeeId
        reqid = reqq.requestId
        url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

        xhttp.open("PUT", url, true)
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
        xhttp.send(json)

    } // Handles if the BENCO final Approves
    else if (user.employeeId == 2 && reqq.phase == 5) {
        console.log("IM THE BENCO")
        currentphase = 7
        if (reqq.added_info == null) {
            reqq.added_info = "null"
        } else {
            reqq.added_info = reqq.added_info
        }if (reqq.denied_reason == null) {
            reqq.denied_reason = "null"
        } else {
            reqq.added_info = reqq.added_info
        }
        reqq.is_approved = true
        newrequest = {
            "phase": currentphase,
            "req_funds": reqq.req_funds,
            "added_info": reqq.added_info,
            "is_denied": reqq.is_denied,
            "denied_reason": reqq.denied_reason,
            "is_approved": reqq.is_approved
        }

        let json = JSON.stringify(newrequest)
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                employee = reqq

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
                document.getElementById("phase").innerHTML = employee.phase
                notification.innerText = "REQUEST APPROVED"
            }

        }
        empid = reqq.employeeId
        reqid = reqq.requestId
        url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

        xhttp.open("PUT", url, true)
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
        xhttp.send(json)

    } else {
        notification.innerText = "This Button not for you atm."
    }
}

function getMoreInfo() {
    
    
    event.preventDefault();

    phase = reqq.phase
    sup = user.employeeId + 1
    // handles if the employee who made the request clicks more info
    if (user.employeeId == reqq.employeeId) {
         notification.innerText = "Button not for you atm"
        // handles if the supervisor wants more info
    } else if (reqq.employeeId == sup && phase == 0 || reqq.employeeId == sup && phase == 2) {
        currentphase = 1
        if (reqq.added_info == null) {
            reqq.added_info = "null"
        } else {
            reqq.added_info = reqq.added_info
        }if (reqq.denied_reason == null) {
            reqq.denied_reason = "null"
        } else {
            reqq.added_info = reqq.added_info
        }
        newrequest = {
            "phase": currentphase,
            "req_funds": reqq.req_funds,
            "added_info": reqq.added_info,
            "is_denied": reqq.is_denied,
            "denied_reason": reqq.denied_reason,
            "is_approved": reqq.is_approved
        }

        let json = JSON.stringify(newrequest)
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                
                fillFields2()
                notification.innerText = "Supervisor requesting additional info"
            }

        }
        empid = sup
        reqid = reqq.requestId
        url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

        xhttp.open("PUT", url, true)
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
        xhttp.send(json)

    } // handles if the Department Head wants more info
    else if (user.employeeId == 1 && reqq.phase == 3) {
        currentphase = 4
        if (reqq.added_info == null) {
            reqq.added_info = "null"
        } else {
            reqq.added_info = reqq.added_info
        }if (reqq.denied_reason == null) {
            reqq.denied_reason = "null"
        } else {
            reqq.added_info = reqq.added_info
        }
        newrequest = {
            "phase": currentphase,
            "req_funds": reqq.req_funds,
            "added_info": reqq.added_info,
            "is_denied": reqq.is_denied,
            "denied_reason": reqq.denied_reason,
            "is_approved": reqq.is_approved
        }

        let json = JSON.stringify(newrequest)
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                
                employee = reqq

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
                document.getElementById("phase").innerHTML = employee.phase
                notification.innerText = "Dep Head has requested more information"
            }

        }
        empid = reqq.employeeId
        reqid = reqq.requestId
        url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

        xhttp.open("PUT", url, true)
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
        xhttp.send(json)

    } // Handles if the BENCO wants more info or to change the funds
    else if (user.employeeId == 2 && reqq.phase == 5) {
        currentphase = 6
        if (reqq.added_info == null) {
            reqq.added_info = "null"
        } else {
            reqq.added_info = reqq.added_info
        }if (reqq.denied_reason == null) {
            reqq.denied_reason = "null"
        } else {
            reqq.added_info = reqq.added_info
        }
        reqq.is_approved = true
        newrequest = {
            "phase": currentphase,
            "req_funds": reqq.req_funds,
            "added_info": reqq.added_info,
            "is_denied": reqq.is_denied,
            "denied_reason": reqq.denied_reason,
            "is_approved": reqq.is_approved
        }

        let json = JSON.stringify(newrequest)
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                employee = reqq

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
                document.getElementById("phase").innerHTML = employee.phase
                notification.innerText = "BenCO wants more info"
            }

        }
        empid = reqq.employeeId
        reqid = reqq.requestId
        url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

        xhttp.open("PUT", url, true)
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
        xhttp.send(json)

    } else {
        notification.innerText = "This Button not for you atm."
    }

}

function addInfo() {

    
    
    event.preventDefault();

    phase = reqq.phase
    sup = user.employeeId + 1
    phasecheck = (phase == 1 || phase == 4 || phase == 6)
    addo = document.getElementById("add_info").value
    // handles if the employee who made the request clicks more info
    if (user.employeeId != reqq.employeeId) {
         notification.innerText = "Button not for you atm"
    }  // Handles if the BENCO wants more info or to change the funds
        else if (user.employeeId == reqq.employeeId && phasecheck) {
            if (phase == 1) {
                currentphase = 2
            } else if (phase == 4) {
                currentphase = 3
            } else if (phase == 6) {
                currentphase = 5
            }


        if (reqq.added_info == null) {
            reqq.added_info = "null"
        } else {
            reqq.added_info = reqq.added_info
        }if (reqq.denied_reason == null) {
            reqq.denied_reason = "null"
        } else {
            reqq.added_info = reqq.added_info
        }
        reqq.added_info = addo
        newrequest = {
            "phase": currentphase,
            "req_funds": reqq.req_funds,
            "added_info": reqq.added_info,
            "is_denied": reqq.is_denied,
            "denied_reason": reqq.denied_reason,
            "is_approved": reqq.is_approved
        }

        let json = JSON.stringify(newrequest)
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                employee = reqq

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
                document.getElementById("phase").innerHTML = employee.phase
                notification.innerText = "Additional info sent"
            }

        }
        empid = reqq.employeeId
        reqid = reqq.requestId
        url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

        xhttp.open("PUT", url, true)
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
        xhttp.send(json)

    } else {
        notification.innerText = "This Button not for you atm."
    }


}

function deny() {
    
    event.preventDefault();

    phase = reqq.phase
    sup = user.employeeId + 1
    denail = document.getElementById("denial_reason").value
    if (denail == "") {
        notification.innerText = "Must provide a reason for denial"
    } else {
        // handles if the employee who made the request clicks more info
        if (user.employeeId == reqq.employeeId) {
            notification.innerText = "Button not for you atm"
            // handles if the supervisor denies
        } else if (reqq.employeeId == sup && phase == 0 || reqq.employeeId == sup && phase == 2) {
            currentphase = 8
            if (reqq.added_info == null) {
                reqq.added_info = "null"
            } else {
                reqq.added_info = reqq.added_info
            }if (reqq.denied_reason == null) {
                reqq.denied_reason = "null"
            } else {
                reqq.added_info = reqq.added_info
            }
            reqq.is_denied = true
            reqq.denied_reason = denail
            newrequest = {
                "phase": currentphase,
                "req_funds": reqq.req_funds,
                "added_info": reqq.added_info,
                "is_denied": reqq.is_denied,
                "denied_reason": reqq.denied_reason,
                "is_approved": reqq.is_approved
            }

            let json = JSON.stringify(newrequest)
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {
                    
                    fillFields2()
                    notification.innerText = "Supervisor requesting additional info"
                }

            }
            empid = sup
            reqid = reqq.requestId
            url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

            xhttp.open("PUT", url, true)
            xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
            xhttp.send(json)

        } // handles if the Department Head wants more info
        else if (user.employeeId == 1 && reqq.phase == 3) {
            currentphase = 8
            if (reqq.added_info == null) {
                reqq.added_info = "null"
            } else {
                reqq.added_info = reqq.added_info
            }if (reqq.denied_reason == null) {
                reqq.denied_reason = "null"
            } else {
                reqq.added_info = reqq.added_info
            }
            reqq.is_denied = true
            reqq.denied_reason = denail
            newrequest = {
                "phase": currentphase,
                "req_funds": reqq.req_funds,
                "added_info": reqq.added_info,
                "is_denied": reqq.is_denied,
                "denied_reason": reqq.denied_reason,
                "is_approved": reqq.is_approved
            }

            let json = JSON.stringify(newrequest)
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {
                    
                    employee = reqq

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
                    document.getElementById("phase").innerHTML = employee.phase
                    notification.innerText = "Dep Head has requested more information"
                }

            }
            empid = reqq.employeeId
            reqid = reqq.requestId
            url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

            xhttp.open("PUT", url, true)
            xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
            xhttp.send(json)

        } // Handles if the BENCO wants more info or to change the funds
        else if (user.employeeId == 2 && reqq.phase == 5) {
            currentphase = 8
            if (reqq.added_info == null) {
                reqq.added_info = "null"
            } else {
                reqq.added_info = reqq.added_info
            }if (reqq.denied_reason == null) {
                reqq.denied_reason = "null"
            } else {
                reqq.added_info = reqq.added_info
            }
            reqq.is_denied = true
            reqq.denied_reason = denail
            newrequest = {
                "phase": currentphase,
                "req_funds": reqq.req_funds,
                "added_info": reqq.added_info,
                "is_denied": reqq.is_denied,
                "denied_reason": reqq.denied_reason,
                "is_approved": reqq.is_approved
            }

            let json = JSON.stringify(newrequest)
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {

                    employee = reqq

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
                    document.getElementById("phase").innerHTML = employee.phase
                    notification.innerText = "BenCO wants more info"
                }

            }
            empid = reqq.employeeId
            reqid = reqq.requestId
            url = "http://127.0.0.1:5000/employees/" + empid + "/requests/" + reqid + "/"

            xhttp.open("PUT", url, true)
            xhttp.setRequestHeader('Content-type','application/json; charset=utf-8')
            xhttp.send(json)

        } else {
            notification.innerText = "This Button not for you atm."
        }
    }

 
}

function fillFields() {
    let employee = JSON.parse(this.responseText)
            

            document.getElementById("name").innerHTML = employee.name
            document.getElementById("employee_id").innerHTML = employee.employeeId
            document.getElementById("supervisor_id").innerHTML = employee.supervisorId
            
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
function fillFields2() {
   
            employee = reqq
            
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
            document.getElementById("phase").innerHTML = employee.phase
}

