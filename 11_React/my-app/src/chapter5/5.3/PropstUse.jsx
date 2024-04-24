import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";


function PropstUse (){ 
  return (
    <>
    <Profile 
    // 키 값 쌍의 형태로 자식 컴포넌트에 props를전달 할 수 있음
    // 정수, 변수, 다른 컴포넌트 등 값을 넣을 떼는  ( ) 사용
    // 문자열은 () 생략가능
    //  name(문자) introduction(문자) viewCount(문자)
    name = "John" 
    introduction = "안녕하세요!" 
    viewCount={10} 
    />
    {/* <Profile name="" introduction="" /> */}

    <Layout
    width = {2560}
    height = {1440}
    // props로 다른 컴포넌트를 넘기는 것도 가능함
    header = {<Header/>}
    footer = {<Footer/>}
    />


    </>

  ); 
}
export default PropstUse; 