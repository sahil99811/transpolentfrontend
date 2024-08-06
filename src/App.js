import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {getScrapping} from './apis/Scrape'
import {toast}  from 'react-hot-toast'
import Card from './components/Card';
function App() {
  const [domain,setDomain]=useState('')
  const [result,setresult]=useState([]);
  const onClickHandler=async()=>{
    if(!domain){
      toast.error("Domain Name is required");
      return;
    }
    const result=await getScrapping();
    setresult(result);
    setDomain('');
  }
  return (
    <div className="App">
      <section>
         <div >
          <label>Domain Name</label>
          <input placeholder="Enter A domain name..." onChange={(event)=>{setDomain(event.target.value)}}/>
         </div>
         <button onClick={onClickHandler}>Start Scraping</button>
      </section>
      <section>
            {
              result?.data?.map((value,index)=>{
                <Card/>
              })
            }
      </section>
    </div>
  );
}

export default App;
