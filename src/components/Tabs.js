import React, { useState } from 'react';
import ChannelShowCard from './ChannelShowCard';

function Tabs({
    pastShows,
    currentShows,
    tabsOptions
}) {

    const [openTab, setOpenTab] = useState(1);

    return (
        <div>
            <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
                role="tablist">
                {
                    tabsOptions && tabsOptions.length > 0 ? tabsOptions.map((option, index) =>
                        <li className="nav-item" role="presentation" key={index}>
                            <a href={option.tagId} className="nav-link block font-medium text-xs leading-tight
                            uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100
                            focus:border-transparent active
                            " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target={option.tagId} role="tab" aria-controls="tabs-home"
                            aria-selected="true" onClick={e => {
                                e.preventDefault();
                                setOpenTab(option.id)
                            }}>
                                {option.label}
                            </a>
                        </li>
                    ) : null
                }
            </ul>
            <div class="tab-content pb-5 px-6" id="tabs-tabContent">
                {
                    tabsOptions && tabsOptions.length > 0 ? tabsOptions.map((option, index) => 
                    <div className= {openTab === option.id ? "block tab-pane fade show active" : "hidden"}
                        id={option.tagIdLabel} role="tabpanel" aria-labelledby="tabs-home-tab">
                            {console.log(pastShows, currentShows, 'show')}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
                            {
                                option.tagIdLabel === 'upcomingPrograms' && currentShows && currentShows.length > 0 ? 
                                    currentShows.map((show, index) => <ChannelShowCard show={show} key={index} /> ) : null
                            }
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
                            {
                                option.tagIdLabel === 'pastPrograms' && pastShows && pastShows.length > 0 ? 
                                    pastShows.map((show, index) => <ChannelShowCard show={show} key={index} />) : null        
                            }
                            </div>
                    </div>
                    ) : null
                }
            </div>
        </div>
    );
}

export default Tabs;
