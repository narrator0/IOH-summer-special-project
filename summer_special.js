/***************************************
  @author arfullight

  @date   2016.09.08

  Copyright (C) IOH 開放個人經驗平台
 **************************************/

/**
 * show img by id 
 * @param  { String } targetId
 * @param  { jquery node } rootNode
 */
function showTargetImage(targetId, rootNode) {

  // clear active
  rootNode.find('.intro-img-item-active')
           .removeClass('intro-img-item-active');

  // add active to target
  rootNode.find(targetId)
          .addClass('intro-img-item-active');
}


function showClickedImage(clicked, rootNode){

  // clear active
  rootNode.find('.intro-img-item-active')
          .removeClass('intro-img-item-active');

  // add active to target
  if(clicked == ''){
    rootNode.find('.intro-img-item:eq(0)')
            .addClass('intro-img-item-active');
  }else{
    rootNode.find(clicked)
            .addClass('intro-img-item-active');
  }
  
}

/**
 * init the Intro
 * @param  { String } id [the id of the target div]
 */
function startLocationIntro(id) {

  // declare variable
  var rootId    = id,
      rootNode  = $(rootId),
      nailThumb = rootNode.find('.thumb-top'),
      mapMark   = rootNode.find('.intro-map-icon'),
      clicked   = '';
  
  /**** nail thumb ****/

  // set nailThumb mouse over
  nailThumb.mouseover(function(){
    showTargetImage($(this).attr('thumb-target'), rootNode);

    // active marker
    rootNode.find($(this).attr('thumb-target') + '-marker')
            .addClass('intro-map-icon-active');
  });

  // set nailThumb mouse leave
  nailThumb.mouseleave(function(){
    showClickedImage(clicked, rootNode);

    // clear active
    if(clicked != $(this).attr('thumb-target')){
      rootNode.find($(this).attr('thumb-target') + '-marker')
              .removeClass('intro-map-icon-active');
    }
  });

  // set nailThumb click
  nailThumb.click(function(){
    var target = $(this).attr('thumb-target');

    // clear active class
    $('.thumb-top-active').removeClass('thumb-top-active');

    // add active class
    if(clicked != target)
      $(this).toggleClass('thumb-top-active');

    // clear active marker
    $('.intro-map-icon-active').removeClass('intro-map-icon-active');

    // active marker clicked
    $(target + '-marker').addClass('intro-map-icon-active');

    if(clicked == target)
      clicked = '';
    else
      clicked = target;
  });

  /**** map mark ****/

  // set map mark mouseover
  mapMark.mouseover(function(){
    showTargetImage($(this).attr('thumb-target'), rootNode);

    // active nail thumb
    rootNode.find($(this).attr('thumb-target') + '-nail-thumb')
            .addClass('thumb-top-active');
  });

  // set map mark mouseleave
  mapMark.mouseleave(function(){
    var target = $(this).attr('thumb-target');

    showClickedImage(clicked, rootNode);

    // clear nail thumb active
    if(clicked != target){
      rootNode.find(target + '-nail-thumb')
              .removeClass('thumb-top-active');
    }
  });

  // set map mark click
  mapMark.click(function(){
    var target = $(this).attr('thumb-target');

    // clear active mark
    rootNode.find('.intro-map-icon-active')
            .removeClass('intro-map-icon-active');

    // add active class
    if(clicked != target)
      $(this).toggleClass('intro-map-icon-active');

    // clear active nail thumb
    rootNode.find('.thumb-top-active')
            .removeClass('thumb-top-active');

    // add active to target nail thumb
    $(target + '-nail-thumb').addClass('thumb-top-active');

    if(clicked == target)
      clicked = '';
    else
      clicked = target;
  });
}

startLocationIntro('#usa-intro');
