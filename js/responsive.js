/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxlegacy-flexboxtweener-flexwrap-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n;}function o(){var e,n,t,o,s,i,a;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],n=x[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1135]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?w.className.baseVal=n:w.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?f(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var s,i,l,f,u="modernizr",d=a("div"),c=p();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:u+(r+1),d.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=f,w.offsetHeight):d.parentNode.removeChild(d),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,s){function f(){d&&(delete P.style,delete P.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var d,p,c,h,v,y=["modernizr","tspan"];!P.style;)d=!0,P.modElem=a(y.shift()),P.style=P.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=P.style[h],i(h,"-")&&(h=l(h)),P.style[h]!==t){if(s||r(o,"undefined"))return f(),"pfx"==n?h:!0;try{P.style[h]=o}catch(g){}if(P.style[h]!=v)return f(),"pfx"==n?h:!0}return f(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+T.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],x=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w=n.documentElement,_="svg"===w.nodeName.toLowerCase(),b="Moz O ms Webkit",S=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=S;var T=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=T;var E={elem:a("modernizr")};Modernizr._q.push(function(){delete E.elem});var P={style:E.elem.style};Modernizr._q.unshift(function(){delete P.style}),C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("flexwrap",y("flexWrap","wrap",!0)),o(),s(g),delete C.addTest,delete C.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z](); if(e.Modernizr){e.Modernizr.flexbox = Modernizr.flexbox; e.Modernizr.flexboxlegacy = Modernizr.flexboxlegacy; e.Modernizr.flexboxtweener = Modernizr.flexboxtweener;e.Modernizr.flexwrap = Modernizr.flexwrap;} else {e.Modernizr = Modernizr;}}(window,document);

/***** Function for addEventListener, preventDefault to support cross browsers - Starts *****/
(function() {
    if (!Event.prototype.preventDefault) {
        Event.prototype.preventDefault = function() {
            this.returnValue = false;
        };
    }
    if (!Element.prototype.addEventListener) {
        var eventListeners = [];

        var addEventListener = function(type, listener /*, useCapture (will be ignored) */ ) {
            var self = this;
            var wrapper = function(e) {
                e.target = e.srcElement;
                e.currentTarget = self;
                if (typeof listener.handleEvent != 'undefined') {
                    listener.handleEvent(e);
                } else {
                    listener.call(self, e);
                }
            };
            if (type == "DOMContentLoaded") {
                var wrapper2 = function(e) {
                    if (document.readyState == "complete") {
                        wrapper(e);
                    }
                };
                document.attachEvent("onreadystatechange", wrapper2);
                eventListeners.push({ object: this, type: type, listener: listener, wrapper: wrapper2 });

                if (document.readyState == "complete") {
                    var e = new Event();
                    e.srcElement = window;
                    wrapper2(e);
                }
            } else {
                this.attachEvent("on" + type, wrapper);
                eventListeners.push({ object: this, type: type, listener: listener, wrapper: wrapper });
            }
        };
        var removeEventListener = function(type, listener /*, useCapture (will be ignored) */ ) {
            var counter = 0;
            while (counter < eventListeners.length) {
                var eventListener = eventListeners[counter];
                if (eventListener.object == this && eventListener.type == type && eventListener.listener == listener) {
                    if (type == "DOMContentLoaded") {
                        this.detachEvent("onreadystatechange", eventListener.wrapper);
                    } else {
                        this.detachEvent("on" + type, eventListener.wrapper);
                    }
                    eventListeners.splice(counter, 1);
                    break;
                }
                ++counter;
            }
        };
        Element.prototype.addEventListener = addEventListener;
        Element.prototype.removeEventListener = addEventListener;
        if (HTMLDocument) {
            HTMLDocument.prototype.addEventListener = addEventListener;
            HTMLDocument.prototype.removeEventListener = removeEventListener;
        }
        if (Window) {
            Window.prototype.addEventListener = addEventListener;
            Window.prototype.removeEventListener = removeEventListener;
        }
    }
})();
/***** Function for addEventListener, preventDefault to support cross browsers - Ends *****/

/***** Declaring variables for DOM elements - Starts *****/
var pageHeaderEl = document.getElementById('page-header'); // Page Header El
var pageSideBarEl = document.getElementById('page-side-nav'); // Page Side Bar El
var pageFooterEl = document.getElementById('page-footer'); // Page Footer El
var pageContainerEl = document.getElementById('content-container'); // Content Container El
var pageMainEl = document.querySelector('.page-main'); // Page main El
var pageMainContEl = document.querySelector('.page-container'); // Page main El

if (pageHeaderEl) {
    var navBarEl = pageHeaderEl.querySelector("#navbar"); // Navbar El
    var mobiHeadEl = pageHeaderEl.querySelector('.mobi-head'); // Mobi Header El
    var overlayEl = pageHeaderEl.querySelector('.overlay'); // Overlay El
}

if (pageSideBarEl) {
    var sidebarOvrlyEl = pageSideBarEl.querySelector('.sidebar-overlay'); // Sidebar Overlay El
    var subCatLis = sidebarOvrlyEl.querySelectorAll('.submenu li.subCat'); // Submenu Lis
    var sideContainer = pageSideBarEl.querySelector('.sidebar-container'); // Sidebar - Container
    var sideBarEl = sideContainer.querySelector('.sidebar');
    var sideBarLis = sideBarEl.querySelectorAll('ul li'); // Sidebar Lis
    var sideBarAels = sideBarEl.querySelectorAll('ul li a[data-target]'); // Sidebar links
    var menuCatEles = pageSideBarEl.querySelectorAll('.menu-cat'); // Menu Cat
    if (window.innerWidth > 800) {
        var sidebarWidth = sideBarEl.offsetWidth; //side bar width
    }
}

