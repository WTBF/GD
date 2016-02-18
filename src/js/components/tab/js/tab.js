define(function (){

    var self = null;

    function Tab (config){
        this.defaults = {
          name : [],
          icon : [],
          skin : ""
          // parent : $('.ul')
        };

        self = this.defaults;

        $.extend(self, config);

        this.render();
    };

    Tab.prototype = {

        // 初始化
        render : function (){

          // 外层容器模板渲染  
          this.renderUI();
        },

        // 外层容器模板渲染
        renderUI : function (){

            Tab.prototype.tabBox = $('<div id="tab_box"></div>');
            var tabHtml = '<ul class='+self.skin+'>';
                tabHtml += '</ul>';
            Tab.prototype.tabBox.append(tabHtml);

            if(self.name.length >= 1) {
                var nameLen = self.name.length;
             }
             else{
                alert("请传入name");
                return false;
             }

            if(self.icon.length == self.name.length) {
                var iconLen = self.icon.length;
             }
            else{
                 var iconLen = 0;
             }

            if(nameLen >= 1 && iconLen == nameLen) {
                for(var i = 0; i < nameLen; i++) {

                    var content = '<li>';
                        content +=    '<a href="javaScript:;">';
                        content +=        '<i class="iconfont">'+self.icon[i]+'</i>';
                        content +=        '<p>'+self.name[i]+'</p>';
                        content +=    '</a>';
                        content += '</li>';
                    Tab.prototype.tabBox.find('ul').append(content);
                }

            }


            if(nameLen >= 1 && iconLen == 0) {
                for(var i = 0; i < nameLen; i++) {

                    var content = '<li>';
                        content +=    '<a href="javaScript:;">';
                        content +=        '<p>'+self.name[i]+'</p>';
                        content +=    '</a>';
                        content += '</li>';
                    Tab.prototype.tabBox.find('ul').append(content);
                }

            }

            Tab.prototype.tabBox.find('ul>li').eq(0).addClass('active');
            Tab.prototype.tabBox.find('ul').appendTo('nav');           
        }
    };

    return {Tab : Tab};
});
