import Title from "components/Title";
import TvNavbar from "components/TvNavbar";
import React, { useEffect, useState } from "react";
import ChannelList from "sections/TvHomepage/ChannelList";
import Api from "services/api";
import { helper } from "utils/helper";

function AllChannels() {

    const [channels, setChannels] = useState([]);

    const getAllChannels = () => {
        Api.getAllChannels(5, 'header').then((res) => {
            if(res && res.status === 200) {
              setChannels(res.data.data);
            }
        })
    }

    useEffect(() => {
        getAllChannels();
        helper.trackByMixpanel('All Channels Page View', {})
    }, [])

    return (
        <div className="container">
            <div className="mb-4 sm:mb-6 relative z-50">
                <TvNavbar />
            </div>
            <div className="mb-4 sm:mb-6 relative z-50">
                <Title className="font-medium mb-3">All Categories</Title>
            </div>
            <div className="mb-4 sm:mb-6 relative z-50">
                <ChannelList channels={channels} />
            </div>
        </div>
    );
}

export default AllChannels;
