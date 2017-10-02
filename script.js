$(document).ready(function() {
    $('.ui.dropdown').dropdown();

    $('.typeit').typeIt({
        speed: 100,
        lifeLike: true,
        loop: false,
        autoStart: true
    });

    $('#calender').calendar({
        type: 'date',
        today: true,
        initialDate: null,
        onChange: function(date, text) {
            var numdate = new Date(date);
            $("#n").val(dateToDay(numdate));
        },
    });

    function getLocation(placetext) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': placetext
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                $("#lat").val(Math.abs(results[0].geometry.location.lat()).toFixed(5));
                $("#long").val(Math.abs(results[0].geometry.location.lng()).toFixed(5));
            } else {
                alert("Cannot fetch latitude and longitude online. Please enter manually " + status);
            }
        });
    }

    $(".results").css("display", "none");
    $(".opthidden").css("display", "none");

    $("#placelist").change(function() {
        var placeval = $("#placelist :selected").val();
        var placetext = $("#placelist :selected").text();
        if (placeval == 1) {
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");

            $.get("http://ipinfo.io", function(response) {
                getLocation(response.city);
                $("#place_custom").prop("disabled", false);
                $(".opthidden").css("display", "block");
                $("#place_custom").val(response.city);
            }, "jsonp");
        }
        if (placeval == 2) {
            var a = 0.18;
            var b = 0.64;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 3) {
            var a = 0.28;
            var b = 0.47;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 4) {
            var a = 0.30;
            var b = 0.44;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 5) {
            var a = 0.30;
            var b = 0.48;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 6) {
            var a = 0.33;
            var b = 0.46;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 7) {
            var a = 0.32;
            var b = 0.55;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 8) {
            var a = 0.28;
            var b = 0.42;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 9) {
            var a = 0.27;
            var b = 0.43;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 10) {
            var a = 0.26;
            var b = 0.39;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 11) {
            var a = 0.27;
            var b = 0.50;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 12) {
            var a = 0.25;
            var b = 0.57;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 13) {
            var a = 0.31;
            var b = 0.43;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 14) {
            var a = 0.22;
            var b = 0.57;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 15) {
            var a = 0.35;
            var b = 0.40;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 16) {
            var a = 0.37;
            var b = 0.39;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 17) {
            var a = 0.28;
            var b = 0.47;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 18) {
            var a = 0.28;
            var b = 0.48;
            $("#place_custom").prop("disabled", true);
            $(".opthidden").css("display", "none");
            getLocation(placetext);
        }
        if (placeval == 19) {
            $("#place_custom").prop("disabled", false);
            $(".opthidden").css("display", "block");
            $("#place_custom").keypress(_.debounce(function() {
                placetext = $("#place_custom").val();
                getLocation(placetext);
            }, 3000));
        }

        $("#a").val(a);
        $("#b").val(b);
    })

    function daysInFeb(year) {
        if (year % 4 === 0 && (year % 100 !== 0 && year % 400 === 0)) {
            return 29;
        } else {
            return 28;
        }
    }

    function dateToDay(date) {
        var feb = daysInFeb(date.getFullYear());
        var months = [
            0, // January
            31, // February
            31 + feb, // March
            31 + feb + 31, // April
            31 + feb + 31 + 30, // May
            31 + feb + 31 + 30 + 31, // June
            31 + feb + 31 + 30 + 31 + 30, // July
            31 + feb + 31 + 30 + 31 + 30 + 31, // August
            31 + feb + 31 + 30 + 31 + 30 + 31 + 31, // September
            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30, // October
            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, // November
            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30, // December
        ];

        return months[date.getMonth()] + date.getDate();
    }

    $("#submit").click(function() {

        var error = false;
        if (($("#placelist").val() == 0) && ($("#place_custom").text() === "")) {
            error = true;
        }
        if ($("#n").val() == 0) {
            error = true;
        }
        if ($("#lat").val() == 0) {
            error = true;
        }
        if ($("#long").val() == 0) {
            error = true;
        }
        if ($("#a").val() == 0) {
            error = true;
        }
        if ($("#b").val() == 0) {
            error = true;
        }
        if ($("#nbar").val() == 0) {
            error = true;
        }

        //        var numdays = 17;
        //        var latitude = 27.166;
        //        var longitude = 72.1519;
        //        var avalue = 0.25;
        //        var bvalue = 0.57;
        //        var avgsunshine = 7;

        if (error == false) {
            var numdays = $("#n").val();
            var latitude = $("#lat").val();
            var longitude = $("#long").val();
            var avalue = $("#a").val();
            var bvalue = $("#b").val();
            var avgsunshine = $("#nbar").val();

            //        console.log(numdays, latitude, longitude, avalue, bvalue, avgsunshine);

            var delta = 23.45 * Math.sin(((parseInt(360) * (parseInt(284) + parseInt(numdays))) / parseInt(365)) * (Math.PI / 180));
            delta = delta.toFixed(2);
            $("#delta").html(delta + " degrees");

            var omega = Math.acos(-Math.tan(latitude * Math.PI / 180) * Math.tan(delta * Math.PI / 180)) * (180 / Math.PI);
            omega = omega.toFixed(2);
            $("#omega").html(omega + " degrees");

            var capsnbar = (2 / 15) * omega;
            $("#capsnbar").html(capsnbar + " hours");

            var cons = 3600 * (24 / Math.PI) * 1.367;
            // cons = cons.toFixed(2);

            var middlecons = 1 + (0.033 * Math.cos((360 * numdays / 365) * (Math.PI / 180)));
            // middlecons = middlecons.toFixed(2);

            var cosdeltacosphicosomega = Math.cos(latitude * Math.PI / 180) * Math.cos(delta * Math.PI / 180) * Math.sin(omega * Math.PI / 180);
            // cosdeltacosphicosomega = cosdeltacosphicosomega.toFixed(2);

            var omegasinphisindelta = omega * (Math.PI / 180) * Math.sin((latitude * Math.PI / 180)) * Math.sin(delta * Math.PI / 180);
            // omegasinphisindelta = omegasinphisindelta.toFixed(2);

            var hnotbar = cons * middlecons * (cosdeltacosphicosomega + omegasinphisindelta);
            // hnotbar = hnotbar.toFixed(2);

            $("#hnotbar").html(hnotbar + " kJ/m<sup>2</sup>-day");

            var hgbar = hnotbar * (parseFloat(avalue) + (parseFloat(bvalue) * (avgsunshine / capsnbar)));
            // hgbar = hgbar.toFixed(2);
            $("#hgbar").html(hgbar + " kJ/m<sup>2</sup>-day");
            // alert(hgbar)

            var hdbar = hgbar * (1.354 - (1.570 * (hgbar / hnotbar)));
            hdbar = hdbar.toFixed(2);
            $("#hdbar").html(hdbar + " kJ/m<sup>2</sup>-day");

            var hb = hgbar - hdbar;
            // hb = hb.toFixed(2);
            $("#hb").html(hb + " kJ/m<sup>2</sup>-day");

            $(".results").css("display", "block");

            window.scrollTo(0, document.body.scrollHeight);
        } else {
            alert("Please enter all the fields correctly and try again!");
        }
    })

})