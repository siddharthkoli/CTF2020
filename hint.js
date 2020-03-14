//console.log("Into hint.js")
function getHint(id)
{
	$.ajax({
          type: "POST",
          dataType: "json",
          url: "hint",
          data: {hintid:id},
          //beforeSend: function(xhr, settings) {
            //$.ajaxSettings.beforeSend(xhr, settings);
          //},
          success: function(result) {
            var selector = "#hint-content";
              $(selector).text(result.hint);
              $("#points").text(result.points + " Points");
            //print("Into success" + result.hint + result.points);
              console.log("Into success", result.hint, result.points);
          } 
      });
}