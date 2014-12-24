Template.chatMessage.helpers({



  elapseTime: function() {
      var elapse = moment(this.createdAt) - moment(new Date());
      return moment.duration(elapse).humanize();
  }
})




