function FilterBar() {
  const filters = ['전체', '날짜순', '가격순', '지역별', '어종별'];

  return (
    <nav style={{ margin: '20px 50px' }}>
      <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: 0 }}>
        {filters.map((label, idx) => (
          <li key={label}>
            <button
              style={{
                padding: '6px 8px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                backgroundColor: idx === 0 ? '#005b9e' : '#fff',
                color: idx === 0 ? '#fff' : '#686868',
                fontWeight: 'bold',
                fontSize: '20px',
              }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FilterBar;


