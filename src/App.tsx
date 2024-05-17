import React, { useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import Home from './routes/Home';
import About from './routes/About';
import Events from './routes/Events';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';
import ChatBot from 'react-simple-chatbot';
import botAvatar from './boticon.png';
import AdminPanel from './admin/AdminPanel';
import Members from './admin/Members';
import AddMember from './admin/AddMember';
import Announcement from './admin/Announcement';
import AddAnnouncement from './admin/AddAnnouncement';
import EditMember from './admin/EditMember';
import EditAnnouncement from './admin/EditAnnouncement';
import Event from './admin/Event';
import AddEvents from './admin/AddEvents';
import PrayerRequestList from './admin/PrayerRequestList';
import Messenger from './messenger/Messenger';
import LogIn from './auth/LogIn';
import Login from './messenger/Login';
import Register from './messenger/Register';
import AdminList from './admin/Admin List';
import Admin from './admin/Admin';
import EditAdmin from './admin/EditAdmin';

function App() {
  const [showChat, setShowChat] = useState(false);
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(window.speechSynthesis);
  const currentStepIdRef = useRef<string | null>(null);

  const toggleChat = () => {
    if (showChat && speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel();
    }
    setShowChat(!showChat);
  };

  const handleStepChange = (step: any) => {
    currentStepIdRef.current = step.id;
  };

  const stopSpeechSynthesis = () => {
    if (speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel();
    }
  };
  const closeChatbotTab = () => {
    setShowChat(false);
  };


  // Define your content here
  const content = 'Welcome to our website!';

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home content={content} />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="/members"element={<Members/>} />
          <Route path="/addmember" element={<AddMember/>} />
          <Route path="/editmember/:id" element={<EditMember/>}/>
          <Route path="/announcement" element={<Announcement/>}/>
          <Route path="/addannouncement"element={<AddAnnouncement/>}/>
          <Route path="/editannouncement/:id" element={<EditAnnouncement/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/addevent" element={<AddEvents/>}/>
          <Route path="/prayerrequestlist" element={<PrayerRequestList />}/>
          <Route path="/messenger/*" element={<Messenger/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/adminlist" element={<AdminList/>}/>
          <Route path="/admin-list" element={<Admin/>}/>
          <Route path="/editadmin/:id" element={<EditAdmin/>}/>
        </Routes>
        {showChat && (
          <ChatBot
            speechSynthesis={{ enable: true, lang: 'en' }}
            headerTitle= {
              <> "Blessing Buddy"
               {showChat && (
          <button onClick={stopSpeechSynthesis} className="stopButton" style={{ marginLeft: '10px' }}>
            Stop
          </button>
           
        )}
        </>
            }
            botAvatar={botAvatar}
            className="customChatBot"
            steps={[
              {
                id: 'WelcomeMessage',
                message:
                  'Welcome, beloved members of our sacred community. May the light of divine wisdom guide our conversation today. How may I assist you on your spiritual journey?',
                trigger: '1',
              },
              {
                id: '1',
                options: [
                  { value: 1, label: 'Service Schedule', trigger: 'ServiceSched' },
                  { value: 2, label: 'Upcoming Events', trigger: 'UpcomingEvents' },
                  { value: 3, label: 'About CCC', trigger: 'AboutCCC' },
                ],
              },
              // More... & End
              {
                id: 'moremore',
                options: [
                  { value: 5, label: 'More...', trigger: '1' },
                  { value: 6, label: 'End', trigger: 'endConvo' },
                ],
              },
              {
                id: 'endConvo',
                message: 'Come talk to Blessing Buddy again if you have any questions!',
                end: true,
              },
              // For service schedule
              {
                id: 'ServiceSched',
                message: 'Here is today’s updated schedule for the daily church activities, updated as of April 25, 2024:',
                trigger: 'SS1',
              },
              {
                id: 'SS1',
                message:
                  "Morning sermon: 9 am - 10:30 am,\n" +
                  "Evening vespers: 7 pm,\n" +
                  "Prayer circle: (after sermons),\n" +
                  "Daily prayer mass: 1 pm,\n" +
                  "Bible study group: 3 pm.",
                trigger: 'SS2',
              },
              {
                id: 'SS2',
                message:
                  "Don't forget to visit our website for daily devotionals, announcements, and resources to nourish your spiritual journey. Let's continue to support and uplift one another with love and compassion.",
                trigger: 'moremore',
              },
              // For upcoming events
              {
                id: 'UpcomingEvents',
                message: "We're excited to share our upcoming events designed to nurture spiritual growth, foster fellowship, and serve our community:",
                trigger: 'UE1',
              },
              {
                id: 'UE1',
                message:
                  "1) Community Clean-Up Day: Join us on Saturday, April 13th, from 9:00 AM to 12:00 PM as we come together to beautify our neighborhood. Let's make a positive impact by cleaning up parks, streets, and public spaces. All ages welcome!",
                trigger: 'UE2',
              },
              {
                id: 'UE2',
                message:
                  "2) Spring Potluck Luncheon: Celebrate the season of renewal with good food and great company at our Spring Potluck Luncheon on Sunday, April 21st, immediately following the morning service. Bring your favorite dish to share and enjoy a delicious feast together.",
                trigger: 'UE3',
              },
              {
                id: 'UE3',
                message:
                  "3) Weekly Bible Study: Dive deeper into the teachings of Scripture and engage in meaningful discussions every Wednesday evening at 7:00 PM in the church library. Explore the Word together and grow in your faith journey.",
                trigger: 'UE4',
              },
              {
                id: 'UE4',
                message:
                  "For more details, please visit our website or contact our church office. We look forward to seeing you at these wonderful events!",
                trigger: 'moremore',
              },
              // For get involved
              {
                id: 'GetInvolved',
                message: "Thank you for expressing interest in becoming an integral part of our vibrant community! There are numerous ways you can get involved and make a meaningful impact:",
                trigger: 'GI1',
              },
              {
                id: 'GI1',
                message:
                  "1) Volunteer Opportunities: We welcome volunteers to assist with various initiatives, such as community outreach, event planning, and support services. Join us in spreading kindness and compassion to those in need.",
                trigger: 'GI2',
              },
              {
                id: 'GI2',
                message:
                  "2) Connect with Others: Build lasting friendships and support networks within our loving community, fostering growth and spiritual connection.",
                trigger: 'GI3',
              },
              {
                id: 'GI3',
                message:
                  "3) Event Participation: Attend our events, workshops, and gatherings to connect with fellow members and deepen your spiritual practice. Your presence and participation enrich our community and create a welcoming atmosphere for all.",
                trigger: 'GI4',
              },
              {
                id: 'GI4',
                message:
                  "4) Join a Study Group: Engage in transformative discussions and delve deeper into the teachings of the Bible with our welcoming study groups.",
                trigger: 'moremore',
              },
              // For About CCC
              {
                id: 'AboutCCC',
                message:
                  "At Christ Centered Community, we're dedicated to nurturing spiritual growth, fostering fellowship, and serving our local community, all rooted in the teachings of Christ. Here's a brief overview of who we are and what we stand for:",
                trigger: 'ACC1',
              },
              {
                id: 'ACC1',
                message:
                  "1) Our Mission: To glorify God by creating a welcoming community where individuals can grow spiritually, connect with others, and serve with love and compassion.",
                trigger: 'ACC2',
              },
              {
                id: 'ACC2',
                message:
                  "2) Our Values: We are guided by the principles of faith, love, compassion, and service, striving to embody Christ's teachings in all aspects of our lives.",
                trigger: 'ACC3',
              },
              {
                id: 'ACC3',
                message:
                  "3) Our Community: We welcome people from all walks of life to join us in worship, fellowship, and service, embracing diversity and fostering inclusivity.",
                trigger: 'ACC4',
              },
              {
                id: 'ACC4',
                message:
                  "4) Our Commitment: We are committed to creating a safe and supportive environment where individuals can explore their faith, ask questions, and grow spiritually at their own pace.",
                trigger: 'moremore',
              },
            ]}
            handleEnd={toggleChat}
            handleStepChange={handleStepChange}
          />
        )}
        <button onClick={toggleChat} className={showChat ? 'chatButton active' : 'chatButton' }>
          {showChat ? '' : ''}
          </button>

      </header>
    </div>
      );
}

export default App;