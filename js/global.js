// global.js

// $('.devices-grid ul').mixItUp({
//     animation: {
//     duration: 350,
//     effects: 'fade translateZ(-360px) stagger(20ms)',
//     easing: 'ease'
//     }
// });
// jQuery(document).ready(function($){
//     var filter_tab = $('.filter-tab .placeholder a');
//     $('.filter-tab li').on('click', function(event){
//         var selected_filter = $(event.target).data('type');
//         if( filter_tab.data('type') == selected_filter ) {
//         } else {
//             $('.filter-tab .selected').removeClass('selected');
//             $(event.target).addClass('selected');
//         }
//     });
//     $(window).on('scroll', function(){
//         (!window.requestAnimationFrame) ? stickFilters() : window.requestAnimationFrame(stickFilters);
//     });

//     function stickFilters() {
//         var offsetTop = $('.devices-content').offset().top,
//             scrollTop = $(window).scrollTop();
//         ( scrollTop >= offsetTop - 20 ) ? $('.devices-content').addClass('is-sticky') : $('.devices-content').removeClass('is-sticky');
//     }
// });

$(function(){
  $('#Container').mixItUp();
});