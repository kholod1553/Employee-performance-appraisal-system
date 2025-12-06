let input1 = prompt("الرجاء إدخال القيمة الأولى (من 0 إلى 100):");
let score1 = Number(input1);
if ((score1) , score1 < 0 , score1 > 100) {
}


let input2 = prompt("الرجاء إدخال القيمة الثانية (من 0 إلى 100):");
let score2 = Number(input2);
if ((score2),score2 < 0 , score2 > 100) {}
  else{ console.log( alert("تحذير: القيمة المدخلة الثانية غير صالحة. سيستخدم البرنامج هذه القيمة."));
}


let input3 = prompt("الرجاء إدخال القيمة الثالثة (من 0 إلى 100):");
let score3 = Number(input3);

// التحقق لمرة واحدة فقط
if (isNaN(score3), score3 < 0 , score3 > 100) {
    alert("تحذير: القيمة المدخلة الثالثة غير صالحة. سيستخدم البرنامج هذه القيمة.");
}

// 4. حساب متوسط الأداء
var sum = score1 + score2 + score3;
var average = sum / 3;
var roundedAverage = average.toFixed(2);

// 5. تحديد التقييم بناءً على المتوسط
let rating;

if (average >= 90) {
    rating = "ممتاز جدًا 💎";
} 
else if (average >= 75) {
    rating = "جيد جدًا 👍";
} 
else if (average >= 60) {
    rating = "مقبول 🙂";
    styleColor = 'orange'
} 
else if (average >= 50) {
    rating = "ضعيف ⚠️";
} 
else { 
    rating = "راسب ❌";
}
if (score1 < 50 || score2 < 50 || score3 < 50) {
    rating = "راسب بسبب ضعف في أحد الجوانب ⛔";
    styleColor = 'darkred';}
alert(`

القيمة الأولى: ${score1}
القيمة الثانية: ${score2}
القيمة الثالثة: ${score3}
متوسط الأداء: ${roundedAverage}
التقييم العام: ${rating}
`);