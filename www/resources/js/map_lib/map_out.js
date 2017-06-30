function myMap(options) { //地图实例的依附对象的构造函数
    this.loadDataAjax = null;
    this.mapStatu = 'area'; //记录当前地图的状态
    this.operate = { loadList:false };
    this.tools = { myDis: null };
    this.ply = {};
    this.nearbys = {};

    this.options = { //生成地图实例的选项
        x: '',
        y: '',
        cityName: '',
        dataUrl: '',
        defaultZoom: 10,
        mapBoxId: 'map'
    };
    this.condition = {
        zoom: null,
        center: null, //经度:this.condition.center.lng 纬度:this.condition.center.lat
        x: null,
        y: null,
        bounds: null,
        sw: null, //经度:sw.lng//纬度:sw.lat
        ne: null, //经度:ne.lng//纬度:ne.lat
        searchType: '', //搜索类型[默认,二手房,租房]
        searchData: '' //执行条件,当搜索类型不为空时有效
    };
    this.area = {
        id: '',
        name: ''
    };
    this.district= {
        id: '',
        name: ''
    };
    this.community = {
        id: '', //当前小区ID
        x: '',
        y: '',
        data: '', //当前小区的json格式信息
        key: '', //当前小区的本地搜索关键词
        index: 0,
        keys: new Array(),
        localSearchResult: null,
        infoList: null
    }


    this.subWay = {//地铁搜索参数
        isSubWay: false,
        line: ''
    }
    this.mapObj = null;
    if (options) {
        if (options.x) {
            this.options.x = options.x;
        }
        if (options.y) {
            this.options.y = options.y;
        }
        if (options.cityName) {
            this.options.cityName = options.cityName;
        }
        if (options.dataUrl) {
            this.options.dataUrl = options.dataUrl;
        }
        if (options.defaultZoom) {
            this.options.defaultZoom = options.defaultZoom;
        }
        if (options.mapBoxId) {
            this.options.mapBoxId = options.mapBoxId;
        }
    }
}
myMap.prototype.loadMap = function(YSMap, vueobj) {
    var self = YSMap;
    //加载页面交互事件(如鼠标移动到标注上等操作)
    this.addPageEvent(vueobj);
    //创建地图对象
    this.mapObj = new BMap.Map(this.options.mapBoxId, {enableMapClick:false}); //生成地图实例，并赋值给地图包裹对象
    //绑定事件,设置地图执行完全放大后移除放大事件
    this.mapObj.addEventListener('zoomend', vueobj.zoomendEvent); //地图实例方法： 地图缩放级别变更后重新根据级别显示区域以及自定义标签
    this.mapObj.addEventListener('moveend', vueobj.moveendEvent);
    //设置地图信息
    this.mapObj.enableScrollWheelZoom(); //禁用地图拖拽。
    this.mapObj.enableDragging(); //禁用滚轮放大缩小。
    this.mapObj.enableDoubleClickZoom(); //禁用双击放大。
    this.mapObj.centerAndZoom(new BMap.Point(this.options.x, this.options.y), this.options.defaultZoom); //设定地图的中心点和坐标并将地图显示在地图容器中

    this.addScale(); //向地图中添加比例尺控件
    this.addNavigation(); //添加绽放平移控件
    this.addBaiduImage(); //’百度地图‘标识
};

/**
 * 地图比例尺
 * @returns {undefined}
 */
myMap.prototype.addScale = function(){
    if(this.is_scale) {
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        this.mapObj.addControl(ctrl_sca);
    }
};

myMap.prototype.addOverlay = function(data, lv) {

    var self = this;
    var div;
    $.each(data, function(key, value) {
        div = new ComplexCustomOverlay(value, lv,self);
        self.mapObj.addOverlay(div);
    });
};

/**
 * 地图“百度地图标识”
 * @returns {undefined}
 */
myMap.prototype.addBaiduImage = function(){
    if(!this.is_baidu) {
        $('.zuoleftimg').css('display', 'none');
        $('.zuoleftbiao').css('display', 'none');
    }
};

/**
 * 地图平移控件
 * @returns {undefined}
 */
myMap.prototype.addNavigation = function(){
    if(this.is_navigation) {
        this.mapObj.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT}));
    }
};

/**
 * 区域边界
 */
myMap.prototype.getBoundary = function(name, vueobj) {
    var ply = new BMap.Polygon(vueobj.boundary_location[name]); //建立多边形覆盖物
    ply.setStrokeColor('#ffa08a');
    ply.setFillColor('#43dfff');
    ply.setFillOpacity(0.2);
    ply.enableMassClear();
    this.mapObj.removeOverlay(ply);
    this.mapObj.addOverlay(ply);
    this.ply = ply; //获取区域的边界，移除时使用
}

/**
 * 城区标注点绑定鼠标事件
 */
