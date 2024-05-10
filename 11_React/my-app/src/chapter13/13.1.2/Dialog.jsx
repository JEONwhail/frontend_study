// 기존에 만들었더 WelcomeDialog흫 범용적인 Dialog로 리펙터링
// 만약 컨트롤 스페이스 안된다? 그 탭 열어두고 해보면 될 수도 있음
import FancyBorder from "../13.1.1.1/FancyBorder";

function Dialog(props) {
  return (
    // 타이틀과 메세지, 컬러를 어떻게 사용하느냐에 따라
    // 인사말이 될 수도 있고 경고가 될 수도 있음
    // 범용적인 Dialog로 만들어서 이를 구체화 하여 사용
    // 대표적인예 : 확인모달(확인,취소), 경고모달 등
    <FancyBorder color= {props.color}>
    <h1 className="Dialog-title">
      {props.title}
    </h1>
    <p className="Dialog-message">
    {props.message}
    </p>
  </FancyBorder>
  );
};

export default Dialog;