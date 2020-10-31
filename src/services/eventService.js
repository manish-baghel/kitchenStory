const apiUrl = process.env.SERVER_URL;

export const eventService = {
  allEvent,
  createEvent,
  deleteEvent,
};

function allEvent() {
  const url = `${apiUrl}/events`;
  const options = {
    method: "GET",
  };
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log("Error in allEvent eventService ===============");
      console.log(err);
    });
}

function createEvent(event) {
  const {id, title, description, capacity, region, imgUrl} = event;
  const url = `${apiUrl}/events`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      description,
      capacity,
      region,
      imgUrl,
    }),
  };
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log("Error in createEvent eventService ================");
      console.log(err);
    });
}

function deleteEvent(eventId) {
  const url = `${apiUrl}/events/${eventId}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  };
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log("Error in deleteEvent eventService ================");
      console.log(err);
    });
}
