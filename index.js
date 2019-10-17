window.onload = function() {
  // necessary for dropdown menus to function properly:
  // https://stackoverflow.com/a/25347431
  $('.ui.dropdown').dropdown();
};

//toggle between Collection tabs
$(document).ready(function(){
  $('.tabular a').click(function(event){
    event.preventDefault();

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var activeTab = $(this).attr("href");
    $('.item-content').not(activeTab).css("display","none");
    $(activeTab).fadeIn();
  });
});


let contents = `
  
    <div class="blurring dimmable image">
      <div class="ui inverted dimmer">
        <div class="content">
          <div class="center">
            <div class="ui primary button">Add Friend</div>
          </div>
        </div>
      </div>
      <img src="./images/alice.jpg">
    </div>
    <div class="content">
      <a class="header">Alice in Wonderland Collection</a>
      <div class="meta">
      </div>
    </div>
    <div class="extra content">
      <span class="left floated">
        $29.99
        </span>
        <span class="right floated star">
        <i class="star icon"></i>
          Favorite
      </span>
    </div>
  
`

window.onload = function(){
  let cardsDiv = document.querySelector('#cards')
  let card = document.createElement('div')
  card.classList.add("ui", "card")
  card.innerHTML = contents
  cardsDiv.appendChild(card) 
}
/*
let data = {
  title: Alice in Wonderland
  header: 
  price: $24.99
  img: ./images/alice.jpg
}

*/