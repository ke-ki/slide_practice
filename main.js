$(function () {

  //画像切り替え

  //要素クリックで実行
  $('.change-btn').click(function () {

    //acticeクラス代入
    var displaySlide = $('.active');

    //既についているactiveクラスを外す
    displaySlide.removeClass('active');

    //クリックしたボタンがnextクラスを持っている場合
    if ($(this).hasClass('next-btn')) {
      //次のスライドにactiveを付ける
      displaySlide.next().addClass('active');

      //違う場合
    } else {
      //前のスライドにactiveクラスを付ける
      displaySlide.prev().addClass('active');
    }

    //表示されている要素のインデックス番号取得
    var slideIndex = $('.slide').index($('.active'));

    //一度change-btnを見せる
    $('.change-btn').show();

    //もし、０の場合
    if (slideIndex === 0) {
      //prev-btnを隠す
      $('.prev-btn').hide();
      //最後の要素になった場合
    } else if (slideIndex === $('.slide').length - 1) {
      //next-btnを隠す
      $('.next-btn').hide();
    }


  });


});


//スライドをクリックしたとき//
$('.slide').click(function () {
  //モーダル用のactiveクラスを外す
  $('.modal-list').removeClass('modal-active');
  //表示されている要素のインデックス番号取得
  var modalSlide = $('.slide').index($('.active'));
  //モーダルをフェードイン
  $('.modal-wrapper').fadeIn();
  //クリックした要素と同じ番号のmoda-slideにactiveを付ける
  $('.modal-list').eq(modalSlide).addClass('modal-active');

});


//閉じるボタン
$('.close-modal').click(function () {
  $('.modal-wrapper').fadeOut();
});
