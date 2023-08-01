import React, { useEffect, useState } from 'react';
import TextEditor from './components/TextEditor';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:4001');

const App: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (newValue: string) => {
    setText(newValue); // update the text state whenever the user types
    console.log({newValue})
    socket.emit('text change', newValue);
  };

  useEffect(() => {
    socket.on('text change', (newValue: string) => {
      setText(newValue); // update the text state whenever the server sends updates
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <TextEditor onChange={handleChange} value={text} />
    </div>
  );
}

export default App;
