$(document).ready(function () {
    getemplates();
})

function getemplates() {
    $.ajax({
        url: "/get-Templates",
        type: "get",
        success: function (result) {
            fillblanks(result.word)
        },
        error: function (result) {
            alert(result.responseJSON.message)
        }
    })
}