import Checkbox from "components/Checkbox";
import Title from "components/Title";
import TvNavbar from "components/TvNavbar";
import React from "react";
import { helper } from "utils/helper";

function Download() {
	const [isAllow, setIsAllow] = React.useState(false);

	const scriptNodeBuildList = [
		{
			title: "Windows",
			image: "/images/os/windows.svg",
			link: "https://drive.google.com/file/d/1osZgaMgbKYLc4th_H3cjmKDvRcKruaLu/view?usp=sharing",
		},
		{
			title: "Linux",
			image: "/images/os/linux.svg",
			link: "https://drive.google.com/file/d/1HbWPiboxizfQlZoB7zut-QYnJbx0dGCN/view?usp=sharing",
		},
		{
			title: "Apple Mac",
			image: "/images/os/mac.svg",
			link: "https://drive.google.com/file/d/1C-9ZRd0VBCM3YnH6eBLGZRq8krIjnYtX/view?usp=sharing",
		},
	];

	const handleAccept = (e) => {
		setIsAllow(e.target.checked);
	};

	return (
		<div className='container'>
			<div className='mb-4 sm:mb-2 relative z-50'>
				<TvNavbar />
			</div>
			<div className='dashboard-top-spacing dashboard-bottom-spacing dashboard-layout min-h-screen flex flex-col'>
				<div className='space-y-6 max-w-[500px] mx-auto w-full flex flex-col justify-center'>
					<h1 className='text-white font-semibold text-2xl sm:text-3xl lg:text-4xl lh-1_2 mb-6 max-w-[30rem] lg:max-w-none mx-auto'>
						Download Script Node
					</h1>
				</div>
				<div className='flex flex-wrap justify-center'>
					{scriptNodeBuildList && scriptNodeBuildList.length > 0
						? scriptNodeBuildList.map((build, index) => (
								<div
									key={index}
									className='bg-shade-grayis rounded-2xl h-[150px] w-1/4 mr-5 mb-5 flex flex-col items-center justify-center cursor-pointer'
									onClick={
										isAllow
											? () => helper.openLink(build.link)
											: null
									}>
									<div className='w-1/4 mb-4'>
										<img
											src={build.image}
											alt=''
											className='w-full h-auto'
										/>
									</div>
									<Title
										className='text-center text-primary font-semibold'
										variant='20'>
										{build.title}
									</Title>
								</div>
						  ))
						: null}
				</div>

				<Checkbox
					id={655}
					tickColor='#FFEF00'
					title={
						"by downloading, you agree to our node operator agreement"
					}
					className='flex items-center justify-center gap-3 mt-3'
					labelClassName='text-md cursor-pointer'
					checkboxClassName='min-w-[16px] h-4 outline-none rounded-[2px] transition-all duration-200 bg-transparent border-2 checked:border-primary border-[rgba(255,255,255,.6)] text-primary'
					other={{ onChange: (e) => handleAccept(e) }}
				/>
			</div>
		</div>
	);
}

export default Download;
