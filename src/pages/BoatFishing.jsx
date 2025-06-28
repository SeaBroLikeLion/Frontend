import FilterBar from '../components/BoatFishing/FilterBar';
import BoatList from '../components/BoatFishing/BoatList';
import Header from '../components/common/Header';

function BoatFishing() {
  return (
    <>
      <Header />
      <main style={{ padding: '50px' }}>
        <h1 style={{ margin: '45px', fontSize: '50px', fontWeight: 'bold' }}>
          선상낚시 (0000/00)
        </h1>
        <FilterBar />
        <BoatList />
      </main>
    </>
  );
}

export default BoatFishing;







