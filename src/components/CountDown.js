import React, { useEffect, useState } from "react";

<<<<<<< HEAD
const CountDown = ({ getProgressBarWidth }) => {
=======
const CountDown = ({
  getProgressBarWidth
}) => {
>>>>>>> e17a88c (merged)
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const generateInterval = () => {
    const countDownDate = new Date("May 08, 2023").getTime();
    const startDate = new Date("Mar 24, 2023").getTime();
<<<<<<< HEAD

=======
    
>>>>>>> e17a88c (merged)
    // Update the count down every 1 second
    const x = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      const distanceWhole = countDownDate - startDate;

      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      const minutesLeft = Math.floor(distance / (1000 * 60));
      const minutesTotal = Math.floor(distanceWhole / (1000 * 60));

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
<<<<<<< HEAD
      const progressBarWidth = Math.floor(
        ((minutesTotal - minutesLeft) / minutesTotal) * 100
      ); // increment order
=======
      const progressBarWidth = Math.floor(((minutesTotal - minutesLeft) / minutesTotal) * 100); // increment order
>>>>>>> e17a88c (merged)
      setDays(days > 0 ? days : 0);
      setHours(hours > 0 ? hours : 0);
      setMinutes(minutes > 0 ? minutes : 0);
      setSeconds(seconds > 0 ? seconds : 0);
<<<<<<< HEAD
      getProgressBarWidth(progressBarWidth >= 100 ? 100 : progressBarWidth);
=======
      // getProgressBarWidth(progressBarWidth >= 100 ? 100 : progressBarWidth);
>>>>>>> e17a88c (merged)
    });
  };

  useEffect(() => {
    generateInterval();
  }, []);

  return (
<<<<<<< HEAD
    <div className="flex justify-center md:justify-start">
      <div className="text-center">
        <h3 className="font-semibold text-3xl lg:text-[40px]">{days}</h3>
=======
    <div className="flex justify-center md:justify-start mb-2">
      <div className="text-center">
        <h3 className="font-semibold text-3xl md:text-5xl">{days}</h3>
>>>>>>> e17a88c (merged)
        <p className="font-semibold text-sm">Days</p>
      </div>
      <p className="text-4xl md:text-6xl leading-[1.3] md:leading-[0.6] mx-2.5 md:mx-5">
        :
      </p>
      <div className="text-center">
<<<<<<< HEAD
        <h3 className="font-semibold text-3xl lg:text-[40px]">{hours}</h3>
=======
        <h3 className="font-semibold text-3xl md:text-5xl">{hours}</h3>
>>>>>>> e17a88c (merged)
        <p className="font-semibold text-sm">Hours</p>
      </div>
      <p className="text-4xl md:text-6xl leading-[1.3] md:leading-[0.6] mx-2.5 md:mx-5">
        :
      </p>
      <div className="text-center">
<<<<<<< HEAD
        <h3 className="font-semibold text-3xl lg:text-[40px]">{minutes}</h3>
=======
        <h3 className="font-semibold text-3xl md:text-5xl">{minutes}</h3>
>>>>>>> e17a88c (merged)
        <p className="font-semibold text-sm">Minutes</p>
      </div>
      <p className="text-4xl md:text-6xl leading-[1.3] md:leading-[0.6] mx-2.5 md:mx-5">
        :
      </p>
      <div className="text-center">
<<<<<<< HEAD
        <h3 className="font-semibold text-3xl lg:text-[40px] text-primary">
=======
        <h3 className="font-semibold text-3xl md:text-5xl text-primary">
>>>>>>> e17a88c (merged)
          {seconds}
        </h3>
        <p className="font-semibold text-sm">Seconds</p>
      </div>
    </div>
  );
};

export default CountDown;
