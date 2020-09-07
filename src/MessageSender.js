import React, { useState } from 'react';
import './MessageSender.css';
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from './Stateprovider';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imgURL,setImgURL] = useState('');


    const handleChange = e => {
        e.preventDefault();
            db.collection("posts").add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                profilePic:user.photoURL,
                username:user.displayName,
                image:imgURL,
            });
        setImgURL('');
        setInput('');
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} 
                    onChange={e => setInput(e.target.value)}
                    className="messageSender__input" 
                    placeholder={`Whats on your mind, ${user.displayName}?`}/>

                    <input value={imgURL} 
                    onChange={e => setImgURL(e.target.value)}
                    placeholder="Image URL (Optional)"/>
                    <button onClick={handleChange}>Hidden button</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__options">
                        <VideocamIcon style={{ color: "red"}}/>
                        <h3>Live Video</h3>
                </div>
                <div className="messageSender__options">
                        <PhotoLibraryIcon style={{ color: "green"}}/>
                        <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__options">
                        <EmojiEmotionsIcon style={{ color: "orange"}}/>
                        <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