var deskNavBarClass = ' deskNavbar'; // Desktop view class
var mobiNavBarClass = ' mobiNavbar'; // Mobile view class
var mainCatVal = mainCatClass = catTxt = childLis = subCatContLis = '';

// Nav Close Element
var mNavClose = document.createElement("SPAN");
mNavClose.className = 'glyphicon glyphicon-remove';
mNavClose.id = 'mNavClose';

// Login Reverse A tag Element
var lReverseEl = document.createElement('a');
lReverseEl.id = 'reverse';
lReverseEl.className = 'reverse';
lReverseEl.href = 'javascript:void(0);';
lReverseEl.innerHTML = '<i class="fa fa-chevron-left"></i> <font>Login</font>';

// Menu title
var lContent = document.createElement('a');
lContent.className = 'l_content';
lContent.href = 'javascript:void(0);';

// Sidebar Reverse A tag Element
var sReverseEl = document.createElement('a');
sReverseEl.id = 'reverse';
sReverseEl.className = 'reverse';
sReverseEl.href = 'javascript:void(0);';
sReverseEl.innerHTML = '<i class="fa fa-chevron-left"></i>';

/***** Declaring variables for DOM elements - Ends *****/

/***** Attaching Events - Starts *****/
function headerEvents() {
    /***** Header Related Fns - Starts *****/
    if (pageHeaderEl) {
        var mobNavList = pageHeaderEl.querySelectorAll('ul.navbar-nav > li');

        if (window.innerWidth > 800) {
            var searchQueryEl = pageHeaderEl.querySelector('.searchQuery');

            // Search Image Click event
            searchQueryEl.addEventListener('click', function() {
                siteRootPath = document.getElementById('globalsearch').getAttribute("action");
                var search_text = encodeURIComponent(document.getElementById('ub-search').value);
                global_search(srtype_global, search_text);

                document.querySelector('.wrapperSearch').submit();
            });

            for (var mId = 0; mId < mobNavList.length; mId++) {
                mobNavList[mId].removeAttribute('style');
            }

            pageHeaderEl.querySelector('.login a').removeAttribute('style');

        } else {
            var searchpanelEl = pageHeaderEl.querySelector('#search-panel');

            // Removing padding left to Header and Footer Element depending on Sidebar width
            pageHeaderEl.querySelector('.nav-vm').style.paddingLeft = 0;

            /*if (pageFooterEl) {
                pageFooterEl.querySelector('.footer-container').style.paddingLeft = 0;
            }*/

            /*** Search Panel Events - Starts ***/
            //Search Icon click
            pageHeaderEl.querySelector('#mNavSeacrch').addEventListener('click', function() {
                searchpanelEl.style.top = '48px';
                searchpanelEl.style.display = 'block';
                mobiHeadEl.appendChild(mNavClose);
                mobiHeadEl.style.display = 'block';
                overlayEl.style.display = 'block';

                // Close Btn for Search Panel
                pageHeaderEl.querySelector('#mNavClose').addEventListener('click', function() {
                    searchpanelEl.style.top = '-78px';
                    searchpanelEl.style.display = 'none';
                    overlayEl.style.display = 'none';
                    mobiHeadEl.style.display = 'none';
                    mobiHeadEl.innerHTML = '';
                    pageHeaderEl.querySelector('ul li').removeAttribute('style');
                });

                // Input Keydown for Search form submission
                /*pageHeaderEl.querySelector(".form-inline input").addEventListener('keydown', function(e) {
                    if (e.keyCode == 13) {
                        pageHeaderEl.querySelector(".form-inline").action = pageHeaderEl.querySelector('#globalsearch').getAttribute('action');
                        //pageHeaderEl.querySelector(".form-inline").submit();
                    }
                });

                // Button click for Search form submission
                pageHeaderEl.querySelector(".form-inline button").addEventListener('click', function(e) {
                    if (e.srcElement.tagName == 'SPAN') {
                        pageHeaderEl.querySelector(".form-inline").action = pageHeaderEl.querySelector('#globalsearch').getAttribute('action');
                        //pageHeaderEl.querySelector(".form-inline").submit();
                    }
                });*/
            });
            /*** Search Panel Events - Ends ***/

            /*** Navbar Events - Starts ***/
            pageHeaderEl.querySelector('#toggleHead').addEventListener("click", function() {
                navBarEl.className = navBarEl.className.replace(' in', '');
                navBarEl.className += ' in';

                mobiHeadEl.className = mobiHeadEl.className.replace(' login-dd', '');
                mobiHeadEl.className += ' login-dd';

                navBarEl.querySelectorAll('ul.navbar-nav li').width = '100%';
                var loginlist = '';

                for (var mId = 0; mId < mobNavList.length; mId++) {
                    mobNavList[mId].style.display = 'block';
                    if (mobNavList[mId].className.match('login')) {
                        mobNavList[mId].querySelector('a').style.display = 'block';
                        mobNavList[mId].querySelector('ul').style.display = 'none';
                        loginlist = mobNavList[mId].querySelectorAll('ul li');
                    }
                }

                for (var lId = 0; lId < loginlist.length; lId++) {
                    loginlist[lId].style.display = 'none';
                }

                mobiHeadEl.appendChild(mNavClose);
                overlayEl.style.display = 'block';
                mobiHeadEl.style.display = 'block';

                // Login Menu List Display
                pageHeaderEl.querySelector('.login a').addEventListener('click', function(e) {
                    e.preventDefault();
                    for (var logId = 0; logId < mobNavList.length; logId++) {
                        mobNavList[logId].style.display = 'none';
                        if (mobNavList[logId].className.match('login')) {
                            mobNavList[logId].style.display = 'block';
                            mobNavList[logId].querySelector('a').style.display = 'none';
                            mobNavList[logId].querySelector('ul').style.display = 'block';
                            loginlist = mobNavList[logId].querySelectorAll('ul li');
                        }
                    }

                    for (var log1Id = 0; log1Id < loginlist.length; log1Id++) {
                        loginlist[log1Id].style.display = 'block';
                    }

                    mobiHeadEl.appendChild(lReverseEl);

                    // Reverse Event for Login Panel
                    pageHeaderEl.querySelector('.login-dd #reverse').addEventListener('click', function() {
                        pageHeaderEl.querySelector('.login > ul').style.display = 'none';
                        pageHeaderEl.querySelector('.login > a').style.display = 'block';
                        var aEl = mobiHeadEl.querySelector('a');
                        if (aEl) {
                            mobiHeadEl.removeChild(aEl);
                        }

                        for (var rId = 0; rId < mobNavList.length; rId++) {
                            mobNavList[rId].style.display = 'block';
                        }
                    });
                });

                // Close Event for Login Panel
                pageHeaderEl.querySelector('.login-dd #mNavClose').addEventListener('click', function() {
                    mobiHeadEl.style.display = 'none';
                    mobiHeadEl.innerHTML = '';
                    mobiHeadEl.className = mobiHeadEl.className.replace(' login-dd', '');
                    navBarEl.className = navBarEl.className.replace(' in', '');

                    for (var cId = 0; cId < mobNavList.length; cId++) {
                        mobNavList[cId].style.display = 'none';
                        if (mobNavList[cId].className.match('login')) {
                            loginlist = mobNavList[cId].querySelectorAll('ul li');
                        }
                    }
                    for (var l1Id = 0; l1Id < loginlist.length; l1Id++) {
                        loginlist[l1Id].style.display = 'none';
                    }

                    overlayEl.removeAttribute('style');
                });
            });
            /*** Navbar Events - Ends ***/
        }
    }
    /***** Header Related Fns - Ends *****/
}

