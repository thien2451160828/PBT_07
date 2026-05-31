### Câu A1 (5đ) — var / let / const

Dưới đây là dự đoán kết quả (không chạy code) và giải thích chi tiết cho từng đoạn mã:

**Đoạn 1:**
* **Dự đoán:** `undefined`
* **Giải thích:** Trong JavaScript, từ khóa `var` có cơ chế **Hoisting**. Trình biên dịch sẽ "kéo" phần khai báo biến (`var x;`) lên trên cùng của scope, nhưng phần gán giá trị (`= 5`) thì vẫn giữ nguyên ở dòng cũ. Do đó, khi `console.log(x)` chạy, biến `x` đã tồn tại nhưng chưa có giá trị.

**Đoạn 2:**
* **Dự đoán:** Báo lỗi `ReferenceError: Cannot access 'y' before initialization`
* **Giải thích:** Từ khóa `let` (và `const`) cũng có cơ chế hoisting, nhưng chúng bị đưa vào vùng an toàn gọi là **Temporal Dead Zone (TDZ)**. Bạn không thể truy cập vào các biến này trước dòng code khởi tạo chúng.

**Đoạn 3:**
* **Dự đoán:** Báo lỗi `TypeError: Assignment to constant variable.`
* **Giải thích:** `const` dùng để khai báo hằng số. Quy tắc tối thượng của hằng số là **không được gán lại giá trị** (re-assignment) sau khi đã khởi tạo. Lệnh `z = 20;` đã vi phạm điều này.

**Đoạn 4:**
* **Dự đoán:** `[1, 2, 3, 4]` (Chạy bình thường, kết quả bất ngờ với nhiều người mới).
* **Giải thích:** Tuy mảng `arr` được khai báo bằng `const`, nhưng trong JS, mảng và object là kiểu tham chiếu (Reference Type). `const` chỉ cấm gán lại hoàn toàn một mảng mới (ví dụ: `arr = [4, 5]`), nhưng nó **vẫn cho phép thay đổi nội dung bên trong** của mảng hoặc object đó (như thêm, sửa, xóa phần tử bằng `push`).

**Đoạn 5:**
* **Dự đoán:** In ra: `Trong block: 2`
    In ra: `Ngoài block: 1`
* **Giải thích:** `let` có phạm vi hoạt động theo khối (Block Scope) - tức là giới hạn trong cặp ngoặc nhọn `{}`. Biến `a` được khai báo bên trong block là một biến hoàn toàn độc lập, nó "che khuất" (shadowing) biến `a` ở bên ngoài. Khi ra khỏi block, biến `a` bên trong bị hủy, và `console.log` sẽ gọi lại biến `a` nguyên thủy ở bên ngoài.

### Câu A2 (5đ) — Data Types & Coercion

Dưới đây là dự đoán kết quả và giải thích chi tiết cho các phép toán ép kiểu (Type Coercion) trong JavaScript:

**1. Dự đoán kết quả:**
* `typeof null` 👉 `"object"` *(Đây là một "lỗi" lịch sử nổi tiếng của JavaScript từ những ngày đầu, đáng lẽ nó phải là "null").*
* `typeof undefined` 👉 `"undefined"`
* `typeof NaN` 👉 `"number"` *(NaN là Not-a-Number, nhưng kiểu dữ liệu của nó lại được JS xếp vào nhóm số).*
* `"5" + 3` 👉 `"53"`
* `"5" - 3` 👉 `2`
* `"5" * "3"` 👉 `15`
* `true + true` 👉 `2` *(true được ép kiểu thành 1).*
* `[] + []` 👉 `""` *(Mảng rỗng bị ép thành chuỗi rỗng).*
* `[] + {}` 👉 `"[object Object]"` *(Mảng rỗng thành `""`, Object thành `"[object Object]"`, cộng lại thành chuỗi).*
* `{} + []` 👉 `"[object Object]"` *(Trong lệnh console.log, nó hoạt động giống hệt câu trên).*

**2. Giải thích: Tại sao `"5" + 3` và `"5" - 3` cho kết quả khác nhau?**
* **Với phép cộng (`+`):** Trong JavaScript, toán tử `+` có 2 nhiệm vụ là cộng số học và nối chuỗi. Nếu JS thấy **ít nhất một toán hạng là chuỗi** (ở đây là `"5"`), nó sẽ ưu tiên việc nối chuỗi. Do đó, số `3` bị ép kiểu thành chuỗi `"3"`, và ghép lại thành `"53"`.
* **Với phép trừ (`-`):** Toán tử `-` (cùng với `*`, `/`, `%`) chỉ có duy nhất một nhiệm vụ là toán học. Do đó, JS buộc phải cố gắng ép kiểu chuỗi `"5"` về dạng số nguyên `5` để thực hiện phép tính, dẫn đến kết quả là `5 - 3 = 2`.

