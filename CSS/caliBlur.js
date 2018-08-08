/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */

!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(t,e,i){var o;return function(){var n=this,a=arguments,s=function(){o=null,i||t.apply(n,a)},r=i&&!o;clearTimeout(o),o=setTimeout(s,e),r&&t.apply(n,a)}}function i(t){var e=++h;return String(null==t?"rmjs-":t)+e}function o(t){var e=t.clone().css({height:"auto",width:t.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(t),i=e.outerHeight(),o=parseInt(e.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),n=t.data("defaultHeight");e.remove();var a=o||t.data("collapsedHeight")||n;t.data({expandedHeight:i,maxHeight:o,collapsedHeight:a}).css({maxHeight:"none"})}function n(t){if(!d[t.selector]){var e=" ";t.embedCSS&&""!==t.blockCSS&&(e+=t.selector+" + [data-readmore-toggle], "+t.selector+"[data-readmore]{"+t.blockCSS+"}"),e+=t.selector+"[data-readmore]{transition: height "+t.speed+"ms;overflow: hidden;}",function(t,e){var i=t.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),t.getElementsByTagName("head")[0].appendChild(i)}(document,e),d[t.selector]=!0}}function a(e,i){this.element=e,this.options=t.extend({},r,i),n(this.options),this._defaults=r,this._name=s,this.init(),window.addEventListener?(window.addEventListener("load",c),window.addEventListener("resize",c)):(window.attachEvent("load",c),window.attachEvent("resize",c))}var s="readmore",r={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,blockProcessed:function(){},beforeToggle:function(){},afterToggle:function(){}},d={},h=0,c=e(function(){t("[data-readmore]").each(function(){var e=t(this),i="true"===e.attr("aria-expanded");o(e),e.css({height:e.data(i?"expandedHeight":"collapsedHeight")})})},100);a.prototype={init:function(){var e=t(this.element);e.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),o(e);var n=e.data("collapsedHeight"),a=e.data("heightMargin");if(e.outerHeight(!0)<=n+a)return this.options.blockProcessed&&"function"==typeof this.options.blockProcessed&&this.options.blockProcessed(e,!1),!0;var s=e.attr("id")||i(),r=this.options.startOpen?this.options.lessLink:this.options.moreLink;e.attr({"data-readmore":"","aria-expanded":this.options.startOpen,id:s}),e.after(t(r).on("click",function(t){return function(i){t.toggle(this,e[0],i)}}(this)).attr({"data-readmore-toggle":s,"aria-controls":s})),this.options.startOpen||e.css({height:n}),this.options.blockProcessed&&"function"==typeof this.options.blockProcessed&&this.options.blockProcessed(e,!0)},toggle:function(e,i,o){o&&o.preventDefault(),e||(e=t('[aria-controls="'+this.element.id+'"]')[0]),i||(i=this.element);var n=t(i),a="",s="",r=!1,d=n.data("collapsedHeight");n.height()<=d?(a=n.data("expandedHeight")+"px",s="lessLink",r=!0):(a=d,s="moreLink"),this.options.beforeToggle&&"function"==typeof this.options.beforeToggle&&this.options.beforeToggle(e,n,!r),n.css({height:a}),n.on("transitionend",function(i){return function(){i.options.afterToggle&&"function"==typeof i.options.afterToggle&&i.options.afterToggle(e,n,r),t(this).attr({"aria-expanded":r}).off("transitionend")}}(this)),t(e).replaceWith(t(this.options[s]).on("click",function(t){return function(e){t.toggle(this,i,e)}}(this)).attr({"data-readmore-toggle":n.attr("id"),"aria-controls":n.attr("id")}))},destroy:function(){t(this.element).each(function(){var e=t(this);e.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),e.removeData()})}},t.fn.readmore=function(e){var i=arguments,o=this.selector;return e=e||{},"object"==typeof e?this.each(function(){if(t.data(this,"plugin_"+s)){var i=t.data(this,"plugin_"+s);i.destroy.apply(i)}e.selector=o,t.data(this,"plugin_"+s,new a(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var o=t.data(this,"plugin_"+s);o instanceof a&&"function"==typeof o[e]&&o[e].apply(o,Array.prototype.slice.call(i,1))}):void 0}});

