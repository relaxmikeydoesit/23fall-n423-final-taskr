import React from "react";
import axios, {isCancel, AxiosError} from 'axios';
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";
// import { Loader, Image } from "semantic-ui-react"; 
// import styles from '@/styles/boredButton.module.css'

export default function ActivityName() {
    const [activityInfo, setActivityInfo] = React.useState( {loading: true} );
    const router = useRouter();

    function getActivityInfo (r) {
        setActivityInfo(r);
    }

React.useEffect(function() {
        fetch(`http://www.boredapi.com/api/activity/`)
        .then((r) => r.json())
        .then(function (r) {
            getActivityInfo (r);
        });
    });
    //console.log(router.query);
    return (
      <> 
      <Button onClick={getActivityInfo.resp}>Bored?</Button>
 <h1>Activity: {getActivityInfo} </h1>


 </>
        
    )
}