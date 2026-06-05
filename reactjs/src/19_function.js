import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './clock.css';
let today = new Date();
let current = {
     day: today.getDate(),
     month: today.getMonth() + 1,
     year: today.getFullYear(),
     hour: today.getHours(),
     minute: today.getMinutes(),
     second: today.getSeconds()
}

function getDateTime(now) {
     return (<div className="full-screen">
          <div className="time-card">
               <div className='date'>{now.day} / {now.month} / {now.year}</div>
               <div className="time">{now.hour}:{now.minute}:{now.second}</div>
          </div>
     </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(getDateTime(current));