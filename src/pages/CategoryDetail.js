import Footer from 'components/Footer';
import TvNavbar from 'components/TvNavbar';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelList from 'sections/TvHomepage/ChannelList';
import Api from 'services/api';

function CategoryDetail() {

    const [channelList, setChannelList] = useState([]);
    const location = useLocation();

    const getChannelByCategoryId = (categoryId) => {
        Api.getCannelListByCategoryId(categoryId, 'channel-detail').then((res) => {
          if(res && res.status === 200) {
            setChannelList(res.data.data);
          }
        } );
    }

    useEffect(() => {
        const queryParam = new URLSearchParams(location.search);
        const categoryId = queryParam.get('categoryId');
        getChannelByCategoryId(categoryId);
    }, [])
    
    return (
        <div className="container">
            <div className="mb-4 sm:mb-6 relative z-50">
                <TvNavbar />
            </div>
            <div className="mb-4 sm:mb-6 relative z-50">
                <ChannelList channels={channelList} />
            </div>
            <Footer container="container" />
        </div>
    );
}

export default CategoryDetail;
