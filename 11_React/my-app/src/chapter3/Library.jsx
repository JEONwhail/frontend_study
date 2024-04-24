import Book from "./Book";

function Library (){ 
  return (
<>
{/*컴포넌트 만들 때 다른 컴포넌트를 조합해서  */}
<Book name="모던 자바스크립트" numOfPage={300} />
<Book name="다른 책 1" numOfPage={400} />
<Book name="모던 자바스크립트다른 책 1" numOfPage={500} />

</>

    
  ); 

}
export default Library; 