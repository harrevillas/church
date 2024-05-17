import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./AdminPanel.css";
import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';
import Members from './Members';
import AddMember from './AddMember';
import Announcement from './Announcement';
import AddAnnouncement from './AddAnnouncement';
import EditMember from './EditMember';
import EditAnnouncement from './EditAnnouncement';
import Event from './Event';
import AddEvents from './AddEvents';
import PrayerRequestList from './PrayerRequestList';
import AdminList from './Admin List';
import Admin from './Admin';
import EditAdmin from './EditAdmin';

function AdminPanel() {
  const [content, setContent] = useState<string>('');

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/members" element ={<Members/>}/>
        <Route path="/addmember" element={<AddMember/>}/>
        <Route path="/editmember/:id" element={<EditMember/>}/>
        <Route path="/announcement" element={<Announcement/>}/>
        <Route path="/addannouncement" element={<AddAnnouncement/>}/>
        <Route path="/editannouncement" element={<EditAnnouncement/>}/>
        <Route path="/event" element={<Event />}/>
        <Route path="/addevent" element={<AddEvents/>} />
        <Route path="/prayerrequestlist" element={<PrayerRequestList/>} />
        <Route path="/adminlist" element={<AdminList/>}/>
        <Route path="/admin-list" element={<Admin/>}/>
        <Route path="/editadmin/:id" element={<EditAdmin/>}/>
      </Routes>
      <Main /> 
    </>
  );
}

export default AdminPanel;