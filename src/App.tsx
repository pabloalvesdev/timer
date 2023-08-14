import React, { useState } from 'react';
import Watch from './Components/Watch';
import ITask from './Interfaces/ITask';
function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { position: 1, title: 'Primeira Task', duration: 10, state: 'waiting' },
    { position: 2, title: 'Segunda Task', duration: 5, state: 'waiting' }
  ]);
  return (
    <>
      <Watch t={tasks} />
    </>
  );
}

export default App;
