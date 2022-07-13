import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/card';

const ActivityFeed = ({ OnChange }) => {
  const [activities, setActivities] = useState([]);

  fetch('https://aircall-job.herokuapp.com/activities')
    .then(response => response.json())
    .then(data => setActivities(data));

  return (
    <div>
    {
      activities.map((activity, index) => {

        var date = activity.created_at.split("T");
        date[0] = index == 0 || !activities[index > 0 ? index-1 : 0].created_at.includes(date[0]) ? date[0] : "";

        return (
          <div key={index}>
            <h6 className={`${date[0] ? "center-text-line" : ""}`}>
              <span>
                {date[0]}
              </span>
            </h6>
            <Card onClick={() => OnChange(activity.id)}>
              <Card.Body>
                <Card.Title>{activity.to ? activity.to : "Unknown Caller ID"}</Card.Title>
                <Card.Text>tried to call <strong>{activity.from}</strong><span className="time-float">{date[1]}</span></Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })
    }
    </div>
  );
}

export default ActivityFeed;
