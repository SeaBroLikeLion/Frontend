function NoticeCard({ time, notice, fishType, remaining, price }) {
  return (
    <article
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingRight: '10px',
        marginBottom: '20px',
        borderRadius: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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
          <span>{time}</span>
        </div>
      </div>

      {/* 가운데: 공지 내용 */}
      <div style={{ flex: 1, marginLeft: '16px' }}>
        <p style={{ marginLeft: '10px',marginBottom: '20px',fontWeight: 'bold', fontSize: '22px', color: '#888' }}>공지사항</p>
        <p style={{ marginLeft: '10px', fontSize: '25px', marginBottom: '30px'}}>{notice}</p>
        <p style={{ marginBottom: '10px',marginLeft: '10px',fontWeight: 'bold', fontSize: '20px', color: '#555' }}>{fishType}</p>
        <p style={{ marginLeft: '10px',fontSize: '18px', color: '#888', fontWeight: 'bold' }}>
          남은자리 / <span style={{ color: '#0077cc' }}>{remaining} 명</span>
        </p>
      </div>

      {/* 오른쪽: 금액 및 버튼 */}
      <div style={{ textAlign: 'center' }}>
        <button
          style={{
            padding: '8px 20px',
            backgroundColor: '#005b9e',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            marginBottom: '50px',
            fontSize: '20px',
          }}
        >
          예약하기
        </button>
        <p style={{ marginRight: '20px',fontSize: '30px', fontWeight: 'bold', color: '#005b9e' }}>
          {price} 원
        </p>
      </div>
    </article>
  );
}

export default NoticeCard;
