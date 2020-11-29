  $(window).scroll(function () {
    let usersroll = $(window).scrollTop();
let abt =$("#about").offset().top;
    if (usersroll >="50") {

      $("nav").css("backgroundColor", "fff")
      $("#navbar").css("boxShadow", "0px 12px 30px -13px rgba(0,0,0,0.4)");

      $("#navbar a").css("color", "#007bff")
      if(usersroll>abt)
      {
        $("#btnup").fadeIn(500);
      
      }

    }

    else {
      $("#btnup").fadeOut(500);
      $("#navbar").css("backgroundColor", "transparent")
      $("#navbar").css("boxShadow", "none");
      $("nav a").css("color", "white");
    }
  });

  $("#btnup").click(function () {
  $("body,html").animate({ scrollTop: "0" }, 1000)
  });



$("#navbar a").click(function () {
  let idOfLink = $(this).attr("href")
  let  secoffset = $(idOfLink).offset().top;
  $("html,body").animate({ scrollTop:secoffset }, 1000)
});