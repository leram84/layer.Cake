//Split path name to array and remove blanks
var urlWithBlanks = window.location.pathname.split( "/" );
var url = urlWithBlanks.filter( function(v){return v!==''} );


if ( jQuery.inArray( 'epub', url ) != -1 ) {
        $( "body" ).addClass( url[3] );
}

//add class to iframe body after it loads.
$('body.epub').on('DOMNodeInserted', 'iframe', function(e) {
        setTimeout(function() {
                $("iframe").contents().find("body").addClass( 'read-frame' );
        }, 1000);
});

//remove the popup modals
if (!$( "body" ).hasClass('admin')) {
$(' a:not(.dropdown-toggle) ').removeAttr( 'data-toggle', 'data-target', 'data-remote' );
}

$( '#sendbtn' ).parent().addClass( 'sendBtn' );
$( '[id*=btnGroupDrop]' ).parent().addClass( 'downloadBtn' );
$( 'read-in-browser' ).parent().addClass( 'readBtn' );

$( '[aria-label*="Delete book"]' ).prependTo( '[aria-label^="Download, send"]' ).children().removeClass( 'btn-sm' );
$( '.custom_columns' ).addClass(' btn-group' ).attr('role', 'group' ).removeClass( 'custom_columns' ).prependTo( '[aria-label^="Download, send"]' );
$( '#have_read_cb' ).after( '<label class="block-label readLbl" for="#have_read_cb"></label>' )
