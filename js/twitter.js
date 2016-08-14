var upload_url="http://localhost:5000/twitter/csv/upload"; // for dev
//var upload_url="http://dataminingmedia.com:5050/auth/token/get"; // for server


$(document).ready(function() {
  $("#upload").click(function(){
        var form_data = new FormData();
form_data.append("file",document.getElementById("file").value);
form_data.append("job_name",document.getElementById("job_name").value);
        $.ajax({
            type: 'POST',
            url: upload_url,
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: false,
            success: function(data) {
            	if (data.trim()== "FILE_SAVED") {
                	document.getElementById('file').value="";
					showSpan('success');
					hideSpan('fail');

				} else {

					hideSpan('success');
					showSpan('fail');
				}
            },
        });

});
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function hideSpan(field) {

	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "none";
}

function showSpan(field) {

	var hideSpanArea = document.getElementById(field);
	hideSpanArea.style.display = "block";

}