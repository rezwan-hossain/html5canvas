var stallSlider;function buildSlider(){jQuery('.scrollable-list').each(function(){var $sList=jQuery(this);var sublistWidths=new Array();var numSublists=0;var $toSlide;var $slider;var slideRatio=0;var sliderWidth=0;var titleListNav='';if($sList.attr('name')!=undefined){titleListNav='<h3>'+$sList.attr('name')+'</h3>';}
titleListNav+='<ul style="display:none;">';$sList.find('.item-sublist').each(function(){if(jQuery(this).find('.item').length>0){var listName=jQuery(this).attr('name');var linkName=jQuery(this).attr('name').split(' ').join('');titleListNav+='<li><a href="#'+linkName+'">'+listName+'</a></li>';numSublists++;}
else{jQuery(this).remove();}});titleListNav+='</ul>';$sList.find('.title-list-nav').append(titleListNav);if($sList.find('.title-list-nav ul li').length>1){$sList.find('.title-list-nav ul').css('display','block');}
$sList.append('<div class="left"><a href="#left" style="display:none;"></a></div>');$sList.append('<div class="right"><a href="#right" style="display:none;"></a></div>');$sList.append('<div class="scroll"><a href="#scroll" style="display:none;"></a></div>');$sList.find('.item > .item-info').prepend('<div class="pointer"></div>');$sList.find('.title-list-nav').each(function(){var jQuerylinks=jQuery(this).find('a');jQuerylinks.click(function(){var jQuerylink=jQuery(this);var linkName=jQuerylink.html();if(jQuerylink.is('.selected')){return false;}
jQuerylinks.removeClass('selected');jQuerylink.addClass('selected');$sList.find('.item-sublist').each(function(i){jQuery(this).css('visibility','hidden');jQuery(this).css('top','-1000px');if(jQuery(this).attr('name').split(' ').join('')==linkName){jQuery(this).css('top','0');jQuery(this).css('visibility','visible');$toSlide=jQuery(this);slideRatio=($toSlide.get(0).offsetWidth-sliderWidth+3)/sliderWidth;if($slider!=undefined){var destPos=-$toSlide.position().left/slideRatio;if($toSlide.get(0).offsetWidth-sliderWidth+3<=0){if($slider.css('display')!='none'){$slider.hide();$sList.find('.left > a').hide();$sList.find('.right > a').hide();}}
else{if($slider.css('display')=='none'){$slider.show();$sList.find('.left > a').show();$sList.find('.right > a').show();}
$slider.animate({left:destPos+'px'},{queue:false,duration:100,easing:'swing'});}}
if(jQuery(this).position().left==0){$sList.find('.left > a').css('background-position','9px -52px');$sList.find('.right > a').css('background-position','9px 0px');}
else if(jQuery(this).position().left<=-$toSlide.get(0).offsetWidth+sliderWidth-3){$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px -52px');}
else{$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px 0px');}
if($toSlide.find('img').length==0){LoadSliderImages(jQuery(this));}}});});jQuerylinks.filter(':first').click();});$sList.find('.item').each(function(){jQuery(this).find('a:first').mouseover(function(e){var y=30;var x=0;var relPos=jQuery(this).parent().position()['left']+jQuery(this).parent().parent().position()['left'];relPos-=$sList.get(0).offsetWidth/2-28;relPos+=(jQuery(this).parent().get(0).offsetWidth-5)/2;if(relPos<=0){x=jQuery(this).parent().position()['left']+jQuery(this).get(0).offsetWidth-15;}
else{x=jQuery(this).parent().position()['left'];}
jQuery(this).parent().find('.item-info:first').each(function(){jQuery(this).addClass('show-info').fadeTo(0,0);if(relPos>0){x-=jQuery(this).get(0).offsetWidth+10;}
jQuery(this).css('left',x+'px').css('top',y+'px').delay(500).fadeTo(300,1);});});jQuery(this).find('a:first').mouseleave(function(){jQuery(this).parent().find('.item-info').clearQueue().stop().removeClass('show-info');});});function StartSlider(){$sList.each(function(){$sList.find('.left > a').click(function(e){e.preventDefault();});$sList.find('.right > a').click(function(e){e.preventDefault();});$slider=$sList.find('.scroll > a');$slider.click(function(e){e.preventDefault();});sliderWidth=$sList.find('.scroll').get(0).offsetWidth-30;slideRatio=($toSlide.get(0).offsetWidth-sliderWidth+3)/sliderWidth;if($toSlide.get(0).offsetWidth-sliderWidth+3>0){$sList.find('.left > a').fadeIn(500);$sList.find('.right > a').fadeIn(500);$slider=$sList.find('.scroll > a').css('left','0px').fadeIn(500);}
$slider.draggable({axis:'x',containment:'parent',drag:function(event,ui){var p=ui.position.left*slideRatio;$toSlide.css({left:'-'+p+'px'});if(p==0){$sList.find('.left > a').css('background-position','9px -52px');$sList.find('.right > a').css('background-position','9px 0px');}
else if(p>=$toSlide.get(0).offsetWidth-sliderWidth+0){$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px -52px');}
else{$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px 0px');}},stop:function(event,ui){var p=ui.position.left*slideRatio;$toSlide.animate({left:'-'+p+'px'},100);}});$sList.find('.scroll').mousedown(function(e){var p=e.clientX-jQuery(this).offset()['left']-($slider.get(0).offsetWidth/2);if(p<0){$slider.animate({left:0+'px'},{queue:false,duration:100,easing:'swing'});$toSlide.animate({left:0+'px'},{queue:false,duration:100,easing:'swing'});$sList.find('.left > a').css('background-position','9px -52px');$sList.find('.right > a').css('background-position','9px 0px');}
else if(p>sliderWidth){$slider.animate({left:sliderWidth+'px'},{queue:false,duration:100,easing:'swing'});$toSlide.animate({left:'-'+(sliderWidth*slideRatio)+'px'},{queue:false,duration:100,easing:'swing'});$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px -52px');}
else{$slider.animate({left:e.clientX-jQuery(this).offset()['left']-($slider.get(0).offsetWidth/2)+'px'},{queue:false,duration:100,easing:'swing'});$toSlide.animate({left:'-'+(e.clientX-jQuery(this).offset()['left']-($slider.get(0).offsetWidth/2))*slideRatio+'px'},{queue:false,duration:100,easing:'swing'});$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px 0px');}});$sList.find('.left > a').mousedown(function(e){var p=($toSlide.position().left+(sliderWidth/2));var sliderP=-p/slideRatio;if(p>=0){$toSlide.animate({left:0+'px'},{queue:false,duration:100,easing:'swing'});$slider.animate({left:0+'px'},{queue:false,duration:100,easing:'swing'});$sList.find('.left > a').css('background-position','9px -52px');$sList.find('.right > a').css('background-position','9px 0px');}
else{$toSlide.animate({left:p+'px'},{queue:false,duration:100,easing:'swing'});$slider.animate({left:sliderP+'px'},{queue:false,duration:100,easing:'swing'});$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px 0px');}});$sList.find('.right > a').mousedown(function(e){var p=($toSlide.position().left-(sliderWidth/2));var sliderP=-p/slideRatio;if(sliderP>=sliderWidth){$toSlide.animate({left:'-'+(sliderWidth*slideRatio)},{queue:false,duration:100,easing:'swing'});$slider.animate({left:sliderWidth+'px'},{queue:false,duration:100,easing:'swing'});$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px -52px');}
else{$toSlide.animate({left:p+'px'},{queue:false,duration:100,easing:'swing'});$slider.animate({left:sliderP+'px'},{queue:false,duration:100,easing:'swing'});$sList.find('.left > a').css('background-position','9px 0px');$sList.find('.right > a').css('background-position','9px 0px');}});});}
function LoadSliderImages(sublist){var numImages=sublist.find('.item > a > .src').length;sublist.find('.item > a > .src').each(function(i){var img=new Image();var imgSrc=jQuery(this).html();var imgAlt=jQuery(this).parent().find('.alt').html();jQuery(this).parent().append(img);jQuery(img).load(function(){numImages--;if(numImages==0){if(sublist.attr('link')!=undefined){sublist.append('<span class="item more"><a href="'+sublist.attr('link')+'"></a></span>');}
SetSublist(sublist);}})
.error(function(){})
.attr('src',imgSrc).attr('alt',imgAlt);});}
function SetSublist(sublist){$sList.find('.item-sublist').each(function(i){var sublistWidth=0;jQuery(this).find('.item').each(function(i){sublistWidth+=jQuery(this).get(0).offsetWidth+20;jQuery(this).find('img:first').attr('title','');});sublistWidths[i]=sublistWidth;jQuery(this).css('width',sublistWidth);});StartSlider();}
});};jQuery(document).ready(function($){if(!stallSlider){buildSlider();}
var $tabbed=new Array();$('.tabbed-content').each(function(i){$tabbed[i]=$(this);$tabbed[i].find('.body > li').each(function(){if($(this).hasClass('selected')){$(this).css('z-index','10').css('position','absolute');}
else{$(this).css('z-index','0').css('position','absolute');}});$tabbed[i].find('.tabs > li > a').each(function(j){$(this).click(function(e){e.preventDefault();clearInterval(intID);intID=setInterval(nextTab,8000);if(!$(this).hasClass('selected')){$(this).parents('.tabs').find('.selected').each(function(){$(this).removeClass('selected');});$(this).addClass('selected');$tabbed[i].find('.body > li:eq('+j+')').css('z-index','5');$tabbed[i].find('.body > .selected').animate({opacity:0},200,function(){$tabbed[i].find('.body > li:eq('+j+')').css('z-index','10').addClass('selected');$(this).removeClass('selected').css('z-index','0').css('width','auto').css('opacity','1');});}});});});var intID=setInterval(nextTab,8000);function nextTab(){$('.tabbed-content').each(function(i){$tabbed[i].find('.tabs > li > .selected').each(function(){if($(this).parent().nextAll('li').length!=0){$(this).parent().next('li').find('a').click();}
else{$(this).parent().prevAll('li:last').find('a').click();}});});}
showFullDescriptionButton()
hideFullDescription();function hideFullDescription(){$('#fulldesc').hide();$('#fulldescButton').unbind('click',hideFullDescription).click(showFullDescription).removeClass("rolldown").addClass("rollup");}
function showFullDescriptionButton(){var shortd=$('#short-description > div:first-child').text();var full=$('#fulldesc').text();var fullHtml=$('#fulldesc').html();var descriptionType="";if($.trim(shortd)==$.trim(full))
var descriptionType="same";if($.trim(fullHtml)=="<div>None</div>")
var descriptionType="none";if($.trim(fullHtml)=="")
var descriptionType="empty";if(descriptionType=="")
$('#fulldescButton').css('display','block');}
function showFullDescription(){$('#fulldesc').show();$('#fulldescButton').unbind('click',showFullDescription).click(hideFullDescription).removeClass("rollup").addClass("rolldown");}
$('form').find('.email_address').each(function(){var defaultValue=$(this).attr('value');$(this).focus(function(){if($(this).attr('value')==defaultValue){$(this).attr('value','');}});$(this).blur(function(){if($(this).attr('value')==''||$(this).attr('value')==' '){$(this).attr('value',defaultValue);}});});$('form').find('input[name*="email_addr"]').each(function(){var defaultValue=$(this).attr('value');$(this).focus(function(){if($(this).attr('value')==defaultValue){$(this).attr('value','');}});$(this).blur(function(){if($(this).attr('value')==''||$(this).attr('value')==' '){$(this).attr('value',defaultValue);}});});});