myMap.prototype.addPageEvent = function(vueobj) {
    var self = this;
    //区域标注点事件 start
    $(document).on('click', '.map_pop_location', function(){
        if ($(this).attr('domain') != '') {//城市图标
           // window.location.href = 'http://' + $(this).attr('domain') + '.' + domainRoot;
        } else {//城区图标
            self.mapObj.setZoom(15);
            self.mapObj.clearOverlays(); //清除地图上所有标注
            self.area.id = $(this).attr('areaid');//选中的区域
            //设置当前城区为中心点.移动完成后加载数据
            self.mapObj.panTo(new BMap.Point($(this).attr('x'), $(this).attr('y')));
            vueobj.move_load=false;
        }
        return false;
    });

    //商圈标注点事件 start
    $(document).on('click', '.map_pop_sublocation', function(){
        if ($(this).attr('domain') != '') {//城市图标
            //window.location.href = 'http://' + $(this).attr('domain') + '.' + domainRoot;
        } else {

            self.mapObj.setZoom(17);
            self.mapObj.clearOverlays(); //清除地图上所有标注
            //设置当前城区为中心点.移动完成后加载数据
            self.mapObj.panTo(new BMap.Point($(this).attr('x'), $(this).attr('y')));
            vueobj.move_load=false;
        }
        return false;
    });

    //小区标注点事件
    $(document).on('click', '.map_pop_community', function(){
        $('.qqserver').addClass('unfold');
        $('.qqserver001').removeClass('unfold001');
        $('.shareshow').css('display', 'none'); //默认关闭分享
        this.community.id = $(this).attr('communityid');
        $('.liebiao').html(''); //加载前先清空上次的数据
        var data = {
            t:house_type,
            s_p:s_price,
            s_a:s_area,
            s_r:s_room,
            s_t:s_tag,
            'communityId':self.community.id
        }
        $.ajax({
            url:'/bJ_Map/rightHousesList',
            type: 'GET',
            dataType: 'html',
            data:data,
            beforeSend:function(XMLHttpRequest){
                //setTimeout(function() { removeHouseLoading() }, 300);
                vueobj.addHouseLoading(); //地图加载中
            },
            success: function(data) {
                vueobj.removeHouseLoading(); //移除地图加载中
                $('.liebiao').css('display', 'block');
                $('.liebiao').html(data);
                loadScrollbar(); //滚动条
            },
            complete:function(XMLHttpRequest) {
                vueobj.removeHouseLoading(); //移除地图加载中
            },
            error: function() {
                vueobj.removeHouseLoading(); //移除地图加载中
                //alert('附近未找到房源，请重新选择！');
                var data="测试获得具体房屋后的品抽标签"
                vueobj.removeHouseLoading(); //移除地图加载中
                $('.liebiao').css('display', 'block');
                $('.liebiao').html(data);
                vueobj.loadScrollbar(); //滚动条
            }
        });
        $(this).siblings().removeClass('map_pop_community_cur lock');
        $(this).addClass('map_pop_community_cur fixed lock');
    });

    $(document).on('mouseover', '.map_pop_sublocation', function(){ //子区域鼠标滑入颜色
        var popObj = $(this);
        var popId = popObj.attr('id');
        var testStr = 'map_pop_lv0';
        popObj.addClass('map_pop_cur');
        popObj.css('z-index', 100);
    });
    $(document).on('mouseout', '.map_pop_sublocation', function(){ //子区域鼠标滑出颜色
        var popObj = $(this);
        popObj.removeClass('map_pop_cur');
        popObj.css('z-index', 0);
    });

    $(document).on('mouseover mouseout', '.map_pop_location', function(event){
        var provinces = $(this).children('span').html() + '区'; //获取城市区域
        if(event.type == 'mouseover') {
            if(vueobj.checkHover(event, this,vueobj)){
                var popObj = $(this);
                var popId = popObj.attr('id');
                var testStr = 'map_pop_lv0';
                popObj.addClass('map_pop_cur');
                popObj.css('z-index', 100);
                self.getBoundary(provinces, vueobj);
            }
        } else if (event.type == 'mouseout') {
            if(vueobj.checkHover(event, this,vueobj)){
                var popObj = $(this);
                popObj.removeClass('map_pop_cur');
                popObj.css('z-index', 0);
                self.mapObj.removeOverlay(self.ply);
                self.ply = ''; //初始化, 更换类型是为了防止鼠标滑动过快时，加载问题
            }
        }
    });


    $(document).on('mouseover', '.map_pop_community', function(){
        var popObj = $(this);
        var popId = popObj.attr('id');
        var testStr = 'map_pop_lv0';
        popObj.addClass('map_pop_community_cur');
        popObj.css('z-index', 100);
    });
    $(document).on('mouseout', '.map_pop_community', function(){
        var popObj = $(this);
        if(!popObj.hasClass('lock')) {
            $(this).removeClass('map_pop_community_cur');
            $(this).css('z-index', 0);
        }
    });
};

/**
 * 重置地图信息
 */