function sidebarEvents() {
    /***** Sidebar Related Fns - Starts *****/
    if (pageSideBarEl) {
        /*if(pageMainContEl) {
            pageMainContEl.style.paddingLeft = 135 + 'px';
        }*/

        if (window.innerWidth > 800) {
            sideBarEl.removeAttribute('style');
        } else {
            if (pageHeaderEl) {

                if (sideBarEl.offsetLeft != 0) {
                    sideBarEl.querySelector('ul').removeAttribute('style');
                }

                // Humberger Element Events
                var hamBurgerEl = pageHeaderEl.querySelector('#hamBurger');

                hamBurgerEl.addEventListener("click", function() {
                    sideBarEl.style.margin = 0;
                    sideBarEl.style.width = '100%';
                    sideBarEl.querySelector('ul').style.display = 'block';

                    overlayEl.style.display = 'block';
                    mobiHeadEl.style.display = 'block';
                    mobiHeadEl.appendChild(mNavClose);
                    mobiHeadEl.className = mobiHeadEl.className.replace(' level3', '');
                    mobiHeadEl.className = mobiHeadEl.className.replace(' level2', '');


                    var sideBarLiAels = sideBarEl.querySelectorAll('ul li a[data-target]'); // Sidebar links

                    for (var sideBarLiId = 0; sideBarLiId < sideBarLiAels.length; sideBarLiId++) {
                        sideBarLiAels[sideBarLiId].className = '';
                    }

                    if(window.innerWidth <= 800) {
                        var ulHeight = sideBarEl.querySelector('ul').offsetHeight;
                        var winHeight = window.innerHeight;

                        if(ulHeight > winHeight) {
                            sideBarEl.querySelector('ul').style.maxHeight = (winHeight - 99) + 'px';
                            sideBarEl.querySelector('ul').style.overflowY = 'scroll';
                        }
                    }

                    mobiHeadEl.querySelector('#mNavClose').addEventListener('click', function() {
                        sideBarEl.querySelector('ul').style.display = 'none';
                        sideBarEl.removeAttribute('style');

                        mobiHeadEl.style.display = 'none';
                        mobiHeadEl.className = 'mobi-head';

                        overlayEl.style.display = 'none';

                        if (mobiHeadEl.querySelector('#mNavClose')) {
                            mobiHeadEl.removeChild(this);
                        }

                        // Removing Cross class for all elements
                        for (var aId = 0; aId < sideBarAels.length; aId++) {
                            sideBarAels[aId].className = '';
                        }

                        // Removing active-li class for all elements
                        for (var li2Id = 0; li2Id < sideBarLis.length; li2Id++) {
                            sideBarLis[li2Id].className = '';
                        }

                    });
                });

                hamBurgerEl.querySelector('a').addEventListener("click", function(e) {
                    e.preventDefault();
                });
            }
        }

        for (var sId = 0; sId < sideBarAels.length; sId++) {
            sideBarAels[sId].removeAttribute('click', subCatDisplay);
            sideBarAels[sId].addEventListener('click', subCatDisplay);
        }
    } else {
        /*if(pageMainContEl) {
            pageMainContEl.style.paddingLeft = 0;
        }*/
    }
    /***** Sidebar Related Fns - Ends *****/
}

