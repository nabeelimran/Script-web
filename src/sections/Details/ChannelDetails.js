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
            <div className="mb-4 sm:mb-6 relative z-50">
                <Tabs tabsOptions={tabsOptions}></Tabs>
            </div>
        </div>
    );

}

export default ChannelDetails;
