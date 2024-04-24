

function Layout (Props){ 
  return (
    <>
    {Props.header} 
    레이어웃 크기는 가로{Props.width}, 세로 {Props.height}
    {Props.footer}
    </>
    
  ); 
}
export default Layout; 