$('#food').click(function(){
  $(this).toggleClass('btn-primary')
  $(this).removeClass('btn-dark')
  $("#juices").toggleClass('btn-dark')
  $("#juices").removeClass('btn-primary')
  $("#food-menu").toggleClass('d-flex')
  $("#food-menu").removeClass('d-none')
  $("#juice-menu").toggleClass('d-none')
  $("#juice-menu").removeClass('d-flex')
});
$('#juices').click(function(){
  $(this).toggleClass('btn-primary')
  $(this).removeClass('btn-dark')
  $("#food").toggleClass('btn-primary')
  $("#food").removeClass('btn-dark')
  $("#food-menu").toggleClass('d-none')
  $("#food-menu").removeClass('d-flex')
  $("#juice-menu").toggleClass('d-flex')
  $("#juice-menu").removeClass('d-none')
});