//Wrap book description in div container
if ( $( 'body.book' ).length > 0 ) {
description = $( "h3:contains('Description:')" ).nextUntil( '.morestuff' ).slice(0,-1)
bookInfo = $( '.author' ).nextUntil( "h3:contains('Description:')" )
$( "h3:contains('Description:')" ).hide();
$( description ).detach();
$( bookInfo ).wrapAll( '<div class="bookinfo"></div' );
$( "h3:contains('Description:')"  ).after( "<div class='description'></div>" );
$( '.languages' ).appendTo( ".bookinfo" );
if ( $( '.identifiers ').length > 0 ) {
  $( '.identifiers' ).before( '<div class="hr"></div>' );
}
else {
  $( '.bookinfo' ).append( '<div class="hr"></div>' );
}
$( 'div.description' ).hide();

/*if book description is not in html format, Remove extra line breaks
Remove blank lines/unnecessary spaces, split by line break to array
Push array into .description div. If there is still a wall of text,
find sentences and split wall into groups of three sentence paragraphs.
If the book format is in html format, Keep html, but strip away inline
styles and empty elements*/

  //If text is sitting in div as text node
  if ( description[0] === undefined ) {
    textValue = $('.book-meta')
      .contents()
      .filter(function() {
        return this.nodeType == Node.TEXT_NODE;
      }).text();
    description = $.makeArray( textValue.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, "") );
    $('.book-meta').contents().filter(function(){
      return this.nodeType === 3;
  }).remove();
  }
  if ( description[1] === undefined ) {
    newdesc = description.toString().replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"").split(/\n/);
    $.each(newdesc, function (i,val) {
    $('div.description').append( '<p>' + newdesc[i] + '</p>' );
    });
    $( '.description' ).fadeIn(100);
    //If still a wall of text create 3 sentence paragraphs.
    if( $( '.description p').length === 1 ) {
      if ( description.context != undefined ) {
      newdesc = description.text().replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"").split(/\n/);
      }
      else {
        newdesc = description.toString();
      }
      regex = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s(?!\.)/gm;
      sentences = newdesc.toString().split(regex).filter(function(v){return v!==' '});
      $( '.description p' ).remove();
      var size = 3; var sentenceChunks = [];
      for (var i=0; i<sentences.length; i+=size) {
        sentenceChunks.push(sentences.slice(i,i+size));
      }
      var output = '';
      $.each(sentenceChunks, function (i,val) {
          var preOutput = '';
          $.each(val, function (i,val) {
          preOutput += val;
        });
        output += '<p>' + preOutput + '</p>';
      });
      $('div.description').append( output);
    }
  }
  else {
      $.each(description, function (i,val) {
      $( description[i].outerHTML ).appendTo( '.description' );
      $( 'div.description :empty' ).remove();
      $( 'div.description ').attr( 'style', '' );
    });
      $( 'div.description' ).fadeIn(100);
  }

  //Sexy blurred backgrounds
  if ( $( 'body.book' ).length > 0 ) {
    cover = $( '.cover img').attr('src');
    $( '#loader + .container-fluid').prepend("<div class='blur-wrapper'></div");
    $( '.blur-wrapper' ).prepend("<div><img class='bg-blur' src='" + cover + "'></div>");
  }
  if ( $( 'body.author').length >0 ) {
    cover = $( '.author-bio img').attr('src');
    $( '#loader + .container-fluid').prepend("<div class='blur-wrapper'></div");
    $( '.blur-wrapper' ).prepend("<img class='bg-blur' src='" + cover + "'>");
  }
}
//Back button
var curHref = window.location.href.split('/');
var prevHref = document.referrer.split('/');
$( '.navbar-form.navbar-left' ).before('<div class="plexBack"><a href="##" onClick="history.go(-1); return false;"></a></div>');
if ( history.length === 1 || curHref[0] + curHref[1] + curHref[2] != prevHref[0] + prevHref[1] + prevHref[2] || $( 'body.root' )>length > 0 ) {
  $( '.plexBack').addClass('noBack');
}

//Split path name to array and remove blanks
var url = window.location.pathname.split( "/" ).filter( function(v){return v!==''} );

if ( jQuery.inArray( 'epub', url ) != -1 ) {
  $( "body" ).addClass( url[3] );
}
else {
  $( "body" ).addClass( url[1] );
}
if ( $( 'body.shelf' ).length > 0 ) {
  $( 'a[href*= "'+url[1]+"/"+url[2]+'"]' ).parent().addClass( "active" );
}

$( '#nav_createshelf' ).prependTo( "li:contains('Your Shelves')" );

//Create drop-down for profile and move elements to it
$( '#main-nav' ).prepend( '<li class="dropdown"><a href="#" class="dropdown-toggle profileDrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span></a><ul class="dropdown-menu profileDropli"></ul></li>' );
$( '#top_user' ).parent().addClass( 'dropdown' ).appendTo( '.profileDropli' );
$( '#nav_about' ).addClass( 'dropwdown' ).appendTo( '.profileDropli' );
$( '#logout' ).parent().addClass( 'dropdown' ).appendTo( '.profileDropli' );

