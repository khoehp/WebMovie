function tinhDienTichHinhTron() {
  var a = document.getElementById("banKinh").value;
  var s = document.getElementById("ketQua")
  if (a >= 0) {
    s.value = a * a * 3.14;
  } else {
    s.value = "vui long nhap r"
  }
  
}
