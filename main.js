// تعيين الوقت الذي تريد العد التنازلي له
var countDownDate = new Date("Oct 12, 2023 00:00:00").getTime();

// تحديث العد التنازلي كل ثانية
var x = setInterval(function () {
  // الحصول على الوقت الحالي
  var now = new Date().getTime();

  // حساب المسافة بين الوقت الحالي والوقت المحدد للعد التنازلي
  var distance = countDownDate - now;

  // حساب الأيام والساعات والدقائق والثواني المتبقية
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // عرض العد التنازلي في عنصر HTML
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // عرض محتوى الصفحة بعد انتهاء العد التنازلي
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML =
      "Beware, my birthday is today!";
    document.getElementById("content").style.display = "flex";
  }
}, 1000);
