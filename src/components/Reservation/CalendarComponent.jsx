import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import NoticeCard from "./NoticeCard";

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  // 날짜별 예시 데이터
  const noticeData = {
    "2025-06-28": [
      { time: '04시', notice: '광어 출조 있음', fishType: '광어', remaining: 2, price: '60000' }
    ]
  };

  // 날짜 선택 시
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // 날짜를 YYYY-MM-DD 형식으로 변환
  const formatDateKey = (date) => date.toISOString().split('T')[0];

  const notices = selectedDate ? noticeData[formatDateKey(selectedDate)] || [] : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '100px' }}>
      <div
        style={{
          width: '1200px',
          backgroundColor: '#ffffff',
          padding: 'px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          fontSize: '60px',
        }}
      >
        <Calendar onChange={handleDateChange} />
      </div>

      {selectedDate && (
        <div style={{ marginTop: '40px', width: '800px' }}>
          <h2>{formatDateKey(selectedDate)} 공지사항</h2>
          {notices.length > 0 ? (
            notices.map((n, i) => <NoticeCard key={i} {...n} />)
          ) : (
            <div style={{
              marginTop: '20px',
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              해당 날짜의 공지사항이 없습니다.
            </div>
          )}
        </div>
      )}
    </div>
  );
}



