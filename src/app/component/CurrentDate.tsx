import React from "react";

const CurrentDate = () => {
  // Fungsi untuk mendapatkan tanggal hari ini
  const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options); 
  };

  return (
    <p className="float-right mr-6 text-sm  mt-4 mr-4">
      {getCurrentDate()}
    </p>
  );
};

export default CurrentDate;
