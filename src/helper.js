/*! Peapod v<%= package.version %>
*  Copyright Audentio <%= package.year %>
*  LICENSE: <%= package.licence %>
*/

import {merge as _merge} from 'lodash'

var Pod_helper = {

    //some things are left to the reader's imagination
    //--
    keymap: {
        'esc': 27
    },

    //Check if device is touch-enabled
    isTouch: function(){
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
    },

    //Create Component options
    //@param {string} name - Component name
    //@param {Object} [opts] - Default configuration for plugin
    //@returns {Object} - Options object with default options overridden by Pod.options[component_name]
    options: function(name, opts){

        var options = opts || {};

        //Merge with global options object
        //global object overrides default settings defined above
        if(Pod.options[name]) {
            _.merge(options, Pod.options[name]);
        }

        return options;

    },

    //control page scrolling
    //--
    //disables touch scrolling on touch enabled devices
    //disables scrolling on non-touch devices without hiding scrollbar
    scrolling: function(allowScroll){

        //Touch
        if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
            if(allowScroll){
                document.removeEventListener('touchmove', this.noTouchScrolling)
            } else {
                document.addEventListener('touchmove', this.noTouchScrolling)
            }
        }

        document.body.style.overflow = (allowScroll) ? '' : 'scroll'; //overflowY doesn't disable scrolling on safari
        document.documentElement.style.overflow = (allowScroll) ? '' : 'hidden'; //overflowY doesn't disable scrolling on safari

    },

    noTouchScrolling: function(e){
        e.preventDefault()
    },

    fullscreen: {

        isAvailable: function(){
            return (
                document.fullscreenEnabled ||
                document.msFullscreenEnabled ||
                document.mozFullscreenEnabled ||
                document.webkitFullscreenEnabled
            )
        },

        isEnabled: function(){
            return (
                document.fullscreenElement ||
                document.msFullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement
            )
        },

        enter: function(elem){
            elem = (elem instanceof HTMLElement) ? elem : document.documentElement;

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        },

        exit: function(){
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        },

        toggle: function(){
            if (Pod_helper.fullscreen.isEnabled()) {
                Pod_helper.fullscreen.exit()
            } else {
                Pod_helper.fullscreen.enter()
            }
        },

        lastScrollPos: null
    },

    downloadFile: function(url, filename){
        var downLink = document.createElement('a');
        downLink.href = url;
        downLink.download = filename || url.substring(url.lastIndexOf('/')+1, url.length);
        downLink.click();
    },

    addStylesheet: function(id, path, callback){
        if(!document.getElementById('Peapod_'+id+'_stylesheet')){
            var stylesheet = document.createElement('link');
            stylesheet.id = 'Peapod_'+id+'_stylesheet'
            stylesheet.rel = 'stylesheet'
            stylesheet.type = 'text/css'
            stylesheet.href = path
            stylesheet.onload = callback
            document.head.appendChild(stylesheet)
            return true
        }
        return false
    },

    addScript: function(params){
        if(document.getElementById('Peapod_'+params.id+'_script'))
        return false;

        var addToPage = function(cb){
            var script = document.createElement('script');
            script.id = 'Peapod_'+params.id+'_script'
            script.type = 'text/javascript'
            script.src = params.url
            if(cb) script.onload = cb
            document.head.appendChild(script)
            return true
        }

        if(params.ajax) {
            var request = new XMLHttpRequest();
            request.open("GET", params.url, true);
            request.onreadystatechange = function () {
                if(request.readyState !== 4) return;
                if(request.status === 200) {
                    addToPage(function(){
                        params.callback(request)
                    })
                } else {
                    params.callback(request);
                }
            };
            request.send();
        }
        else {
            addToPage(params.callback)
        }
    },

    xhr: function(args){

        var opts, xmlhttp;

        opts = {
            method: 'GET',
            timeout: 3000 //ms
        }
        _merge(opts, args)

        if(opts.cache === false) {
            opts.url += '?rand=' + Math.random()
        }

        xmlhttp = new XMLHttpRequest();

        console.log('XHR: '+ opts.method +' '+ opts.url)

        xmlhttp.open(opts.method, opts.url, true);

        xmlhttp.timeout = opts.timeout;

        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        if(opts.ontimeout){
            xmlhttp.ontimeout = opts.ontimeout
        }

        xmlhttp.onreadystatechange = function() {
            var req_complete = xmlhttp.readyState === XMLHttpRequest.DONE,
            req_success = req_complete && xmlhttp.status === 200,
            req_error = req_complete && xmlhttp.status !== 200;

            if(req_success && opts.success){
                opts.success(this.responseText, xmlhttp.status, xmlhttp.statusText);
            }
            if(req_error && opts.error){
                opts.error(xmlhttp.status, xmlhttp.statusText);
            }
            if(req_complete && opts.complete){
                opts.complete(this.responseText, xmlhttp.status, xmlhttp.statusText);
            }
        }

        if(opts.progress){
            xmlhttp.addEventListener("progress", function(e){
                var progress = (e.lengthComputable) ? Math.ceil( (e.loaded / e.total) * 100 ) : null;

                opts.progress(progress, e)
            });
        }

        xmlhttp.send(opts.data)
    },

    serialize(form) {
        if (!form || form.nodeName !== "FORM") {
            return;
        }
        var i, j, q = [];
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
            if (form.elements[i].name === "") {
                continue;
            }
            switch (form.elements[i].nodeName) {
                case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break;
                    case 'checkbox':
                    case 'radio':
                    if (form.elements[i].checked) {
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    }
                    break;
                    case 'file':
                    break;
                }
                break;
                case 'TEXTAREA':
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                break;
                case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break;
                    case 'select-multiple':
                    for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                        if (form.elements[i].options[j].selected) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                        }
                    }
                    break;
                }
                break;
                case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break;
                }
                break;
            }
        }
        return q.join("&");
    }
}

export default Pod_helper