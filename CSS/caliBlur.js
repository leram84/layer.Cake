//Fuck Yeah! Thank you @hexeth!!

if (url.substr(url.lastIndexOf('/') + 1).length > 0) {
    var url = document.URL;
    blur = url.substr(url.lastIndexOf('/') + 1);
    $("body").addClass(blur);
} else {
    $("body").addClass("home");
};

if ($('a[id^=btnGroupDrop]').length == 2) {
    firstDownload = $('a[id^=btnGroupDrop]').first();
    lastDownload = $('a[id^=btnGroupDrop]').last();
    downloadItems = $('a[id^=btnGroupDrop]');
    var arr = $.makeArray(downloadItems);
    downloadItems.find('span').remove()
    downloadItems.removeClass('btn btn-primary');
    downloadItems.removeAttr('role');
    $('<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-download"></span>Download :<span class="caret"></span></button><ul class="dropdown-menu blurslist aria-labelledby="btnGroupDrop1"></ul>').insertBefore(firstDownload);
    $.each(downloadItems, function(i) {
        var li = $('<li/>')
            .appendTo('.blurslist');
    });
    $(firstDownload).prependTo(".blurslist li:first-child");
    $(lastDownload).prependTo(".blurslist li:last-child");
}

//remove the popup modals
$( 'a' ).removeAttr( 'data-toggle', 'data-target', 'data-remote' );
