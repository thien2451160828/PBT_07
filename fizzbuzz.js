// ==========================================
// VERSION 1: CLASSIC FIZZBUZZ
// In từ 1-100. Chia hết 3 -> "Fizz", 5 -> "Buzz", cả 2 -> "FizzBuzz"
// ==========================================
console.log("--- BẢN CLASSIC ---");

function classicFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        
        // Kỹ thuật cộng dồn chuỗi: 
        // Nếu chia hết cho 3, gắn "Fizz" vào chuỗi.
        // Nếu chia hết cho 5, gắn tiếp "Buzz" vào chuỗi (sẽ tự thành "FizzBuzz" nếu thỏa mãn cả 2).
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        
        // Nếu output vẫn rỗng (tức là không chia hết cho 3 hay 5), thì in ra chính số đó (i)
        console.log(output || i);
    }
}

// Gọi hàm chạy thử
classicFizzBuzz();


// ==========================================
// VERSION 2: CUSTOM FIZZBUZZ (NÂNG CAO)
// Hàm nhận vào số n và một mảng các rules tự định nghĩa
// ==========================================
console.log("\n--- BẢN CUSTOM NÂNG CAO ---");

function customFizzBuzz(n, rules) {
    // Duyệt từ 1 đến n
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        // Duyệt qua từng luật (rule) trong mảng rules mà người dùng truyền vào
        for (let j = 0; j < rules.length; j++) {
            let currentRule = rules[j];
            // Nếu i chia hết cho divisor của luật hiện tại, thì cộng dồn word tương ứng
            if (i % currentRule.divisor === 0) {
                output += currentRule.word;
            }
        }
        
        // Tương tự, nếu không dính luật nào thì in ra số i
        console.log(output || i);
    }
}

// Gọi test theo đúng kịch bản của đề bài
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);