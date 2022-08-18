$(function () {
    $(".card").hide();
    var array = [];
    var list = document.getElementsByClassName('card');

    for (var i = 0; i < list.length; i++) {
        array.push(list[i]);
    }
    var visiArray = [];
    visiArray = array.slice(0, 6);

    for (var i = 0; i < visiArray.length; i++) {
        visiArray[i].style.display = 'block';
    }
    var infoHight = document.getElementById('infomation');
    var load = document.getElementsByClassName('info-btn')[0];
    
    load.addEventListener('click', function (e) {
        e.preventDefault();
        var hiddenArray = [];
        hiddenArray = array.slice(6, 10);

        for (var i = 0; i < hiddenArray.length; i++) {
            hiddenArray[i].style.display = 'block';
        }
        infoHight.style.height = '2692px';
    });
});

if (window.matchMedia("(max-width: 768px)").matches) {
    $(function () {
        $(".card").hide();
        var array = [];
        var list = document.getElementsByClassName('card');

        for (var i = 0; i < list.length; i++) {
            array.push(list[i]);
        }
        var visiArray = [];
        visiArray = array.slice(0, 2);

        for (var i = 0; i < visiArray.length; i++) {
            visiArray[i].style.display = 'block';
        }
        var infoHight = document.getElementById('infomation');
        var load = document.getElementsByClassName('info-btn')[0];
        var count = 0

        load.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenArray = [];
            console.log(count);

            if(count == 0){
                hiddenArray = array.slice(2, 4);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                infoHight.style.height = '2225px';
            }
            else if(count == 2){
                hiddenArray = array.slice(4, 6);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                infoHight.style.height = '3185px';
            }
            else if(count == 4){
                hiddenArray = array.slice(6, 8);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                infoHight.style.height = '4145px';
            }
            else if(count == 6){
                hiddenArray = array.slice(8, 10);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                infoHight.style.height = '5105px';
            }
        });
    });
}