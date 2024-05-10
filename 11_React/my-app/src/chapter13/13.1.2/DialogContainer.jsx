import Dialog from "./Dialog";

function DialogContainer() {
  return (
    <>
    {/* WelcomeDialog */}
    <Dialog 
      title = "✨🎆🎇Welcome To The Show🎇🎆✨"
      message="박성진! 강영현! 김원필! 윤도운!"
      color="blue"/>
      <br/>
      {/* AlterDialog */}
    <Dialog 
      title = "데이식스 좋아해라"
      message="박성진! 강영현! 김원필! 윤도운!"
      color="red"/>



    </>
  );
};

export default DialogContainer;