$(function() {
    $('.phonecell').click(function() {
      var PhoneNumber = $(this).text();
      PhoneNumber = PhoneNumber.replace('Phone:', '');
      window.location.href = 'tel://' + PhoneNumber;
    });
});