const dateMinutes = () => {
  const dates = document.querySelectorAll(".date");
  dates.forEach(date => {
    const str = date.innerText;
    console.log(date.innerText);
    const elapsed = new Date() - Date.parse(str.replace(/-/g, ' '));
    const minutes = Math.round(elapsed / 60000);
    date.innerText = `${minutes} minutes ago`;
  });
}

export { dateMinutes };
