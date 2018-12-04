(function(){
    var d = document;
    var areaopts = {

    };
    var MdSelectId = "";
    var MdAcceptId = "";
    var areaContentBox = "";
    var MareaPlugin = "";
    var provinceTag = "";
    var cityTag = "";
    var areaTag = "";
    var provinceIndex = 0;
    var cityIndex = 0;
    var areaIndex = 0;
    var indexP = 1;
    var indexC = 1;
    var indexA = 1;
    var initM = null;
    var initD = null;
    var provinceScroll = null;
    var cityScroll = null;
    var areaScroll = null;
    var Marea = function(el,opts){
        if(!opts){
            opts = {};
        }
        this.areaData = Area;
        this.city = this.areaData[0].mallCityList;
        this.area = this.areaData[0].mallCityList[0].mallAreaList;
        this.id = el;
        this.selectorId = d.getElementById(this.id);
        this.acceptId = d.getElementById(opts.acceptId) || d.getElementById(this.id);
        this.areaBoxShow();
    };
    Marea.prototype = {
        constructor:Marea,
        areaBoxShow:function(){
            var that = this;
            that.selectorId.onclick = function(){
                that.createAreaBox();
                that.areaSure();
            }
        },
        createAreaBox:function(){
            var that = this;
            MareaPlugin = d.getElementById('MareaPlugin');
            if(!MareaPlugin){
                areaContentBox = d.createElement("div");
                areaContentBox.id = "MareaPlugin";
                d.body.appendChild(areaContentBox);
                MareaPlugin = d.getElementById('MareaPlugin');
            }
            MareaPlugin.setAttribute('class','slideIn');
            that.createAreaUi();
            var provinceUl = d.getElementById('provinceUl');
            var cityUl = d.getElementById('cityUl');
            var areaUl = d.getElementById('areaUl');
            provinceUl.innerHTML = that.createAreaPCA('province');
            cityUl.innerHTML = that.createAreaPCA("city");
            areaUl.innerHTML = that.createAreaPCA("area");
            that.initScroll();
            //that.refreshScroll();
        },
        createAreaUi:function(){
            var str = "" 
            + '<section class="getAreaBg"></section>' 
            + '<section class="getAreaBox" id="getAreaBox">' 
            + '<div class="choiceAreaTitle">' 
            + '<button id="areaCancel">取消</button>' 
            + '<button id="areaSure" class="fr">确定</button>' 
            + "</div>" 
            + '<div class="areaContent">' 
            + '<div class="checkeArea"></div>' 
            + '<div id="provincewrapper">' 
            + '<ul id="provinceUl"></ul>' 
            + "</div>" 
            + '<div id="citywrapper">' 
            + '<ul id="cityUl"></ul>' 
            + "</div>" 
            + '<div id="areawrapper">' 
            + '<ul id="areaUl"></ul>' 
            + "</div>" 
            + "</div>" 
            + "</section>";
            MareaPlugin.innerHTML = str;
        },
        createAreaPCA:function(type){
            var that = this;
            var str = "<li>&nbsp;</li>";
            var dataStyle = "data-province";
            var dataIndex = 'province-index';
            if(type == 'province'){
                for (var i = 0; i < that.areaData.length; i++) {
                    str += "<li " + dataStyle + "=" + that.areaData[i].provinceName + " " + dataIndex + "=" + i +">" + that.areaData[i].provinceName + "</li>"
                }
            }else if(type == 'city'){
                dataStyle = "data-city";
                dataIndex = 'city-index';
                for (var i = 0; i < that.city.length; i++) {
                    str += "<li " + dataStyle + "=" + that.city[i].cityName + " " + dataIndex + "=" + i +">" + that.city[i].cityName + "</li>"
                }
            }else if(type == 'area'){
                dataStyle = "data-area";
                dataIndex = 'area-index';
                for (var i = 0; i < that.area.length; i++) {
                    str += "<li " + dataStyle + "=" + that.area[i].areaName + " " + dataIndex + "=" + i +">" + that.area[i].areaName + "</li>"
                }
            }
            return str + "<li>&nbsp;</li>"
        },
        initScroll:function(){
            var that = this;
            provinceScroll = new iScroll('provincewrapper',{
                snap:'li',
                vScrollbar: false,
                onScrollEnd:function(){
                    indexP = Math.ceil(this.y / 40 * -1 + 1);
                    provinceTag = provinceUl.getElementsByTagName("li")[indexP].getAttribute("data-province");
                    provinceIndex = provinceUl.getElementsByTagName("li")[indexP].getAttribute("province-index");
                    that.city = that.areaData[parseInt(provinceIndex)].mallCityList;
                    that.area = that.areaData[parseInt(provinceIndex)].mallCityList[0].mallAreaList;
                    // console.log(that.area);
                    cityUl.innerHTML = that.createAreaPCA("city");
                    areaUl.innerHTML = that.createAreaPCA("area");
                    // cityScroll.moveTo(0,0)
                    //console.log(cityScroll);
                    cityScroll.scrollTo(0,0);
                    areaScroll.scrollTo(0,0);
                    cityScroll.refresh();
                    areaScroll.refresh();
                }
            });
            cityScroll = new iScroll('citywrapper',{
                snap:'li',
                vScrollbar: false,
                onScrollEnd:function(){
                    indexC = Math.ceil(this.y / 40 * -1 + 1);
                    cityTag = cityUl.getElementsByTagName("li")[indexC].getAttribute("data-city");
                    cityIndex = cityUl.getElementsByTagName("li")[indexC].getAttribute("city-index");
                    //console.log(cityTag,cityIndex);
                    that.area = that.areaData[parseInt(provinceIndex)].mallCityList[parseInt(cityIndex)].mallAreaList;
                    areaUl.innerHTML = that.createAreaPCA("area");
                    areaScroll.scrollTo(0,0);
                    areaScroll.refresh();
                }
            });
            areaScroll = new iScroll('areawrapper',{
                snap:'li',
                vScrollbar: false,
                onScrollEnd:function(){
                    indexA = Math.ceil(this.y / 40 * -1 + 1);
                    areaTag = areaUl.getElementsByTagName("li")[indexA].getAttribute("data-area");
                    areaIndex = areaUl.getElementsByTagName("li")[indexA].getAttribute("area-index");
                    //console.log(areaTag,areaIndex);
                }
            })
        },
        areaSure:function(){
            var that = this;
            var sureBtn = d.getElementById("areaSure");
            var cancelBtn = d.getElementById("areaCancel");
            sureBtn.onclick = function () {
                that.acceptId.value = provinceTag + "-" + cityTag + "-" + areaTag;
                that.dateCancel()
            };
            cancelBtn.onclick = function () {
                that.dateCancel()
            }
        },
        dateCancel: function () {
            MareaPlugin.setAttribute("class", "slideOut");
            setTimeout(function () {
                MareaPlugin.innerHTML = ""
            }, 400)
        }
    };
    if (typeof exports !== "undefined") {
        exports.Marea = Marea
    } else {
        window.Marea = Marea
    }
})()