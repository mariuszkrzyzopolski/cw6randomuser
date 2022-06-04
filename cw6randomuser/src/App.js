import React from "react";

export default function ExerciseOne() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((result) => result.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  const handleRandomUserFormAPI = () => {
    fetch("https://randomuser.me/api/")
      .then((result) => result.json())
      .then((data) => setUser(data.results[0]));
  };

  return (
    <section>
      {user !== undefined ? (
        
        <div>
            
          <h1>{user.name.first} {user.name.last}</h1>
          <p>Nationality: {user.nat}</p>
          <p>Phone: {user.phone}</p>
          <p>From: {user.location.city}: {user.location.postcode}</p>
          <img
            src={user.picture.large}
          />
        </div>
      ) : (
        <li>User doesn't exist!</li>
      )}

      <button onClick={handleRandomUserFormAPI}>Get new user!</button>
    </section>
  );
}