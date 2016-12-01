/* I configured webpack to included jQuery and reference to skel in every module. */

import terms from 'terms';
import find from 'lodash.find';
import 'terms-logic'
import 'util'
import 'editorial'
import 'tipuesearch'
import 'semantic-dimmer'
import 'semantic-transition'
import 'semantic-popup'

$(document).ready(function() {

    $('.footnotes, .references, .card').find('a').not('[data-linkhere]').each(function(){
        $(this).attr('target','_blank');
    }); 

    $('.termDef').popup({
        on:'hover',
        popup: '.emptyPopUp.popup',
        variation:'inverted tiny very wide',
        delay:{show:200,hide:0},
        addTouchEvents:false,
        hoverable : true,
        onShow:function(elm){
            var $term = $(elm);
            var termTxt = $term.data('term') || $term.text();
            var $this = this;
            $this.empty().html(find(terms,{'term':termTxt.toLowerCase()}).def);
        },
        onHide:function(elm){
            this.empty().html(`<div class="ui active centered inline loader"></div>`);
        }
    }).not('[href]').each(function(){
        var $this = $(this);
        var term = $this.data('term') || $this.text();
        $this.attr({
            'href':'https://en.wikipedia.org/wiki/'+term,
            "target":'_blank'
        });
    });
    // e.g. <a href="https://www.bible.com/bible/100/act.3:4-8" class="verse">Acts 3:4-8</a>

    $('.verse').not('[data-nopopup]').popup({
        on:'hover',
        popup: '.versePopUp.popup',
        variation:'inverted tiny very wide',
        delay:{show:200,hide:0},
        addTouchEvents:false,
        lastResort:true,
        onShow:function(elm){
            var $verse = $(elm);
            var verseTxt = $verse.text();
            verseTxt = Array.from(verseTxt).indexOf(' ') === 1 ? verseTxt.replace(' ','') : verseTxt;
            var $this = this;
            jQuery.ajax({
                url:'http://getbible.net/json',
                dataType: 'jsonp',
                data: 'p='+verseTxt+'&v=nasb',
                success:function(json){
                    var output = '';
                    if (json.type == 'verse'){
                            jQuery.each(json.book, function(index, value) {
                                output += '<div>';
                                jQuery.each(value.chapter, function(index, value) {
                                    output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                                    output += value.verse;
                                    output += '<br/>';
                                });
                                output += '</div>';
                            });
                    } else if (json.type == 'chapter'){
                        var output = '<div>';
                        jQuery.each(json.chapter, function(index, value) {
                            output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                            output += value.verse;
                            output += '<br/>';
                        });
                        output += '</div>';
                    }
                    $this.empty().html(output);
                }
            });
        },
        onHide:function(elm){
            this.empty().html(`<div class="ui active centered inline loader"></div>`);
        }
    }).end().not('[href]').each(function(){
        var $this = $(this);
        $this.attr({
            'href':'https://www.biblegateway.com/passage/?search='+$this.text()+'&version=nasb',
            "target":'_blank'
        });
    });

    $('.wordDef').popup({
        on:'hover',
        popup: '.wordDefPopUp.popup',
        variation:'inverted tiny very wide',
        delay:{show:200,hide:0},
        addTouchEvents:false,
        onShow:function(elm){
            var $word = $(elm);
            var wordTxt = $word.data('word') || $word.text();
            var $this = this;
            jQuery.ajax({
                url:'https://wordsapiv1.p.mashape.com/words/'+wordTxt+'/definitions',
                dataType: 'json',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "jqukgyrprPmsh9gRsNjxhJ8NLOlWp1xI738jsn3lfVKoPs3P3H");
                },
                success: function(data) { 
                    $this.empty().html(data.definitions[$word.data('index')||0].definition);
                }
            });
        },
        onHide:function(elm){
            this.empty().html(`<div class="ui active centered inline loader"></div>`);
        }
    }).not('[href]').each(function(){
        var $this = $(this);
        $this.attr({
            'href':'https://en.oxforddictionaries.com/definition/'+$this.text(),
            "target":'_blank'
        });
    });;

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
            on: 'focus',
            variation:'inverted tiny wide',
        });

    // show helping text when focusing search input
    $('sup').popup({
        on:'click',
        popup: '.emptyPopUp.popup',
        variation:'inverted tiny very wide',
        delay:{show:100,hide:0},
        onShow:function(elm){
            var $sup = $(elm);
            var supTxt = $sup.text().split('');
            supTxt.pop();
            supTxt.shift();
            var footNoteHtml = $('.footnotes li:nth-child('+supTxt+')').html();
            var $this = this;
            $this.empty().html(footNoteHtml);
        },
        onHide:function(elm){
            this.empty().html(`<div class="ui active centered inline loader"></div>`);
        }
    });
});

