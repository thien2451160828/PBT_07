function startGame() {
    // 1. Máy random 1 số từ 1-100
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    
    const maxGuesses = 7;
    let guessesCount = 0;
    let guessedHistory = []; // Mảng lưu các số đã đoán để check trùng

    alert("Chào mừng! Hệ thống đã chọn ngẫu nhiên một số từ 1 đến 100.\nBạn có tối đa 7 lượt đoán. Chúc may mắn!");

    // Vòng lặp game
    while (guessesCount < maxGuesses) {
        // 2. User nhập số
        let input = prompt(`Lượt ${guessesCount + 1}/${maxGuesses}.\nNhập dự đoán của bạn (1-100):\n(Các số đã thử: ${guessedHistory.join(', ')})`);

        // Xử lý trường hợp người dùng bấm Cancel để thoát game
        if (input === null) {
            alert("Bạn đã hủy trò chơi! Hẹn gặp lại.");
            return; 
        }

        // Ép kiểu input về số nguyên
        let guess = parseInt(input);

        // Validate 1: Check xem có phải số hợp lệ từ 1-100 không
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("⚠️ Lỗi: Vui lòng chỉ nhập số nguyên từ 1 đến 100!");
            continue; // Bỏ qua đoạn dưới, quay lại đầu vòng lặp (không bị trừ lượt)
        }

        // Validate 2: Check xem số này đã từng đoán chưa
        if (guessedHistory.includes(guess)) {
            alert("⚠️ Bạn đã đoán số này rồi! Hãy thử một con số khác nhé.");
            continue; // Không bị trừ lượt
        }

        // Nếu qua được các bước validate trên -> Input hợp lệ
        guessedHistory.push(guess);
        guessesCount++; // 3. Bắt đầu tính 1 lượt đoán

        // Kiểm tra kết quả
        if (guess === targetNumber) {
            // 4. Đoán đúng
            alert(`🎉 CHÍNH XÁC! 🎉\nBạn đoán đúng sau ${guessesCount} lần!`);
            return; // Thắng game -> Kết thúc hàm
        } else if (guess < targetNumber) {
            alert("Cao hơn! ⬆️");
        } else {
            alert("Thấp hơn! ⬇️");
        }
    }

    // 5. Nếu vòng lặp chạy hết 7 lần mà không trúng (không bị return giữa chừng) -> Thua
    alert(`💥 GAME OVER! 💥\nBạn đã hết ${maxGuesses} lượt đoán.\nSố bí mật chính là: ${targetNumber}`);
}