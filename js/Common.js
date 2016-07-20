function callServer(in_url,moduleId,spanId)
{
    $(function()
    {
            var form_data = new FormData();
		 if(moduleId=="LOGIN")
                {	form_data.append("email",document.getElementById('email').value );
			form_data.append("password",document.getElementById('password').value );

            }
            $.ajax({
                crossOrigin: true,
                type: 'POST',
                url: in_url,
                data: form_data,
                contentType: false,
                cache: false,
                processData: false,
                async: false,
                success: function(data) {
                if(moduleId=="LOGIN")
                {
                     if(data=="PASS")
                      {
                      window.location.href = "dashboard.html";
                      }
                      else{
                      document.getElementById('err').innerHTML=data;
                      }
                  }
                 else if(moduleId=="LOGOUT")
                  {
                       window.location.href = "index.html";
                  }


                },
            });
    });
}

function uploadFile()
{

$(function() {
        var form_data = new FormData($('#upload-file')[0]);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5000/filesave',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: false,
            success: function(data) {
            	if (data.trim()== "FILE_SAVED") {
					document.getElementById('err').innerHTML="File Uploaded Succesfully";
					document.getElementById('selectFile').value="";
				} else {
					document.getElementById('err').innerHTML="File can not be uploaded Succesfully";
				}
            },
        });

});
}