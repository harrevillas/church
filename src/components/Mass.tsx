import "./EventsStyles.css";
import EventsData from "./EventsData";
import CCF1 from "../assets/ccf1.jpg";
import Makati from "../assets/makati.jpg";
import Intramuros from "../assets/intramuros.png";

function Mass() {
  return (
    <div className="events">
      <h1>Recent Events</h1>
      <p>You can discover different mass or events.</p>
      <div className="eventscard">
        <EventsData
          image={CCF1}
          heading="Youth Group Fellowship"
          text="Connect with fellow young believers at CCF Alabang's Youth Group Fellowship for a night of fun, friendship, and faith-building activities."
        />

        <EventsData
          image={Makati}
          heading="Community Outreach Program "
          text="Make a difference in the lives of others by volunteering at Santuario de San Antonio Parish's Community Outreach Program, serving marginalized communities in Makati City."
        />

        <EventsData
          image={Intramuros}
          heading="Christmas Choir Concert "
          text="Experience the joy of the Christmas season through uplifting music at Manila Cathedral's Christmas Choir Concert set against the historic backdrop of Intramuros."
        />
      </div>
    </div>
  );
}

export default Mass;