// On click on Menu links
function subCatDisplay() {
    var subMenuId = this.getAttribute('id'); // Sub Menu Id to match
    var selectMenuCat = '';
    var elClassName = this.className;
    sidebarOvrlyEl.style.display = 'none';

    // Sidebar overlay transition code
    sidebarOvrlyEl.style.left = '133px';
    sidebarOvrlyEl.style.display = 'block';

    //Adding Cross class to the selected sidebar link
    if (elClassName.match('cross')) {
        this.className = '';
        sidebarOvrlyEl.style.left = '-100%';
    } else {
        // Removing Cross class for all elements
        for (var aId = 0; aId < sideBarAels.length; aId++) {
            sideBarAels[aId].className = '';
        }
        this.className = 'cross'; //Adding Cross class for current element

        // Removing active-li class for all elements
        for (var li2Id = 0; li2Id < sideBarLis.length; li2Id++) {
            sideBarLis[li2Id].className = '';
        }
        this.parentElement.className = 'active-li';
    }

    // Hiding all Menu Cat Elements
    for (var menuCat = 0; menuCat < menuCatEles.length; menuCat++) {
        menuCatEles[menuCat].style.display = 'none';

        if (menuCatEles[menuCat].getAttribute('id') == 'menu-overlay-' + subMenuId) {
            selectMenuCat = menuCatEles[menuCat];
        }
        // Displaying of Menu options without overlay in < 800 window width

    }

    if (selectMenuCat != '') {
        selectMenuCat.style.display = 'block'; // Displaying the Menu Cat Elements based on selected options

        //var liHeight = this.parentElement.offsetHeight;
        if (window.innerWidth <= 800) {
            sidebarOvrlyEl.className = sidebarOvrlyEl.className.replace(' mobiNav', '');
            sidebarOvrlyEl.className = sidebarOvrlyEl.className.replace(' deskNav', '');
            sidebarOvrlyEl.className += ' mobiNav';

            setTimeout(function() {
                var menuCatHeight = selectMenuCat.offsetHeight;
                var winHeight = window.innerHeight;

                if (menuCatHeight > winHeight) {
                    selectMenuCat.style.maxHeight = (winHeight - 99) + 'px';
                    selectMenuCat.style.overflowY = 'scroll';
                }
            }, 1);
        }
    }

    pageSideBarEl.querySelector(".submenu").style.display = 'block';

    mobiHeadEl.className = mobiHeadEl.className.replace(' level3', '');
    mobiHeadEl.className = mobiHeadEl.className.replace(' level2', '');
    mobiHeadEl.className += ' level2';

    // Appending Nav elements to Mobi Header
    mobiHeadEl.appendChild(lContent);
    mobiHeadEl.querySelector('.l_content').innerHTML = this.innerHTML;
    mobiHeadEl.appendChild(mNavClose);
    pageHeaderEl.querySelector('.mobi-head.level2').appendChild(sReverseEl);
    mobiHeadEl.querySelector('#reverse').removeAttribute('style');

    this.parentElement.parentElement.style.display = 'none';

    // Mobi header - Level2 (l_content, reverse and mNavClose events)
    var mobiHead2El = pageHeaderEl.querySelector('.mobi-head.level2');
    mobiHead2El.querySelector('.l_content').removeEventListener('click', level1Display);
    mobiHead2El.querySelector('.l_content').addEventListener('click', level1Display);

    mobiHead2El.querySelector('#reverse').removeEventListener('click', level1Display);
    mobiHead2El.querySelector('#reverse').addEventListener('click', level1Display);
    pageHeaderEl.querySelector('.mobi-head.level2 #mNavClose').addEventListener('click', function() {
        sideBarEl.removeAttribute('style');
        pageSideBarEl.querySelector('.submenu').removeAttribute('style');
        mobiHeadEl.innerHTML = '';
        sidebarOvrlyEl.style.display = 'none';
    });


    mainCatVal = mobiHeadEl.querySelector('.l_content span').innerHTML;

    if (mobiHeadEl.querySelector('.l_content i')) {
        mainCatClass = mobiHeadEl.querySelector('.l_content i').className;
    }

    var childSubCats = sidebarOvrlyEl.querySelectorAll('.submenu li');

    for (var childSubCatId = 0; childSubCatId < childSubCats.length; childSubCatId++) {
        childSubCats[childSubCatId].removeAttribute('style');
    }

    // Subcat menu
    for (var subCatId = 0; subCatId < subCatLis.length; subCatId++) {

        subCatLis[subCatId].addEventListener('click', function(e) {
            e.preventDefault();

            sidebarOvrlyEl.className = sidebarOvrlyEl.className.replace(' mobiNav', '');
            sidebarOvrlyEl.className = sidebarOvrlyEl.className.replace(' deskNav', '');
            sidebarOvrlyEl.className += ' mobiNav';

            mobiHeadEl.className = mobiHeadEl.className.replace(' level2', '');
            mobiHeadEl.className = mobiHeadEl.className.replace(' level3', '');
            mobiHeadEl.className += ' level3';

            catTxt = this.textContent;

            mobiHeadEl.querySelector('.l_content').innerHTML = '<span data-category="' + mainCatVal + '" class="l3">' + catTxt + '</span>';
            /*mobiHeadEl.querySelector('.l_content').style.display = '';*/

            childLis = this.parentElement.children;

            for (var childId = 0; childId < childLis.length; childId++) {
                childLis[childId].style.display = 'block';
            }

            for (var s2Id = 0; s2Id < subCatLis.length; s2Id++) {
                subCatLis[s2Id].style.display = 'none';
            }

            // Mobi header-levl3 - l_content, reverse and mNavClose events
            pageHeaderEl.querySelector('.mobi-head.level3 .l_content').removeEventListener('click', level2Display);
            pageHeaderEl.querySelector('.mobi-head.level3 .l_content').addEventListener('click', level2Display);

            pageHeaderEl.querySelector('.mobi-head.level3 #reverse').removeEventListener('click', level2Display);
            pageHeaderEl.querySelector('.mobi-head.level3 #reverse').addEventListener('click', level2Display);

            pageHeaderEl.querySelector('.mobi-head.level3 #mNavClose').addEventListener('click', function() {
                var subCatContLis = sidebarOvrlyEl.querySelectorAll('.subCat-container li');

                for (var subCatContId = 0; subCatContId < subCatContLis.length; subCatContId++) {
                    subCatContLis[subCatContId].removeAttribute('style');
                }

                sidebarOvrlyEl.style.display = 'none';
            });
        });
    }
}

