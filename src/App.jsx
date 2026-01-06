import { useState } from 'react'
import './App.css'
import 첫화면 from './이미지/첫화면.png'
import 상담신청 from './이미지/상담신청.png'
import 세이브 from './이미지/세이브.png'
import 일번 from './이미지/일번.png'
import 인간 from'./이미지/dlsrks.png'
import 육번 from './이미지/육번.gif'
import 진행전 from'./이미지/진행 전.png'
import 진행후 from'./이미지/진행 후.png'
import 화살표 from'./이미지/화살표.png'


const data = [
  { product: '직장인대환대출', condition: '35세 / 직장인 / 신용점수 772점', amount: '7,811만원' },
  { product: '직장인대환대출', condition: '48세 / 직장인 / 신용점수 831점', amount: '6,320만원' },
  { product: '직장인대환대출', condition: '35세 /프리랜서  / 신용점수 783점', amount: '8,200만원' },
  { product: '직장인대환대출', condition: '50세 / 직장인 / 신용점수 764점', amount: '7,542만원' },
  { product: '직장인대환대출', condition: '42세 / 직장인 / 신용점수 810점', amount: '8,090만원' },
  { product: '직장인대환대출', condition: '47세 / 프리랜서  / 신용점수 797점', amount: '5,460만원' },
  { product: '직장인대환대출', condition: '39세 / 직장인 / 신용점수 785점', amount: '3,108만원' },
  { product: '직장인대환대출', condition: '28세 / 직장인 / 신용점수 672점', amount: '4,780만원' },
  {product: '직장인대환대출', condition: '31세 / 직장인 / 신용점수 791점', amount: '9,280만원' },
   { product: '직장인대환대출', condition: '62세 / 프리랜서 / 신용점수 613점', amount: '6,718만원' },


]



function App() {
 

  return (
    <div>
      {/* 헤더 영역 */}
      <header className="첫화면">
        <div className='첫화면-inner'>
          <p className='세이브'>
            <img src={세이브} alt="세이브" />
          </p>
          <p className='이자'>이자 걱정, 이제 그만!</p>
          <p className='이자'>최대 <span className='억'>3억</span>까지 채무통합</p>
          <p className='일번'>
            <img src={일번} alt="일번" className="일번" />
          </p>
          <p className='상담신청'>
            <img src={상담신청} alt="상담신청" className="상담신청"/>
          </p>
        </div>
      </header>

      {/* 고객 사례 섹션 */}
      <section>
        <div className='두달락'>
        <div className='이미지'>
          {/* 사람이미지 공간 */}
          <img src={인간} className='인간'/>
          <h1 className='김땡땡'>김OO</h1>
          <div className='중소'>
            <p className='중소1'>중소기업근로자/ 연봉5천만원/재직기간2년</p>
            <p className='중소2'>부담되는 고금리 기대출 때문에 신청</p>
          </div>
          <div className='통합'>
            <p className='통합1'>통합으로 (월 불입금 50만원 절약) </p>
            <p className='통합2'>생계 여유자금 발생</p>
          </div>
        </div>

        <div className='표'>
          {/* 표 이미지 3개 넣어야함 */}
        </div> 
        <div className='대박표'>
<img src={진행전} className='진행전'/>
<img src={화살표}className='화살표'/>
<img src={진행후}className='진행후'/>
        </div>

        
        </div>
      </section>

      {/* 진행 불가 안내 섹션 */}
      <section>
        <div className='고객'>
          <h1 className="고객">회생,회복,파산 최근 5년이내 진행자는 진행 불가</h1>
          {/* 표 작업 가능 */}
        </div>
      </section>

      {/* 진행절차 안내 섹션 */}
      <section className='정신'>
        <div className='정신1'>
        <div className='삼번'>
          <p className='진행'>진행절차를 모르시겠다고요?</p>

          <div className='묶음'>
            <p className='본인'>복잡한 본인의 대출현황을</p>
            <span className='간단'>간단하고 안전하게</span>
            <p className='정리'>정리해 드리겠습니다.</p>
          </div>  

          <div className='후후에'>
            <p className='후에'>상담 후에 결정하셔도 충분합니다.</p>
            <p className='후에1'>단 한번의 선택으로 앞으로 10년이 편해지십니다.</p>
          </div>  </div>

          <div className='세입'>
            <div>
              <p className='론'>세이브론의</p>
              <p className='론'>빠르고 간편한</p>
              <p className='론'>채무통합절차</p>
            </div>

            <div className='근로'>
              <p>근로소득이 2000만원 이상이라면 남녀노소 누구나!</p>
              <p>채무가 3000만원이라는 조건만 맞는다면</p>
              <p>복잡한 절차 없이 상담부터 실행까지 원스톱으로</p>
              <p>단 한번의 선택으로 10년이 편안해집니다.</p>
              <p>지금 바로 무료상담을 통해 조건을 확인하세요.</p>
            </div>
          </div>
        </div>

      </section>

      {/* 진행 불가 안내 텍스트 섹션 */}

      <section>
  <div className="사번">
    <p className='단'>
      단, 회생ㆍ회복ㆍ파산 진행이력이 5년이내 있으면 진행이 불가합니다.
    </p>
  <div className="table-wrapper">
  <table className="approval-table">
    <thead>
      <tr>
        <th>승인상품</th>
        <th>승인조건</th>
        <th>승인금액</th>
      </tr>
    </thead>
  </table>

  <div className="rolling-body">
    <table className="approval-table">
      <tbody>
        {data.map((item, i) => (
          <tr key={`a-${i}`}>
            <td>{item.product}</td>
            <td>{item.condition}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>

      <tbody>
        {data.map((item, i) => (
          <tr key={`b-${i}`}>
            <td>{item.product}</td>
            <td>{item.condition}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  </div>
</section>
    
      {/* 채무통합 솔루션 섹션 */}
      
      <section>
        <div className='신청'>
          <p className='채무'>채무통합 솔루션이 필요하세요?</p>
          <div>
            <p className='조회'>신용조회 없는 1분 상담으로</p>
            <p className='조회'>높은금리의 대출이자를 절반 이하로 줄이세요.</p>
          </div>
        </div>
      </section>

      {/* 마지막 이미지 섹션 */}
      <section>
        <div claassName="육번">
          <img src={육번} alt="육번" className="육번" />
        </div>
      </section>
      </div>
  )
}

export default App