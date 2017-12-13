import request from "superagent"
import Jsonp from "superagent-jsonp"
const Net = function (option){
    let options = arguments[0];
    let type = options.type;
    let url = options.url;
    let params = options.params ? options.params : {};
    let cb = arguments[1];
    if(type == "Get"){
        request.get(url)
        .query(params)
        .use(Jsonp)
        .end(function(err,res){
            cb(res);
        })
    }else{
        request.post(url)
        .send(params)
        .use(Jsonp)
        .end(function(err,res){
            cb(res);
        })
    }
}


export default Net;
