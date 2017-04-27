

$(document).ready(function(){


    $("#dugme").click(function () {
        $("#ponuda").empty();


        var auto = $("#combo").val();



        $.ajax({
            url:"post.php",
            type: "post",
            data: {
                auto : auto
            },
            dataType: 'json',
            success: function (data) {

                $("#ponuda").append(

                    "<p>POST METOD</p><table><tr><th>Model</th> <th>motor</th> <th>zapremina</th></tr><tr><td>"+data.model+"</td> <td>"+data.motor + "</td> <td>"+data.zapremina +"</td></tr></table>"


                );

            },
            error: function () {
                alert("greska");
            }
        })





    });


    $("#dugme1").click(function () {
        $("#ponuda").empty();


        var auto = $("#combo").val();



        $.ajax({
            url:"post.php",
            type: "get",
            data: {
                auto : auto
            },
            dataType: 'json',
            success: function (data) {

                $("#ponuda").append(

                    "<p>GET METOD</p><table><tr><th>Model</th> <th>motor</th> <th>zapremina</th></tr><tr><td>"+data.model+"</td> <td>"+data.motor + "</td> <td>"+data.zapremina +"</td></tr></table>"


                );

            },
            error: function () {
                alert("greska");
            }
        })





    });



});




