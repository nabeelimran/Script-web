import Footer from "components/Footer";
import Title from "components/Title";
import TvNavbar from "components/TvNavbar";
import React, { useEffect, useState } from "react";
import CategoryList from "sections/TvHomepage/CategoryList";
import Api from "services/api";
import { helper } from "utils/helper";

function AllCategory() {
    const [category, setCategory] = useState([]);

    const getAllCategores = () => {
        Api.getCategory(1, 'category').then((res) => {
            if(res && res.status === 200) {
                setCategory(res.data.data.category);
            }
        })
    }

    useEffect(() => {
        getAllCategores();
        helper.trackByMixpanel('All Category Page View', {})
    }, [])

    return (
        <div>
            <div className="container">
                <div className="mb-4 sm:mb-6 relative z-50">
                    <TvNavbar />
                </div>
                <div className="mb-4 sm:mb-6 relative z-50">
                    <Title className="font-medium mb-3">All Categories</Title>
                </div>
                <div className="mb-4 sm:mb-6 relative z-50">
                    <CategoryList category={category}></CategoryList>
                </div>
            </div>
            <Footer container="container" />
        </div>
    );
}

export default AllCategory;