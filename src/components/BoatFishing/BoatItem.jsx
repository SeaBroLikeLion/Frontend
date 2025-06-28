import { useNavigate } from 'react-router-dom';


function BoatItem() {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reservation'); // 예약 페이지로 이동
  };

  return (
    <article
    onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '50px',
        marginBottom: '0px',
        cursor: 'pointer'
      }}
    >
      {/* 왼쪽: 물때 / 시간 */}
      <div
        style={{
          display: 'flex',
          borderRadius: '20px',
          overflow: 'hidden',
          width: '300px',
          height: '200px',  
          borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <div
          style={{
            backgroundColor: '#ddd',
            width: '60%',
          }}
        />
        <div
          style={{
            backgroundColor: '#005b9e',
            width: '40%',
            color: '#fff',
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>물때</span>
          <span>00시</span>
        </div>
      </div>

      {/* 중앙: 선박 정보 */}
      <section style={{ flex: 1, marginLeft: '16px' }}>
        <div style={{margin: '10px 10px',fontSize: '15px', color: '#888' }}>[지역명]</div>
        <h3 style={{ fontSize: '20px',margin: '10px 10px' }}>0000호</h3>
        <p style={{ fontWeight: 'bold',fontSize: '14px', margin: '2px 10px' }}>어종</p>
        <p style={{ fontWeight: 'bold',fontSize: '15px', color: '#888', margin: '30px 10px' }}>
          남은자리 / <span style={{ color: '#0077cc' }}>00 명</span>
        </p>
      </section>

      {/* 오른쪽: 후기 및 금액 */}
      <aside style={{ textAlign: 'right' }}>
        <p style={{ fontSize: '25px', margin: '13px 0' }}>조항후기 00건</p>
        <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#000000' }}>
          <span style={{ backgroundColor: '#ddd', padding: '0 4px', borderRadius: '2px' }}>00</span> / 5.0
        </div>
        <p style={{ fontSize: '25px', fontWeight: 'bold', color: '#005b9e', marginTop: '50px' }}>
          금액 000000 원
        </p>
      </aside>
    </article>
  );
}

export default BoatItem;
