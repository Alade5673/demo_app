import './App.css';
import Home from './screens/Home';
import SendMoney from './screens/sendmoney/SendMoney';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MoveMoney from './screens/sendmoney/MoveMoney';
import Send from './screens/sendmoney/Send';
import SendNext from './screens/sendmoney/SendNext';
import Success from './screens/sendmoney/Success';
import TopUp from './screens/topup/TopUp';
import TopNext from './screens/topup/TopNext';
import Fund from './screens/topup/Fund';
import Card from './screens/topup/Card';
import CardNext from './screens/topup/CardNext';
import TopSuccess from './screens/topup/TopSuccess';
import useLocalStorage from 'use-local-storage'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

  return (
    <Router>
      <div className="App" data-theme={theme}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/move-money' element={<MoveMoney />} />
             <Route path='/send-money' element={<SendMoney />} />
             <Route path='/send' element={<Send />} />
             <Route path='/send-next' element={<SendNext />} />
             <Route path='/success' element={<Success />} />
             <Route path='/top-up' element={<TopUp />} />
             <Route path='/top-next' element={<TopNext />} />
             <Route path='/fund' element={<Fund />} />
             <Route path='/card' element={<Card />} />
             <Route path='/card-next' element={<CardNext />} />
             <Route path='/top-success' element={<TopSuccess />} />
          </Routes>

          <div>
            <button onClick={switchTheme}>Hello</button>
          </div>
      </div>
    </Router>
    
  );
}

export default App;
