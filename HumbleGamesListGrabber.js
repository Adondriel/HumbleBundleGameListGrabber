function appendGames(){
  $.each($(".game-name h4"), function(key, value){

    list = localStorage.getItem("list");
    list = list + "\n" + value.title;
    localStorage.setItem("list", list);
    if(key === $(".game-name h4").length-1){
      $("div.js-jump-to-page.jump-to-page")[$("div.js-jump-to-page.jump-to-page").length - 1].click();
    }
  });
};

function doGamesList(){
  localStorage.setItem("list", "");
  while($("i.hb.hb-chevron-right").length !==0){
    appendGames();
  }
  appendGames();
  console.info(localStorage.getItem("list"));
};
doGamesList();
