$(document).ready(function(){
    .getJSON("js/package.json", function (data){
        var content = "";
        for(var i in data["package"]){

            var sl = data["slides"][i]."country_id";
            var con = data["slides"][i]."country_name";
}
