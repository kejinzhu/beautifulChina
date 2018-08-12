(
    function() {
        window.onload = function() {


            var z_map = document.getElementsByTagName('z-map')[0];
            let str = `
            <div id="wrapper">
        
 
      
        <div class="xzq_title">
            <a href="javascript:;" class="xzq_title_text" style="cursor: default;">图游中国</a>
        </div>
        <!--主要内容-->
        <div class="tyzg_section">
            <div class="w clearfix">
                <!--地图-->
                <ul class="fl map">
                    <li class="p21" id="21">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">新疆维吾尔自治区</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/xinjiang.png" title="新疆维吾尔自治区" alt="新疆维吾尔自治区" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">新疆维吾尔自治区</h3>
                            <p>新疆维吾尔自治区，简称新，位于中国西北边陲，首府乌鲁木齐，是中国五个少数民族自治区之一...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p22" id="22">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">甘肃</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/gansu.png" title="甘肃" alt="甘肃" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">甘肃</h3>
                            <p>甘肃，简称甘或陇，位于黄河上游，省会为兰州。甘肃是取甘州（今张掖）与肃州（今酒泉）二地的首字而成...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p24" id="24">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">内蒙古自治区</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/neimenggu.png" title="内蒙古" alt="内蒙古" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">内蒙古</h3>
                            <p>内蒙古，全称内蒙古自治区，首府为呼和浩特，内蒙古横跨中国东北、华北、西北三大地区，接邻八个省区是。...</p>
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p7" id="7">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">陕西</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/shanxi2.png" title="陕西" alt="陕西" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">陕西</h3>
                            <p>陕西（shanxi），简称“陕”或“秦” ，中华人民共和国省级行政单位之一，省会古都西安...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p1" id="1">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">黑龙江</span>
                        <i></i>
                    </a>
                            <!--<a href="/zh/tyzg/heilongjiang/heilongjiang.shtml" class="main_message clearfix" target="_blank">
                        <img src="map/city/heilongjiang.png" title="太阳岛" alt="太阳岛" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">黑龙江</h3>
                            <p>黑龙江位于中国东北边陲，是中国位置最北、纬度最高的省份。
黑龙江地域辽阔、四季分明...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                     </a>									-->
                        </div>
                    </li>
                    <li class="p27" id="27">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">吉林</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/jilin.png" title="吉林" alt="吉林" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">吉林</h3>
                            <p>吉林省地处中国东北中部，东北亚地理中心，因清初建吉林乌拉城而得名，简称“吉”，省会长春...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                     </a>									-->
                        </div>
                    </li>
                    <li class="p10" id="10">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">辽宁</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/liaoning.png" title="辽宁" alt="辽宁" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">辽宁</h3>
                            <p>辽宁省，简称“辽”，省会沈阳，辖14个地级市，其中副省级城市2个（沈阳、大连），省会沈阳市...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                      </a>									-->
                        </div>
                    </li>
                    <li class="p3" id="3">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">河北</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/hebei.png" title="河北" alt="河北" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">河北</h3>
                            <p>河北省，简称“冀”，因位于黄河以北而得名。[1]  地处华北平原，东临渤海、内环京津...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p2" id="2">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">山西</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/shanxi.png" title="山西" alt="山西" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">山西</h3>
                            <p>太原，山西省省会，别称并州，古称晋阳，也称龙城，是中国优秀旅游城市、国家历史文化名城...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>	                                -->
                        </div>
                    </li>
                    <li class="p23" id="23">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">河南</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/henan.png" title="河南" alt="河南" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">少林寺</h3>
                            <p>河南，古称中原、中州、豫州，简称“豫”，因历史上大部分位于黄河以南，故名河南。河南位于中国中东部、黄河中下游...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>	-->
                        </div>
                    </li>
                    <li class="p5" id="5">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">山东</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/shandong.png" title="山东" alt="山东" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">山东</h3>
                            <p>山东，因居太行山以东而得名，简称“鲁”，省会济南。先秦时期隶属齐国、鲁国，故而别名齐鲁...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>	                                -->
                        </div>
                    </li>
                    <li class="p6" id="6">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">江苏</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/jiangsu.png" title="苏州园林" alt="苏州园林" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">江苏</h3>
                            <p>江苏，简称“苏”，省会南京，位于中国大陆东部沿海，介于东经116°18′～121°57′，北纬30°45′～35°20′之间...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>	-->
                        </div>
                    </li>
                    <li class="p26" id="26">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <i></i>
                        <span>上海</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/shanghai.png" title="上海" alt="上海" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">上海</h3>
                            <p>上海位于中国东南部沿海，在长江入海口位置，是中国最发达的城市之一，也是中国的经济中心...</p>
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>	-->
                        </div>
                    </li>
                    <li class="p8" id="8">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">安徽</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/anhui.png" title="安徽" alt="安徽" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">安徽</h3>
                            <p>安徽，简称“皖”，省会合肥，位于中国大陆东部，介于东经114°54′-119°37′，北纬29°41′-34°38′之间...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>	-->
                        </div>
                    </li>
                    <li class="p11" id="11">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">浙江</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/zhejiang.png" title="浙江" alt="浙江" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">浙江</h3>
                            <p>浙江，简称“浙”，省会杭州。境内最大的河流钱塘江，因江流曲折，称之江、折江，又称浙江，省以江名...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p14" id="14">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">福建</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/fujian.png" title="福建" alt="福建" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">福建</h3>
                            <p>福建，简称“闽”，位于中国东南沿海， 东北与浙江省毗邻，西、西北与江西省接界，西南与广东省相连...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>								-->
                        </div>
                    </li>
                    <li class="p19" id="19">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">江西</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/jiangxi.png" title="江西" alt="江西" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">江西</h3>
                            <p>江西，中国省级行政区，简称“赣”（ gàn），别称赣鄱大地，省会是南昌，因公元733年唐玄宗设江南西道而得省名...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p29" id="29">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">湖南</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/hunan.png" title="湖南" alt="湖南" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">湖南</h3>
                            <p>湖南省地处中国中部、长江中游，因大部分区域处于洞庭湖以南而得名“湖南”，因省内最...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>	-->
                        </div>
                    </li>
                    <li class="p30" id="30">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">湖北</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/hubei.png" title="湖北" alt="湖北" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">湖北</h3>
                            <p>湖北，简称“鄂”，省会武汉，位于中国中部偏南、长江中游，洞庭湖以北，故名湖北...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>-->
                        </div>
                    </li>
                    <li class="p31" id="31">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">广东</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/guangdong.png" title="广东" alt="广东" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">广东</h3>
                            <p>广东，名由岭南东道、广南东路演变而来，简称“粤”，省会广州，是中国大陆南端沿海的一个省份...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>								-->
                        </div>
                    </li>
                    <li class="p12" id="12">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">广西壮族自治区</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/guangxi.png" title="广西" alt="广西" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">广西</h3>
                            <p>广西壮族自治区（壮文：Gvangjsih Bouxcuegh Swcigih），通称广西，简称“桂”，首府南宁，是...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p13" id="13">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <i></i>
                        <span class="block">海南</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/hainan.png" title="海南" alt="海南" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">海南</h3>
                            <p>海南，简称“琼”，位于中国最南端。全省下辖4个地级市，5个县级市，4个县，6个自治县...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>								-->
                        </div>
                    </li>
                    <li class="p4" id="4">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">四川</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/sichuan.png" title="四川" alt="四川" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">四川</h3>
                            <p>四川，简称“川”或“蜀”，省会成都，位于中国大陆西南腹地，北连陕西、甘肃、青海，南接云南、贵州，东邻重庆...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p9" id="9">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">重庆</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/chongqing.png" title="重庆" alt="重庆" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">重庆</h3>
                            <p>重庆，位于中国西南部、长江上游，是面积最大的直辖市，市花是山茶花。重庆四面环山，城市依山而建...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                     </a>									-->
                        </div>
                    </li>
                    <li class="p18" id="18">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">云南</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/yunnan.png" title="云南" alt="云南" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">云南</h3>
                            <p>云南，简称云（滇），省会昆明，位于中国西南的边陲，是人类文明重要发祥地之一。生活在距今...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p17" id="17">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">贵州</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/guizhou.png" title="贵州" alt="贵州" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">贵州</h3>
                            <p>贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p16" id="16">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">西藏自治区</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/xizang.png" title="西藏" alt="西藏" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">西藏</h3>
                            <p>西藏自治区（藏文：བོད་རང་སྐྱོང་ལྗོངས།，藏语拼音：Poi Ranggyong Jong，威利转写：Bod rang skyong ljongs），简称...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p20" id="20">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">青海</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/qinghai.png" title="青海" alt="青海" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">青海</h3>
                            <p>青海，位于中国西部，雄踞世界屋脊青藏高原的东北部[1]  。是中国青藏高原上的重要省份之一，简称青，省会为西宁...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p15" id="15">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">宁夏</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/ningxia.png" title="宁夏" alt="宁夏" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">宁夏</h3>
                            <p>宁夏，全称：宁夏回族自治区，简称宁，是中国五大少数民族自治区之一。处在中国西部的黄河上游，东邻陕西省...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p25" id="25">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span class="block">北京</span>
                        <i></i>
                    </a>
                            <!--<a href="/zh/tszg/rmcs/beijing/beijingxq.shtml" class="main_message clearfix" target="_blank">
                        <img src="map/city/beijing.png" title="北京" alt="北京" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">北京</h3>
                            <p>北京是中国的首都，具有重要的国际影响力，也是世界上最大的城市之一。
北京是中国唯一举办过奥运...</p>
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>                                -->
                        </div>
                    </li>
                    <li class="p28" id="28">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <i></i>
                        <span class="block">天津</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/tianjin.png" title="天津" alt="天津" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">天津</h3>
                            <p>天津位于华北平原海河五大支流汇流处，东临渤海，北依燕山，海河在城中蜿蜒而过。天津滨海新区被誉...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>	                                -->
                        </div>
                    </li>
                    <li class="p34" id="34">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <i></i> 
                        <span>香港</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/tianjin.png" title="香港" alt="香港" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">香港</h3>
                            <p>香港（粤拼：hoeng1 gong2；英文：Hong Kong；普通话拼音：xiāng gǎng；缩写：HK），简称“港”...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>									-->
                        </div>
                    </li>
                    <li class="p33" id="33">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <i></i>
                        <span class="block">台湾</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/taiwan.png" title="台湾" alt="台湾" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">台湾</h3>
                            <p>台湾（Taiwan）位于中国大陆东南沿海的大陆架上，东临太平洋，  东北邻琉球群岛，南界巴士海峡...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>-->
                        </div>
                    </li>
                    <li class="p35" id="35">
                        <div class="province">
                            <a href="javascript:;" class="province">
                        <span>澳门</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="map/city/aomen.png" title="澳门" alt="澳门" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">澳门</h3>
                            <p>澳门（葡语Macau、英语Macao），全称为中华人民共和国澳门特别行政区。北邻广东省珠海市，西与珠海市的湾仔...</p> 
                            <span class="main_message_submit block">查看更多</span>
                        </div>
                        <i class="arr"></i>
                    </a>                    									-->
                        </div>
                    </li>
                </ul>
                <!--南海部分-->
                <div class="nanhai"></div>
                <!--各省地形-->
                <div class="provinces fl">
                    <!--北京市地形图-->
                    <ul class="p25_city">
                        <li class="packland b0104" id="0104">
                            <a href="javascript:;">
                        <span class="block">八达岭长城</span>
                        <i></i>
                    </a>
                            <!--<a href="/zh/tszg/rmcs/beijing/beijingxq.shtml" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/beijing/badaling.jpg" title="八达岭长城" alt="八达岭长城" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">八达岭长城</h3>
                            <p>八达岭长城，位于北京市延庆区军都山关沟古道北口。是中国古代伟大的防御工程万里长城的重要组成部分，是明长城...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>-->
                        </li>
                        <li class="packland b0106" id="0106">
                            <a href="javascript:;">
                        <span class="block">颐和园</span>
                        <i></i>
                    </a>
                            <!--<a href="/zh/tszg/rmcs/beijing/beijingxq.shtml" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/beijing/yiheyuan.jpg" title="颐和园" alt="颐和园" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">颐和园</h3>
                            <p>颐和园，中国清朝时期皇家园林，前身为清漪园，坐落在北京西郊，距城区十五公里，占地约二百九十公顷...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>                							-->
                        </li>
                        <li class="packland b0107" id="0107">
                            <a href="javascript:;">
                        <span class="block">天坛公园</span>
                        <i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/beijing/tiantangongyuan.jpg" title="天坛公园" alt="天坛公园" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">天坛公园</h3>
                            <p>天坛，世界文化遗产，全国重点文物保护单位，国家AAAAA级旅游景区，全国文明风景旅游区示范点...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>                							-->
                        </li>
                        <li class="packland b0103" id="0103">
                            <a href="javascript:;" class="province">
                        <i></i>
                        <span>故宫</span>
                    </a>
                            <!--<a href="/zh/tszg/rmcs/beijing/beijingxq.shtml" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/beijing/aolinpike.jpg" title="故宫" alt="故宫" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">故宫</h3>
                            <p>故宫博物院，又称紫禁城，是中国乃至世界上保存最完整，规模最大的木质结构古建筑群，被誉为“世界五大宫...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>-->
                        </li>
                    </ul>
                    <!--安徽省地形图-->
                    <ul class="p8_city">
                        <li class="packland b1208" id="1208">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>西递宏村</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/anhui/xidihongcun.jpg" title="西递宏村" alt="西递宏村" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">皖南古村落-西递宏村</h3>
                            <p>西递、宏村为世界文化遗产，也是国家AAAAA级旅游景区。
西递、宏村位于安徽省黄山...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1209" id="1209">
                            <a href="javascript:;">
                    	<span>天柱山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/anhui/tianzhushan.jpg" title="天柱山" alt="天柱山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">天柱山</h3>
                            <p>安庆市潜山县西部的天柱山，又名潜山、皖山、皖公山（安徽省简称“皖”由此而来）、万岁山、万山等。为大别山山脉...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1210" id="1210">
                            <a href="javascript:;">
                    	<span>九华山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/anhui/jiuhuashan.jpg" title="九华山" alt="九华山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">九华山</h3>
                            <p>九华山（Jiuhua Mountain），古称陵阳山、九子山，为“中国佛教四大名山”之一， 位于安徽省池州市青阳县...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1211" id="1211">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>黄山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/anhui/huangshan.jpg" title="黄山" alt="黄山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">黄山</h3>
                            <p>黄山：世界文化与自然双重遗产，世界地质公园，国家AAAAA级旅游景区，国家级风景名胜区， 全国文明...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--福建省地形图-->
                    <ul class="p14_city">
                        <li class="packland b1501 packland_bottom" id="1501">
                            <a href="javascript:;">
                   	 	<span class="block">武夷山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/fujian/wuyishan.jpg" title="武夷山" alt="武夷山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">武夷山</h3>
                            <p>武夷山位于福建省武夷山市南郊，武夷山脉北段东南麓总面积999.75平方公里，是中国著名的风景旅游区和避暑胜地。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1508" id="1508">
                            <a href="javascript:;">
                   	 	<span class="block">福建土楼（永定·南靖）</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/fujian/fujiantulou.jpg" title="福建土楼（永定·南靖）" alt="福建土楼（永定·南靖）" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">福建土楼（永定·南靖）</h3>
                            <p>福建土楼，因其大多数为福建客家人所建，故又称“客家土楼”。 土楼产生于宋元，成熟于明末、清代和民国时期。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1509" id="1509">
                            <a href="javascript:;">
                   	 	<span class="block">泰宁风景旅游区</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/fujian/taining.jpg" title="泰宁风景旅游区" alt="泰宁风景旅游区" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">泰宁风景旅游区</h3>
                            <p>位于福建省西北的三明市泰宁县，面积有492.5平方公里，其中丹霞地貌面积252.7平方千米。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1510" id="1510">
                            <a href="javascript:;">
                   	 	<span class="block">鼓浪屿</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/fujian/gulangyu.jpg" title="鼓浪屿" alt="鼓浪屿" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">鼓浪屿</h3>
                            <p>鼓浪屿（英文：Kulangsu）是福建省厦门市思明区下辖的一个街道。原名“圆沙洲”，别名“圆洲仔”，……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--甘肃省地形图-->
                    <ul class="p22_city">
                        <li class="packland b3201" id="3201">
                            <a href="javascript:;">
                    	<i></i>	
                   	 	<span>麦积山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/gansu/maijishan.jpg" title="麦积山" alt="麦积山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">麦积山</h3>
                            <p>中国佛教四大石窟之一(其它三窟分别为敦煌莫高窟，龙门石窟和云冈石窟)。麦积山石窟地处甘肃省。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3202" id="3202">
                            <a href="javascript:;">
                    	<i></i>	
                   	 	<span>崆峒山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/gansu/kongtongshan.jpg" title="崆峒山" alt="崆峒山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">崆峒山</h3>
                            <p>崆峒山，道教圣地，属六盘山支脉，是天然的动植物王国，有各类植物1000多种，动物300余种。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3204" id="3204">
                            <a href="javascript:;">
                    	<i></i>	
                   	 	<span>鸣沙山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/gansu/mingshashan.jpg" title="鸣沙山" alt="鸣沙山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">鸣沙山</h3>
                            <p>沙漠或者沙丘中，由于各种气候和地理因素的影响，造成以石英为主的细沙粒，因风吹震动，沙滑落或相互运动。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3205" id="3205">
                            <a href="javascript:;">
                    	<i></i>	
                   	 	<span>嘉峪关</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/gansu/jiayuguan.jpg" title="嘉峪关" alt="嘉峪关" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">嘉峪关</h3>
                            <p>嘉峪关，又被称为天下第一雄关，位于甘肃省河西走廊的西端，东经98°17′、北纬39°47′。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--广西自治区地形图-->
                    <ul class="p12_city">
                        <li class="packland b1801" id="1801">
                            <a href="javascript:;">
                    	<i></i>	
                   	 	<span>漓江</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guangxi/lijiang.jpg" title="漓江" alt="漓江" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">漓江</h3>
                            <p>漓江，属珠江流域西江水系，为支流桂江上游河段的通称，位于广西壮族自治区东北部。传统意义上的...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1802" id="1802">
                            <a href="javascript:;">
                   	 	<span class="block">青秀山</span>
                        <i></i>	
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guangxi/qingxiushan.jpg" title="青秀山" alt="青秀山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">青秀山</h3>
                            <p>青秀山风景区是南宁的国家AAAAA级景区。青秀山是南宁市重点开发的风景区，除保护和修复原有的古迹如董泉...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1805" id="1805">
                            <a href="javascript:;">
                    	<span>独秀峰•靖江王城</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guangxi/duxiufeng.jpg" title="独秀峰•靖江王城" alt="独秀峰•靖江王城" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">独秀峰•靖江王城</h3>
                            <p>靖江王城坐落于广西壮族自治区桂林市漓江西岸，是明朝藩王靖江王朱守谦的藩王府...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1806" id="1806">
                            <a href="javascript:;">
                   	 	<span class="block">乐满地度假世界</span>
                        <i></i>	
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guangxi/qingxiushan.jpg" title="乐满地度假世界" alt="乐满地度假世界" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">乐满地度假世界</h3>
                            <p>桂林乐满地度假世界是广西目前最大的外商投资旅游项目，占地面积共6000亩，于2000年12月25日正式开...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--贵州省地形图-->
                    <ul class="p17_city">
                        <li class="packland b2802" id="2802">
                            <a href="javascript:;">
                    	<span class="block">樟江</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guizhou/zhangjiang.jpg" title="樟江" alt="樟江" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">樟江</h3>
                            <p>樟江，为珠江水系西江支流柳江支流龙江的上游河段。贵州省荔波县境内最大的河流，发源于县内月亮山南麓...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2803" id="2803">
                            <a href="javascript:;">
                    	<span class="block">百里杜鹃</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guizhou/bailidujuan.jpg" title="百里杜鹃" alt="百里杜鹃" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">百里杜鹃</h3>
                            <p>百里杜鹃位于贵州西北部，毕节市中部，南与黔西县相邻，西北与大方县接壤，东与金沙县偎依...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2804" id="2804">
                            <a href="javascript:;">
                    	<span class="block">龙宫</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guizhou/longgong.jpg" title="龙宫" alt="龙宫" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">龙宫</h3>
                            <p>龙宫位于贵州省安顺市西秀区境内，距黄果树景区35千米，距安顺市城区27千米，距贵阳116千米...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2805" id="2805">
                            <a href="javascript:;">
                    	<span class="block">黄果树瀑布</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guizhou/huangguoshu.jpg" title="黄果树瀑布" alt="黄果树瀑布" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">黄果树瀑布</h3>
                            <p>黄果树瀑布，即黄果树大瀑布。古称白水河瀑布，亦名“黄葛墅”瀑布或“黄桷树”瀑布，因本地广泛分布着“黄葛榕”...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--海南省地形图-->
                    <ul class="p13_city">
                        <li class="packland b1902" id="1902">
                            <a href="javascript:;">
                    	<span class="block">分界洲岛</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hainan/fenjiezhoudao.jpg" title="分界洲岛" alt="分界洲岛" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">分界洲岛</h3>
                            <p>分界洲岛位于海南岛的东南海面，距海南岛最近海岸约1.2海里，乘船过渡单程约15分钟。小岛以东...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1903" id="1903">
                            <a href="javascript:;">
                    	<span class="block">呀诺达雨林</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hainan/yanuodayulin.jpg" title="呀诺达雨林" alt="呀诺达雨林" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">呀诺达雨林</h3>
                            <p>呀诺达雨林文化旅游区位于三亚市北偏东方向35公里的保亭黎族自治县三到农场，距离三亚市中心仅35公里...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1905" id="1905">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>大小洞天</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hainan/daxiaodongtian.jpg" title="大小洞天" alt="大小洞天" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">大小洞天</h3>
                            <p>大小洞天风景区以其秀丽的海景、山景和石景号称琼崖第一山水名胜。风景区内至今仍有“小洞天”...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1906" id="1906">
                            <a href="javascript:;">
                    	<span>三亚南山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hainan/sanyananshan.jpg" title="三亚南山" alt="三亚南山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">三亚南山</h3>
                            <p>南山位于海南省三亚市西南40公里处，是中国最南端的山，属热带海洋季风性气候，其空气...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--河北省地形图-->
                    <ul class="p3_city">
                        <li class="packland b0301" id="0301">
                            <a href="javascript:;">
                    	<span>承德避暑山庄</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hebei/bishushanzhuang.jpg" title="承德避暑山庄" alt="承德避暑山庄" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">承德避暑山庄</h3>
                            <p>避暑山庄分宫殿区、湖泊区、平原区、山峦区四大部分，整个山庄东南多水，西北多山，是中国...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0304" id="0304">
                            <a href="javascript:;">
                    	<span class="block">白洋淀</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hebei/baiyangdian.jpg" title="白洋淀" alt="白洋淀" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">白洋淀</h3>
                            <p>白洋淀是中国河北省最大的湖泊，位于河北省中部，大部分位于保定市安新县境内，是在太行山前...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>-->
                        </li>
                        <li class="packland b0309 packland_bottom" id="0309">
                            <a href="javascript:;">
                    	<span class="block">普陀宗乘</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hebei/qingdongling.jpg" title="普陀宗乘" alt="普陀宗乘" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">普陀宗乘</h3>
                            <p>普陀宗乘之庙位于河北省承德市避暑山庄北，为承德外八庙中规模最宏大者。因主建筑模仿……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0310 packland_bottom" id="0310">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>普宁寺</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hebei/qingdongling.jpg" title="普宁寺" alt="普宁寺" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">普宁寺</h3>
                            <p>地处河北省承德市的普宁寺，是中国北方最大的藏传佛教寺庙，已被列入《世界文化遗产名录》。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--河南省地形图-->
                    <ul class="p23_city">
                        <li class="packland b2206" id="2206">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>龙门石窟</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/henan/longmenshiku.jpg" title="龙门石窟" alt="龙门石窟" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">龙门石窟</h3>
                            <p>龙门石窟是中国石刻艺术宝库之一，位于河南省洛阳市洛龙区伊河两岸的龙门山与香山上。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2215" id="2215">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>嵩山少林</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/henan/yaoshan.jpg" title="嵩山少林" alt="嵩山少林" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">嵩山少林</h3>
                            <p>少林寺是我国佛教禅宗祖庭，少林武术的发源地，是我国颇负盛名的寺院，被称为“天下第一名刹”。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2216" id="2216">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>云台山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/henan/yaoshan.jpg" title="云台山" alt="云台山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">云台山</h3>
                            <p>云台山风景区面积240平方公里，此地草木葱郁，各种树木和奇花异草种类达五百多种，已于2004年被……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2217" id="2217">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>神农山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/henan/yaoshan.jpg" title="神农山" alt="神农山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">神农山</h3>
                            <p>神农山是全球首批世界地质公园，因炎帝神农氏在这里辨五谷、尝百草、设坛祭天，故而得名神农山。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--黑龙江省地形图-->
                    <ul class="p1_city">
                        <li class="packland b0401" id="0401">
                            <a href="javascript:;">
                    	<span class="block">林海奇石</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/heilongjiang/linhaiqishi.jpg" title="林海奇石" alt="林海奇石" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">林海奇石</h3>
                            <p>景区可分为天然牧场、雪色松林、溪水湿地、民族风情、山水浏览、兴安石林、秋色松林、花卉观赏八大区域...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0402" id="0402">
                            <a href="javascript:;">
                    	<span class="block">太阳岛</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/heilongjiang/taiyangdao.jpg" title="太阳岛" alt="太阳岛" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">太阳岛</h3>
                            <p>太阳岛是从满语鳊花鱼的音译演变而来，满语对鳊花色有三种叫法太阳岛 ：一是普通鳊花...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0403" id="0403">
                            <a href="javascript:;">
                    	<span class="block">镜泊湖</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/heilongjiang/jingpohu.jpg" title="镜泊湖" alt="镜泊湖" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">镜泊湖</h3>
                            <p>镜泊湖是中国最大、世界第二大高山堰塞湖，著名旅游、避暑和疗养胜地，全国文明风景旅游区示范点...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0404" id="0404">
                            <a href="javascript:;">
                    	<span class="block">五大连池</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/heilongjiang/wudalianchi.jpg" title="五大连池" alt="五大连池" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">五大连池</h3>
                            <p>五大连池风景区，主要由五大连池湖区及周边火山群地质景观、相关人文景观、植被、水景等组成...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--广东省地形图-->
                    <ul class="p31_city">
                        <li class="packland b1704" id="1704">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>华侨城</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guangdong/huaqiaocheng.jpg" title="华侨城" alt="华侨城" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">华侨城</h3>
                            <p>华侨城集团成立于1985年11月11日，是隶属于国务院国资委管理的大型中央企业之一……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1707" id="1707">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>长隆旅游度假区</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guangdong/changlong.jpg" title="长隆" alt="长隆" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">长隆旅游度假区</h3>
                            <p>长隆旅游度假区，国家级AAAAA景区，占地面积1万亩，是一家集旅游景点 、酒店餐饮、娱乐休闲于一体的大型企业集团</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1709" id="1709">
                            <a href="javascript:;">
                    	<span class="block">白云山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guangdong/baiyunshan.jpg" title="白云山" alt="白云山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">白云山</h3>
                            <p>白云山，位于广州市白云区，为南粤名山之一，自古就有“羊城第一秀”之称。山体相当宽阔，由30多座山峰组成……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1711" id="1711">
                            <a href="javascript:;">
                    	<span class="block">雁南飞茶田景区</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/guangdong/yannanfei.jpg" title="雁南飞" alt="雁南飞" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">雁南飞茶田景区</h3>
                            <p>梅州雁南飞茶田度假村，位于梅州市梅县区雁洋镇，为粤东第一家AAAA级旅游景区，现已升级为5A级旅游景区……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--西藏自治区地形图-->
                    <ul class="p16_city">
                        <li class="packland b2501" id="2501">
                            <a href="javascript:;">
                    	<span class="block">布达拉宫</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/xizang/budalagong.jpg" title="布达拉宫" alt="布达拉宫" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">布达拉宫</h3>
                            <p>布达拉宫，坐落于于中国西藏自治区的首府拉萨市区西北玛布日山上，是世界上海拔最高，集宫殿、城堡和寺院于一体……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2502" id="2502">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>大昭寺</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/xizang/dazhaosi.jpg" title="大昭寺" alt="大昭寺" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">大昭寺</h3>
                            <p>大昭寺，又名“祖拉康”、“觉康”，位于拉萨老城区中心，是一座藏传佛教寺院，是藏王松赞干布建造，拉萨之所以有“圣地”</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2503" id="2503">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>巴松措</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/xizang/dazhaosi.jpg" title="巴松措" alt="巴松措" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">巴松措</h3>
                            <p>巴松措位于距林芝地区工布江达县50多千米的巴河上游的高峡深谷里，是西藏东部最大的堰塞湖之一。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2504" id="2504">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>鲁朗林海</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/xizang/dazhaosi.jpg" title="鲁朗林海" alt="鲁朗林海" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">鲁朗林海</h3>
                            <p>鲁朗林海素有“西藏江南”的美称。景区内河流纵横，有规模巨大、终年苍翠葱茏的原始森林和漫山遍野的杜鹃花...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--新疆自治区地形图-->
                    <ul class="p21_city">
                        <li class="packland b3405" id="3405">
                            <a href="javascript:;">
                    	<span class="block">葡萄沟</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/xinjiang/putaogou.jpg" title="葡萄沟" alt="葡萄沟" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">葡萄沟</h3>
                            <p>葡萄沟，位于新疆吐鲁番市区东北11公里处，南北长约8公里、东西宽约2公里，是火焰山下的一处峡谷……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3407" id="3407">
                            <a href="javascript:;">
                    	<span class="block">天山天池</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/xinjiang/tianshantianchi.jpg" title="天山天池" alt="天山天池" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">天山天池</h3>
                            <p>天山天池：世界自然遗产，国家AAAAA级旅游景区，国家地质公园，国家重点风景名胜区，全国文明风景旅游区 ……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3408" id="3408">
                            <a href="javascript:;">
                    	<span class="block">那拉提</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/xinjiang/nalati.jpg" title="那拉提" alt="那拉提" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">那拉提</h3>
                            <p>那拉提旅游风景区，位于新疆新源县境内，地处天山腹地，伊犁河谷东端，总规划面积960平方公里……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3411" id="3411">
                            <a href="javascript:;">
                    	<span class="block">喀纳斯</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/xinjiang/kanasi.jpg" title="喀纳斯" alt="喀纳斯" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">喀纳斯</h3>
                            <p>喀纳斯湖（英语：Kanas Lake）位于中国新疆阿勒泰地区布尔津县北部，是一个内陆淡水湖，湖水来自奎屯、友谊峰等……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--湖南省地形图-->
                    <ul class="p29_city">
                        <li class="packland b2402" id="2402">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>岳阳楼</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hunan/yueyanglou.jpg" title="岳阳楼" alt="岳阳楼" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">岳阳楼</h3>
                            <p>岳阳楼位于湖南省岳阳市古城西门城墙之上，下瞰洞庭，前望君山，自古有“洞庭天下水，岳阳天下楼”之美誉……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2403" id="2403">
                            <a href="javascript:;">
                    	<span class="block">武陵源-天门山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hunan/wulingyuan.jpg" title="武陵源" alt="武陵源" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">武陵源-天门山</h3>
                            <p>天门山，古称云梦山、嵩梁山，是张家界永定区海拔最高的山，因自然奇观天门洞而得名，最早被记入史册的名山……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2406" id="2406">
                            <a href="javascript:;">
                    	<span>韶山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hunan/shaoshan.jpg" title="韶山" alt="韶山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">韶山</h3>
                            <p>韶山市，隶属于湖南省，位于湖南省中部偏东湘中丘陵区。韶山地处于处于湘潭市市区以西……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2407" id="2407">
                            <a href="javascript:;">
                    	<span class="block">衡山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hunan/hengshan.jpg" title="衡山" alt="衡山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">衡山</h3>
                            <p>衡山 （Mount Heng）， 又名南岳、寿岳、南山，为中国“五岳”之一，位于中国湖南省中部偏东南部， 绵亘于衡阳……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--湖北省地形图-->
                    <ul class="p30_city">
                        <li class="packland b2303" id="2303">
                            <a href="javascript:;">
                    	<span>屈原故里</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hubei/quyuanguli.jpg" title="屈原故里" alt="屈原故里" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">屈原故里</h3>
                            <p>湖北省秭归县是中国战国时代楚国伟大爱国诗人屈原的故乡，也是楚文化发源地之一。屈原故里文化旅游区……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2304" id="2304">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>三峡人家</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hubei/sanxiarenjia.jpg" title="三峡人家" alt="三峡人家" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">三峡人家</h3>
                            <p>三峡大坝位于中国湖北省宜昌市境内，距下游葛洲坝水利枢纽工程38公里；是当今世界最大的水利发电工程……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2305" id="2305">
                            <a href="javascript:;">
                    	<span class="block">三峡大坝</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hubei/sanxiadaba.jpg" title="三峡大坝" alt="三峡大坝" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">三峡大坝</h3>
                            <p>三峡大坝位于中国湖北省宜昌市境内，距下游葛洲坝水利枢纽工程38公里；是当今世界最大的水利发电工程……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2308" id="2308">
                            <a href="javascript:;">
                    	<span>黄鹤楼</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/hubei/huanghelou.jpg" title="黄鹤楼" alt="黄鹤楼" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">黄鹤楼</h3>
                            <p>黄鹤楼位于湖北省武汉市长江南岸的武昌蛇山之巅，为国家5A级旅游景区，享有“ 天下江山第一楼“、”天下绝景“之称…</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--江苏省地形图-->
                    <ul class="p6_city">
                        <li class="packland b1021" id="1021">
                            <a href="javascript:;">
                    	<span>中山陵</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jiangsu/zhongshanling.jpg" title="中山陵" alt="中山陵" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">中山陵</h3>
                            <p>中山陵是中国近代民主革命先行者孙中山的陵墓，1961年成为首批全国重点文物保护单位， 2007年成为首批国家5A级景区。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1022" id="1022">
                            <a href="javascript:;">
                    	<span>钟山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jiangsu/zhongshan.jpg" title="钟山" alt="钟山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">钟山</h3>
                            <p>钟山位于南京东郊，自古被誉为江南四大名山，因山顶常有紫云萦绕，又得名紫金山，有"金陵毓秀"的美誉。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1023" id="1023">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>周庄古镇</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jiangsu/zhouzhuangguzhen.jpg" title="周庄古镇" alt="周庄古镇" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">周庄古镇</h3>
                            <p>周庄位于苏州城东南，昆山的西南处，有“中国第一水乡”的美誉。在中国江南一个具有九百多年历史的水乡古镇。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1024" id="1024">
                            <a href="javascript:;">
                    	<span>苏州园林</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jiangsu/suzhouyuanlin.jpg" title="苏州园林" alt="苏州园林" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">苏州园林</h3>
                            <p>苏州园林是中国江苏苏州山水园林建筑的统称，又称“苏州古典园林”，以私家园林为主.</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--山东省地形图-->
                    <ul class="p5_city">
                        <li class="packland b0909" id="0909">
                            <a href="javascript:;">
                    	<span class="block">八仙过海</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shandong/baxianguohai.jpg" title="八仙过海" alt="八仙过海" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">八仙过海</h3>
                            <p>八仙过海与丹崖山、蓬莱阁、长山列岛隔海相望，游览面积5.5万平方米，周围海域天高水阔，景色壮观。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0910" id="0910">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>三仙山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shandong/sanxianshan.jpg" title="三仙山" alt="三仙山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">三仙山</h3>
                            <p>三仙山，与八仙过海景区、三仙山温泉相毗邻，北与长山列岛隔海相望，是山东半岛黄金旅游线上的一颗璀璨明珠。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0911" id="0911">
                            <a href="javascript:;">
                    	<i class="block"></i>
                    	<span class="block">蓬莱阁</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shandong/penglaige.jpg" title="蓬莱阁" alt="蓬莱阁" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">蓬莱阁</h3>
                            <p>蓬莱阁是中国古代四大名楼之一，蓬莱阁的主体建筑建于宋朝嘉祐六年，素以“人间仙境”著称于世。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0912" id="0912">
                            <a href="javascript:;">
                    	<span class="block">泰山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shandong/taishan.jpg" title="泰山" alt="泰山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">泰山</h3>
                            <p>泰山世界自然与文化双重遗产，世界地质公园，国家AAAAA级旅游景区，有“五岳之首”、“天下第一山”之称。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--山西省地形图-->
                    <ul class="p2_city">
                        <li class="packland b0801" id="0801">
                            <a href="javascript:;">
                    	<span class="block">皇城相府</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanxi/huangchengxiangfu.jpg" title="皇城相府" alt="皇城相府" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">皇城相府</h3>
                            <p>皇城相府总面积3.6万平方米，是一处罕见的明清两代城堡式官宦住宅建筑群，被专家誉为“中国北方第一文化巨族之宅”</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0802" id="0802">
                            <a href="javascript:;">
                    	<span>绵山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanxi/mianshan.jpg" title="绵山" alt="绵山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">绵山</h3>
                            <p>绵山是国家AAAAA级旅游景区，中国清明节（寒食节）发源地。绵山最高海拔2560米，是太岳山的一条支脉。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0806" id="0806">
                            <a href="javascript:;">
                    	<span class="block">五台山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanxi/wutaishan.jpg" title="五台山" alt="五台山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">五台山</h3>
                            <p>五台山位列中国佛教四大名山之首。与尼泊尔蓝毗尼花园、印度鹿野苑、菩提伽耶、拘尸那迦并称为世界五大佛教圣地。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0807" id="0807">
                            <a href="javascript:;">
                    	<span class="block">云冈石窟</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanxi/yungangshiku.jpg" title="云冈石窟" alt="云冈石窟" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">云冈石窟</h3>
                            <p>云冈石窟存有主要洞窟45个，大小窟龛252个，石雕造像51000余躯，为中国规模最大的古代石窟群之一。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--吉林省地形图-->
                    <ul class="p27_city">
                        <li class="packland b0502" id="0502">
                            <a href="javascript:;">
                    	<span class="block">长影世纪城</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jilin/changyingshijicheng.jpg" title="长影世纪城" alt="长影世纪城" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">长影世纪城</h3>
                            <p>长影世纪城位于吉林省长春市东南侧净月潭西畔，是长春电影制片厂推进体制改革、机制创新...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0504" id="0504">
                            <a href="javascript:;">
                    	<span class="block">净月潭</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jilin/jingyuetan.jpg" title="净月潭" alt="净月潭" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">净月潭</h3>
                            <p>净月潭景区位于吉林省长春市东南部长春净月经济开发区，距市中心人民广场仅18公里，景区面积为96.38平方公里...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0505" id="0505">
                            <a href="javascript:;">
                    	<span class="block">伪满皇宫博物院</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jilin/weimanhuanggong.jpg" title="伪满皇宫" alt="伪满皇宫" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">伪满皇宫博物院</h3>
                            <p>伪满皇宫博物院是由清朝末代皇帝爱新觉罗·溥仪居住的伪满洲国傀儡皇宫改建而成的博物馆。它是...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0506" id="0506">
                            <a href="javascript:;">
                    	<span class="block">长白山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jilin/changbaishan.jpg" title="长白山" alt="长白山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">长白山</h3>
                            <p>长白山脉是松花江、图们江和鸭绿江的发源地。是中国满族的发祥地和满族文化圣山。长白山脉的...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--江西省地形图-->
                    <ul class="p19_city">
                        <li class="packland b1402" id="1402">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>龙虎山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jiangxi/longhushan.jpg" title="龙虎山" alt="龙虎山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">龙虎山</h3>
                            <p>位于江西省鹰潭市西南20公里处。东汉中叶，正一道创始人张道陵曾在此炼丹，传说“丹成而龙虎现，山因得名。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>-->
                        </li>
                        <li class="packland b1404" id="1404">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>三清山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jiangxi/sanqingshan.jpg" title="三清山" alt="三清山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">三清山</h3>
                            <p>三清山又名少华山、丫山，位于中国江西省上饶市玉山县与德兴市交界处。因玉京、玉虚、玉华三峰宛如道教玉清……</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1407" id="1407">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>井冈山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jiangxi/jinggangshan.jpg" title="井冈山" alt="井冈山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">井冈山</h3>
                            <p>地处湘东-赣西边界，万洋山（为罗霄山脉中段）的北支，据传在东汉年间就已经有人在井冈山居住了。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1410 packland_bottom" id="1410">
                            <a href="javascript:;">
                    	<span class="block">庐山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/jiangxi/jiangwan.jpg" title="庐山" alt="庐山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">庐山</h3>
                            <p>又名匡山、匡庐，是中华十大名山、世界文化遗产、国家AAAAA级旅游景区、中国四大避暑胜地。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--辽宁省地形图-->
                    <ul class="p10_city">
                        <li class="packland b0601" id="0601">
                            <a href="javascript:;">
                    	<span class="block">老虎滩海洋公园</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/liaoning/laohutan.jpg" title="老虎滩海洋公园" alt="老虎滩海洋公园" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">老虎滩海洋公园</h3>
                            <p>老虎滩海洋公园坐落于辽宁省大连市南部海滨中部，是市区南部最大的景区。占地面积118万平方米...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0602" id="0602">
                            <a href="javascript:;">
                    	<span class="block">金石滩</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/liaoning/jinshitan.jpg" title="金石滩" alt="金石滩" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">金石滩</h3>
                            <p>大连市金石滩是国家级风景名胜区、国家级旅游度假区、国家AAAAA级旅游景区、国家级地质公园...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0603" id="0603">
                            <a href="javascript:;">
                    	<span class="block">本溪水洞</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/liaoning/benxishuidong.jpg" title="本溪水洞" alt="本溪水洞" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">本溪水洞</h3>
                            <p>本溪水洞位于辽宁省本溪市东北35公里处，由水洞、温泉寺、汤沟、关门山、铁刹、庙后山6个景区组成...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0605" id="0605">
                            <a href="javascript:;">
                    	<span class="block">沈阳植物园</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/liaoning/shenyangzhiwuyuan.jpg" title="沈阳植物园" alt="沈阳植物园" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">沈阳植物园</h3>
                            <p>沈阳市植物园，位于沈阳市东陵区，又称沈阳世博园、沈阳世界园艺博览园，是集绿色生态观赏、精品园林艺术...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--内蒙古自治区地形图-->
                    <ul class="p24_city">
                        <li class="packland b0701" id="0701">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>中俄边境旅游区</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/neimenggu/zhongebianjing.jpg" title="中俄边境旅游区" alt="中俄边境旅游区" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">中俄边境旅游区</h3>
                            <p>中俄边境旅游开始于1988年国务院批准开办黑河一布拉戈维申斯克的边境一日游项目，此后，内蒙古以...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0702" id="0702">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>成吉思汗陵</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/neimenggu/chengjisihan.jpg" title="成吉思汗陵" alt="成吉思汗陵" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">成吉思汗陵</h3>
                            <p>成吉思汗陵,简称成陵。是蒙古帝国第一代大汗成吉思汗的衣冠冢，位于内蒙古自治区鄂尔多斯市伊金霍洛旗草原上...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0703" id="0703">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>响沙湾</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/neimenggu/xiangshawan.jpg" title="响沙湾" alt="响沙湾" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">响沙湾</h3>
                            <p>中国首家沙漠度假地—— 响沙湾是集观光与休闲度假为一体的特大型综合型的沙漠休闲景区，地处中国著名...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0704" id="0704">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>阿尔山·柴河旅游景区</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/neimenggu/aershan.jpg" title="阿尔山·柴河旅游景区" alt="阿尔山·柴河旅游景区" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">阿尔山·柴河旅游景区</h3>
                            <p>柴河旅游景区总，国家5A级旅游景区，面积为13168.7平方公里。兴安盟阿尔山市面积7408.7平方公里，呼伦贝尔...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--宁夏自治区地形图-->
                    <ul class="p15_city">
                        <li class="packland b3101" id="3101">
                            <a href="javascript:;">
                    	<span class="block">沙坡头</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/ningxia/shapotou.jpg" title="沙坡头" alt="沙坡头" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">沙坡头</h3>
                            <p>沙坡头位于宁夏回族自治区中卫市城区西部腾格里沙漠的东南缘。东起二道沙沟南护林房，西至头...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3102" id="3102">
                            <a href="javascript:;">
                    	<span class="block">水洞沟</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/ningxia/shuidonggou.jpg" title="水洞沟" alt="水洞沟" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">水洞沟</h3>
                            <p>宁夏水洞沟旅游景区是全国重点文物保护单位，银川第2家宁夏第4家国家AAAAA级旅游景区，国家...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3103" id="3103">
                            <a href="javascript:;">
                    	<span class="block">镇北堡西部影视城</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/ningxia/zhenbeibao.jpg" title="镇北堡西部影视城" alt="镇北堡西部影视城" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">镇北堡西部影视城</h3>
                            <p>西部影视城位于银川市城区西北郊区空旷的荒野上，有两座古代城堡遗址，这就是闻名国内的镇北堡古城...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3104" id="3104">
                            <a href="javascript:;">
                    	<span class="block">沙湖</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/ningxia/shahu.jpg" title="沙湖" alt="沙湖" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">沙湖</h3>
                            <p>沙湖地处石嘴山市与平罗县之间，距石嘴山市区26公里，距首府银川56公里。国道与包兰铁路傍湖而过...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--青海省地形图-->
                    <ul class="p20_city">
                        <li class="packland b3301" id="3301">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>塔尔寺</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/qinghai/taersi.jpg" title="塔尔寺" alt="塔尔寺" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">塔尔寺</h3>
                            <p>塔尔寺位于青海省西宁市湟中县鲁沙尔镇西南隅的莲花山坳中。塔尔寺院依山势建筑。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3302" id="3302">
                            <a href="javascript:;">
                    	<i class="block"></i>
                    	<span class="block">互助土族故土园旅游区</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/qinghai/huzhutuzu.jpg" title="互助土族故土园旅游区" alt="互助土族故土园旅游区" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">互助土族故土园旅游区</h3>
                            <p>互助土族故土园旅游区位于青海省东北部，地处青藏高原与黄土高原结合部，独特的地理位置。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3303" id="3303">
                            <a href="javascript:;">
                    	<span>青海湖</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/qinghai/qinghaihu.jpg" title="青海湖" alt="青海湖" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">青海湖</h3>
                            <p>青海湖又名“措温布”，即藏语“青色的海”之意，位于青海省西北部的青海湖盆地内。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3304" id="3304">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>青海省博物馆</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/qinghai/taersi.jpg" title="青海省博物馆" alt="青海省博物馆" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">青海省博物馆</h3>
                            <p>塔尔寺位于青海省西宁市湟中县鲁沙尔镇西南隅的莲花山坳中。塔尔寺院依山势建筑。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--陕西省地形图-->
                    <ul class="p7_city">
                        <li class="packland b3006" id="3006">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>大雁塔</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanxi2/dayanta.jpg" title="大雁塔" alt="大雁塔" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">大雁塔</h3>
                            <p>大雁塔位于唐长安城晋昌坊(今陕西省西安市南)的大慈恩寺内，又名"慈恩寺塔"。唐永徽三年(652年)。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3007" id="3007">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>秦始皇兵马俑博物馆</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanxi2/bingmayong.jpg" title="秦始皇兵马俑博物馆" alt="秦始皇兵马俑博物馆" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">秦始皇兵马俑博物馆</h3>
                            <p>秦始皇兵马俑博物馆，位于西安临潼城东，南倚骊山，北临渭水，面积约218万平方米。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3008" id="3008">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>华清池</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanxi2/huaqingchi.jpg" title="华清池" alt="华清池" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">华清池</h3>
                            <p>华清池，亦名华清宫，位于陕西省西安市临潼区骊山北麓，西距西安30公里，南依骊山，北临渭水。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b3009" id="3009">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>黄帝陵</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanxi2/huaqingchi.jpg" title="黄帝陵" alt="黄帝陵" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">黄帝陵</h3>
                            <p>黄帝陵，位于陕西省延安市黄陵县城北桥山，是中华民族始祖黄帝轩辕氏的陵寝，是《史记》唯一记载黄帝陵 。</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--上海市地形图-->
                    <ul class="p26_city">
                        <li class="packland b1101" id="1101">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>东方明珠</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanghai/dongfangmingzhu.jpg" title="东方明珠" alt="东方明珠" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">东方明珠</h3>
                            <p>东方明珠广播电视塔（The Oriental Pearl Radio & TV Tower）是上海的标志性文化景观之一，位于浦东新区...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1102" id="1102">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>上海科技馆</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanghai/kejiguan.jpg" title="上海科技馆" alt="上海科技馆" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">上海科技馆</h3>
                            <p>上海科技馆是上海市人民政府为贯彻落实科教兴国战略，提高城市综合竞争力和市民科学文化素养而投资兴建的...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1103" id="1103">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>上海野生动物园</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanghai/yeshengdongwu.jpg" title="上海野生动物园" alt="上海野生动物园" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">上海野生动物园</h3>
                            <p>上海野生动物园，位于上海浦东新区南六公路178号，是由上海市人民政府和中国国家林业局合作建设的中国首座...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1104" id="1104">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>上海博物馆</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/shanghai/yeshengdongwu.jpg" title="上海博物馆" alt="上海博物馆园" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">上海博物馆</h3>
                            <p>上海博物馆（Shanghai Museum）是一座大型的中国古代艺术博物馆，上圆下方的造型寓意中国“天圆地方”...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--四川省地形图-->
                    <ul class="p4_city">
                        <li class="packland b2610 packland_bottom" id="2610">
                            <a href="javascript:;">
                    	<span class="block">九寨沟</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/sichuan/jiuzhaigou.jpg" title="九寨沟" alt="九寨沟" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">九寨沟</h3>
                            <p>九寨沟：世界自然遗产、国家重点风景名胜区、国家AAAAA级旅游景区、国家级自然保护区...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2611" id="2611">
                            <a href="javascript:;">
                    	<span class="block">峨眉山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/sichuan/emeishan.jpg" title="峨眉山" alt="峨眉山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">峨眉山</h3>
                            <p>峨眉山（Mount Emei）位于中国四川省乐山市峨眉山市境内，是中国“四大佛教名山”之一，地势陡峭，风景秀丽...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2612" id="2612">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>都江堰</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/sichuan/leshandafo.jpg" title="都江堰" alt="都江堰" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">都江堰</h3>
                            <p>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录）、世界自然遗产...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2613" id="2613">
                            <a href="javascript:;">
                    	<span>青城山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/sichuan/qingchengshan.jpg" title="青城山" alt="青城山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">青城山</h3>
                            <p>青城山（Mount Qingcheng） ，世界文化遗产，全国重点文物保护单位，国家重点风景名胜区，国家5A级旅游景区...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--天津市地形图-->
                    <ul class="p28_city">
                        <li class="packland b0201" id="0201">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>盘山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/tianjin/panshan.jpg" title="盘山" alt="盘山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">盘山</h3>
                            <p>盘山位于天津蓟县城区西北，为国家5A级景区。该景区始记于汉，兴于唐，极盛于清，是自然山水与名胜古迹并著...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0202" id="0202">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>天津古文化街</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/tianjin/guwenhuajie.jpg" title="天津古文化街" alt="天津古文化街" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">天津古文化街</h3>
                            <p>天津古文化街位于南开区东北角东门外，海河西岸，系商业步行街，国家5A级景区。作为津门十景之一...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0203" id="0203">
                            <a href="javascript:;">
                    	<span>独乐寺</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/tianjin/guwenhuajie.jpg" title="独乐寺" alt="独乐寺" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">独乐寺</h3>
                            <p>独乐寺，又称大佛寺，位于中国天津市蓟县，是中国仅存的三大辽代寺院之一，也是中国现存著名的古代建筑...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b0204" id="0204">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>黄崖关长城</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/tianjin/guwenhuajie.jpg" title="黄崖关长城" alt="黄崖关长城" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">黄崖关长城</h3>
                            <p>黄崖关长城在蓟州区北28公里的崇山峻岭之中。历史上，蓟州城共有守营墩台十八座，黄崖关为其一...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--云南省地形图-->
                    <ul class="p18_city">
                        <li class="packland b2705 packland_bottom" id="2705">
                            <a href="javascript:;">
                    	<span class="block">崇圣寺三塔文化旅游区</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/yunnan/chongshengsi.jpg" title="崇圣寺" alt="崇圣寺" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">崇圣寺三塔文化旅游区</h3>
                            <p>崇圣寺三塔文化旅游区位于中国云南省大理州境内大理古城北，是集苍洱风光、文物古迹、佛教文化...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2706 packland_bottom" id="2706">
                            <a href="javascript:;">
                    	<span class="block">玉龙雪山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/yunnan/yulongxueshan.jpg" title="玉龙雪山" alt="玉龙雪山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">玉龙雪山</h3>
                            <p>玉龙雪山（Jade Dragon Snow Mountain）：国家AAAAA级旅游景区，云南省级自然保护区...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2707" id="2707">
                            <a href="javascript:;">
                    	<span class="block">石林</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/yunnan/shilin.jpg" title="石林" alt="石林" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">石林</h3>
                            <p>石林风景区（Stone Forest Scenic）：世界自然遗产，世界地质公园，国家AAAAA级旅游景区...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2708 packland_bottom" id="2708">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>丽江古城</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/yunnan/lijianggucheng.jpg" title="丽江古城" alt="丽江古城" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">丽江古城</h3>
                            <p>丽江古城位于云南省丽江市古城区，又名大研镇，坐落在丽江坝中部，始建于宋末元初（公元13世纪后期）...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--浙江省地形图-->
                    <ul class="p11_city">
                        <li class="packland b1302" id="1302">
                            <a href="javascript:;">
                    	<span class="block">普陀山</span>
                    	<i></i>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/zhejiang/putuoshan.jpg" title="普陀山" alt="普陀山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">普陀山</h3>
                            <p>普陀山，与山西五台山、四川峨眉山、安徽九华山并称为中国佛教四大名山，是观世音菩萨教化众生...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1312" id="1312">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>西湖</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/zhejiang/xihu.jpg" title="西湖" alt="西湖" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">西湖</h3>
                            <p>西湖，位于浙江省杭州市西面，是中国大陆首批国家重点风景名胜区和中国十大风景名胜之一。它是...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1316" id="1316">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>千岛湖</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/zhejiang/qiandaohu.jpg" title="千岛湖" alt="千岛湖" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">千岛湖</h3>
                            <p>千岛湖，位于中国浙江省杭州西郊淳安县境内，东距杭州129千米、西距黄山140千米，是长江三...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b1317" id="1317">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>雁荡山</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/zhejiang/yandangshan.jpg" title="雁荡山" alt="雁荡山" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">雁荡山</h3>
                            <p>雁荡山以山水奇秀闻名，素有“海上名山、寰中绝胜”之誉，史称中国“东南第一山” ，  主体位于浙江省...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <!--重庆市地形图-->
                    <ul class="p9_city">
                        <li class="packland b2902" id="2902">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>酉阳桃花源</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/chongqing/taohuayuan.jpg" title="酉阳桃花源" alt="酉阳桃花源" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">酉阳桃花源</h3>
                            <p>一千六百多年前，晋代大诗人陶渊明写下了《桃花源记》，留下了一个令世人追逐的“世外桃源”...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2906" id="2906">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>武隆喀斯特旅游区</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/chongqing/wulong.jpg" title="武隆喀斯特旅游区" alt="武隆喀斯特旅游区" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">武隆喀斯特旅游区</h3>
                            <p>武隆喀斯特旅游区位于重庆市武隆区境内，拥有罕见的喀斯特自然景观，包括溶洞、天坑、地缝、峡谷、峰丛...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2907" id="2907">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>小三峡—小小三峡</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/chongqing/xiaosanxia.jpg" title="小三峡" alt="小三峡" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">小三峡—小小三峡</h3>
                            <p>小三峡—小小三峡旅游风景区，1991年被评为“中国旅游胜地四十佳”、2004年11月评为“国家...</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                        <li class="packland b2909" id="2909">
                            <a href="javascript:;">
                    	<i></i>
                    	<span>大足石刻</span>
                    </a>
                            <!--<a href="javascript:;" class="main_message clearfix" target="_blank">
                        <img src="/zh/public/images/map/chongqing/dazushike.jpg" title="大足石刻" alt="大足石刻" class="fl" />
                        <div class="fl resume_text">
                            <h3 class="resume_title">大足石刻</h3>
                            <p>大足石刻（Dazu Rock Carvings）：世界文化遗产，世界八大石窟之一，国家AAAAA级旅游景</p> 
                            <span class="main_message_submit block">查看详情</span>
                        </div>
                        <i></i>
                    </a>							-->
                        </li>
                    </ul>
                    <a href="javascript:;" class="close">&times;</a>
                </div>
                <!--右侧控制栏-->
                <div class="control_button fr">
                    <div class="title"></div>
                   <!--  <div class="subject">
                        <h3></h3>
                        <div class="clearfix content">
                            <span>北国冰雪</span>
                    		<span class="odd">茶叶之路</span>
                    		<span>海丝之旅</span>
                    		<span class="odd">江南水乡</span>
                    		<span>岭南风光</span>
                    		<span class="odd">魅力长江</span>
                    		<span>千年运河</span>
                    		<span class="odd">丝绸之路</span>
                    		<span>天路之旅</span>
                    		<span class="odd">天下黄河</span>
                    		<span>万里长城</span>
                    		<span class="odd border_b">香格里拉</span>
                    		<span>世界遗址</span>
                        </div>
                    </div> -->
                    <div class="area clearfix">
                        <h3></h3>
                        <div class="clearfix content">
                            <span>华东地区</span>
                            <span class="odd">华北地区</span>
                            <span>华南地区</span>
                            <span class="odd">华中地区</span>
                            <span>东北地区</span>
                            <span class="odd border_b">西南地区</span>
                            <span class="border_b">西北地区</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <link rel="stylesheet"  type="text/css" href="./z_map/z_css/z_reset.css" charset="utf-8" />
    	<link rel="stylesheet"  href="z_map/z_css/z_tyzg.css"  charset="utf-8" />
    	
		`;
        z_map.innerHTML = str;
		var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "z_map/z_js/z_othermapaaa.js";
        head.appendChild(script);
       
       
        };
    }

)();