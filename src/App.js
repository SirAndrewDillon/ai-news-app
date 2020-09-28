import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = '678c28992df00a4e1be3058c03c917db2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command}) => {
                if(command === 'testCommand') {
                    alert('Code Executed')
                }
            }
        })
    }, [])

  return (
    <div>
      <h1>Alan AI News App</h1>
    </div>
  );
};

export default App;
