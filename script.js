//slider code 
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: false,
        dots: false,
        nav: true,
    });
});
//share Contact btn to show or hide
$(document).ready(function () {
    $(".pl-2 a").click(function (e) {
        e.preventDefault();
        $(".hidden-div").toggle();
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.pl-2').length && !$(e.target).closest('.hidden-div').length) {
            $(".hidden-div").hide();
        }
    });
});
// show or hide slider tab 
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content > div').forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the selected tab
    document.querySelector(`.${tabName}`).style.display = 'block';
}

// validation form code
$(document).ready(function () {
    $(".text-danger").hide();
    $("#makecontact").click(function () {

        var isValid = true;


        var name = $("#recipient-name").val();
        if (name === "") {
            $(".span-error-name").show();
            isValid = false;
        }


        var email = $("#recipient-email").val();
        if (email === "") {
            $(".span-error-email").show();
            isValid = false;
        }


        var phone = $("#recipient-phone").val();
        if (phone === "") {
            $(".span-error-phone").show();
            isValid = false;
        }


        var message = $("#recipient-name").val();
        if (message.length === 0) {
            $(".span-error-msg").show();
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
        }
    });
});

