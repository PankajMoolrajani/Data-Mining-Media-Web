//var login_url="http://localhost:5000/auth/token/get"; // for dev
var login_url="http://dataminingmedia.com:5050/auth/token/get"; // for server


$(document).ready(function() {
    $("#login").click(function(){


            var form_data = new FormData();

            form_data.append("email",document.getElementById('name').value );
			form_data.append("password",document.getElementById('password').value );
            $.ajax({
                crossOrigin: true,
                type: 'POST',
                url: login_url,
                data: form_data,
                contentType: false,
                cache: false,
                processData: false,
                async: false,
                success: function(data) {

                     if(data=="INVALID CREDENTIALS. PLEASE TRY AGAIN")
                      {
                       document.getElementById('err').innerHTML=data;


                      }
                      else{
                      setCookie('secretkey',data,1)
                       window.location.href = "dashboard.html";
                      }


                },
            });
    });
});
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}