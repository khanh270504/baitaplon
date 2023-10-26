const rates = {
    1: { min: 0, max: 50, price: 1678 },
    2: { min: 51, max: 100, price: 1734 },
    3: { min: 101, max: 200, price: 2014 },
    4: { min: 201, max: 300, price: 2536 }
};

const devicesData = [];

document.getElementById('calculate').addEventListener('click', function() {
    const power = parseFloat(document.getElementById('power').value);
    const hours = parseFloat(document.getElementById('hours').value);

    const energyConsumed = (power * hours) / 1000; // kWh
    let cost = 0;

    for (let rateKey in rates) {
        const rate = rates[rateKey];
        if (energyConsumed >= rate.min && energyConsumed <= rate.max) {
            cost = energyConsumed * rate.price;
            break;
        }
    }

    devicesData.push({ power, hours, cost });

    displayResults();
});

function displayResults() {
    let totalCost = 0;
    let resultText = '';

    for (let i = 0; i < devicesData.length; i++) {
        resultText += `Thiết bị ${i + 1} - Tiền điện: ${devicesData[i].cost.toFixed(2)} VNĐ<br>`;
        totalCost += devicesData[i].cost;
    }

    resultText += `<br>Tổng tiền điện của tất cả các thiết bị: ${totalCost.toFixed(2)} VNĐ`;

    document.getElementById('result').innerHTML = resultText;
}

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
