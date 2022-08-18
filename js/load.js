/* if (window.matchMedia("(min-width: 1281px)").matches) {
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
        var load = document.getElementsByClassName('button')[0];

        load.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenArray = [];
            hiddenArray = array.slice(6, 10);

            for (var i = 0; i < hiddenArray.length; i++) {
                hiddenArray[i].style.display = 'block';
            }
            load.style.display = 'none';
            
        });
    });
}

if (window.matchMedia("(min-width: 769px) and (max-width: 1280px)").matches) {
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
        var load = document.getElementsByClassName('button')[0];

        load.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenArray = [];
            hiddenArray = array.slice(6, 10);

            for (var i = 0; i < hiddenArray.length; i++) {
                hiddenArray[i].style.display = 'block';
            }
            load.style.display = 'none';
            
        });
    });
}

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
        var load = document.getElementsByClassName('button')[0];
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
                
            }
            else if(count == 2){
                hiddenArray = array.slice(4, 6);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                
            }
            else if(count == 4){
                hiddenArray = array.slice(6, 8);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
        
            }
            else if(count == 6){
                hiddenArray = array.slice(8, 10);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                
                load.style.display = 'none';
            }
        });
    });
}
*/

if (window.matchMedia("(min-width: 769px)").matches) {
    $(function () {
        $(".card").hide();
        let array = [];
        const list = document.getElementsByClassName('card');

        [].forEach.call(list, function (item) {
            array.push(item)
        })

        let visiArray = [];
        visiArray = array.slice(0, 6);
        const displayStyle = 'block'

        visiArray.forEach(function (item) {
            item.style.display = displayStyle;
        })

        const infoHight = document.getElementById('infomation');
        const load = document.getElementsByClassName('button')[0];

        load.addEventListener('click', function (e) {
            e.preventDefault();
            let hiddenArray = [];
            hiddenArray = array.slice(6, 10);

            hiddenArray.forEach(function (item) {
                item.style.display = displayStyle;
            })
            load.style.display = 'none';

        });
    });
}

if (window.matchMedia("(max-width: 768px)").matches) {
    $(function () {
        $(".card").hide();
        var array = [];
        var list = document.getElementsByClassName('card');

        [].forEach.call(list, function (item) {
            array.push(item)
        })

        var visiArray = [];
        visiArray = array.slice(0, 2);
        const displayStyle = 'block'

        visiArray.forEach(function (item) {
            item.style.display = displayStyle;
        })

        var infoHight = document.getElementById('infomation');
        var load = document.getElementsByClassName('button')[0];
        var count = 0

        load.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenArray = [];
            console.log(count);

            if (count == 0) {
                hiddenArray = array.slice(2, 4);

                hiddenArray.forEach(function (item) {
                    item.style.display = displayStyle;
                    count += 1;
                })

            }
            else if (count == 2) {
                hiddenArray = array.slice(4, 6);

                hiddenArray.forEach(function (item) {
                    item.style.display = displayStyle;
                    count += 1;
                })

            }
            else if (count == 4) {
                hiddenArray = array.slice(6, 8);

                hiddenArray.forEach(function (item) {
                    item.style.display = displayStyle;
                    count += 1;
                })

            }
            else if (count == 6) {
                hiddenArray = array.slice(8, 10);

                hiddenArray.forEach(function (item) {
                    item.style.display = displayStyle;
                    count += 1;
                })

                load.style.display = 'none';
            }
        });
    });
}