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

  // var timSoDuongNhoNhat = arrLuuSo[0];
  // for (var i = 0; i < arrLuuSo.length; i++) {
  //   if (arrLuuSo[i] > 0 && timSoDuongNhoNhat >= arrLuuSo[i]) {
  //     timSoDuongNhoNhat = arrLuuSo[i];
  //   }
  // }

  var arrSoDuong = [];
  for (var i = 0; i < arrLuuSo.length; i++) {
    if (arrLuuSo[i] > 0) {
      arrSoDuong.push(arrLuuSo[i]);
    } else {
      soDuongNhoNhat = -1;
    }
  }
  var soDuongNhoNhat = arrSoDuong[0];
  for (var j = 0; j < arrSoDuong.length; j++) {
    if (soDuongNhoNhat > arrSoDuong[j]) {
      soDuongNhoNhat = arrSoDuong[j];
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
    ).innerHTML = `Số âm là ${demSoAm} Số dương là ${demSoDuong} =>Số âm > Số dương`;
  } else if (demSoAm < demSoDuong) {
    document.getElementById(
      "ketQua11"
    ).innerHTML = `Số âm là ${demSoAm} Số dương là ${demSoDuong} =>Số âm < Số dương`;
  } else if ((demSoAm = demSoDuong)) {
    document.getElementById(
      "ketQua11"
    ).innerHTML = `Số âm là ${demSoAm} Số dương là ${demSoDuong} =>Số âm = Số dương`;
  }

  document.getElementById("ketQua1").innerHTML = arrLuuSo;
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Tổng số dương là ${tongSoDuong}`;
  document.getElementById("ketQua3").innerHTML = `Có ${demSoDuong} số dương`;
  document.getElementById("ketQua4").innerHTML = `Số nhỏ nhất là ${bienMin}`;
  document.getElementById(
    "ketQua5"
  ).innerHTML = `Mảng chỉ chứa số dương ${arrSoDuong} Số dương nhỏ nhất là ${soDuongNhoNhat}`;
  document.getElementById(
    "ketQua6"
  ).innerHTML = `Số chẳn cuối cùng của mảng là ${soChanCuoiCung}`;
  document.getElementById(
    "ketQua9"
  ).innerHTML = `Số nguyên tố đầu tiên trong mảng là ${soNguyenToDauTien}`;
  document.getElementById("soBatKy").value = "";
}
function sapXepTangDan() {
  sapXepTangDan = arrLuuSo.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "ketQua8"
  ).innerHTML = `Sắp xếp tăng dần ${sapXepTangDan}`;
}
function doiViTri() {
  var vitri1 = document.getElementById("vitri1").value * 1;
  var vitri2 = document.getElementById("vitri2").value * 1;
  var temp = arrLuuSo[vitri1];
  arrLuuSo[vitri1] = arrLuuSo[vitri2];
  console.log("arrLuuSo: ", arrLuuSo);
  arrLuuSo[vitri2] = temp;

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
  document.getElementById(
    "ketQua10"
  ).innerHTML = `Số số nguyên trong mảng là ${soNguyen}`;
  document.getElementById("nhapSoThuc").value = "";
}
