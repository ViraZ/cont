var countries_info = {};

$(document).ready(function(){
    $.ajax({
        url:"js/capital.json",
        cache:false,
        success:function(data){
            countries_info.capitals = data;
        }
    });
    $.ajax({
        url:"js/phone.json",
        cache:false,
        success:function(data){
            countries_info.phoneCodes = data;
        }
    });
    $.ajax({
        url:"js/currency.json",
        cache:false,
        success:function(data){
            countries_info.currency = data;
        }
    });
    $.ajax({
        url:"js/iso3.json",
        cache:false,
        success:function(data){
            countries_info.iso3 = data;
        }
    });
    $.ajax({
        url:"js/continent.json",
        cache:false,
        success:function(data){
            countries_info.continent = data;
            show();
        }
    });
});

function show(){
    $.ajax({
        url: "js/countries.json",
        cache: false,
        success: function(data){
           var content = "";
           // for(var i in data.countries){
                //var country_id = data.countries[i].country.country_id;
              //  var country_name = data.countries[i].country.country_name;


                /*content += "Id: " + country_id + " name: " + country_name+" capital: "+countries_info.capitals[country_id]+
                    " phone code:"+countries_info.phoneCodes[country_id]+" currency code:"+countries_info.currency[country_id]+
                    " iso3: "+countries_info.iso3[country_id]+ " continent code: "+ countries_info.continent[country_id]+"<br>";*/
            //}

            countries_info.names = data;
            var selControl = $("select");
            var selContent = "<select>";
            $.each(data.countries, function(iterator){
                selContent+="<option value='"+data.countries[iterator].country.country_id+"'>"
                    +data.countries[iterator].country.country_name+"</option>";
            });
            selContent+="</select>";
            selControl.replaceWith(selContent);
            //$("body").html(content);
            $("select").on('change',function(){
               $("#capital").text(countries_info.capitals[this.value]);
                $("#phone").text(countries_info.phoneCodes[this.value]);
                $("#currency").text(countries_info.currency[this.value]);
                $("#continent").text(countries_info.continent[this.value]);
                $("#iso3").text(countries_info.iso3[this.value]);
            });

        }
    });
}

