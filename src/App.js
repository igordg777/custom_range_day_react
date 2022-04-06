import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [valueDate] = useState(new Date().getDate());
  const [monthDays] = useState(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate());
  const [dateView, setDateView] = useState(`${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}.${new Date().getMonth() < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}.${new Date().getFullYear()}`);
  const [chooseDate, setChooseDate] = useState('');

  function setDate(e) {
    let now = `${e < 10 ? e = '0' + e : e}.${new Date().getMonth() < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}.${new Date().getFullYear()}`
    setDateView(now)
  }

  function chooseDateView(e) {
    setChooseDate(`Выбранная дата ${dateView}`)

  }
  return (
    <div className="App">
      <h1>Выбор даты текущего месяца</h1>
      <Button onClick={chooseDateView}>{dateView}</Button>
      <div className='dateView'>
        <Slider defaultValue={valueDate} max={monthDays} onChange={setDate} tooltipVisible={false} />
      </div>
      <h2>{chooseDate}</h2>

    </div>
  );
}

export default App;
