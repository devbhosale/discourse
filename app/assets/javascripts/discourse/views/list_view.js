/**
  This view handles rendering of the header of the site

  @class ListView
  @auther Devdutta  added by Devdutta to update dropdown view by
  @extends Discourse.View
  @namespace Discourse
  @module Discourse
**/
Discourse.ListView = Discourse.View.extend({
  
  didInsertElement: function() {
  
  
     $('#category-filter').on('click',  function(e){
     $('#bi_viewby').text( 'View By | ' +  $(e.target).text() ) ;
     $("#bi_view_ul li > a").append($('<i></i>').addClass('fa-caret-down').addClass('fa') );
     });
     
     $('#bi_view_ul li a').text( 'View By | ' + $('#category-filter li.active a', '.list-controls').text()) ;
     $("#bi_view_ul li a").append($('<i></i>').addClass('fa-caret-down').addClass('fa') );
     
     
  }
});


