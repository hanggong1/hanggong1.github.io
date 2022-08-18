$(document).ready(function(){
    $(".two-cl").addClass("color");
    $(".bottom-line").addClass("bottom-active1");

    //  Second active item
    $(".btn-two").click(function(){
        $(".two-cl").addClass("color1");
        $(".one-cl").removeClass("color");
        $(".three-cl").removeClass("color2");
        $(".bottom-line").removeClass("bottom-active bottom-active2");
    });
  });