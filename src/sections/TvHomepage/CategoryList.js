import Title from "components/Title";
import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryList({ category }) {

  const navigate = useNavigate();

  const viewChannelDetail = (categoryId) => {
    navigate({
      pathname: "/category-detail",
      search: `?categoryId=${categoryId}`,
    });
  }

  return (
    <div className="flex flex-wrap">
      {category && category.length > 0
        ? category.map((c, index) => (
            <div
              className="bg-shade-grayis rounded-2xl h-[150px] w-1/5 mr-5 mb-5 flex flex-col items-center justify-center"
              key={index}
              onClick={() => viewChannelDetail(c.id)}
            >
              <div className="w-1/4 mb-4">
                <img src={c.image} alt="" className="w-full h-auto invert" />
              </div>
              <Title
                className="text-center text-primary font-semibold"
                variant="20"
              >
                {c.name}
              </Title>
            </div>
          ))
        : null}
    </div>
  );
}

export default CategoryList;
