import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Fade from 'react-bootstrap/Fade'
import { useEffect,useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko'


function App() {
  const [open, setOpen] = useState(false);

  const [time, setTime] = useState(moment());
  moment.locale();
  const time2 = time.clone()
  const time3 = time.clone()
  const time4 = time.clone()
  time2.add(360,'m')
  time3.add(450,'m')
  time4.add(540,'m')
  useEffect(() => {
    const id = setInterval(() => {
      setTime(moment());
    }, 1000);
    return (() => clearInterval(id))
  }, []);

  return (
    <div className="App">

      <div>
        <img className="Moon" alt="moon" src="/image/moon.png"></img>
      </div>

      <div>
      현재 시간
      </div>

      <div className="TimeNow">
       {time.format('LTS')}
      </div>

      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        지금 잠들기
      </Button>
      <Fade in={open}>
        <div className="FadeText">

          <span className="TimeLater">
         {time2.format('LT')} 
         </span>
         &nbsp;
         혹은 
         &nbsp;
         <span className="TimeLater">
         {time3.format('LT')} 
         </span>
         &nbsp;
         또는
         &nbsp;
         <span className="TimeLater">
         {time4.format('LT')} 
         </span>
         &nbsp;
         에 알람을 맞추세요.

         <div>
          렘 수면의 주기는 90분으로 렘수면 상태에서 잠에서 깰 경우 더 개운합니다.
        </div>
        </div>


      </Fade>

      </div>
  );
}


export default App;
