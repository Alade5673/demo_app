import './App.css';
import Home from './screens/Home';
import SendMoney from './screens/sendmoney/SendMoney';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import { useEffect, useState, createContext } from 'react';
// import "circular-std";
export const AppContext = createContext({color: null, setColor: null})

function App() {
  const [visibility, setVisibility] = useState('fixed') 
  const [color, setColor] = useState(null)
  

  return (
    <AppContext.Provider value={{color, setColor}}>
    <Router>
      <div className="App bg-cover fixed w-full -z-20 h-screen" onClick={(e) => e.stopPropagation()}>
        <div className={`${visibility}
        w-full h-full  -z-10 top-[10%] left-[0] right-0  bg-[rgba(255, 255, 255, 0.6)] backdrop-blur-md`} onClick={(e) => e.stopPropagation()} ></div>
        <div onClick={(e) => e.stopPropagation()} className='w-full h-full relative z-20' style={{ backgroundColor: "rgba(115, 121, 127, 0.4)" }} >
          <Routes>
            <Route exact path='/' element={<Home setVisibility={setVisibility} />} />
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

        </div>

        {/* <div>
            <button onClick={switchTheme}>Hello</button>
          </div> */}
      </div>
    </Router>
  </AppContext.Provider>

  );
}

export default App;

