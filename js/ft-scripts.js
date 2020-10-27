$(document).ready(function() {
  $("form#fortuneQuiz").submit(function (event) {
    event.preventDefault();
    $("#fortuneQuiz").hide();
    $("#return").show();
    let goodLuckIndex = [];
    $("input:checkbox[name=good-luck]:checked").each(function () {
      const goodLuckArray = $(this).val();
      goodLuckIndex.push(goodLuckArray);
      console.log(goodLuckIndex);
    });
    let badLuckIndex = [];
    $("input:checkbox[name=bad-luck]:checked").each(function () {
      const badLuckArray = $(this).val();
      badLuckIndex.push(badLuckArray);
    });
    if (goodLuckIndex.length > badLuckIndex.length) {
      $("#fortune1").show();
    }
    else if (goodLuckIndex.length < badLuckIndex.length) {
      $("#fortune2").show();
    }
    else if (goodLuckIndex.length === 0 && badLuckIndex.length === 0) {
      $("#no-fortune").show();
    }
    else {
      $("#fortune3").show();
    }
  });
  $("button#retake-quiz").click(function() {
    $("#fortune1").hide();
    $("#fortune2").hide();
    $("#fortune3").hide();
    $("#no-fortune").hide();
    $("#return").hide();
    $("#fortuneQuiz").show();
    $("input[type=checkbox]").prop('checked', false).uniform();
  });
});



// function refreshPage() {
//   window.location.reload();
// }