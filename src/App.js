import './App.css';
import { initializeSnowplow, contextValidators, clone } from '@inner-source/loblaw-snowplow-helper';
import { useEffect, useState } from 'react';
import ReactGA from "react-ga4";

const App = () => {
  const [initialized, setInitialized] = useState(false);

  const onClickGtag = () => {
    // @ts-ignore
    ReactGA.initialize('UA-000000-01');

  }

  const onClickHelperLibrary = () => {
    if (initialized) return;
    // @ts-ignore
    const dataLayer = window.dataLayer || (window.dataLayer = []);
    initializeSnowplow(dataLayer, {
      appId: 'pcexpress-web-dev',
      firstPartyCollectorEndpoint: 'spmini.loblaws.ca',
      thirdPartyCollectorEndpoint: 'spmini.loblaws.ca'
    });
    setInitialized(true);
  }

  const sendEvent = () => {
    let ad = {
      campaign_id: 'x'
  }

  let ad2 = clone(ad);

  console.log(JSON.stringify(ad));
  console.log(JSON.stringify(ad2));

  ad.campaign_id = 'y';

  console.log(JSON.stringify(ad));
  console.log(JSON.stringify(ad2));
    console.log('validate user', contextValidators.user({}));
  }

  return (
    <div className="App">
      <div>
        <h1> GTAG </h1>
        <button onClick={onClickGtag}>
          Initialize 
        </button>
      </div>
      <div>
        <h1> HELPER LIBRARY (1) </h1>
        <button onClick={onClickHelperLibrary}>
          Initialize 
        </button>
        <button onClick={sendEvent}>
          click
        </button>
      </div>
    </div>
  );
}

export default App;
