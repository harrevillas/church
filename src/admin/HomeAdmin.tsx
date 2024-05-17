import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './HomeAdmin.css';

interface HomeAdminProps {
  onContentChange: (content: string) => void;
}

const HomeAdmin: React.FC<HomeAdminProps> = ({ onContentChange }) => {
  const [content, setContent] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchContent();
    fetchPhoto();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await axios.get('http://localhost/reacttypescript/home_content_api/home.php');
      setContent(response.data.content);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const fetchPhoto = async () => {
    try {
      const response = await axios.get('http://localhost/reacttypescript/home_content_api/home.php');
      setPhoto(response.data.photoUrl);
    } catch (error) {
      console.error('Error fetching photo:', error);
    }
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;
    setContent(newContent);
    onContentChange(newContent);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const saveContent = async () => {
    try {
      await axios.post('http://localhost/reacttypescript/home_content_api/home.php', { content });
      console.log('Content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const uploadPhoto = async () => {
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append('photo', selectedFile);
        await axios.post('http://localhost/reacttypescript/home_content_api/home.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Photo uploaded successfully!');
        fetchPhoto();
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <div className="home-admin-container">
      <h1 className="title">Home Page Content</h1>
      <div className="content-section">
        <h2>Content</h2>
        <textarea
          value={content}
          onChange={handleContentChange}
          rows={10}
          cols={50}
          placeholder="Enter content for home page..."
          className="content-textarea"
        ></textarea>
        <button onClick={saveContent} className="save-button">
          Save Content
        </button>
      </div>
      <div className="photo-section">
        <h2>Photo</h2>
        {photo && (
          <div className="photo-container">
            <img src={photo} alt="Current Home Photo" className="current-photo" />
            <small className="current-photo-label">Current Photo</small>
          </div>
        )}
        <div className="upload-section">
          <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
          <br />
          <button onClick={uploadPhoto} className="upload-button">
            Upload Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
