import Footer from 'components/Footer';
import TvNavbar from 'components/TvNavbar';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelDetails from 'sections/Details/ChannelDetails';
import Api from 'services/api';
import LocalServices from 'services/LocalServices';

function ChannelDetail() {

    const [channelDetail, setChannelDetail] = useState({});
    const [pastShows, setPastShows] = useState([]);
    const [currentShows, setCurrentShows] = useState([]);
    const token = LocalServices.getServices('token') || null;
    const location = useLocation();

    const getChannelByChannelId = (channelId) => {
        Api.getChannelDetailByChannelId(channelId, false, '', 'channel-detail').then((res) => {
          if(res && res.status === 200) {
            setChannelDetail(res.data.data);
          }
        } );
    }

    const getPastSchedulingDetails = (channelId) => {
        Api.getPastSchedulingDetails(channelId, 'channel-detail').then((res) => {
            if(res && res.status === 200) {
                setPastShows(res.data.data);
            }
        })
    }

    const getSchedulingDetailsByDate = (channelId) => {
        const date = new Date();
        const dateStr =
        date.getFullYear() + "-" +
       ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
       ("00" + date.getDate()).slice(-2) + " " +
       ("00" + date.getHours()).slice(-2) + ":" +
       ("00" + date.getMinutes()).slice(-2) + ":" +
       ("00" + date.getSeconds()).slice(-2);
        Api.getSchedulingDetailsByDate(channelId, dateStr, 'channel-detail').then((res) => {
            if(res && res.status === 200) {
                setCurrentShows(res.data.data);
            }
        })
    }

    useEffect(() => {
        const queryParam = new URLSearchParams(location.search);
        const channelId = queryParam.get('channelId');
        if(channelId) {
            getChannelByChannelId(channelId);
        }
        
        if(token) {
            getPastSchedulingDetails(channelId);
            getSchedulingDetailsByDate(channelId);
        }
    }, [])
    
    return (
        <div>
            <div className="container">
                <div className="mb-4 sm:mb-6 relative z-50">
                    <TvNavbar />
                </div>
                <div className="mb-4 sm:mb-6 relative z-50">
                    <ChannelDetails channel={channelDetail} 
                        pastShows={pastShows} currentShows={currentShows} />
                </div>
            </div>
            <Footer container="container" />
        </div>
        
    );
}

export default ChannelDetail;
