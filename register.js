var e = document.getElementById('Members');
e.onchange = function () {
    var option = e.options[e.selectedIndex].text;
    option = parseInt(option, 10);
    document.getElementById('TeamMembers').innerHTML = '';
    for(var i=0;i<option;i++) {
        AddRow(i+1);
    } 
}
function AddRow(i) {
    var div = document.getElementById('TeamMembers');
    div.innerHTML += '<tr><td>Member '+i + '</td>\
Name:<input type="text"></tr>'
//     document.getElementById('TeamMembers').appendChild(div);   
}
