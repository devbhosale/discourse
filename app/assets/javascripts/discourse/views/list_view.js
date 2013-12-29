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
     
     $('#bi_viewby').text( 'View By | ' + $('#category-filter li.active a', '.list-controls').text()) ;
     alert($('#bi_viewby','.list-controls').text() + "***" + $('#category-filter li.active a','.list-controls').text() );
     
     $('#category-filter').on('click',  function(e){
     $('#bi_viewby','.list-controls').text( 'View By | ' + $('#category-filter li.active a','.list-controls').text() ) ;     
     });
  }
});


