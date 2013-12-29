/**
  This view handles rendering of the header of the site

  @class ListView
  @extends Discourse.View
  @namespace Discourse
  @module Discourse
**/
Discourse.ListView = Discourse.View.extend({
  
  
  didInsertElement: function() {

    var headerView = this;
    this.$('a[data-dropdown]').on('click.dropdown', function(e) {
      headerView.showDropdown($(e.currentTarget));
      return false;
    });
    this.$('a.unread-private-messages, a.unread-notifications, a[data-notifications]').on('click.notifications', function(e) {
      headerView.showNotifications(e);
      return false;
    });
    $(window).bind('scroll.discourse-dock', function() {
      headerView.examineDockHeader();
    });
    $(document).bind('touchmove.discourse-dock', function() {
      headerView.examineDockHeader();
    });
    this.examineDockHeader();

    // Delegate ESC to the composer
    $('body').on('keydown.header', function(e) {
      // Hide dropdowns
      if (e.which === 27) {
        headerView.$('li').removeClass('active');
        headerView.$('.d-dropdown').fadeOut('fast');
      }
      if (headerView.get('editingTopic')) {
        if (e.which === 13) {
          headerView.finishedEdit();
        }
        if (e.which === 27) {
          return headerView.cancelEdit();
        }
      }
    });
  }
});


