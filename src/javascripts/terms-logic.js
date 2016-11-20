import terms from 'terms';
import voicerss from 'voicerss';
import sortBy from 'lodash.sortby';

terms.map(function(obj){
    obj.term = obj.term.toLowerCase();
});

let termsSorted = sortBy(terms,['term']);

if ($('#apologists-know')[0]) {

    let $terms =  $('#terms');

    $(document).ready(function () {

        let termsHTML = ``;

        termsSorted.forEach(function (obj) {
            termsHTML += `
            <dl class="term" id="${obj.term.toLowerCase().replace(' ', '-')}">
                <dt><h3>${obj.term.toLowerCase()}</h3><h4><a href="#" class="fa fa-volume-up" aria-hidden="true"></a></h4></dt>
                <dd>${obj.def}</dd>
            </dl>
            <hr>
        `;
        });

        $terms.empty().html(termsHTML);

        $terms.on('click','.fa-volume-up', function(e){
            let term = $(this).parent().prev('h3').text();
            voicerss.speech({
                key: '97a3a450fc8943578ac93e5739ce2901',
                src: term.toLowerCase(),
                hl: 'en-us',
                f: '44khz_16bit_stereo',
            });
            e.preventDefault();
        });

    });

}