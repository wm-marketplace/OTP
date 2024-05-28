Prefab.totalBoxes = 'otp-form-container' + (Math.random() + 1).toString(36).substring(6);

Prefab.onPropertyChange = function(key, newVal, oldVal) {
    switch (key) {
        case "otpboxes":
            Prefab.logicDomFunc();
            break;
    }
};

Prefab.onReady = function() {
    Prefab.Widgets.container4.class = Prefab.totalBoxes;
    setTimeout(function() {
        Prefab.logicDomFunc();
    }, 100);

};

Prefab.logicDomFunc = function() {
    $(".otp-form-list-container input[type='text']").val("");
    $("." + Prefab.totalBoxes + " .otp-form-list-container [wmformfield]").show();
    $("." + Prefab.totalBoxes + " .otp-form-list-container input").OTPAutotab();
    var otpCount = Prefab.otpboxes - 1;
    $("." + Prefab.totalBoxes + " .otp-form-list-container [wmformfield]:gt(" + otpCount + ")").hide();

    Prefab.Widgets.OTPcontainer.show = true;
};

Prefab.getEnteredValue = function () {
    let eValue = [];
    let otpValue = '';

    const otpCount = Prefab.otpboxes;
    $(".otp-form-list-container ").find('input')
        .each(function() {
            if ($(this).is(':visible')) {
                if ($(this).val()) {
                    otpValue += $(this).val();
                    $(this).parent().removeClass('ng-invalid');
                    $(this).removeClass('ng-invalid');
                } else
                    return;
            }
        });
    otpValue = otpValue.length == otpCount ? otpValue : undefined;
    if (Prefab.Widgets.OTPcontainer.show)
        eValue.push({
            'OTP': otpValue
        });
    return eValue;
};
Prefab.buttonResendOTPClick = function($event, widget) {
    Prefab.onClickresendotp($event, widget);
};
Prefab.buttonResendOTPTap = function($event, widget) {
    Prefab.onClickresendotp($event, widget);
};


Prefab.container6_1Click = function($event, widget) {};

Prefab.buttonPasswordViewTap = function($event, widget) {
    var currentClass = $(`.${Prefab.totalBoxes}`).find('.view-password-container .btn i').attr('class');
    $(`.${Prefab.totalBoxes} .otp-form-list-container`).find('input').toggleClass('show-password');
    if (currentClass === 'app-icon fa fa-eye-slash icon-md') {
        $(`.${Prefab.totalBoxes} .view-password-container .btn i`).attr("class", "app-icon fa fa-eye icon-md");
    } else {
        $(`.${Prefab.totalBoxes} .view-password-container .btn i`).attr("class", "app-icon fa fa-eye-slash icon-md");
    }
};

/* Method  used to reset the formfeilds */

Prefab.resetPrefabFields = function () {
    $(".otp-form-list-container input[type='text']").val("");
    Prefab.Widgets.stvInputCountForm1.reset();
    return 'reset successfull';
};
