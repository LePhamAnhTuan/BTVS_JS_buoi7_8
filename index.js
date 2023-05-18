console.log("first");
var arrLuuSo = [];
function luuTruMang() {
  var soBatKy = document.getElementById("soBatKy").value * 1;
  var tongSoDuong = 0;
  var demSoDuong = 0;
  console.log("soBatKy: ", soBatKy);
  arrLuuSo.push(soBatKy);
  console.log("arrLuuSo: ", arrLuuSo);
  for (var i = 0; i < arrLuuSo.length; i++) {
    if (arrLuuSo[i] >= 0) {
      tongSoDuong += arrLuuSo[i];
    }
  }
  for (var i = 0; i < arrLuuSo.length; i++) {
    if (arrLuuSo[i] >= 0) {
      demSoDuong++;
    }
  }
  var bienMin = arrLuuSo[0];
  for (var i = 0; i < arrLuuSo.length; i++) {
    if (arrLuuSo[i] < bienMin) {
      bienMin = arrLuuSo[i];
    }
  }
  var bienMinDuong = arrLuuSo[0];
  for (var i = 0; i < arrLuuSo.length; i++) {
    if (arrLuuSo[i] < bienMinDuong && bienMinDuong >= 0 && arrLuuSo[i] >= 0) {
      bienMinDuong = arrLuuSo[i];
    }
  }
  var soChanCuoiCung = arrLuuSo[0];
  for (var i = arrLuuSo.length; i >= 0; i--) {
    if (arrLuuSo[i] % 2 == 0) {
      soChanCuoiCung = arrLuuSo[i];
      break;
    } else {
      soChanCuoiCung = -1;
    }
  }

  var soNguyenToDauTien = arrLuuSo[0];
  for (var i = 0; i < arrLuuSo.length; i++) {
    if (
      arrLuuSo[i] % 1 == 0 &&
      arrLuuSo[i] % arrLuuSo[i] == 0 &&
      arrLuuSo[i] >= 2
    ) {
      soNguyenToDauTien = arrLuuSo[i];
      break;
    } else {
      soNguyenToDauTien = -1;
    }
  }
  soSanhAmDuong = "";
  var demSoAm = 0;
  for (var i = 0; i < arrLuuSo.length; i++) {
    if (arrLuuSo[i] < 0) {
      demSoAm++;
    }
    demSoAm;
    console.log("demSoDuong: ", demSoDuong);
    console.log("demSoAm: ", demSoAm);
  }
  if (demSoAm > demSoDuong) {
    document.getElementById(
      "ketQua11"
    ).innerHTML = `so am la ${demSoAm} so duong la ${demSoDuong} => so am > so duong`;
  } else if (demSoAm < demSoDuong) {
    document.getElementById(
      "ketQua11"
    ).innerHTML = `so am la ${demSoAm} so duong la ${demSoDuong} => so am < so duong`;
  } else if ((demSoAm = demSoDuong)) {
    document.getElementById(
      "ketQua11"
    ).innerHTML = `so am la ${demSoAm} so duong la ${demSoDuong} => so am = so duong`;
  }

  document.getElementById("ketQua1").innerHTML = arrLuuSo;
  document.getElementById(
    "ketQua2"
  ).innerHTML = `tong so duong la ${tongSoDuong}`;
  document.getElementById("ketQua3").innerHTML = `co ${demSoDuong} so duong`;
  document.getElementById("ketQua4").innerHTML = `so nho nhat la ${bienMin}`;
  document.getElementById(
    "ketQua5"
  ).innerHTML = `so duong nho nhat la ${bienMinDuong}`;
  document.getElementById(
    "ketQua6"
  ).innerHTML = `so chan cuoi cung cua mang la ${soChanCuoiCung}`;
  document.getElementById(
    "ketQua9"
  ).innerHTML = `so nguyen to dau tien trong mang ${soNguyenToDauTien}`;
  document.getElementById("soBatKy").value = "";
}
function sapXepTangDan() {
  sapXepTangDan = arrLuuSo.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "ketQua8"
  ).innerHTML = `sap xep tang dan ${sapXepTangDan}`;
}
function doiViTri() {
  var vitri1 = document.getElementById("vitri1").value * 1;
  var vitri2 = document.getElementById("vitri2").value * 1;
  // console.log("arrLuuSo: ", arrLuuSo);
  // var luuViTri2 = arrLuuSo[vitri2];
  // var doiViTri = arrLuuSo.splice(vitri1, 1, `${arrLuuSo[vitri2]}`);
  // var doiViTri1 = doiViTri.splice(vitri2, 1, `${arrLuuSo[vitri1]}`);
  // var doiViTri = arrLuuSo.splice(vitri2, 0, "${arrLuuSo[vitri1]}");
  var temp = arrLuuSo[vitri1];
  arrLuuSo[vitri1] = arrLuuSo[vitri2];
  console.log("arrLuuSo: ", arrLuuSo);
  arrLuuSo[vitri2] = temp;
  // console.log("arrLuuSo: ", arrLuuSo);
  document.getElementById("ketQua7").innerHTML = arrLuuSo;
}
var arrSoThuc = [];
function timSoNguyen() {
  var nhapSoThuc = document.getElementById("nhapSoThuc").value * 1;
  arrSoThuc.push(nhapSoThuc);
  var soNguyen = "";
  for (var i = 0; i < arrSoThuc.length; i++) {
    if (arrSoThuc[i] % 1 == 0) {
      soNguyen++;
    }
  }
  console.log("soNguyen: ", soNguyen);
  document.getElementById("inMangSoThuc").innerHTML = arrSoThuc;
  document.getElementById("ketQua10").innerHTML = soNguyen;
  document.getElementById("nhapSoThuc").value = "";
}
