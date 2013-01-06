var ejs = require("./ejs.js");

module.exports = function(ejsName){
    var registerd = {};
    
    
    EjsTs.prototype = {
        register:function(name,str){
            var __self = this;
            registerd[name]=str;
            __self[name] = function(data){
                var Objests = {};
                var inone = function(Str){
                    return function(_data){
                        if(!_data)_data=data;
                        else
                        for(var i in data){
                            if(!_data[i])
                                _data[i] = data[i];
                        }
                        _data[ejsName] = Objests;
                        return ejs.render(Str,_data);
                    };
                };
                
                if(!data){
                    data = {};
                }
                
                for(var i in registerd){
                    Objests[i] = inone(registerd[i]);
                }
                data[ejsName] = Objests;
                
                return ejs.render(str,data);
            };
            return __self[name];
        }
    };
    
    function EjsTs(){}
    return new EjsTs();
};