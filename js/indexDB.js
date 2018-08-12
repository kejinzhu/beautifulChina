let indexDB = (function () {
    //判断是否支持indexDB、处理兼容问题
    window.indexedDB = "indexedDB" in window?window.indexedDB:window.mozIndexedDB || window.webkitIndexedDB;
    //创建数据库和数据仓库
    //1-我们先创建一个对象，放一些数据比如dbInfo ，可以设置数据库名字dbName，数据库的版本dbVersion
    let dbInfo = {
        dbName:"regInfo",
        dbVersion: 4,
        dbInstance: {}
    };
    //2-创建数据库 indexedDB.open方法用于打开数据库。返回的是一个对象，第一个参数是数据库名称，格式为字符串。第二个参数是数据库版本。
    function addData(){
        let openRequest = window.indexedDB.open(dbInfo.dbName,dbInfo.dbVersion);
        //3-创建数据库时会触发三个事件之一，这三个事件，分别是upgradeneeded，success，onerror。
        openRequest.addEventListener('upgradeneeded', function (e) {
            //第一次打开数据库
            db = e.target.result;
            let storeNames = db.objectStoreNames;
            //创建数据库的表格（或者叫数据库仓库）
            if(!storeNames.contains('table')){
                db.createObjectStore('table',{
                    keyPath:"id",
                    autoIncrement:true
                })
            }
        });
        openRequest.addEventListener('success', function (e) {
            //数据库打开成功
            let db = e.target.result;
            //1-返回一个事务对象,indexDB 数据库只有  readwrite 以及readonly两个可选的状态。
            let trans = db.transaction(["table"],"readwrite");
            //2-objectStore方法用于返回指定的对象仓库(数据库表格)对象。
            let store = trans.objectStore("table");
            //3-创建一个要添加的对象。
            let info = {
                y_userName: $("#y_userName").val(),
                y_mail: $("#y_mail").val(),
                y_pwd: $("#y_pwd").val()
            };
            //5-添加数据：add方法的第一个参数是所要添加的数据，第二个参数是这条数据对应的键名（key）
            let reqAdd = store.add(info);
            //6-添加数据：add方法也有两个事件，一个error一个success可以在回调函数中调用。
            reqAdd.addEventListener('success', function (e) {
                console.log("数据添加成功..."+e);
            });
            reqAdd.addEventListener('error', function (e) {
                console.log("Error",e.target.error.name);
                console.log("数据添加失败");
            });
        });
        openRequest.addEventListener('error', function (e) {
            console.dir(e);
        });
    }
    function getData(val){

        let openRequest = window.indexedDB.open(dbInfo.dbName,dbInfo.dbVersion);
        openRequest.addEventListener('success', function (e){
            let db = e.target.result;
            let tx = db.transaction(["table"], 'readwrite');
            let store = tx.objectStore('table');
            //创建一个游标，和Oracle里面的游标一模一样，类似JAVA里面的容器遍历的iterator()就是一个性能
            let cursor = store.openCursor();
            cursor.onsuccess = function(e) {
                let y_userName = $("#y_userName").val();
                let y_mail = $("#y_mail").val();
                let login_user = $("#login_user").val();
                let login_pwd = $("#login_pwd").val();
                let checkBox = $("#pwd")[0];
                var res = e.target.result;
                if(res) {
                    if(val === 0){
                        //判断用户名
                        if(res.value.y_userName === y_userName){
                            $("#y_info").html("此用户已注册!");
                            return ;
                        }else{
                            $("#y_info").html("");
                        }
                    }else if(val === 1){
                        //判断邮箱
                        if(res.value.y_mail === y_mail){
                            $("#y_info").html("此邮箱已被注册过!");
                            return;
                        }else{
                            $("#y_info").html("");
                        }
                    }else if(val === 2){
                        //判断用户名和密码
                        if(res.value.y_userName!=login_user||res.value.y_pwd!=login_pwd||login_user==""||login_pwd==""){
                            $("#y_info").html("用户名或者密码错误!");
                            return;
                        }else{
                            if(!checkBox.checked){
                                $("#login_user")[0].value = "";
                                $("#login_pwd")[0].value = "";
                            }
                            $("#y_info").html("");
                            $("#y_login").css('display','none');
                            console.log(checkBox.checked);
                        }
                    }
                    res.continue();
                    //5-continue方法将光标移到下一个数据对象，如果当前数据对象已经是最后一个数据了，则光标指向null。
                }
            };
        });
    }
    return {
        getData:getData,
        addData:addData
    };
})();