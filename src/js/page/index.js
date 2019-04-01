require(['../js/config.js'], function() {
    require(['BScroll', 'ajax'], function(BScroll, $) {

        function init() {
            scrollCont(); //scroll滚动
            ajaxData(); //数据渲染

        }

        function scrollCont() {
            new BScroll('section', {
                probetype: 2,
                click: true,
                scrollBar: true
            })
        }


        function ajaxData() {
            ajax({
                url: '/api/getData',
                success: function(data) {
                    if (data.code) {
                        renderData(data.data);
                        renderAidou(data.data);
                        actEvent(); //点击切换
                    }
                }
            })
        }

        function actEvent() {

        }

        function renderData(data) {
            // console.log(data);
            list.innerHTML = data.map(function(item) {
                return `<li data-id="${item.type}">${item.title}</li>`;
            }).join("");

        }

        function renderAidou(data) {
            console.log(data);
            aidou.innerHTML = data.map(function(item) {
                console.log(item);
                if (item.type === "1") {
                    // item[0].map(function(v) {
                    //     return `<dl>
                    //         <dt>
                    //             <img src="./img/${item.img}" alt="">
                    //         </dt>
                    //         <dd>${item.name}</dd>
                    //     </dl>`;
                    // })

                }
                // item.map(function(v) {
                //     console.log(v);
                // })
            }).join("");


        }



        init();
    });
});