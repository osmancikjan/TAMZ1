/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function onClick() {
    var login;
    login = $("#login").val();
    var jqxhr = $.ajax({
        url: $("#url").val(),
        type: "GET",
        data: {login: login},
        //headers: { 'API-Token': $("#login").val()+':token' },
        success: function (data) {
            $("#token").val(data);
            $("#newLogin").val(login);
            alert('I was successful and received data: ' + data);
        }
    })
            .fail(function (err) {
                alert("Something went wrong: " + err.responseText);
            });
}

function test() {
    var s1;
    var s2;

    s1 = $("#newLogin").val() + ':' + $("#token").val();
    s2 = btoa(s1);

    var jqxhr = $.ajax({
        url: $("#newUrl").val(),
        type: "POST",
        //data: {login: $("#login").val()},
        headers: {'API-Token': s2},
        success: function (data) {
            //$("#token").val(data);
            alert('I was successful and received data: ' + data);
        }
    })
            .fail(function (err) {
                alert("Something went wrong: " + err.responseText);
            });
}



