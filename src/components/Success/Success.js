import React from 'react';
import {useEffect} from 'react';


const Success = ({history, auth, db}) => {
  useEffect(()=>{
    auth.checkAuthenticated()
        .then((val)=>{
          auth.setAuthenticated(val);
          db.setUser(val);
          history.push('/');
        });
  }, []);

  return (
    <div> Success </div>
  );
};


export default Success;
