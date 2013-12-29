/**
  This view handles rendering of the header of the site

  @class ListView
  @auther Devdutta  added by Devdutta to update dropdown view by
  @extends Discourse.View
  @namespace Discourse
  @module Discourse
**/
Discourse.ListView = Discourse.View.extend({
  templateName: 'list',
  
  didInsertElement: function() {
     
     $('#bi_viewby').text() = 'View By | ' + $('#category-filter li.active a', '.list-controls').text();
     alert($('#bi_viewby','.list-controls').text() + "***" + $('#category-filter li.active a','.list-controls').text() );
     
     this.$().on('click', '#category-filter', function(){
     $('#bi_viewby','.list-controls').text() = 'View By | ' + $('#category-filter li.active a','.list-controls').text();
     alert($('#bi_viewby','.list-controls').text() + "***" + $('#category-filter li.active a','.list-controls').text() );
      // do stuff with jQuery
     });
  }
});


