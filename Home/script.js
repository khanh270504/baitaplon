 //nhap vao chuong
 const chuong = document.querySelector('.fa-bell');

chuong.onclick = function() {
  alert('Bạn có thông báo mới!');
};

// Thanh cong cu tim kiem
const timkiem = document.querySelector('.form-control');
const searchIcon = document.querySelector('.fa-search');
 searchIcon.onclick = function() {
  const searchText = timkiem.value.trim();

  if (searchText === '') {
    alert('Vui lòng nhập từ khóa tìm kiếm!');
  } 
};
