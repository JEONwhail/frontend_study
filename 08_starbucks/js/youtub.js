// iframe Player API를 비동기로 로드
// 쓰는 이유?
// <iframe> 태그만 써도 유튜브 영상 삽입이 가능한데 태그의 속성만으로 커스텀 하기에는 한계가 있음
// api를 사용하면 다양한 명령으로 동영상 제어 가능

//(참고)Iframe(Inline Frame) : HTML 문서 내에 다른 문서를 삽입하는데 사용


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() { //라이브러리라 이 함수의 이름을 찾아 실행
  player = new YT.Player('player', { //id가 player인 요소
    // height: '360',
    // width: '640',
    videoId: 'u0aLYuJcex8',  //최초 재생할 유튜브 영상 ID
    playerVars :{ // 더 자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay : true, //자동재생 유무
      loop : true, //반복 재생 유무(플레아리스트 옵션 필수)
      playlist :'u0aLYuJcex8' //번복 재생할 유튜브 영상 id목록
    },
      events: {
      // 영상이 준비되었을 때 지정한 함수를 실행
      onReady: function (event) {
        // event.target : 재생되고 있는 영상
        event.target.mute(); //음소거
      }
    }
  });
}