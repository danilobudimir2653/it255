$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"https://data.police.uk/api/forces/leicestershire/people",
		dataType:"json",
		success:function(data) {
			data.forEach(function(e, index) {
				$("table").append("<tr><td>"+e.bio.slice(0, 20) +"...</td><td>"+ e.name +"</td><td>"+ e.rank);
			});
		}	
	});
});
				