// On click of level2 Reverse - displays from level2 to level2 content
function level1Display() {
    if (mobiHeadEl.className.match('level2')) {
        mobiHeadEl.removeChild(pageHeaderEl.querySelector('.mobi-head.level2 .l_content'));
        mobiHeadEl.removeChild(pageHeaderEl.querySelector('.mobi-head.level2 #reverse'));
        pageSideBarEl.querySelector('.submenu').style.display = 'none';
        pageSideBarEl.querySelector('.sidebar ul').style.display = 'block';
        mobiHeadEl.className = mobiHeadEl.className.replace(' level2', '');
    }
}

// On click of level3 Reverse - displays from level3 to level2 content
function level2Display() {
    if (mobiHeadEl.className.match('level3')) {
        this.style.display = 'none';
        if (pageHeaderEl.querySelector('.mobi-head.level3 #reverse')) {
            pageHeaderEl.querySelector('.mobi-head.level3 #reverse').style.display = 'none';
        }

        for (var childId = 0; childId < childLis.length; childId++) {
            childLis[childId].removeAttribute('style');
        }

        for (var s3Id = 0; s3Id < subCatLis.length; s3Id++) {
            subCatLis[s3Id].style.display = 'block';
        }

        mobiHeadEl.className = mobiHeadEl.className.replace(' level3', '');
        mobiHeadEl.className += ' level2';

        if (pageHeaderEl.querySelector('.mobi-head.level2 #reverse')) {
            pageHeaderEl.querySelector('.mobi-head.level2 #reverse').removeAttribute('style');
        }

        if (mainCatVal == "Partners Programs") {
            mobiHeadEl.querySelector('.l_content').innerHTML = '<i style="margin-right:2px; width:auto;" class="' + mainCatClass + '"></i><i class="' + mainCatClass + '"></i><span>' + mainCatVal + '</span>';
            mobiHeadEl.querySelector('.l_content').removeAttribute('style');
        } else {
            mobiHeadEl.querySelector('.l_content').innerHTML = '<i class="' + mainCatClass + '"></i><span>' + mainCatVal + '</span>';
            mobiHeadEl.querySelector('.l_content').removeAttribute('style');
        }
    }
}

// Placing footer bottom with respect to the content
function placeFooter() {
    if (pageFooterEl) {
        var refFooterHeight = (pageFooterEl.querySelector('.footer-main').offsetHeight) + (pageFooterEl.querySelector('.vm-border').offsetHeight) + (pageFooterEl.querySelector('.footer-bottom').offsetHeight);

        if (pageContainerEl) {
            if (pageContainerEl.offsetHeight <= (window.innerHeight - refFooterHeight)) {
                pageFooterEl.style.position = 'fixed';
                pageFooterEl.style.bottom = 0;
                pageFooterEl.style.width = '100%';
            } else {
                pageFooterEl.style.position = 'relative';
                pageFooterEl.style.bottom = 'auto';
            }
        }
        if (pageMainEl) {
            if (pageMainEl.offsetHeight <= (window.innerHeight - refFooterHeight)) {
                pageFooterEl.style.position = 'fixed';
                pageFooterEl.style.bottom = 0;
                pageFooterEl.style.width = '100%';
            } else {
                pageFooterEl.style.position = 'relative';
                pageFooterEl.style.bottom = 'auto';
            }
        }
    }
}

/***** Attaching Events - Ends *****/

/***** Onload Fns - Starts *****/
if (window.innerWidth > 800) {
    if (pageHeaderEl) {
        navBarEl.className += deskNavBarClass;
    }

    // Padding to header and footer elements
    if (pageSideBarEl) {
        // Padding to header and footer elements
        if (pageHeaderEl) {
            pageHeaderEl.querySelector('.nav-vm').style.paddingLeft = (sidebarWidth) - 2 + 'px';
        }
        if (pageFooterEl) {
            pageFooterEl.querySelector('.footer-container').style.paddingLeft = (sidebarWidth) - 2 + 'px';
        }
    }

} else {
    if (pageHeaderEl) {
        navBarEl.className += mobiNavBarClass;
    }
}