//add class to iframe body after it loads.
$('body.epub').on('DOMNodeInserted', 'iframe', function(e) {
        setTimeout(function() {
                $("iframe").contents().find("body").addClass( 'read-frame' );
        }, 1000);
});

//remove the popup modals except from some areas
var bodyClass = $( 'body' ).attr("class").split(' ')
var modalWanted = [ "admin", "editbook" ]

if ( jQuery.inArray( bodyClass[0], modalWanted) === 1 ) {
	console.log( "body contains one of the following classes: \"" + modalWanted + "\". Not removing modals" );
}
else{
	$(' a:not(.dropdown-toggle) ').removeAttr( 'data-toggle', 'data-target', 'data-remote' );
}

//Add classes to things
$( "a[id^=btnGroupDrop1" ).prev().addClass("download-text");
$( '#sendbtn' ).parent().addClass( 'sendBtn' );
$( '[id*=btnGroupDrop]' ).parent().addClass( 'downloadBtn' );
$( 'read-in-browser' ).parent().addClass( 'readBtn' );
$( '#top_tasks' ).parent().addClass( 'top_tasks' );
$( '#top_admin' ).parent().addClass( 'top_admin' );
$( '#form-upload' ).parent().addClass( 'form-upload' );

//Move all options in book details page to the same group
$( '[aria-label*="Delete book"]' ).prependTo( '[aria-label^="Download, send"]' ).children().removeClass( 'btn-sm' );
$( '.custom_columns' ).addClass(' btn-group' ).attr('role', 'group' ).removeClass( 'custom_columns' ).prependTo( '[aria-label^="Download, send"]' );
$( '#have_read_cb' ).after( '<label class="block-label readLbl" for="#have_read_cb"></label>' );
$( '#shelf-actions' ).prependTo( '.btn-toolbar:first' );

//If only one download type exists still put the items into a drop-drown list.
downloads = $( 'a[id^=btnGroupDrop]' ).get();
if ( $( downloads ).length === 1 ) {
	$( '<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-download"></span>Download :<span class="caret"></span></button><ul class="dropdown-menu leramslist aria-labelledby="btnGroupDrop1"></ul>' ).insertBefore( downloads[downloads.length-1] );
	$( downloads ).detach();
	$.each(downloads, function (i,val) {
		$("<li>" + downloads[i].outerHTML + "</li>").appendTo( ".leramslist" );
	});
	$( ".leramslist" ).find( 'span' ).remove();
	$( ".leramslist a" ).removeClass( 'btn btn-primary' ).removeAttr( 'role' );
}

$('body.read').on('DOMNodeInserted', 'iframe', function(e) {
	setTimeout(function() {
		$("iframe").contents().find("body").addClass( 'read-frame' );
	}, 750);
});

if ( $( 'body.book ').length > 0 ) {
  //Fix-up book detail headings
  publisher = $( '.publishers p span' ).text().split(": ");
  $( '.publishers p span' ).remove();
  $.each(publisher, function (i,val) {
    $( '.publishers' ).append('<span>' + publisher[i] + '</span>')
  });
  published = $( '.book-meta p:contains("Publishing date")' ).text().split(": ");
  $( '.book-meta p:contains("Publishing date")').before("<div class='published-date'></div>");
  $( '.book-meta p:contains("Publishing date")' ).remove();
  $.each(published, function (i,val) {
    $( '.published-date' ).append('<span>' + published[i] + '</span>')
  });
  languages = $( '.languages p span' ).text().split(": ");
  $( '.languages p span' ).remove();
  $.each(languages, function (i,val) {
    $( '.languages' ).append('<span>' + languages[i] + '</span>')
  });

  $( '.book-meta h2:first').clone().prependTo( '.book-meta > .btn-toolbar:first' );
}
//Search button work
$('input#query').focus(function() {
      $( 'form.navbar-form.navbar-left span.input-group-btn' ).show();
});
$( 'input#query').focusout(function() {
    $( 'form.navbar-form.navbar-left span.input-group-btn' ).hide();
});

//Collapse long text into read-more
  $( 'div.description' ).readmore( {
    collapsedHeight: 150,
    heightMargin: 50,
    speed: 300,
    moreLink: '<a href="#">READ MORE</a>',
    lessLink: '<a href="#">READ LESS</a>'
  });

//Add class to random book discover
  $( 'h2:contains("Discover (Random Books")' ).parent().addClass( 'random-books' );
