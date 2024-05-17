import Quiapo1 from "../assets/quiapo1.jpg";
import Quiapo2 from "../assets/quiapo2.jpg";
import Binondo1 from "../assets/binondo1.jpg";
import Binondo2 from "../assets/binondo2.jpg";
import DestinationData from "./DestinationData";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Destinations with Jesus</h1>
      <p>Journeying with Jesus, every path becomes a sacred destination.</p>

      <DestinationData
        className="first-des"
        heading="Minor Basilica of the Black Nazarene"
        text="Quiapo Church, officially known as the Minor Basilica of the Black Nazarene, stands as an iconic symbol of faith and devotion in the heart of Manila, Philippines. Nestled amidst the bustling streets of Quiapo district, this historic church is renowned for enshrining the revered image of the Black Nazarene, a dark-skinned statue of Jesus Christ bearing the cross. The church's facade, adorned with intricate details and twin belfries, welcomes throngs of devotees and visitors, especially during the annual Feast of the Black Nazarene, where millions gather to participate in the grand procession, seeking blessings and miracles. Inside the sanctuary, flickering candles cast a gentle glow upon rows of faithful kneeling in prayer, while the scent of incense fills the air, creating an atmosphere of reverence and spirituality. Quiapo Church serves not only as a place of worship but also as a beacon of hope and resilience, embodying the enduring faith of the Filipino people."
        img1={Quiapo1}
        img2={Quiapo2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Minor Basilica of Saint Lorenzo Ruiz"
        text="Binondo Church was originally built by the Dominican friars in 1596 to serve the Chinese immigrants who settled in the area, making it one of the oldest places of Christian worship in the Philippines. The current structure, however, dates back to 1852, as the earlier church buildings were destroyed by various natural disasters and fires."
        img1={Binondo1}
        img2={Binondo2}
      />
    </div>
  );
};

export default Destination;
