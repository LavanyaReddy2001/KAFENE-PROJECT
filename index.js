$(document).ready(function () {
    if (localStorage.getItem("status") == "true") {
        location.assign("./orderPage.html");
    }
    let lform = window.document.getElementById("l_form");
    lform.onsubmit = function (e) {
        e.preventDefault();
        let logindata = {
            username: this.username.value,
            password: this.password.value,
        };
        if (logindata.username === logindata.password) {
            $.post(
                "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",
                logindata,
                function () {
                    alert("Login Successful!");
                    window.localStorage.setItem("status", true);
                    location.replace("./orderPage.html");
                }
            );
        } else {
            alert(
                `Please Enter Valid data ${logindata.username} ${logindata.password}`
            );
        }
    };
    $(".topItems").click(function (e) {
        e.preventDefault();
        $(".active").removeClass("active");
        $(e.target).addClass("active");
    });
});
