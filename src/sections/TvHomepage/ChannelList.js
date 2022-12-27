import React from 'react';

function ChannelList({
    channels
}) {
    return (
        <div className="flex flex-col flex-wrap lg:flex-row">
            {
                channels && channels.length > 0 ? 
                    channels.map((channel, index) => (
                        <div className="bg-shade-grayis rounded-2xl py-6 px-8 h-auto w-1/5 mr-5 ml-0 mb-5" key={index}>
                            <div className="mx-auto w-12 xl:w-40 h-12 xl:h-20 overflow-hidden mb-4">
                                <img src={channel.image} alt="" className="w-full h-full" />
                            </div>
                        </div>
                    ))
                : null
            }
        </div>
    )    
}

export default ChannelList;
