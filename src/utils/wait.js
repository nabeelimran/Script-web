const wait = (wait = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
};

export default wait;
