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
    $('#bi_viewby',this).text() = 'View By | ' + $('#category-filter li.active a',this).text();
    alert($('#bi_viewby',this).text() + "***" + $('#category-filter li.active a',this).text() )
  }
});