headerEvents();
sidebarEvents();
//placeFooter();
/***** Onload Fns - Ends *****/

/***** Resize Fns - Starts *****/
window.addEventListener('resize', function() {

    if (pageHeaderEl) {
        if (navBarEl.className.match(mobiNavBarClass)) {
            navBarEl.querySelector('.login ul').removeAttribute('style');

            var loginLis = navBarEl.querySelectorAll('.login ul li');
            for (var loginLiId = 0; loginLiId < loginLis.length; loginLiId++) {
                loginLis[loginLiId].removeAttribute('style');
            }

            navBarEl.querySelector('.login ul li').removeAttribute('style');
            navBarEl.className = navBarEl.className.replace('in', '');
        }
    }

    if (window.innerWidth > 800) {
        if (pageHeaderEl) {
            navBarEl.className = navBarEl.className.replace(deskNavBarClass, '');
            navBarEl.className = navBarEl.className.replace(mobiNavBarClass, '');
            navBarEl.className += deskNavBarClass;

            mobiHeadEl.innerHTML = '';
            mobiHeadEl.removeAttribute('style');
            mobiHeadEl.className = mobiHeadEl.className.replace(' level3', '');
            mobiHeadEl.className = mobiHeadEl.className.replace(' level2', '');

            pageHeaderEl.querySelector('#search-panel').style.top = '-74px';
        }

        if (pageSideBarEl) {
            sidebarOvrlyEl.className = sidebarOvrlyEl.className.replace(' mobiNav', '');
            sidebarOvrlyEl.className = sidebarOvrlyEl.className.replace(' deskNav', '');
            sidebarOvrlyEl.className += ' deskNav';

            sidebarOvrlyEl.querySelector('.submenu').removeAttribute('style');
            sideContainer.querySelector('.sidebar ul').removeAttribute('style');
            sideContainer.querySelector('.sidebar').removeAttribute('style');

            var childSubCatAs = sidebarOvrlyEl.querySelectorAll('.submenu li a');

            for (var childSubCatAId = 0; childSubCatAId < childSubCatAs.length; childSubCatAId++) {
                if (childSubCatAs[childSubCatAId]) {}
            }

            if ((sidebarOvrlyEl.style.display).match('block') && sidebarOvrlyEl.className.match('mobiNav')) {
                sidebarOvrlyEl.querySelector('.submenu').removeAttribute('style');
            }

            // Padding to header and footer elements
            if (pageHeaderEl) {
                pageHeaderEl.querySelector('.nav-vm').style.paddingLeft = (sidebarWidth) - 2 + 'px';
            }
            if (pageFooterEl) {
                pageFooterEl.querySelector('.footer-container').style.paddingLeft = (sidebarWidth) - 2 + 'px';
            }
        }

        if (overlayEl) {
            overlayEl.removeAttribute('style');
        }

    } else {
        if (pageHeaderEl) {
            if (navBarEl.className.match(deskNavBarClass)) {
                navBarEl.className = navBarEl.className.replace('in', '');
            }

            navBarEl.className = navBarEl.className.replace(mobiNavBarClass, '');
            navBarEl.className = navBarEl.className.replace(deskNavBarClass, '');
            navBarEl.className += mobiNavBarClass;
        }

        if (pageSideBarEl) {
            if (overlayEl) {
                if (sidebarOvrlyEl.className.match('.deskNav')) {
                    overlayEl.removeAttribute('style');
                }
            }
            if (sidebarOvrlyEl.className.match('.deskNav')) {
                sidebarOvrlyEl.querySelector('.submenu').removeAttribute('style');

                if (pageHeaderEl) {
                    mobiHeadEl.innerHTML = '';
                }
            }

            sidebarOvrlyEl.className = sidebarOvrlyEl.className.replace(' mobiNav', '');
            sidebarOvrlyEl.className = sidebarOvrlyEl.className.replace(' deskNav', '');
            sidebarOvrlyEl.className += ' mobiNav';

            // Padding to header and footer elements
            if (pageHeaderEl) {
                pageHeaderEl.querySelector('.nav-vm').removeAttribute('style');
            }
            if (pageFooterEl) {
                pageFooterEl.querySelector('.footer-container').removeAttribute('style');
            }
        }
    }

    headerEvents();
    sidebarEvents();
    //placeFooter();
});
/***** Resize Fns - Starts *****/

/*
*****************************************************
  Search Functionality starts here
******************************************************
*/

var action= document.getElementById('globalsearch').action
var newaction="";

if (typeof action != "undefined"){

    if(window.location.href.indexOf("-uat") > -1 ){

        action= action.replace("//www.vmware.com", "//www-uat.vmware.com");

    }

    else if(window.location.href.indexOf("-stage") > -1 ){

        action= action.replace("//www.vmware.com", "//www-stage.vmware.com");

    }


    else{


        action=action;


    }

    if(action.indexOf(".html#/") > -1 ){

        newaction = action.replace(".html#/", ".html");

    }

    else{

        newaction = action;

    }

    document.getElementById("globalsearch").action = newaction;


}

/* Common for all searches */
var amb = '&',
    ques = '?',
    hash = '#',
    eq = "=",
    aq="aq".
        q = "q";

