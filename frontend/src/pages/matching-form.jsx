import { useContext, useState } from "react";
import { Box } from "@mui/material";

import MatchingForm1 from "../components/matching-form-1";
import MatchingForm2 from "../components/matching-form-2";
import MatchingForm3 from "../components/matching-form-3";
import MatchingForm4 from "../components/matching-form-4";
import MatchingForm5 from "../components/matching-form-5";
import { uploadPreferences } from "../api";
import { AuthContext } from "../context/AuthProvider";
import {
  SLEEP_IMPORTANCE_SCORES,
  CLEANING_FREQUENCY_SCORES,
  GUEST_FREQUENCY_SCORES,
} from "../const";

export default function MatchingForm() {
  const { user } = useContext(AuthContext);
  const [ethnicity, setEthnicity] = useState("");
  const [major, setMajor] = useState("");
  const [college, setCollege] = useState("");
  const [preference, setPreference] = useState(null); // On-campus / Off-campus
  const [sameGender, setSameGender] = useState(""); // Yes / No Preference
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
  const [sleepTime, setSleepTime] = useState(""); // Sleep time range
  const [wakeTime, setWakeTime] = useState(""); // Wake time range
  const [cleaningFrequency, setCleaningFrequency] = useState(""); // Cleaning frequency

  const handleEthnicityChange = (event) => setEthnicity(event.target.value);

  const handleMajorChange = (event) => setMajor(event.target.value);

  const handleCollegeChange = (event) => setCollege(event.target.value);

  const handlePreferenceChange = (event, newPreference) =>
    setPreference(newPreference);

  const handleSameGenderChange = (event) => setSameGender(event.target.value);

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

  const handleSleepChange = (event) => setSleepTime(event.target.value);

  const handleWakeChange = (event) => setWakeTime(event.target.value);

  const handleCleaningFrequencyChange = (event, newValue) =>
    setCleaningFrequency(newValue);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Helper function to convert value to integer
    const toInt = (value) => (value ? parseInt(value, 10) : null);

    const offCampusPreference = {
      distanceFromSchool: distance[1], // Assuming the upper value of the range
      preferredPriceRange: `${rent[0]}-${rent[1]}`,
      roomType: roomType,
    };

    const preferences = {
      userId: user.id,
      offCampus: preference === "off-campus",
      guestFrequency: GUEST_FREQUENCY_SCORES[guestFrequency],
      genderPreference: sameGender,
      pets: pets,
      smokingStatus: smokes === "yes",
      okayWithSmoker: okayWithSmoking === "yes",
      drinkingStatus: drinks === "yes",
      okayWithDrinker: okayWithDrinking === "yes",
      sleepTime: sleepTime,
      wakeTime: wakeTime,
      importanceOfSleepSchedule: SLEEP_IMPORTANCE_SCORES[sleepImportance],
      cleaningFrequency: CLEANING_FREQUENCY_SCORES[cleaningFrequency],
      major: major,
      college: college,
      ethnicity: ethnicity,
      offCampusPreferences:
        preference === "off-campus" ? offCampusPreference : null,
    };

    console.log("Submitting preferences:", preferences);

    try {
      const response = await uploadPreferences(preferences);
      if (response.status === 200) {
        console.log("Preferences uploaded successfully");
        // Navigate to dashboard or profile page
      } else {
        console.error("Failed to upload preferences:", response);
      }
    } catch (error) {
      console.error("Error uploading preferences:", error);
    }
  };

  // progress bar
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;
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
            cleaningFrequency={cleaningFrequency}
            onImportanceChange={handleSleepImportanceChange}
            setCurrentPage={setCurrentPage}
            handlePreferenceChange={handlePreferenceChange}
            onFrequencyChange={handleCleaningFrequencyChange}
            onBedtimeChange={handleSleepChange}
            onWaketimeChange={handleWakeChange}
            bedtime={sleepTime}
            waketime={wakeTime}
            offCampus={preference === "off-campus"}
            handleSubmit={handleSubmit}
            x
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
            handleSubmit={handleSubmit}
          />
        )}
      </Box>
    </Box>
  );
}
