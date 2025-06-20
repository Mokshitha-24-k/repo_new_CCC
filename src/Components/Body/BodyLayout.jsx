import React, { useState, useEffect } from 'react';
import CardMain from '../CardMain'; 

function BodyLayout() {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    // fetch('/Data/CardData.json')
    //   .then(response => response.json())
    //   .then(data => setHackathons(data))
    //   .catch(error => console.error('Error:', error)); 

    async function fetchData () {
      try{
        const response= await fetch('/Data/CardData.json');
        const data =await response.json();
        setHackathons(data);
        console.log(data);
      }
      catch(error){
        console.log("Error:", error);
      }
      
    }
    fetchData();

  }, []);

  return (
    <>
      <CardMain hackathons={hackathons} />
    </>
  );
}

export default BodyLayout;
