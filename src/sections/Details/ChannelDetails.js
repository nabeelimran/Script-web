import Tabs from 'components/Tabs';
import React from 'react';

const tabsOptions = [
    {
        id: 1,
        label: 'Upcoming programs',
        tagId: '#upcomingPrograms',
        tagIdLabel: 'upcomingPrograms'
    },
    {
        id: 2,
        label: 'Past programs',
        tagId: '#pastPrograms',
        tagIdLabel: 'pastPrograms'
    },
    {
        id: 3,
        label: 'About',
        tagId: '#about',
        tagIdLabel: 'about'
    },
]

function ChannelDetails({
    channel,
    pastShows,
    currentShows
}) {
    
    return (
        <div className="bg-shade-grayis rounded-2xl h-autho w-auto">
            <div className="mb-4 sm:mb-6 relative z-50 pl-5 py-5">
                <p>
                {channel.channelName}
                </p>
            </div>
            <div className="mb-4 sm:mb-6 relative z-50">
                {
                    (pastShows && pastShows.length > 0) || (currentShows && currentShows.length > 0) ? 
                        <Tabs tabsOptions={tabsOptions} pastShows={pastShows} currentShows={currentShows} /> : null
                }
                
            </div>
        </div>
    );

}

export default ChannelDetails;
