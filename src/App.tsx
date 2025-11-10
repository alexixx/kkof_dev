import { useState } from 'react';
import './App.css';
import PageTerminal from '@/themes/terminal/PageTerminal';
import PageMinimal from '@/themes/minimal/PageMinimal';

function App() {
  const [theme] = useState(2);

  switch (theme) {
    case 1:
      return <PageTerminal />;

    case 2:
      return <PageMinimal />;

    default:
      break;
  }
}

export default App;