myMap.prototype.resetCondition = function() {
    console.log('重置地图信息');
    this.condition.zoom = this.mapObj.getZoom();
    this.condition.center = this.mapObj.getCenter(); //中心点
    this.condition.x = this.condition.center.lng;
    this.condition.y = this.condition.center.lat;
    this.condition.bounds = this.mapObj.getBounds(); //可视区域
    this.condition.sw = this.condition.bounds.getSouthWest(); //经度:sw.lng//纬度:sw.lat
    this.condition.ne = this.condition.bounds.getNorthEast();
};

/**
 * 复杂的自定义覆盖物
 *
 */
function ComplexCustomOverlay(value, lv, enr) {
    this._self = enr;
    this._value = value;
    this._point = new BMap.Point(value.point.toString().split("|")[0], value.point.toString().split("|")[1]);
    this._countNumber = value.countNumber;
    this._title = value.title;
    this._price = value.price;
    this._lv = parseInt(lv);
    this._x = this._point.lng;
    this._y = this._point.lat;
    if(typeof(value.isshow) != 'undefined') {
        this._show = value.isshow;
    } else {
        this._show = 0;
    }
}

ComplexCustomOverlay.prototype = new BMap.Overlay(); //继承BMap.Overlay
ComplexCustomOverlay.prototype.createOverlay = function(map) {
    this._map = map;
    var div = this._div = document.createElement("div");
    div.setAttribute('index', '');
    if (this._lv <= 13) {
        console.log('区域标识');
        div.id = 'map_pop_lv1_' + this._value.id;
        div.setAttribute('areaId', this._value.id);
        div.setAttribute('domain', '');
        div.className = "map_pop_location";
        var span = document.createElement("span");
        var label = document.createElement("label");
        div.appendChild(span);
        div.appendChild(label);
        var title = this._title;
        if (title.substring(title.length - 1) == '区') {
            title = title.substring(0, title.length - 1);
        }
        var numText = parseInt(this._value.countNumber) + '套';
        span.appendChild(document.createTextNode(title));
        label.appendChild(document.createTextNode(numText));
        div.setAttribute('x', this._x);
        div.setAttribute('y', this._y);

    } else if(this._lv <= 15) {
        console.log('商圈标识');
        div.id = 'map_pop_district_lv2_' + this._value.id;
        div.setAttribute('districtId', this._value.id);
        div.setAttribute('domain', '');
        div.className = "map_pop_sublocation";
        var span = document.createElement("span");
        var label = document.createElement("label");
        div.appendChild(span);
        div.appendChild(label);
        var title = this._title;
        if (title.substring(title.length - 1) == '区') {
            title = title.substring(0, title.length - 1);
        }
        var numText = parseInt(this._value.countNumber) + '套';
        //numText = parseInt(this._value.exchangeNumber) + parseInt(this._value.rentNumber) + '套';
        span.appendChild(document.createTextNode(title));
        label.appendChild(document.createTextNode(numText));
        div.setAttribute('x', this._x);
        div.setAttribute('y', this._y);
    } else {
        console.log('载入小区');
        div.id = 'map_pop_community_lv2_' + this._value.id;
        div.setAttribute('communityId', this._value.id);

        var adds = '';
        if(this._self.community.data.address != '') {
            adds = this._self.community.data.address;
        }
        if((this._show == '1') || (this._title == adds)) {
            div.className = "map_pop_community map_pop_community_cur lock";
        } else {
            div.className = "map_pop_community";
        }
        var span = document.createElement("span");
        var label = document.createElement("label");
        label.className = "pricesty";
        var newspan = document.createElement("em");
        div.appendChild(span);
        div.appendChild(label);
        numText = parseInt(this._value.countNumber) + '套';
        //numText = parseInt(this._value.exchangeNumber) + parseInt(this._value.rentNumber) + '套';
        if(this._price && house_type != 'rent') {
            var price = parseInt(this._price) / 10000;
            newspan.appendChild(document.createTextNode(price.toFixed(1) + '万'));
        }
        span.appendChild(document.createTextNode(numText));
        label.appendChild(document.createTextNode(this._title));
        label.appendChild(newspan);
        div.setAttribute('x', this._x);
        div.setAttribute('y', this._y);
    }

    div.style.position = "absolute";
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    var arrow = this._arrow = document.createElement("div");
    arrow.style.position = "absolute";
    arrow.style.width = "11px";
    arrow.style.height = "10px";
    arrow.style.top = "22px";
    arrow.style.left = "18px";
    arrow.style.overflow = "hidden";
    arrow.style.backgroundPosition = "0px -20px";
    map.getPanes().labelPane.appendChild(div);
    return div;
};

ComplexCustomOverlay.prototype.initialize = function(map) {
    this._map = map;
    var div = this.createOverlay(map);
    return div;
};

ComplexCustomOverlay.prototype.draw = function() {
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) - 0 + "px";
    this._div.style.top = pixel.y - 40 + "px";
};

export {ComplexCustomOverlay, myMap};