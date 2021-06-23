import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import Header from './../../../../libs/components/src/lib/header/header';
import Home from './../../../../libs/components/src/lib/home/home';

export function App() {
  return (
   <div>
      <Header />
      <Home />
   </div>
    );
}

export default App;
