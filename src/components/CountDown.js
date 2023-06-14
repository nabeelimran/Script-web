import React, { useEffect, useState } from "react";

const CountDown = ({ getProgressBarWidth }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const generateInterval = () => {
    const countDownDate = 1684843200000;
    const startDate = new Date("Mar 24, 2023").getTime();

    // Update the count down every 1 second
    setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      const distanceWhole = countDownDate - startDate;

      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      const minutesLeft = Math.floor(distance / (1000 * 60));
      const minutesTotal = Math.floor(distanceWhole / (1000 * 60));

      // Time calculations for days, hours, minutes and seconds
      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);
      const progressBarWidth = Math.floor(
        ((minutesTotal - minutesLeft) / minutesTotal) * 100
      ); // increment order
      setDays(day > 0 ? days : 0);
      setHours(hour > 0 ? hours : 0);
      setMinutes(minute > 0 ? minutes : 0);
      setSeconds(second > 0 ? seconds : 0);
      getProgressBarWidth(progressBarWidth >= 100 ? 100 : progressBarWidth);
    });
  };

  useEffect(() => {
    generateInterval();
  }, []);

  return (
    <div className="flex justify-center md:justify-start">
      <div className="text-center">
        <h3 className="font-semibold text-3xl lg:text-[40px]">{days}</h3>
        <p className="font-semibold text-sm">Days</p>
      </div>
      <p className="text-4xl md:text-6xl leading-[1.3] md:leading-[0.6] mx-2.5 md:mx-5">
        :
      </p>
      <div className="text-center">
        <h3 className="font-semibold text-3xl lg:text-[40px]">{hours}</h3>
        <p className="font-semibold text-sm">Hours</p>
      </div>
      <p className="text-4xl md:text-6xl leading-[1.3] md:leading-[0.6] mx-2.5 md:mx-5">
        :
      </p>
      <div className="text-center">
        <h3 className="font-semibold text-3xl lg:text-[40px]">{minutes}</h3>
        <p className="font-semibold text-sm">Minutes</p>
      </div>
      <p className="text-4xl md:text-6xl leading-[1.3] md:leading-[0.6] mx-2.5 md:mx-5">
        :
      </p>
      <div className="text-center">
        <h3 className="font-semibold text-3xl lg:text-[40px] text-primary">
          {seconds}
        </h3>
        <p className="font-semibold text-sm">Seconds</p>
      </div>
    </div>
  );
};

export default CountDown;
