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

$('#user').click(function () {
    $(this).addClass('active');
    $('#envelope, #calender, #map-marker, #phone-alt, #lock').removeClass('active');
});
$('#envelope').click(function () {
    $(this).addClass('active');
    $('#user, #calender, #map-marker, #phone-alt, #lock').removeClass('active');
});
$('#calender').click(function () {
    $(this).addClass('active');
    $('#user, #envelope, #map-marker, #phone-alt, #lock').removeClass('active');
});
$('#map-marker').click(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #phone-alt, #lock').removeClass('active');
});
$('#phone-alt').click(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #map-marker , #lock').removeClass('active');
});
$('#lock').click(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #map-marker , #phone-alt').removeClass('active');
});