import Header from '../components/common/Header';
import List from '../components/Reservation/List';
import CalendarComponent from '../components/Reservation/CalendarComponent';

function Reservation() {
  return (
    <>
      <Header />
      <main style={{ padding: '50px' }}>
        <h1 style={{ margin: '45px', fontSize: '50px', fontWeight: 'bold' }}>
          [경기] 000호
        </h1>
        
        {/* 리스트 + 달력 수평 배치 */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 400px' }}>
            <List />
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <CalendarComponent />
          </div>
        </div>
      </main>
    </>
  );
}

export default Reservation;

