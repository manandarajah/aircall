import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityFeed from './components/ActivityFeed.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';

const App = () => {
  const [activityId, setActivityId] = useState(null);

  useEffect(() => {
    console.log(activityId);
  }, [activityId])

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        {activityId?
          <ActivityDetail activityId={activityId} />
          : <ActivityFeed OnChange={id => setActivityId(id)}/>
        }
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
