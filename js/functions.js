/*
// - - - - - - - - - - - - - - - - - - - - - - -
// W F D Y N A M I C
// - - - - - - - - - - - - - - - - - - - - - - -
// deploy > v.00bond
// a wizardfly
// www.wizrdfly.rf.gd
// - - - - - - - - - - - - - - - - - - - - - - -
// #wf-202212091959
// #wf-202212152121
// - - - - - - - - - - - - - - - - - - - - - - -
*/
// A
// W I Z A R D f l y
// A P P L I C A T I O N
// - - - - - - - - - - - - - - - - - - - -
var Wapp = Wapp || {};
// - - - - - - - - - - - - - - - - - - - -
// M O D U L E
// - - - - - - - - - - - - - - - - - - - -
// FF (fully functions)
// - - - - - - - - - - - - - - - - - - - -
Wapp.FF = Wapp.FF || {};

(function (win, doc, Vars) {
    'use strict';

    /* private Vars */
    Vars = {
        // :: url api ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        urlApi              : 'api/pages.json',
        // :: dynamic box ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        wfDynamic           : doc.querySelectorAll('.wfDynamic')[0],
        // :: slider config ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        sldConfig           : [],
        // :: buttons scroll :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        btnScroll           : doc.querySelectorAll('.scroll'),
    };

    /* init all functions */
    Wapp.FF.Init = function () {
        console.log('FF - fullyfunctions [init]');

        // get content - dynamic
        Wapp.FF.GetContent();

        // ---------------------------------
        // INIT BEFORE LOAD CONTENTS DYNAMIC
        // ---------------------------------
        /*
        // all listeners
        Wapp.FF.Listen();

        // scroll by url hash
        Wapp.FF.ScrollHash(new CustomEvent('scroll'));
        */
        // ---------------------------------
    };

    /* for all events listeners */
    Wapp.FF.Listen = function () {
        // console.log(':: Listen [fnc]');

        // :: buttons scroll
        Wapp.FF.AddEvents('click', 'class', Vars.btnScroll, Wapp.FF.Scroll, true);

        // :: boxes show / hide
        // Wapp.FF.AddEvents('click', 'class', Vars.btnShowHide, Wapp.FF.ShowHide, true);

        // :: input cpf clone
        // (Vars.inpCpf) ? Vars.inpCpf.addEventListener('change', Wapp.FF.ChangeCpfForm, true) : '';

        // :: get content - dynamic
        // win.addEventListener('load', Wapp.FF.ScrollPage, true);
    };

    /* add one or more events */
    Wapp.FF.AddEvents = function (evt, type, el, fnc, bol) {
        // console.log(':: AddEvents [fnc]');

        var
            block;

        //for class
        if (type === 'class') {
            [].forEach.call(el, function (block) {
                block.addEventListener(evt, fnc, bol);
            });

        // for id
        } else {
            block = doc.getElementsByClassName(el);
            block.addEventListener(evt, fnc, bol);
        }
    };

    /* get content Content */
    Wapp.FF.GetContent = function (e) {
        // console.log(':: GetContent [fnc]');

        var
            ajax = new XMLHttpRequest(),
            page = win.location.search;

        // verify page
        if (!page) {
            page = 'home';
        }

        // console.log('page', page);

        // ------------------
        // AJAX
        // ------------------
        ajax.open('GET', Vars.urlApi , true);
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send();

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200){
                    // ------------------
                    // SUCCESS
                    // ------------------
                    // console.log('AJAX - SEND Successfully!',  ajax.responseText);

                    Wapp.FF.PopulateContent(e, ajax.responseText, page, 'SUCCESS', ajax);

                } else {
                    // ------------------
                    // ERROR
                    // ------------------
                    // console.log('AJAX - SEND Error!',  ajax.returnText);

                    Wapp.FF.PopulateContent(e, ajax.returnText, page, 'ERROR', ajax);
                }
            }
        };
    };

    /* Populate Content */
    Wapp.FF.PopulateContent = function (e, obj, page, type, req) {
        // console.log(':: PopulateContent [fnc]');

        // console.log('e', e);
        // console.log('obj', obj);
        // console.log('JSON obj', JSON.parse(obj));
        // console.log('page', page);
        // console.log('type', type);
        // console.log('req', req);

        // get content by page
        var
            urlParams = new URLSearchParams(page),
            p = urlParams.get('p'),
            html = '';

        // console.log('urlParams', urlParams);
        // console.log('p', p);
        // console.log('obj', obj);
        // console.log('obj parse', JSON.parse(obj));
        // console.log('obj parse [0][p]', JSON.parse(obj)[0][p]);
        // console.log('wfDynamic', Vars.wfDynamic);

        // ------------------
        // CHECK BOX
        // ------------------
        if (Vars.wfDynamic) {
            // ------------------
            // SUCCESS
            // ------------------
            if (type === 'SUCCESS') {
                // console.log('SUCCESS');

                // ------------------
                // OBJECT
                // ------------------
                if (obj) {
                    // console.log('obj', obj);

                    // ------------------
                    // CHECK PAGE
                    // ------------------
                    // SET RESULT PAGE
                    // ------------------
                    if (page) {
                        // console.log('page', page);

                        if (urlParams) {
                            // console.log('urlParams', urlParams);

                            if (p) {
                                // console.log('p', p);

                                if (JSON.parse(obj)[0][p]) {
                                    // console.log('obj p SUCCESS title', JSON.parse(obj)[0][p].blocks[0].title);
                                    // console.log('obj p SUCCESS content', JSON.parse(obj)[0][p].blocks[0].content);
                                    // console.log('obj blocks', JSON.parse(obj)[0][p].blocks);

                                    // content
                                    html = Wapp.FF.Content(e, JSON.parse(obj)[0][p].blocks, p);

                                // ------------------
                                // NOT OBJECT PAGES
                                // ------------------
                                } else {
                                    // not found
                                    html = Wapp.FF.NotFound(e, type);
                                }

                            // ------------------
                            // SET HOME PAGE
                            // ------------------
                            } else if (JSON.parse(obj)[0]['home']) {
                                // console.log('obj home SUCCESS title', JSON.parse(obj)[0]['home'].blocks[0].title);
                                // console.log('obj home SUCCESS content', JSON.parse(obj)[0]['home'].blocks[0].content);
                                // console.log('obj blocks', JSON.parse(obj)[0]['home'].blocks);

                                // content
                                html = Wapp.FF.Content(e, JSON.parse(obj)[0]['home'].blocks, 'home');
                            }
                        }

                    // ------------------
                    // SET HOME PAGE
                    // ------------------
                    } else if (JSON.parse(obj)[0]['home']) {
                        // console.log('obj home SUCCESS title', JSON.parse(obj)[0]['home'].blocks[0].title);
                        // console.log('obj home SUCCESS content', JSON.parse(obj)[0]['home'].blocks[0].content);
                        // console.log('obj blocks', JSON.parse(obj)[0]['home'].blocks);

                        // content
                        html = Wapp.FF.Content(e, JSON.parse(obj)[0]['home'].blocks, 'home');

                    // ------------------
                    // NOT OBJECT PAGES
                    // ------------------
                    } else {
                        // not found
                        html = Wapp.FF.NotFound(e, type);
                    }
                }

            // ------------------
            // ERROR
            // ------------------
            } else if (type === 'ERROR') {
                // console.log('ERROR');

                // not found
                html = Wapp.FF.NotFound(e, type);
            }

            // console.log('html', html);

            // -------------------
            // populate
            // -------------------
            Vars.wfDynamic.innerHTML = html;

            // -------------------
            // for SLIDERS
            // -------------------
            [].forEach.call(Vars.sldConfig, function (sConf) {
                // console.log('sConf', sConf);
                // console.log('sConf.cls', sConf.cls);
                // console.log('sConf.slick', sConf.slick);

                // -----------------------------
                // storage config
                // -----------------------------
                // Vars.sldConfig.push({
                //     'cls' : block.slider.config.cls,
                //     'slick' : block.slider.config.slick
                // });

                // html += sld;

                $('.' + sConf.cls).slick(sConf.slick);
            });
        }

        // ---------------------------------
        // INIT BEFORE LOAD CONTENTS DYNAMIC
        // ---------------------------------
        // all listeners
        Wapp.FF.Listen();

        // scroll by url hash
        Wapp.FF.ScrollHash(new CustomEvent('scroll'));
        // ---------------------------------
    };

    /* not found */
    Wapp.FF.NotFound = function (e, type) {
        // console.log(':: NotFound [fnc]');

        var
            html = '';

        // ------------------
        // NOT OBJECT PAGES
        // ------------------
        console.log('OBJ PAGES NOT FOUND!');

        html += '<section class="section block notFound" name="notFound">';
            html += '<div class="grid">';
                html += '<h2>';
                    html += type + ' OBJ';
                html += '</h2>';
                html += '<p>';
                    html += 'content page not found!';
                html += '</p>';
            html += '</div>';
        html += '</section>';

        return html;
    };

    /* content */
    Wapp.FF.Content = function (e, obj, page) {
        // console.log(':: Content [fnc]');

        var
            html = '';

        // ------------------
        // OBJECT PAGES
        // ------------------
        // blocks
        [].forEach.call(obj, function (block, index) {
            console.log('block', block);

            // ------------------
            // for scrolls events
            // ------------------
            // NAME
            // ------------------
            if (block.name) {
                html += '<section class="section block ' + page + index + '" name="' + block.name + '">';

            } else {
                html += '<section class="section block ' + page + index + '" name="' + page + index + '">';
            }

                // ------------------
                // for custom styles
                // ------------------
                // GRID
                // ------------------
                if (block.grid) {
                    html += '<div class="grid">';

                    var
                        box = '.section.block.' + page + index + ' .grid',
                        stl = '',
                        prop = '';

                    stl += '<style>';
                    stl += box + '{';

                    for (prop in block.grid) {
                        // console.log('prop', prop);
                        // console.log('[prop]', block.grid[prop]);

                        stl += prop;
                        stl += ':';
                        stl += block.grid[prop];
                        stl += ';';
                    }

                    // console.log('box', box);
                    // console.log('stl', stl);
                    // console.log('-------------');

                    stl += '}';
                    stl += '</style>';

                    html += stl;

                } else {
                    html += '<div class="grid">';
                }

                    // ------------------
                    // TITLE
                    // ------------------
                    if (block.title) {
                        html += '<h2>';
                            html += block.title;
                        html += '</h2>';
                    }

                    // -----------------------------
                    // SLIDER
                    // -----------------------------
                    if (block.slider) {
                        // console.log('HAVE SLIDER');

                        // -----------------------------
                        // check config SLIDER
                        // -----------------------------
                        if (block.slider.config) {
                            // console.log('block.slider.config', block.slider.config);

                            if (block.slider.config.cls) {
                                // console.log('block.slider.config.cls', block.slider.config.cls);

                                // -----------------------------
                                // create html SLIDER
                                // -----------------------------
                                html += '<div class="sld' + index + '">';
                                    html += '<div class="' + block.slider.config.cls + '">';

                                        // loop sliders
                                        [].forEach.call(block.slider.html, function (sld) {
                                            // console.log('sld', sld);

                                            html += sld;
                                        });

                                    html += '</div>';
                                html += '</div>';

                                // -----------------------------
                                // create config SLIDER
                                // -----------------------------
                                if (block.slider.config.slick) {
                                    // console.log('block.slider.config.slick', block.slider.config.slick);

                                    // console.log('-- create scripts --');

                                    // ::::::::::::::::::::::::::::::::::::::::
                                    // call function before append html
                                    // $(cls).slick({...
                                    // ::::::::::::::::::::::::::::::::::::::::

                                    // -----------------------------
                                    // create slider
                                    // -----------------------------
                                    // $('.' + block.slider.config.cls).slick(block.slider.config.slick);

                                    // -----------------------------
                                    // storage config
                                    // -----------------------------
                                    Vars.sldConfig.push({
                                        'cls' : block.slider.config.cls,
                                        'slick' : block.slider.config.slick
                                    });
                                }
                            }
                        }
                    }

                    // ------------------
                    // SLIDER CONFIG
                    // ------------------
                    // Vars.sldConfig.push({
                        /*
                        $('.boxSld').slick({
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: true,
                            infinite: true,
                            arrows: true,
                            // centerMode: true,
                            // autoplay: true,
                            // autoplaySpeed: 2000,
                        });
                        */
                    // });

                    // boxSld' + index + '

                    // ------------------
                    // CONTENT
                    // ------------------
                    if (block.content) {
                        html += '<p>';
                            html += block.content;
                        html += '</p>';
                    }

                html += '</div>';
            html += '</section>';
        });

        return html;
    };

    /* Scroll HASH URL */
    Wapp.FF.ScrollHash = function (e) {
        // console.log(':: ScrollHash [fnc]');

        if (win.location.hash) {
            // console.log('hash', win.location.hash);

            if (win.location.hash.replace('#', '')) {
                // console.log('hash replace', win.location.hash.replace('#', ''));

                var
                    hash = win.location.hash.replace('#', '');

                // console.log('hash', hash);

                if (hash) {
                    // run Scroll
                    Wapp.FF.Scroll(e, hash);
                }
            }
        }
    };

    /* Scroll */
    Wapp.FF.Scroll = function (e, hash) {
        // console.log(':: Scroll [fnc]');

        var
            el = '',
            pos = 0,
            margin = 0;

        if (hash) {
            el = doc.querySelectorAll('[name="' + hash + '"]')[0];

        } else if (e.target.dataset.name) {
            el = doc.querySelectorAll('[name="' + e.target.dataset.name + '"]')[0];
        }

        if (el) {
            // hide menu
            if (doc.querySelectorAll('.section.header .right .menu')[0]) {
                doc.querySelectorAll('.section.header .right .menu')[0].classList.remove('active');
            }

            // get size header
            if (doc.querySelectorAll('.section.header')[0]){
                // pos = (el.offsetTop + doc.querySelectorAll('.section.header')[0].offsetHeight) + 'px';
                pos = (el.offsetTop - doc.querySelectorAll('.section.header')[0].offsetHeight) - margin;
            }

            // console.log('e', e);
            // console.log('e.target', e.target);
            // console.log('el', el);

            // console.log('el offsetTop', el.offsetTop);
            // console.log('header offsetHeight', doc.querySelectorAll('.section.header')[0].offsetHeight);
            // console.log('pos', pos);

            // if (el) {
                win.scrollTo({
                    'behavior': 'smooth',
                    'left': 0,
                    'top': pos
                });
            // }
        }

        e.preventDefault();
        return false;
    };

    /* instantiation this module in window load */
    win.addEventListener('DOMContentLoaded', Wapp.FF.Init, true);

    // manual init
    // Wapp.FF.Init();

})(window, document, 'Private');