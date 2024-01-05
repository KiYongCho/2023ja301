$(function() {

    $("#btn").on("click", function() {
        $.get({
            url: "https://jsonplaceholder.typicode.com/users",
            success: function(result) {
                result.map(user => {
                    console.log(user);
                    $("thead").append(
                        $("<tr></tr>")
                            .append($("<td>"+user.id+"</td>"))
                            .append($("<td>"+user.name+"</td>"))
                            .append($("<td>"+user.username+"</td>"))
                            .append($("<td>"+user.email+"</td>"))
                            .append($("<td>"
                                + user.address.street + " "
                                + user.address.suite + " "
                                + user.address.city +
                            "</td>"))
                    )
                });
            }
        });
    });

});