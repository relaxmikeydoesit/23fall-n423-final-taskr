import React from "react";
import { useRouter } from "next/router";
import { Loader, Image } from "semantic-ui-react"; 
import styles from '@/styles/Date.module.css';
export default function dateInput() {
    const [dateInfo, setDateInfo] = React.useState( {loading: true} );
    const router = useRouter();

React.useEffect(function() {
    if (dateInfo.name !== router.query.name && router.query.name) {
        console.log('load in date info', router.query.name);
        fetch(`/event/${router.query.name}`)
        .then((r) => r.json())
        .then(function (r) {
            setDateInfo (r);
        })
        .catch((e) => setDateInfo({ loading: false, id: 0 }));
        }
    });
    //console.log(router.query);
    return (
      <> 
 {/* <h1>Pokemon Name:  {router.query.name}</h1> */}
 <Loader active={dateInfo.loading || dateInfo.name !== router.query.name} />
    {
        //if this statement
        // pokemonInfo.id ? 
        //then do this
        <>
        <div className={styles.dateInfo}> 
        <p className={styles.signika}>On This Day</p>
        </div>
        </>
        //else do this
    }: <>
        {isNaN(dateInfo.id) 
        ? <h2>Searching for a date</h2> : <h2>Data Not Found.</h2>
        }
        Data Not Found.
        </>
    }

 </>
        
    );}
