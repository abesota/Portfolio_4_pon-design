// headerの共通部分
$(function() {
  $.ajax({
    url: 'header.html', 
    dataType: 'html', 

    success: function (data) {
      $('#header').prepend(data);
    },
   
    error: function () {
      alert('load error!');
    },
  });
});

// 各ページのcontactの共通部分
$(function() {
  $.ajax({
    url: 'main_contact.html', 
    dataType: 'html', 
    
    success: function (data) {
      $('#main_contact').prepend(data);
    },

    error: function () {
      alert('load error!');
    },
  });
});

// footerの共通部分
$(function() {
  $.ajax({
    url: 'footer.html', 
    dataType: 'html', 
    
    success: function (data) {
      $('#footer').prepend(data);
    },

    error: function () {
      alert('load error!');
    },
  });
});