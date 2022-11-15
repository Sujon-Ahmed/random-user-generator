// api link for random user
var url = 'https://randomuser.me/api/';

// button click event
$('#newBtn').click(function () {
    $.ajax({
        method: 'GET',
        url: url,
        dataType: 'json'
    }).done(sujon).fail(function () {
        console.log('faild!');
    });
});

function sujon(data) {
    var info = data.results[0];
    // console.log(data.results[0]);
    $("#meta-name").text(info.name.first + " " + data.results[0].name.last);
    $("#user-avatar").attr("src", info.picture.large);
}