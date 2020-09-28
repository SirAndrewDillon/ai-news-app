import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from './components/NewsCards/NewsCards'

const alanKey = '678c28992df00a4e1be3058c03c917db2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if(command === 'newHeadlines') {
                   setNewsArticles(newsArticles)
                }
            }
        })
    }, [])

  return (
    <div>
      <h1>Alan AI News App</h1>
      <NewsCards articles={articles} />
    </div>
  );
};

export default App;
