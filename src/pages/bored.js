import React from 'react';
import styles from '@/styles/Bored.module.css';
import { useRouter } from 'next/router';
import { Button, Image } from 'semantic-ui-react';
import useAppState from '@/useHooks/useAppState';
// import { Loader, Image } from "semantic-ui-react"; 
// import styles from '@/styles/boredButton.module.css'

export default function App(){
    const [activity, setActivity] = useState([]);
    const appState = useAppState();

    console.log(appState);
    }


      function getActivity() {
        fetch(`http://www.boredapi.com/api/activity/`)
        .then((r) => r.json())
        .then ((r) => {
            setActivity(r);
        });
    }

    function saveActivity(currentActivity) {
        appState.updateAppState({ saveActivities: appState.saveActivities.concat(currentActivity) });
      }
  
    return (
      <>
    <div className={styles.wrapper}>
      <Image src='flash-hero.jpeg' className={styles.flash}/> 
      <div className={styles.boredContainer}>
        <Button size='large' color='black' content='Bored?' onClick={getActivity}></Button>
        <div className='suggestion'>
            <h1>Activity: {activity.activity}</h1>
            <Button size='large' color='purple' content='Save' onClick={saveActivity}></Button>
        </div>
    </div>
    </div>
    </>
    );
