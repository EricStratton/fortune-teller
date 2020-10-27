$(document).ready(function() {
  $("form#fortuneQuiz").submit(function (event) {
    event.preventDefault();
    // $("#work-responses").show();
    let userResponseArray = [];
    $("input:checkbox[name=good-luck]:checked").each(function () {
      const goodLuckArray = $(this).val();
      userResponseArray.push(goodLuckArray);
      console.log(userResponseArray);
      // const workTransportationMode = $(this).val();
      // $('#work-responses').append(workTransportationMode + "<br>");
    });
    // // $("#fun-responses").show();
    // $("input:checkbox[name=bad-luck]:checked").each(function () {
    //   const funTransportationMode = $(this).val();
    //   // $('#fun-responses').append(funTransportationMode + "<br>");
    // });
    // $('#fortuneQuiz').hide();
  });
});


// if () {

// }
