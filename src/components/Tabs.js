import React, { useState } from 'react';

function Tabs({
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
                            Tab content {option.id}
                    </div>
                    ) : null
                }
            </div>
        </div>
    );
}

export default Tabs;