### Câu A3 (5đ) — So sánh == vs ===

Dưới đây là dự đoán kết quả cho các phép so sánh trong JavaScript:

**1. Dự đoán kết quả `true` hay `false`:**
* `5 == "5"` 👉 **`true`** (Toán tử `==` tự động ép kiểu chuỗi `"5"` thành số `5` trước khi so sánh).
* `5 === "5"` 👉 **`false`** (Toán tử `===` kiểm tra cả kiểu dữ liệu, một bên là số, một bên là chuỗi nên chắc chắn sai).
* `null == undefined` 👉 **`true`** (Đây là một quy tắc đặc biệt được quy định cứng trong ngôn ngữ JavaScript).
* `null === undefined` 👉 **`false`** (Khác kiểu dữ liệu: `null` là dạng object, `undefined` là kiểu undefined).
* `NaN == NaN` 👉 **`false`** (Đặc tính "dị" của JS: `NaN` - Not a Number - không bao giờ bằng bất cứ thứ gì, kể cả chính nó!).
* `0 == false` 👉 **`true`** (Kiểu boolean `false` bị ép kiểu thành số `0`).
* `0 === false` 👉 **`false`** (Khác kiểu dữ liệu: số nguyên và boolean).
* `"" == false` 👉 **`true`** (Chuỗi rỗng `""` bị ép về `0`, `false` cũng ép về `0`, nên `0 == 0`).

**2. Quy tắc: Từ giờ trở đi, bạn nên dùng `==` hay `===`? Tại sao?**
* **Khuyên dùng:** Luôn luôn sử dụng **`===`** (Strict Equality - So sánh nghiêm ngặt) và **`!==`** (Khác nghiêm ngặt).
* **Tại sao?** Toán tử `==` (Loose Equality) tự động ép kiểu ngầm định (Type Coercion) ở dưới nền để cố gắng làm cho 2 vế bằng nhau. Điều này sinh ra những kết quả cực kỳ phi logic và khó đoán (như các ví dụ `"" == false` hay `0 == false` bên trên). Việc sử dụng `===` bắt buộc cả **giá trị** và **kiểu dữ liệu** phải khớp nhau 100%. Thói quen này giúp code của bạn an toàn, dễ đoán, dễ debug và chặn đứng được vô số những lỗi ngầm (hidden bugs) nguy hiểm trong thực tế.

### Câu A4 (5đ) — Truthy & Falsy

**1. Liệt kê TẤT CẢ các giá trị Falsy trong JavaScript:**
Trong JavaScript, chỉ có đúng **6 giá trị cơ bản** (và 1 biến thể) được coi là Falsy (khi đưa vào điều kiện `if` sẽ bị ép kiểu thành `false`). Bất kỳ thứ gì không nằm trong danh sách này đều là Truthy.
1. `false` (Hiển nhiên)
2. `0` (Số không) và `-0` (Số không âm), `0n` (BigInt zero)
3. `""`, `''`, hoặc ` `` ` (Chuỗi rỗng - chuỗi không có bất kỳ ký tự nào)
4. `null` (Rỗng/Không có giá trị)
5. `undefined` (Chưa được định nghĩa)
6. `NaN` (Not a Number)

**2. Dự đoán kết quả các câu lệnh if:**
Dựa vào quy tắc trên, ta có kết quả in ra màn hình như sau:

* `if ("0") console.log("A");` 👉 **In ra "A"** *(Vì "0" là một chuỗi có nội dung, không phải chuỗi rỗng nên nó là Truthy).*
* `if ("") console.log("B");` 👉 **Không in** *(Chuỗi rỗng là Falsy).*
* `if ([]) console.log("C");` 👉 **In ra "C"** *(Mảng rỗng là một Object, và mọi Object đều là Truthy).*
* `if ({}) console.log("D");` 👉 **In ra "D"** *(Object rỗng cũng là Truthy).*
* `if (null) console.log("E");` 👉 **Không in** *(null là Falsy).*
* `if (0) console.log("F");` 👉 **Không in** *(Số 0 là Falsy).*
* `if (-1) console.log("G");` 👉 **In ra "G"** *(Số -1 khác 0 nên nó là Truthy).*
* `if (" ") console.log("H");` 👉 **In ra "H"** *(Chuỗi có chứa một dấu cách không phải là chuỗi rỗng, nên nó là Truthy).*

### Câu A5 (5đ) — Template Literals

Viết lại các cách nối chuỗi bằng **Template Literals** (sử dụng dấu backtick `` ` `` và cú pháp `${}`):

```javascript
// Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3: Template literals hỗ trợ xuống dòng cực kỳ tiện lợi cho việc viết HTML
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;