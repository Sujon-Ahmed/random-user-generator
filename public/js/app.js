window.onload = function () {
    callApi();
}

// api link for random user
var url = 'https://randomuser.me/api/';

// button click event
function callApi() {
    $.ajax({
        method: 'GET',
        url: url,
        dataType: 'json'
    }).done(function (data) {
        sujon(data);
    }).fail(function () {
        console.log('faild!');
    });

}
$('#newBtn').click(function () {
    callApi()
});
var response;
function sujon(data) {
    // var info = data.results[0];
    response = data.results[0];
    $("#meta-name").text(response.name.first + " " + response.name.last);
    $("#user-avatar").attr("src", response.picture.large);
}

$('#user').mouseenter(function () {
    $(this).addClass('active');
    $('#envelope, #calender, #map-marker, #phone-alt, #lock').removeClass('active');
    $('#meta-content').text('My name is');
    // $('#meta-name').text('Sujon Ahmed');
    $("#meta-name").text(response.name.first + " " + response.name.last);
});

$('#envelope').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #calender, #map-marker, #phone-alt, #lock').removeClass('active');
    $('#meta-content').text('My email address is');
    $("#meta-name").text(response.email);
    // console.log(response.email);
    // $("#meta-name").text('sujonahmed5284@gmail.com');
});

$('#calender').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #envelope, #map-marker, #phone-alt, #lock').removeClass('active');
    $('#meta-content').text('My birthday is');
    $("#meta-name").text(response.dob.date);
});

$('#map-marker').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #phone-alt, #lock').removeClass('active');
    $('#meta-content').text('My address is');
    $("#meta-name").text(`${response.location.city}, ${response.location.state}, ${response.location.country}`);
});

$('#phone-alt').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #map-marker , #lock').removeClass('active');
    $('#meta-content').text('My phone number is');
    $("#meta-name").text(response.phone);
});

$('#lock').mouseenter(function () {
    $(this).addClass('active');
    $('#user, #envelope, #calender, #map-marker , #phone-alt').removeClass('active');
    $('#meta-content').text('My password is');
    $("#meta-name").text(response.login.password);
});