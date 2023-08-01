import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import TextEditor from './components/TextEditor';

const socket = socketIOClient('http://localhost:4001');

const App: React.FC = () => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    socket.on('text change', (newValue: string) => {
      setText(newValue);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleChange = (newValue: string) => {
    setText(newValue);
    socket.emit('text change', newValue);
  };

  return (
    <div className="App">
      <TextEditor onChange={handleChange} value={text} />
    </div>
  );
};

export default App;
