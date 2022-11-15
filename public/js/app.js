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


$('#user').mouseenter(function () {
    $(this).addClass('active');
    $('#envelope, #calender, #map-marker, #phone-alt, #lock').removeClass('active');   
    $('#meta-content').text('My name is');
    // $('#meta-name').text('Sujon Ahmed');
    $("#meta-name").text(info.name.first + " " + data.results[0].name.last);
});
$('#envelope').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #calender, #map-marker, #phone-alt, #lock').removeClass('active');
    $('#meta-content').text('My email address is');
    $("#meta-name").text(data.results[0].email);
    // $("#meta-name").text('sujonahmed5284@gmail.com');
});
$('#calender').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #envelope, #map-marker, #phone-alt, #lock').removeClass('active');
    $('#meta-content').text('My birthday is');
});
$('#map-marker').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #phone-alt, #lock').removeClass('active');
    $('#meta-content').text('My address is');
});
$('#phone-alt').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #map-marker , #lock').removeClass('active');
    $('#meta-content').text('My phone number is');
});
$('#lock').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #map-marker , #phone-alt').removeClass('active');
    $('#meta-content').text('My password is');
});