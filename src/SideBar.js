import React, { useState, useEffect } from 'react';
import SideBarRow from './SideBarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './Stateprovider';
import db from './firebase';

function SideBar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SideBarRow src={user.photoURL} title={user.displayName}/>
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Info Center"/>
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SideBarRow Icon={PeopleIcon} title="Friends"/>
            <SideBarRow Icon={ChatIcon} title="Messages"/>
            <SideBarRow Icon={StorefrontIcon} title="Market Place"/>
            <SideBarRow Icon={VideoLibraryIcon} title="Video"/>
            <SideBarRow Icon={ExpandMoreIcon} title="Explore More"/>
        </div>
    )
}

export default SideBar
