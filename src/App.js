import React, { useState } from 'react';

function App() {
  const [ myinfo , updatemyinfo ] = useState([]);
  const processstep = [
    {step : "워크플로워의 오차가 없는지 피그마로 회의진행 후 검수완료"},
    {step : "피그마에서 소스출력 / UI 및  스타일가이드제작"},
    {step : "레이아웃 파일제작 상단-> 하단 -> 사이드제작"},
    {step : "제작이슈 & 사용성개선 제안을 위한 중간보고"},
    {step : "개별제작"},
    {step : "디버그처리와 사용성테스트/ 디지털사후관리 메뉴얼제작 / 보고"}
  ]   

  return (
    <div>
      <h2>버튼클릭형이 아니라 시간차를 이용해서 하나씩 노출되는 스타일로 편집하기</h2>      
   {
    processstep.length > myinfo.length ?      
      <button onClick={ () => { 
            updatemyinfo([ ...myinfo, processstep[ myinfo.length ]]);
            //기존의 myinfo DB에 추가해서 새로운 processstep 데이터를 넣어서 값이 달라져서 랜더링한것임
            console.log(processstep.length, myinfo.length );           
       } }>저의 제작 프로세스를 단계별 소개합니다.</button>
      :
      <p>이런 제작 프로세스를 기반으로 귀사의 업무프로세스에 빠르게 적용할 수 있습니다.</p>
      }  
      <ul>
       {
        myinfo.map((item, index) => {
          return(
            <li key={'study'+index}>{index + 1}단계 : {item.step}</li>
          )
        })
       }
      </ul>       
    </div>
  );
}
export default App;