

/**------------------------------------------------------------ 
 * Bài 1:
 * - Đầu vào:
 *      + Lương 1 ngày : 100.000
 *      + Số ngày làm :  8
 * - Xử lý:
 *      + Lương = lương 1 ngày * số ngày làm
 * - Đầu ra 
 *      + In ra Lương của nhân viên
 */
var salaryInDay = 100000;
var days = 8;
var salary = salaryInDay*days;
console.log("Lương của nhân viên là: " + salary);





/**-------------------------------------------------------------
 * Bài 2:
 * - Đầu vào:
 *      + 5 số thực
 * - Xử lý:
 *      + Tính tổng của 5 số thực
 *      + giá trị trung bình bằng tổng chia cho 5
 * - Đầu ra:
 *      + In ra giá trị trung bình
 */
var num1 = 7;
var num2 = 3;
var num3 = 7;
var num4 = 3;
var num5 = 6;
var sum = num1 + num2 + num3 + num4 + num5;
var avg = sum/5;
console.log("Giá trị trung bình là: " + avg);





/** ------------------------------------------------------------
 * Bài 3:
 * - Đầu vào:
 *      + Tỷ giá của 1 USD: 23500
 *      + Số tiền USD của người dùng: 5
 * - Xử lý:
 *      + Tiền quy đổi = tỷ giá * số tiền USD
 * - Đầu ra:
 *      + In ra giá trị quy đổi
 */
var tygia = 23500;
var  tienUSD = 6;
var tienVND = tygia*tienUSD;
console.log(tienUSD + ' USD quy ra VND là :' + tienVND + ' VND');





/** ----------------------------------------------------------------
 * Bài tập 4
 * Đầu vào:
 *  - Chiều rộng của hình chữ nhật
 *  - Chiều dài của hình chữ nhật
 * Xử lý:
 *  - Chu vi bằng tổng chiều dài và chiều rộng nhân 2
 *  - Diện tích bằng chiều dài nhân chiều rộng 
 * Đầu ra:
 *  - In ra chu vi và dien tich cua hinh chữ nhật;
 */
var chieudai = 8;
var chieurong = 5;
var chuvi = (chieudai + chieurong)*2;
var dientich = chieudai*chieurong;
console.log("chu vi cua hinh chu nhat: " + chuvi);
console.log("dientich cua hinh chu nhat: " + dientich);





/** ----------------------------------------------------------------------
 * Bài tập 5
 * Đầu vào:
 *  - một số thực có 2 số   
 * Xử lý:
 *  - lấy ra giá trị hàng đơn vị
 *  - lấy ra giá trị hàng chục
 *  - tổng 2 ký số : hàng đơn vị + hàng chục
 * Đầu ra:
 *  - In ra tổng 2 ký số 
 */
var sothuc = 37;
var donvi = sothuc % 10;
var chuc = Math.floor(sothuc /10) ;
var tong = donvi + chuc;
console.log("Tổng 2 ký số là :" + tong);