/* Local Specific -> Search URL Params */
var cc = 'cc',
    client = 'client',
    stype = 'stype',
    site = 'site';

/* Support unique parameter */
var product = 'product';

/* Used for fall back urls */
var fallback_client = 'VMware',
    fallback_site = 'VMware',
    fallback_cc = 'en',
    fallback_stype = 'main',
    fallback_url = ' ';
if (instanceUrl) {
    fallback_url = instanceUrl + 'search.html';
} else {
    fallback_url = 'www.vmware.com/search.html';
}

/* Used for creating url */
var parameter_URL = "",
    url = "",
    globalsearch_parameter_MAP = {},
    siteRootPath = "",
    productfield = "",
    form_action = "";

/* Defining the page names for redirectional */
var srtype_global = "global";


/* After pressing enter button */
if (pageHeaderEl) {
    var glbSearchCont = document.getElementById("globalsearch");
    glbSearchCont.querySelector(".geo").onkeydown = function(e) {

        if (e.which == 13) {
            siteRootPath = document.getElementById('globalsearch').getAttribute("action");

            var search_text = encodeURIComponent(document.getElementById('ub-search').value);

            global_search(srtype_global, search_text);

            return false;

            document.querySelector("form").submit();

        }
    };

    function global_search(srtype, search_text) {
        if (typeof srtype != 'undefined' || srtype.length > 0) {
            globalsearch_parameter_MAP = create_globalsearch_Map();
            search(search_text, srtype);
        }
    }

    /* Search from Utility Bar ends */



    /* Creating the global search map of the defined fields for the url creation
       Reading from utilitybar form hiddesn fields
    */
    function create_globalsearch_Map() {
        var map = {};
        var glblSearchEl = document.getElementById('globalsearch');
        var glblSearchInputEls = glblSearchEl.querySelectorAll('input');

        for (var i = 0; i < glblSearchInputEls.length; i++) {
            var map_key = glblSearchInputEls[i].getAttribute('name');

            if (glblSearchInputEls[i].getAttribute('type') == 'hidden') {
                if (map_key.indexOf('cq_csrf_token') > -1) {
                    return true;
                }

                var map_value = glblSearchInputEls[i].value;
                map[map_key] = map_value;
            }
        }
        return map;
    }

    /* Creating the supp-sec search map of the defined fields for the url creation
      Reading from generic-search form hiddesn fields
    */
    function create_supp_sec_search_parameter_MAP() {
        var map = {};
        var glblSearchEl = document.getElementById('globalsearch');
        var glblSearchInputEls = glblSearchEl.querySelectorAll('input');
        for (var i = 0; i < glblSearchInputEls.length; i++) {

            if (glblSearchInputEls[i].getAttribute('type') == 'hidden') {
                var map_key = glblSearchInputEls[i].getAttribute('name');
                var map_value = glblSearchInputEls[i].value;
                map[map_key] = map_value;
            }
        };
        return map;
    }


    function get_Search_URL(siterootpath) {
        var temp_url = '';
        if (siterootpath.length > 0) {
            temp_url += siterootpath;
        }
        return temp_url;
    }

    /* Creates global related search string */
    function create_search_urlparam(search_text, srtype) {
        var param_URL = '';
        var initkey = 1;
        /* Get the common & Locale specific i.e., Fetching global map details to form the -> Search URL Params */
        for (var key in globalsearch_parameter_MAP) {
            if (globalsearch_parameter_MAP.hasOwnProperty(key)) {
                if (initkey == 1) {
                    param_URL += key + eq + globalsearch_parameter_MAP[key];
                    initkey = 0;
                } else {
                    param_URL += amb + key + eq + globalsearch_parameter_MAP[key];
                }
            }
        }

        /* Search keyword getting passed */
        param_URL += amb + q + eq + search_text;
        return param_URL;
    }
}


/* Search functionality */
function search(search_text, srtype) {
    /* Creates URL */
    url = get_Search_URL(siteRootPath);

    /* Handle fall back URL - default to US and lang set to en */
    if (url == "") {
        url = fallback_url;
        if (srtype == 'global') {
            globalsearch_parameter_MAP[client] = fallback_client;
            globalsearch_parameter_MAP[site]  = fallback_site;
            globalsearch_parameter_MAP[cc] = fallback_cc;
            globalsearch_parameter_MAP[stype] = fallback_stype;
        } else if (srtype == 'security') {
            globalsearch_parameter_MAP[cc] = fallback_cc;
        } else {
            globalsearch_parameter_MAP[cc] = fallback_cc;
        }
    }

    /* Starts the creation of URL */
    parameter_URL = ques;

    if ('support' == srtype) {
        parameter_URL += 'q=' + search_text + amb + 'aq=@vmsearchlanguage%3D%3D'+ create_lang_mapping() +'&client=VMware&tab=supportSearch&start=0&num=20&sort=&slen=200&'+ product + eq + productfield;
    } else if ('security' == srtype) {
        parameter_URL += create_security_search_urlparam(search_text, srtype);
    } else if ('global' == srtype) {
        parameter_URL += 'q=' + search_text + amb + 'aq=@vmsearchlanguage%3D%3D'+ create_lang_mapping() +'&client=VMware&tab=mainvmware&start=0&num=20&sort=&slen=200&product='
    }
    window.location = url + parameter_URL;
}

