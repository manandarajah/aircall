import React, { useState } from 'react';
import Card from 'react-bootstrap/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActivityDetail = ({ activityId }) => {
  const [activity, setActivity] = useState(null);

  fetch('https://aircall-job.herokuapp.com/activities/'+activityId)
    .then(response => response.json())
    .then(data => setActivity(data));

    console.log(activity);

  return (
    <Card>
      {activity?
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{activity.to ? activity.to : "Unknown Caller ID"}</Card.Title>
          <Card.Text>Call type: <strong>{activity.call_type}</strong></Card.Text>
          <Card.Text>Call direction: <strong>{activity.direction}</strong></Card.Text>
          <Card.Text>Call duration: <strong>{activity.duration}</strong></Card.Text>
          <Card.Text style={{ float: "right"}}><strong>{activity.created_at}</strong></Card.Text>
        </Card.Body>
        : <div></div>
      }
    </Card>
  );
}

export default ActivityDetail;
