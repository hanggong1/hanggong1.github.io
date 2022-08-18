$(document).ready(function(){
    $(".three-cl").addClass("color");
    $(".bottom-line").addClass("bottom-active2");

    //  Third active item
    $(".btn-three").click(function(){
        $(".three-cl").addClass("color2");
        $(".one-cl").removeClass("color");
        $(".two-cl").removeClass("color1");
        $(".bottom-line").removeClass("bottom-active bottom-active1");
    });
  });