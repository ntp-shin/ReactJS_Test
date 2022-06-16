import './App.css';
import { useState } from 'react';

const gifts = ['Hoa', 'Keo', 'Tien', 'Bong'];
function App() {
  //hook
  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: '20',
    address: 'Hanoi',
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'Hello World',
    });
  }

  const [gift, setGift] = useState('Chua co phan thuong');
  const handleGift = () => {
    var random = Math.floor(Math.random() * gifts.length);
    setGift(gifts[random]);
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
      <h2>{gift}</h2>
      <button onClick={handleGift}>Random Gift</button>
    </div>
  );
}

export default App;
