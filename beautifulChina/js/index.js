
(function () {

    /*-------------------------------logo部分----------------------------*/
   //鼠标特效
   let liS = $("#k_list li");
   liS.hover(function () {
       $(this).addClass("selected").siblings().removeClass("selected");
   });
    //鼠标点击标题改变上下箭头
   $("#k_tit").click(function () {
       if(!this.flg){
           $(this).css('background-image','url(img/up.png)');
           $("#k_list").css('display','block');
           this.flg = true;
       }else if(this.flg){
           $(this).css('background-image','url(img/down.png)');
           $("#k_list").css('display','none');
           this.flg = false;
       }
   });


   /*-------------------------------右侧导航栏部分-------------------*/
    //导航栏隐藏显示
    $("#k_navList .showCon").each(function (index) {
        this.index = index;
    });
    $("#k_navList .showCon").hover(function () {
        $("#k_navList .showCon .con").eq(this.index).slideDown("slow").parent().siblings().find(".con").slideUp("slow");
        $("#k_navList .showCon i").eq(this.index).css('display','block').parent().parent().siblings().find("i").css('display','none');
        //控制探索中国、实用信息、最新资讯，每次滑出的默认显示索引为0的内容
        $("#k_list2>ul>li>div").eq(0).addClass("selected").parent().siblings().find("div").removeClass("selected");
        $("#k_list2 .right>div").eq(0).css('display','block').siblings().css('display','none');
        $("#k_list3>ul>li>div").eq(0).addClass("selected1").parent().siblings().find("div").removeClass("selected1");
        $("#k_list3 .right>div").eq(0).css('display','block').siblings().css('display','none');
        $("#k_list4>ul>li>div").eq(0).addClass("selected2").parent().siblings().find("div").removeClass("selected2");
        $("#k_list4 .right>div").eq(0).css('display','block').siblings().css('display','none');
    }, function () {
        $("#k_navList .showCon .con").eq(this.index).slideUp("slow");
        $("#k_navList .showCon i").eq(this.index).css('display','none');
    });

    //----------特色主题游部分的JS
    $("#k_list1 a").each(function (index) {
        this.index = index;
    });
    $("#k_list1 a").hover(function () {
        //console.log(this.index);
        if(this.index!==0&&this.index!==4&&this.index!==8&&this.index!==12){
            $("#k_img img").eq(this.index).css('display','block').siblings().css('display','none');
            $("#k_list1>ul>li>div").css('display','none');
            $(this).css('color','#c40f29').siblings().css('color','#fff').parent().siblings().find("a").css('color','#fff');
        }else{
            let f = this.index/4;
            $(this).siblings().css('color','#fff').parent().siblings().find("a").css('color','#fff');
            $("#k_list1>ul>li>div").eq(f).css('display','block').parent().siblings().find("div").css('display','none');
            $("#k_img img").eq(this.index).css('display','block').siblings().css('display','none');
        }
    });

    //----------探索中国部分的JS
    $("#k_list2>ul>li").hover(function () {
        let index = $(this).index();
        $("#k_list2>ul>li>div").eq(index).addClass("selected").parent().siblings().find("div").removeClass("selected");
        $("#k_list2 .right>div").eq(index).css('display','block').siblings().css('display','none');
    });

    //实用信息部分JS
    $("#k_list3>ul>li").hover(function () {
        let index = $(this).index();
        $("#k_list3>ul>li>div").eq(index).addClass("selected1").parent().siblings().find("div").removeClass("selected1");
        $("#k_list3 .right>div").eq(index).css('display','block').siblings().css('display','none');
    });

    //最新资讯部分JS
    $("#k_list4>ul>li").hover(function () {
        let index = $(this).index();
        $("#k_list4>ul>li>div").eq(index).addClass("selected2").parent().siblings().find("div").removeClass("selected2");
        $("#k_list4 .right>div").eq(index).css('display','block').siblings().css('display','none');
    });

    //-----------------------------首屏轮播图部分JS
    //视频部分
    //控制视频是否播放、暂停，并且在视频播放结束之后显示背景图片，视频播放的时候隐藏背景图片
    let f = 0;//记录标识的开关变量
    var k_wrap = $("#k_wrap")[0];
    let len = $(".slide").length;
    $(".slideVideo").click(function () {
        if(f===0){
            $("#k_video").get(0).pause();
            f=1;
        }else if(f===1){
            $("#k_video").get(0).play();
            f=0;
        }
        $(".slide>.slideImg").eq(0).fadeOut().removeClass("shows");
        //清除定时器
        clearInterval(k_wrap.timer);
    });
    $("#k_video").get(0).addEventListener('ended', function () {
        //监听视频是否播放结束、结束之后显示背景图片，绑定定时器
        $(".slide>.slideImg").eq(0).fadeIn().addClass("shows");
          f=1;
        clearInterval(k_wrap.timer);
        k_wrap.timer = setInterval(slider,4000);
    });
    k_wrap.step = 0;
    function slider(n) {
        k_wrap.step++;
        k_wrap.step = typeof n !=="undefined"?n:k_wrap.step%len;
        $(".slide").stop().eq(k_wrap.step).fadeIn().siblings().fadeOut();
        $(".slide").eq(k_wrap.step).children(".slideImg").addClass("shows").siblings().children(".slideImg").removeClass("shows");
        $(".slide").eq(k_wrap.step).children(".slideTxt").addClass("showsTxt").siblings().children(".slideTxt").removeClass("showsTxt");
        $("a","#k_page").stop().eq(k_wrap.step).addClass("selected").addClass("current").siblings().removeClass("selected").removeClass("current");
    }
    $("a","#k_page").click(function() {
        slider(this.index);
        clearInterval(k_wrap.timer);
        k_wrap.timer = setInterval(slider,4000);
        $("#k_video").get(0).pause();
        $(".slide>.slideImg").eq(0).fadeIn().addClass("shows");
        f=1;
    });
    //小圆点，鼠标滑上改变背景颜色
    $("a","#k_page").hover(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    //绑定索引
    $("a","#k_page").each(function (index) {
        this.index = index;
    });

    //input框随机赋值value
    var k=parseInt((Math.random()*40));
    var arr=["世界遗产","江南","长江","京杭大运河","黄河","长城","香格里拉","故宫","天坛","颐和园","兵马俑","嘉峪关","九寨沟","黄山","泰山","拉萨","桂林","北京","上海","天津","重庆","黑龙江","吉林","辽宁","河北","山西","山东","江苏","浙江","安徽","福建","江西","河南","湖南","湖北","广东","海南","四川","青海","陕西","甘肃","杭州","西宁","内蒙古","新疆","西藏","宁夏","广西"];
    var valuec=arr[k];
    $('#k_searchCon1').val(valuec);
    $('#k_searchCon').val(valuec);

    //---------------------下面是登录注册部分JS
    $("#k_login").click(function () {
        //点击登录显示
        $("#y_login").css('display','block');
        $(".y_login_cont").css('display','block');
        $(".y_registr").css('display','none');
    });
    $("#k_register").click(function () {
        //点击注册显示
        $("#y_login").css('display','block');
        $(".y_login_cont").css('display','none');
        $(".y_registr").css('display','block');
        draw();
    });
    $("#y_login_close").click(function () {
        //关闭登录界面
        $("#y_login").css('display','none');
        $("#y_info").html("");
        $("#login_user")[0].value = "";
        $("#login_pwd")[0].value = "";
    });
    $("#y_reg_close").click(function () {
        //关闭注册界面
        $("#y_login").css('display','none');
        $("#y_info").html("");
        $("#login_user")[0].value = "";
        $("#login_pwd")[0].value = "";
    });
    $("#y_register")[0].onclick = registr;
    $("#pwd")[0].onclick = checkBox;
    $("#checkCode")[0].onclick = checkCode;
    $("#canvas").click(function () {
        draw();
    });
    function registr(){
        draw();
        $(".y_login_cont").css('display','none');
        $(".y_registr").css('display','block');
        $("#login_user")[0].value = "";
        $("#login_pwd")[0].value = "";
    }
    function checkBox(){
        let checkBox = $("#pwd")[0];
        let login_user = $("#login_user")[0];
        let login_pwd = $("#login_pwd")[0];
        let check =  confirm("记录密码功能不宜在公共场所(如网吧等)使用,以防密码泄露.您确定要使用此功能吗?")
        if(check){
            checkBox.checked = true;
        }else{
            checkBox.checked = false;
        }
    }
    function randomRgbColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    let code="";

    function draw(){
        //canvas 绘制随机验证码
        code="";
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        canvas.width = 120;
        canvas.height = 35;
        context.strokeRect(0, 0, 120, 35);

// var code="";

        var aCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,1,2,3,4,5,6,7,8,9";
        var aLength = aCode.split(",").length;
        for (var i = 0; i <= 3; i++) {
            var x = 20 + i * 20;
            var y = 20 + Math.random() * 10;
            var j = Math.floor(Math.random() * aLength);
            var deg = Math.random() * 90 * Math.PI / 180;
            var txt = aCode.split(",")[j];

            code += aCode.split(",")[j];

            context.fillStyle = randomRgbColor();
            context.font = "bold 20px 微软雅黑";
            //修改坐标原点和旋转角度
            context.translate(x, y);
            context.rotate(deg);
            context.fillText(txt, 0, 0);
            //恢复坐标原点和旋转角度
            context.rotate(-deg);
            context.translate(-x, -y);
        }


        //干扰线
        for (var i = 0; i < 8; i++) {
            context.strokeStyle = randomRgbColor();
            context.beginPath();
            context.moveTo(Math.random() * 120, Math.random() * 35);
            context.lineTo(Math.random() * 120, Math.random() * 35);
            context.stroke();
        }
        /**绘制干扰点**/
        for (var i = 0; i < 20; i++) {
            context.fillStyle = randomRgbColor();
            context.beginPath();
            context.arc(Math.random() * 120, Math.random() * 35, 1, 0, 2 * Math.PI);
            context.fill();
        }
//alert(code);
    }
    //用户名正则表达式:用户名必须是4~20位的英文字母和数字组成!
    let reg_user = /^[a-zA-Z0-9]{4,20}$/;
    //密码正则表达式:密码必须是6~16位的数字加上字母!
    let reg_pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    //邮箱的正则表达式:匹配所有格式的邮箱
    let reg_mail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    function checkCode(){
        //注册框点击的时候
        let inputCode = $("#codenumber").val();
        let y_userName = $("#y_userName").val();
        let y_mail = $("#y_mail").val();
        let y_pwd = $("#y_pwd").val();
        let y_confirmPwd = $("#y_confirmPwd").val();
        //验证码的正则匹配：构造函数的方式创建
        let reg_code = new RegExp("^"+code+"$","i");
        if(!reg_user.test(y_userName)){
            //判断用户名
            $("#y_info").html("用户名必须是4~20位的英文字母和数字组成!");
        }else {
            //判断密码
            if(!reg_pwd.test(y_pwd)){
                $("#y_info").html("密码必须是6~16位的数字加上字母!");
            }else{
                //判断邮箱
                if(!reg_mail.test(y_mail)){
                    $("#y_info").html("邮箱格式错误!");
                }else{
                    //判断确认密码
                    if(y_confirmPwd!==y_pwd){
                        $("#y_info").html("两次密码输入不相同!");
                    }else{
                        //判断验证码
                        if(inputCode==""){
                            $("#y_info").html("请输入验证码!");
                        }else if(!reg_code.test(inputCode)){
                            $("#y_info").html("验证码不正确!");
                        }else{
                            $("#y_info").html("");
                            indexDB.addData();
                            alert("注册成功!");
                            $(".y_login_cont").css('display','block');
                            $(".y_registr").css('display','none');
                        }
                    }
                }
            }
        }
    }
    //用户名
    $("#y_userName").blur(function () {
        let y_userName = $("#y_userName").val();
        if(y_userName==""){
            $("#y_info").html("用户名不能为空");
        }else if(!reg_user.test(y_userName)){
            $("#y_info").html("用户名必须是4~20位的英文字母和数字组成!");
        }else{
            indexDB.getData(0);
        }
    });
    //邮箱
    $("#y_mail").blur(function(){
        let y_mail = $("#y_mail").val();
        if(y_mail==""){
            $("#y_info").html("邮箱账号不能为空");
        }else if(!reg_mail.test(y_mail)){
            $("#y_info").html("邮箱格式错误");
        }else{
            indexDB.getData(1);
        }
    });
    //密码
    $("#y_pwd").blur(function () {
        let y_pwd = $("#y_pwd").val();
        if(!reg_pwd.test(y_pwd)||y_pwd==""){
            $("#y_info").html("密码必须是6~16位的数字加上字母!");
        }else{
            $("#y_info").html("");
        }
    });
    //重复密码
    $("#y_confirmPwd").blur(function () {
        let y_pwd = $("#y_pwd").val();
        let y_confirmPwd = $("#y_confirmPwd").val();
        if(y_confirmPwd!==y_pwd){
            $("#y_info").html("两次密码输入不相同");
        }else{
            $("#y_info").html("");
        }
    });
//--------------------发现美景、中国美食部分JS
    (function () {
        let $timer;
        let $foodTimer;
        let $foodStep = 0;
        let step;
        $.ajax({
            url: 'json/meijing.json',
            method: 'get',
            async: false,
            success: function (data) {
                //console.log(data);
                wBindImg($('.w-jing-content img'), data);
                $(window).scroll(wBindImg.bind(null, $('.w-jing-content img'), data));
                $timer = setInterval(autoMove, 4000);
            }
        });

        $.ajax({
            url: 'json/food.json',
            method: 'get',
            async: false,
            success: function (data) {
                //console.log(data);
                wBindImg($('.w-food-content img'), data);
                $(window).scroll(wBindImg.bind(null, $('.w-food-content img'), data));
                $foodTimer = setInterval(foodAutoMove, 4000);
            }
        });

        function wBindImg($ele, data) {
            //console.log($ele);
            $ele.each(function (index) {
                let winH = document.documentElement.clientHeight || document.body.clientHeight;
                let winT = document.documentElement.scrollTop || document.body.scrollTop;
                let curH = parseFloat($(this).css('height'));
                let curT = parseFloat($(this).offset().top);
                let that = this;
                if (winT + winH > curH + curT) {
                    let newImg = new Image;
                    let trueUrl = data[index].img;
                    newImg.src = trueUrl;
                    $(newImg).load(function () {
                        that.src = trueUrl;
                    });
                    newImg = null;
                }
            });
        }

        function autoMove() {
            $('#dot li').first().appendTo($('#dot'));
            $('#swiper').animate({left: -1006}, 500, function () {
                $('#swiper div').first().appendTo($('#swiper'));
                $('#swiper').css('left', 0);
            });
        }

        function foodAutoMove() {
            step = ++$foodStep;
            if ($foodStep == 10) {
                $('#food-swiper').css('left', 0);
                $foodStep = 1;
                step = 1;
            }
            if ($foodStep == 9) {
                step = 0
            }

            $('#food-swiper').animate({left: -1006 * $foodStep}, 500);

            $('.w-food-banner li').eq(step).addClass('select').siblings().removeClass('select')
        }

        $('.w-food-banner li').click(function () {
            var num = $(this).index();
            $('#food-swiper').animate({left: -1006 * num}, 500);
            $('.w-food-banner li').eq(num).addClass('select').siblings().removeClass('select');
            $foodStep = num;

        })

        $('.w-jing-content li').hover(function () {
            $(this).children('.hidden').fadeIn(500);
            $(this).find('img').siblings().fadeOut();
            $(this).find('img').animate({width: '120%', height: '120%'}, 500);
        }, function () {
            $(this).find('img').siblings().fadeIn();
            $(this).children('.hidden').fadeOut(500);
            $(this).find('img').animate({width: '100%', height: '100%'}, 500);
        });

        $('.w-jing-content').hover(function () {
            clearInterval($timer);
        }, function () {
            $timer = setInterval(autoMove, 2000);
        });

        $('#dot li').hover(function () {
            clearInterval($timer);
        }, function () {
            $timer = setInterval(autoMove, 2000);
        });

        $('#dot li').click(function () {
            // 判断class是否是select 如果是直接返回
            if ($(this).hasClass('select')) {
                return;
            }

            $(this).addClass('select').siblings().removeClass('select');
            $('#w-right').appendTo($('#swiper'));
            if ($(this).next().length) {
                $('#swiper').css({left: -1006});
                $('#swiper').animate({left: 0}, 500);
            } else {
                $('#swiper').animate({left: -1006}, 500);
            }
        });

        $('.w-food-banner li').hover(function () {
            clearInterval($foodTimer);
            if ($(this).hasClass('select')) {
                return;
            }
            $(this).addClass('select');
        }, function () {
            $foodTimer = setInterval(foodAutoMove, 4000);
            let num = $(this).index();
            if (num == $foodStep) return;
            $(this).removeClass('select');
        });


        $('.w-food-content li div').hover(function () {
            if ($(this).hasClass('food-left') || $(this).hasClass('food-right-top') || $(this).hasClass('food-right-bottom')) {
                $(this).find('.hidden').fadeIn(500);
                $(this).find('img').animate({width: '120%', height: '120%'}, 500);
                $(this).find('p').fadeOut(500);
            }
        }, function () {

            if ($(this).hasClass('food-left') || $(this).hasClass('food-right-top') || $(this).hasClass('food-right-bottom')) {
                $(this).find('img').animate({width: '100%', height: '100%'}, 500);
                $(this).find('.hidden').fadeOut(500);
                $(this).find('p').fadeIn(500);
            }
        });
        $('.w-food-content li').hover(function () {
            clearInterval($foodTimer);
        }, function () {
            $foodTimer = setInterval(foodAutoMove, 4000);
        });
    })();

    //----------------最新资讯部分JS
    (function () {
        var header=document.getElementById("header");
        var tagList=header.getElementsByTagName("h2");
        var content=document.getElementById("content");
        var conList = content.getElementsByClassName("con-box");


        for(var i=0;i<tagList.length;i++){
            tagList[i].index = i;
            tagList[i].onclick = function () {
                for(var j=0;j<tagList.length;j++){
                    tagList[j].classList.remove("select");
                    conList[j].classList.remove("select");
                }
                this.classList.add("select") ;
                conList[this.index].classList.add("select") ;
            }
        }
    })();
    //特色主题游、民族风情部分JS
    let $y_more = $("#y_more");

    let $list = $(".y_list");
    let flag = true;
    $y_more.click(function () {
        if(flag){

            $list.stop().slideDown(1000);
            $y_more.html("点我收起");
            swiper_auto();
            flag = false;
        }else{
            $list.stop().slideUp(2000);
            $y_more.html("查看更多");
            flag = true;
            // swiper_auto=null;
        }
    });


})();