function create_lang_mapping(){

    var languagemapping = {
        "ae": {"language":"Avestan"},
        "ap": {"language":"English-AP"},
        "ar": {"language":"Spanish-AR"},
        "at": {"language":"German-AT"},
        "au": {"language":"English-AU"},
        "be/fr": {"language":"English-BE-FR"},
        "be/nl": {"language":"English-BE-NL"},
        "be": {"language":"English-BE"},
        "belgie": {"language":"English-BELGIE"},
        "bg": {"language":"Bulgarian"},
        "br": {"language":"Portuguese-br"},
        "brazil": {"language":"Portuguese"},
        "ca-fr": {"language":"French-CA-FR"},
        "ca/fr": {"language":"French-CA-FR"},
        "ca":{"language": "English-CA"},
        "ch": {"language":"German-CH"},
        "cl": {"language":"Spanish-CL"},
        "cn":{"language": "Chinese"},
        "co":{"language": "Spanish-CO"},
        "cr": {"language":"Spanish-CR"},
        "cz": {"language":"Czech"},
        "de": {"language":"German"},
        "deutschland":{"language": "German"},
        "dk": {"language":"Danish"},
        "en":{"language": "English"},
        "es":{"language": "Spanish"},
        "espana":{"language": "Spanish"},
        "fi": {"language":"Finnish"},
        "fr": {"language":"French"},
        "france": {"language":"French"},
        "gb": {"language":"English-GB"},
        "hk": {"language":"English-HK"},
        "hu":{"language": "Hungarian"},
        "ie":{"language": "English-IE"},
        "il": {"language":"English-IL"},
        "in": {"language":"English-IN"},
        "israel":{"language": "English_ISRAEL"},
        "it":{"language": "Italian"},
        "ja": {"language":"Japanese"},
        "jp": {"language":"Japanese"},
        "ko": {"language":"Korean"},
        "kr":{"language": "Korean"},
        "lasp": {"language":"English-LASP"},
        "latam": {"language":"Spanish"},
        "mena":{"language": "English-MENA"},
        "middle-east": {"language":"English-MIDDLE-EAST"},
        "mx":{"language": "Spanish-MX"},
        "my":{"language": "English-MY"},
        "nl":{"language": "Dutch"},
        "no":{"language": "Norwegian"},
        "nz": {"language":"English-NZ"},
        "oesterreich": {"language":"German"},
        "pe": {"language":"Spanish-PE"},
        "pl": {"language":"Polish"},
        "ru":{"language": "Russian"},
        "russia":{"language": "Russian"},
        "sa": {"language":"Arabic"},
        "schweiz":{"language": "German"},
        "se": {"language":"Swedish"},
        "sg": {"language":"English-SG"},
        "sverige":{"language": "Swedish"},
        "th":{"language": "Thai"},
        "tr":{"language": "Turkish"},
        "tw": {"language":"Taiwanese"},
        "uk":{"language": "English-UK"},
        "us":{"language": "English"},
        "":{"language": "English"},
        "ve": {"language":"Spanish-VE"}
    };

    /*
     * i18ntranslationModule: Its a Reusable Translation module which accepts the country code and returns the language mapping.
     */

    var i18ntranslationModule= (function() {

        var lang,pageLang;

        /* geti18nTranslationObject - Private method to return the actual translation from object , fallbacks to english if lang not found */
        if(document.documentElement.lang.indexOf("-") > -1){
            lang = document.documentElement.lang.split("-");
            if(typeof lang[1] !="undefined"){

                pageLang= lang[1].toLowerCase();

            }

            else{

                pageLang= lang[0];

            }


        }

        else if (document.querySelectorAll("meta[http-equiv='content-language']").length > 0) {

            pageLang= document.querySelector("meta[http-equiv='content-language' ]").getAttribute('content');

        }


        else{
            pageLang=document.documentElement.lang;
        }


        var geti18nTranslationObject = function() {
            return (languagemapping [pageLang]);
        };



        var fetchi18nTranslations = function() {
            return geti18nTranslationObject();
        };

        return {
            fetchi18nTranslations : fetchi18nTranslations
        };

    })();



    return i18ntranslationModule.fetchi18nTranslations().language;

}
/*
*****************************************************
  Search Functionality ends here
******************************************************
*/

/**** ZCMS 13884 fix for scrapper ****/
/*$(".sidebar a").on('click', function() {
    var menuid = $(this).attr("id");

    $('.menu-cat').hide();

    $.each($('.menu-cat'), function() {
        var $this = $(this);
        if ($this.attr('id') == 'menu-overlay-' + menuid) {
            $this.show();
        }
    });
});*/
/**** ZCMS 13884 fix for scrapper ****/

/***** Copyright Txt - Starts  *****/
var footerYearEl = pageFooterEl.querySelector('#footertext_year ul li:first-child');
var footerYearTxt = (footerYearEl.innerHTML);

var updatedFooterTxt = footerYearTxt.replace(/[0-9][0-9][0-9][0-9]?/g, new Date().getFullYear());

footerYearEl.innerHTML = updatedFooterTxt;
/***** Copyright Txt - Ends  *****/


/***** Mac issue on voa page ZCMS-16160 temp fix - Starts *****/
if(pageHeaderEl) {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        pageHeaderEl.style.marginBottom = '45px';
    } else {
        pageHeaderEl.style.marginBottom = 0;
    }
}
/***** Mac issue on voa page ZCMS-16160 temp fix - Ends *****/