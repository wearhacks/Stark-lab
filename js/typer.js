!function($){var t=function(t,e){return"rgba(0, 0, 0, 0)"===t&&(t="rgb(255, 255, 255)"),$("<span></span>").css("color",t).css("background-color",e)},e=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},r=function(t){t.removeData(["typePosition","highlightPosition","leftStop","rightStop","primaryColor","backgroundColor","text","typing"])},a=function(t){var e=t.data("text"),n=t.data("oldLeft"),o=t.data("oldRight");return e&&0!==e.length?(t.text(n+e.charAt(0)+o).data({oldLeft:n+e.charAt(0),text:e.substring(1)}),void setTimeout(function(){a(t)},t.data("typerOptions").typeSpeed)):void r(t)},n=function(t){t.find("span").remove(),setTimeout(function(){a(t)},t.data("typerOptions").typeDelay)},o=function(r){var a=r.data("highlightPosition"),i,d,p;return e(a)||(a=r.data("rightStop")+1),a<=r.data("leftStop")?void setTimeout(function(){n(r)},r.data("typerOptions").clearDelay):(i=r.text().substring(0,a-1),d=r.text().substring(a-1,r.data("rightStop")+1),p=r.text().substring(r.data("rightStop")+1),r.html(i).append(t(r.data("backgroundColor"),r.data("primaryColor")).append(d)).append(p),r.data("highlightPosition",a-1),void setTimeout(function(){return o(r)},r.data("typerOptions").highlightInterval))},i=function(t){var e;if(!t.data("typing")){try{e=JSON.parse(t.attr(t.data("typerOptions").typerDataAttr)).targets}catch(r){}"undefined"==typeof e&&(e=$.map(t.attr(t.data("typerOptions").typerDataAttr).split(","),function(t){return $.trim(t)})),t.data("typerOptions").random?t.typeTo(e[Math.floor(Math.random()*e.length)]):("undefined"==typeof t.data("currentIndex")?t.data("currentIndex",0):t.data("currentIndex",t.data("currentIndex")+1),"undefined"==typeof e[t.data("currentIndex")]&&t.data("currentIndex",0),t.typeTo(e[t.data("currentIndex")],t.data("typerOptions")))}};$.fn.typer=function(t){var e=$(this),r=$.extend({},$.fn.typer.defaults,t);return e.each(function(){var t=$(this);"undefined"!=typeof t.attr(r.typerDataAttr)&&(t.data("typerOptions",r),i(t),setInterval(function(){i(t)},t.data("typerOptions").typerInterval))})},$.fn.typeTo=function(t,e){var r=$(this),a=r.text(),n=$.extend({},$.fn.typer.defaults,e),i=0,d=0;if(a===t)return console.log("Our strings are equal, nothing to type"),r;if(a!==r.html())return console.error("Typer does not work on elements with child elements."),r;if(r.data("typing",!0),r.data("typerOptions",n),!r.data("typerOptions").wholeWord){for(;a.charAt(i)===t.charAt(i);)i++;for(;a.rightChars(d)===t.rightChars(d);)d++}return t=t.substring(i,t.length-d+1),r.data({oldLeft:a.substring(0,i),oldRight:a.rightChars(d-1),leftStop:i,rightStop:a.length-d,primaryColor:r.css("color"),backgroundColor:r.css("background-color"),text:t}),o(r),r},$.fn.typer.defaults={highlightSpeed:20,typeSpeed:100,clearDelay:500,typeDelay:200,clearOnHighlight:!0,typerDataAttr:"data-typer-targets",typerInterval:2e3,random:!1,wholeWord:!1},String.prototype.rightChars=function(t){return 0>=t?"":t>this.length?this:this.substring(this.length,this.length-t)}}(jQuery);