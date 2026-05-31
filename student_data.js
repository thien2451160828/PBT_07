const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Khai báo các biến lưu trữ để thống kê
let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;
let maxStudent = null;
let minStudent = null;
let sumMath = 0, sumPhysics = 0, sumCs = 0;
let sumMale = 0, countMale = 0;
let sumFemale = 0, countFemale = 0;

// Yêu cầu 3: Vẽ tiêu đề bảng
console.log("-----------------------------------------------");
console.log("| STT | Tên      | TB   | Xếp loại            |");
console.log("-----------------------------------------------");

// Dùng 1 vòng lặp duy nhất để xử lý toàn bộ dữ liệu
for (let i = 0; i < students.length; i++) {
    let stu = students[i];
    
    // Yêu cầu 1: Tính điểm trung bình (math×0.4 + physics×0.3 + cs×0.3)
    let avg = stu.math * 0.4 + stu.physics * 0.3 + stu.cs * 0.3;
    stu.avg = Number(avg.toFixed(1)); // Làm tròn 1 chữ số thập phân

    // Yêu cầu 2: Xếp loại
    let rank = "";
    if (stu.avg >= 8.0) {
        rank = "Giỏi";
        countGioi++;
    } else if (stu.avg >= 6.5) {
        rank = "Khá";
        countKha++;
    } else if (stu.avg >= 5.0) {
        rank = "Trung bình";
        countTB++;
    } else {
        rank = "Yếu";
        countYeu++;
    }
    stu.rank = rank; // Lưu rank vào object để dùng sau này

    // Yêu cầu 3: In bảng kết quả (Dùng padEnd để căn chỉnh các cột cho đẹp)
    let stt = String(i + 1).padEnd(3, " ");
    let name = stu.name.padEnd(8, " ");
    let avgStr = String(stu.avg).padEnd(4, " ");
    let rankStr = stu.rank.padEnd(19, " ");
    console.log(`| ${stt} | ${name} | ${avgStr} | ${rankStr} |`);

    // Yêu cầu 5: Tìm SV có điểm cao nhất và thấp nhất
    if (maxStudent === null || stu.avg > maxStudent.avg) {
        maxStudent = stu;
    }
    if (minStudent === null || stu.avg < minStudent.avg) {
        minStudent = stu;
    }

    // Yêu cầu 6: Cộng dồn điểm các môn để lát nữa tính TB lớp
    sumMath += stu.math;
    sumPhysics += stu.physics;
    sumCs += stu.cs;

    // Yêu cầu 7 (Bonus): Cộng dồn điểm TB theo giới tính
    if (stu.gender === "M") {
        sumMale += stu.avg;
        countMale++;
    } else if (stu.gender === "F") {
        sumFemale += stu.avg;
        countFemale++;
    }
}
console.log("-----------------------------------------------\n");

// ----------------------------------------------------
// IN RA CÁC KẾT QUẢ THỐNG KÊ Ở DƯỚI BẢNG
// ----------------------------------------------------

let totalStudents = students.length;

// Yêu cầu 4: Đếm số SV mỗi xếp loại
console.log("--- BÁO CÁO THỐNG KÊ TỔNG HỢP ---");
console.log(`1. Số lượng xếp loại: 
   - Giỏi: ${countGioi} SV
   - Khá: ${countKha} SV
   - Trung bình: ${countTB} SV
   - Yếu: ${countYeu} SV`);

// Yêu cầu 5: In SV cao nhất, thấp nhất
console.log(`\n2. Thành tích cá nhân:
   - Thủ khoa: ${maxStudent.name} (${maxStudent.avg} điểm)
   - Bét bảng: ${minStudent.name} (${minStudent.avg} điểm)`);

// Yêu cầu 6: Tính điểm TB toàn lớp cho từng môn
console.log(`\n3. Điểm trung bình toàn lớp theo môn:
   - Toán: ${(sumMath / totalStudents).toFixed(1)}
   - Vật Lý: ${(sumPhysics / totalStudents).toFixed(1)}
   - Tin học (CS): ${(sumCs / totalStudents).toFixed(1)}`);

// Yêu cầu 7: Bonus tính điểm TB theo giới tính
console.log(`\n4. Thống kê theo giới tính (Bonus):
   - Nam (M): ${(sumMale / countMale).toFixed(1)} điểm
   - Nữ (F): ${(sumFemale / countFemale).toFixed(1)} điểm`);