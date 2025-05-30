import { useState } from "react";
import { Box } from "@mui/material";

import MatchingForm1 from "../components/matching-form-1";
import MatchingForm2 from "../components/matching-form-2";
import MatchingForm3 from "../components/matching-form-3";
import MatchingForm4 from "../components/matching-form-4";
import MatchingForm5 from "../components/matching-form-5";
import { uploadPreferences } from "../api";

export default function MatchingForm() {
  const [ethnicity, setEthnicity] = useState("");
  const [major, setMajor] = useState("");
  const [college, setCollege] = useState("");
  const [preference, setPreference] = useState(null); // On-campus / Off-campus
  const [sameGender, setSameGender] = useState(null); // Yes / No Preference
  const [guestFrequency, setGuestFrequency] = useState(""); // Rarely / Often
  const [pets, setPets] = useState(""); // How do you feel about pets?
  const [smokes, setSmokes] = useState(""); // Do you smoke?
  const [okayWithSmoking, setOkayWithSmoking] = useState(""); // Are you okay with a roommate who smokes?
  const [drinks, setDrinks] = useState(""); // Do you drink alcohol?
  const [okayWithDrinking, setOkayWithDrinking] = useState(""); // Are you okay with a roommate who drinks?
  const [sleepImportance, setSleepImportance] = useState(""); // Not Important -> Very Important
  const [roomType, setRoomType] = useState(""); // Preferred room type
  const [rent, setRent] = useState([900, 1100]); // Rent Range
  const [distance, setDistance] = useState([0, 5]); // Distance from Campus
  const [sleepTime, setSleepTime] = useState([22, 24]); // Sleep time range
  const [wakeTime, setWakeTime] = useState([6, 8]); // Wake time range
  const [cleaningFrequency, setCleaningFrequency] = useState(""); // Cleaning frequency

  const handleEthnicityChange = (event) => setEthnicity(event.target.value);

  const handleMajorChange = (event) => setMajor(event.target.value);

  const handleCollegeChange = (event) => setCollege(event.target.value);

  const handlePreferenceChange = (event, newPreference) =>
    setPreference(newPreference);

  const handleSameGenderChange = (event, newValue) => setSameGender(newValue);

  const handleGuestFrequencyChange = (event, newValue) =>
    setGuestFrequency(newValue);

  const handlePetsChange = (event) => setPets(event.target.value);

  const handleSmokesChange = (event) => setSmokes(event.target.value);

  const handleOkayWithSmokingChange = (event, newValue) =>
    setOkayWithSmoking(newValue);

  const handleDrinksChange = (event) => setDrinks(event.target.value);

  const handleOkayWithDrinkingChange = (event, newValue) =>
    setOkayWithDrinking(newValue);

  const handleSleepImportanceChange = (event, newValue) =>
    setSleepImportance(newValue);

  const handleRoomTypeChange = (event) => setRoomType(event.target.value);

  const handleRentChange = (event, newValue) => setRent(newValue);

  const handleDistanceChange = (event, newValue) => setDistance(newValue);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const offCampusPreference = {
      distanceFromSchool: distance,
      preferredPriceRange: rent,
      roomType: roomType,
    };
    const preferences = {
      offCampus: preference === "off-campus",
      guestFrequency: guestFrequency,
      genderPreference: sameGender,
      pets: pets,
      smokingStatus: smokes,
      okayWithSmoking: okayWithSmoking,
      drinkingStatus: drinks,
      okayWithDrinking: okayWithDrinking,
      sleepTime: sleepTime,
      wakeTime: wakeTime,
      importanceOfSleepSchedule: sleepImportance,
      cleaningFrequency: cleaningFrequency,
      major: major,
      college: college,
      ethnicity: ethnicity,
      offCampusPreferences: offCampusPreference,
    };

    try {
      const response = await uploadPreferences(preferences);
      if (response) {
        console.log("Preferences uploaded successfully");
      } else {
        console.error("Failed to upload preferences");
      }
    } catch (error) {
      console.error("Error uploading preferences:", error);
    }
    // Reset form or navigate to another page after submission
    setCurrentPage(0); // Reset to the first page
    setEthnicity("");
    setMajor("");
    setCollege("");
    setPreference(null);
    setSameGender(null);
    setGuestFrequency("");
    setPets("");
    setSmokes("");
    setOkayWithSmoking("");
    setDrinks("");
    setOkayWithDrinking("");
    setSleepImportance("");
    setRoomType("");
    setRent([900, 1100]);
    setDistance([0, 5]);
    setSleepTime([22, 24]);
    setWakeTime([6, 8]);
    setCleaningFrequency("");
    console.log("Form submitted and preferences uploaded successfully");
  };

  // progress bar
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5; // Total number of pages
  console.log(currentPage);
  const progressValue = ((currentPage + 1) / totalPages) * 100;

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#95AAFF",
        width: "100vw",
      }}
    >
      <Box
        component="form"
        sx={{
          backgroundColor: "white",
          height: "70vh",
          width: "75vw",
          maxWidth: "1200px",
          borderRadius: "30px",
          padding: "2rem",
          paddingLeft: "4rem",
          marginTop: "2.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {currentPage === 0 && (
          <MatchingForm1
            progressValue={progressValue}
            ethnicity={ethnicity}
            handleEthnicityChange={handleEthnicityChange}
            major={major}
            handleMajorChange={handleMajorChange}
            college={college}
            handleCollegeChange={handleCollegeChange}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 1 && (
          <MatchingForm2
            progressValue={progressValue}
            preference={preference}
            handlePreferenceChange={handlePreferenceChange}
            setCurrentPage={setCurrentPage}
            sameGender={sameGender}
            handleSameGenderChange={handleSameGenderChange}
            guestFrequency={guestFrequency}
            handleGuestFrequencyChange={handleGuestFrequencyChange}
          />
        )}

        {currentPage === 2 && (
          <MatchingForm3
            progressValue={progressValue}
            pets={pets}
            handlePetsChange={handlePetsChange}
            drinks={drinks}
            handleDrinksChange={handleDrinksChange}
            smokes={smokes}
            handleSmokesChange={handleSmokesChange}
            setCurrentPage={setCurrentPage}
            okayWithSmoking={okayWithSmoking}
            handleOkayWithSmokingChange={handleOkayWithSmokingChange}
            okayWithDrinking={okayWithDrinking}
            handleOkayWithDrinkingChange={handleOkayWithDrinkingChange}
          />
        )}

        {currentPage === 3 && (
          <MatchingForm4
            progressValue={progressValue}
            sleepImportance={sleepImportance}
            handleSleepImportanceChange={handleSleepImportanceChange}
            setCurrentPage={setCurrentPage}
            preference={preference}
            handlePreferenceChange={handlePreferenceChange}
            sameGender={sameGender}
          />
        )}

        {currentPage === 4 && (
          <MatchingForm5
            progressValue={progressValue}
            roomType={roomType}
            handleRoomTypeChange={handleRoomTypeChange}
            distance={distance}
            handleDistanceChange={handleDistanceChange}
            setCurrentPage={setCurrentPage}
            rent={rent}
            handleRentChange={handleRentChange}
          />
        )}
      </Box>
    </Box>
  );
}
