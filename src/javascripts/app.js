/* I configured webpack to included jQuery and reference to skel in every module. */

import 'util'
import 'editorial'
import 'tipuesearch'
import 'semantic-transition'
import 'semantic-popup'

$(document).ready(function() {

    $('.verse').popup({
        content:'test',
        on:'hover',
        popup: '.verse.popup',
        variation:'inverted tiny very wide',
        delay:{show:100,hide:0},
        hoverable : true,
        onShow:function(elm){
            var verse = $(elm);
            var verseTxt = $(elm).text();
            var $this = this;
            jQuery.ajax({
                url:'http://getbible.net/json',
                dataType: 'jsonp',
                data: 'p='+verseTxt+'&v=nasb',
                jsonp: 'getbible',
                success:function(json){
                    var output = '';
                    jQuery.each(json.book, function(index, value) {
                        output += '<div>';
                        jQuery.each(value.chapter, function(index, value) {
                            output += '  <sup>' +value.verse_nr+ '</sup>  ';
                            output += value.verse;
                            output += '<br/>';
                        });
                        output += '</div>';
                    });
                    $this.empty().html(output);
                }
            });
        },
        onHide:function(elm){
            this.empty().html(`<div class="ui active centered inline loader"></div>`);
        }
    });

    // start search code
    $('#tipue_search_input').tipuesearch({});

    //show and hide translate button
    var translationInterval = setInterval(function() {
    if($('.goog-te-banner-frame.skiptranslate').length){
        $('#translate li:first').hide();
        $('#translate li:last').show();
        clearInterval(translationInterval);
    }
    setTimeout(function() {
        clearInterval(translationInterval);
    }, 5000);
    }, 100);
    // show google translate dropdown when clicking
    $('#translate li:first a').on('click',function(e){
        var $this = $(this);
        $this.hide();
        $this.parent('li').next().show();
        return false;
    })

    // show helping text when focusing search input
    $('#tipue_search_input')
        .popup({
            on: 'hover',
            variation:'inverted tiny wide',
        });
});

