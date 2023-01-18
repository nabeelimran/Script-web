import Title from "components/Title";
import TvNavbar from "components/TvNavbar";
import React from "react";
import { helper } from "utils/helper";

function Download() {

  const scriptNodeBuildList = [
    {
      title: 'Windows',
      image: '/images/os/windows.svg',
      link: '',
    },
    {
      title: 'Linux',
      image: '/images/os/linux.svg',
      link: ''
    },
    {
      title: 'Apple Mac',
      image: '/images/os/mac.svg',
      link: ''
    }
  ]

  return (
    <div className="container">
      <div className="mb-4 sm:mb-2 relative z-50">
        <TvNavbar />
      </div>
      <div className="dashboard-top-spacing dashboard-bottom-spacing dashboard-layout min-h-screen flex flex-col">
      <div className="space-y-6 max-w-[500px] mx-auto w-full flex flex-col justify-center">
        <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl lh-1_2 mb-6 max-w-[30rem] lg:max-w-none mx-auto">Download Script Node</h1>
      </div>
      <div className="flex flex-wrap">
        {
          scriptNodeBuildList && scriptNodeBuildList.length > 0 ? scriptNodeBuildList.map((build, index) => 
            <div
              key={index}
              className="bg-shade-grayis rounded-2xl h-[150px] w-1/4 mr-5 mb-5 flex flex-col items-center justify-center"
              onClick={
                () => {
                  helper.openLink(build.link)
                }
              }>
              <div className="w-1/4 mb-4">
                <img src={build.image} alt="" className="w-full h-auto" />
              </div>
              <Title
                className="text-center text-primary font-semibold"
                variant="20"
              >
                {build.title}
              </Title>
            </div>
          ) : null
        }
        
        </div>
      </div>
    </div>
    
  );
}

export default Download;
