$(function () {
    setupUi();
});

function setupUi() {
    $(':input').addClass('ui-widget-content');
    $('input[type="submit"], .button, #footer a').button();
    $('th').addClass('ui-widget-header');
    $('.tree').menu();
    $('.show-dialog').click(function () {
        showDialog(this);
        return false;
    });
}

function showDialog(link) {

    var url = $(link).prop('href');
    var dialog = $( "#dialog" );
    dialog.load(url, function () {
        var dialogW = dialog.dialog({modal: true});
        dialogW.dialog('open');
    });
}