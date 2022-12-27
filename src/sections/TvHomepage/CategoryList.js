import Title from 'components/Title';
import React from 'react';

function CategoryList({
    category
}) {
    return (
        <div className="flex flex-col flex-wrap lg:flex-row">
            {
                category && category.length > 0 ? 
                    category.map((c, index) => (
                        <div className="bg-shade-grayis rounded-2xl py-6 px-8 h-auto w-1/5 mr-5 ml-0 mb-5" key={index}>
                            <div className="mx-auto w-12 xl:w-40 h-12 xl:h-20 overflow-hidden mb-4">
                                <img src={c.image} alt="" className="w-full h-full invert" />
                            </div>
                            <Title className="text-center text-primary font-semibold mb-3"
                                variant="20">
                                    {c.name}
                                </Title>
                        </div>
                    ))
                : null
            }
        </div>
    )    
}

export default CategoryList;
