import React from 'react';
import Title from './Title';

function ChannelShowCard({
    show
}) {
    return (
        <div className="bg-grey-1 rounded-md overflow-hidden mb-5">
            <img src={show.videoThumbnailUrl} className="w-full block object-cover h-[200px]" alt="" />

            <div className="px-4 py-4 pb-8">
                <Title className="font-medium mb-3" variant="18">
                    {show.title}
                </Title>
            </div>
        </div>
    );

}

export default ChannelShowCard;
