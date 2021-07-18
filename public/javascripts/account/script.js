let btnChange = document.getElementById("ChangeBtn");
let btnSave =  document.getElementById("SaveBtn");
let btnReset = document.getElementById("ResetBtn");

btnChange.onclick = function(){
    btnChange.style.display = 'none';

    document.getElementById("TenDangNhap").removeAttribute("disabled");
    document.getElementById("HoTen").removeAttribute("disabled");
    document.getElementById("GioiTinh").removeAttribute("disabled");
    document.getElementById("email").removeAttribute("disabled");
    document.getElementById("sdt").removeAttribute("disabled");
    document.getElementById("DiaChi").removeAttribute("disabled");
}

btnSave.onclick = function(){
    btnChange.style.display = null;
    
    document.getElementById("TenDangNhap").setAttribute("disabled", "");
    document.getElementById("HoTen").setAttribute("disabled", "");
    document.getElementById("GioiTinh").setAttribute("disabled", "");
    document.getElementById("email").setAttribute("disabled", "");
    document.getElementById("sdt").setAttribute("disabled", "");
    document.getElementById("DiaChi").setAttribute("disabled", "");
}

document.getElementById("demo").innerHTML = "The text from the intro paragraph is";