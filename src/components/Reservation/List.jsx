function List() {
  const items = ['실시간 예약', '선박소개', '공지사항', '조황정보', '조황후기'];

  return (
    <aside
      style={{
        border: '3px solid #ccc',
        borderRadius: '20px',
        padding: '20px',
        width: '400px',
        backgroundColor: '#fff',
        marginLeft: '50px'
      }}
    >
      {items.map((text, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '20px',
          }}
        >
          <span
            style={{
              fontWeight: 'bold',
              color: index === 0 ? '#0077cc' : '#000',
              fontSize: '25px',
              margin: '5px'
            }}
          >
            {text}
          </span>
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#e0e0e0',
              borderRadius: '3px',
            }}
          />
        </div>
      ))}
    </aside>
  );
}

export default List;

