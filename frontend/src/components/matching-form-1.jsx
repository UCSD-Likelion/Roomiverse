import {
  Box,
  LinearProgress,
  Typography,
  MenuItem,
  FormControl,
  Select,
  IconButton,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function MatchingForm1({
  progressValue,
  ethnicity,
  handleEthnicityChange,
  major,
  handleMajorChange,
  college,
  handleCollegeChange,
  setCurrentPage,
}) {
  return (
    <>
      <Box
        sx={{
          width: "65vw",
          maxWidth: "1100px",
          marginBottom: 5,
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <Typography variant="body1" sx={{ color: "#4A4C54", mb: 1 }}>
          Step 1 of 5
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progressValue}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#E2E8FF",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#95AAFF",
            },
          }}
        />
      </Box>

      <Typography
        variant="h3"
        sx={{
          color: "#4A4C54",
          fontWeight: 700,
          marginBottom: 3,
          marginTop: 1,
          paddingLeft: 3,
        }}
      >
        Backgrounds
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 3,
          gap: 8,
          paddingLeft: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#4A4C54",
              fontWeight: 400,
              fontSize: 20,
              marginTop: 1,
              paddingLeft: 1,
            }}
          >
            Ethnicity
          </Typography>
          <FormControl
            sx={{
              minWidth: 500,
              backgroundColor: "#95AAFF",
              opacity: 0.5,
              borderRadius: "5px",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiSelect-select": { padding: "20px" },
            }}
          >
            <Select
              value={ethnicity}
              onChange={handleEthnicityChange}
              displayEmpty
              renderValue={(selected) =>
                selected ? selected : "(Please Select Your Ethnicity)"
              }
              sx={{
                color: "white",
                fontSize: "20px",
                "& .MuiSelect-select": {
                  padding: "14px",
                  paddingLeft: "20px",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              <MenuItem value="Asian">Asian</MenuItem>
              <MenuItem value="Black">Black or African American</MenuItem>
              <MenuItem value="Hispanic">Hispanic or Latino</MenuItem>
              <MenuItem value="White">White</MenuItem>
              <MenuItem value="Native American">
                Native American or Alaska Native
              </MenuItem>
              <MenuItem value="Pacific Islander">
                Native Hawaiian or Pacific Islander
              </MenuItem>
              <MenuItem value="Middle Eastern">
                Middle Eastern or North African
              </MenuItem>
              <MenuItem value="Mixed">Two or More Races</MenuItem>
              <MenuItem value="Other">Other (Please Specify)</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginLeft: 5,
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#4A4C54",
              fontWeight: 400,
              fontSize: 20,
              marginTop: 1,
              paddingLeft: 1,
            }}
          >
            Major
          </Typography>
          <FormControl
            sx={{
              minWidth: 500,
              backgroundColor: "#95AAFF",
              opacity: 0.5,
              borderRadius: "5px",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiSelect-select": { padding: "20px" },
            }}
          >
            <Select
              value={major}
              onChange={handleMajorChange}
              displayEmpty
              renderValue={(selected) =>
                selected ? selected : "(Please Select Your Major)"
              }
              sx={{
                color: "white",
                fontSize: "20px",
                "& .MuiSelect-select": {
                  padding: "14px",
                  paddingLeft: "20px",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              <MenuItem value="Cognitive science">Cognitive science</MenuItem>
              <MenuItem value="Anatomy">Anatomy</MenuItem>
              <MenuItem value="Computer science">Computer science</MenuItem>
              <MenuItem value="International/global studies">
                International/global studies
              </MenuItem>
              <MenuItem value="Econometrics and quantitative economics">
                Econometrics and quantitative economics
              </MenuItem>
              <MenuItem value="Psychology">Psychology</MenuItem>
              <MenuItem value="Biology/biological sciences">
                Biology/biological sciences
              </MenuItem>
              <MenuItem value="Political science and government">
                Political science and government
              </MenuItem>
              <MenuItem value="Mathematics and computer science">
                Mathematics and computer science
              </MenuItem>
              <MenuItem value="Communication">Communication</MenuItem>
              <MenuItem value="Information technology">
                Information technology
              </MenuItem>
              <MenuItem value="Cell/cellular and molecular biology">
                Cell/cellular and molecular biology
              </MenuItem>
              <MenuItem value="Management sciences and quantitative methods">
                Management sciences and quantitative methods
              </MenuItem>
              <MenuItem value="Electrical and electronics engineering">
                Electrical and electronics engineering
              </MenuItem>
              <MenuItem value="Computer engineering">
                Computer engineering
              </MenuItem>
              <MenuItem value="Clinical psychology">
                Clinical psychology
              </MenuItem>
              <MenuItem value="Neurobiology and neurosciences">
                Neurobiology and neurosciences
              </MenuItem>
              <MenuItem value="Sociology">Sociology</MenuItem>
              <MenuItem value="Chemistry">Chemistry</MenuItem>
              <MenuItem value="Mechanical engineering">
                Mechanical engineering
              </MenuItem>
              <MenuItem value="International public health/international health">
                International public health/international health
              </MenuItem>
              <MenuItem value="Mathematics">Mathematics</MenuItem>
              <MenuItem value="Applied mathematics">
                Applied mathematics
              </MenuItem>
              <MenuItem value="Biochemistry">Biochemistry</MenuItem>
              <MenuItem value="Public health">Public health</MenuItem>
              <MenuItem value="Chemical engineering">
                Chemical engineering
              </MenuItem>
              <MenuItem value="Structural engineering">
                Structural engineering
              </MenuItem>
              <MenuItem value="Bioengineering and biomedical engineering">
                Bioengineering and biomedical engineering
              </MenuItem>
              <MenuItem value="Aerospace, aeronautical and astronautical/space engineering">
                Aerospace, aeronautical and astronautical/space engineering
              </MenuItem>
              <MenuItem value="Marine biology and biological oceanography">
                Marine biology and biological oceanography
              </MenuItem>
              <MenuItem value="Management science">Management science</MenuItem>
              <MenuItem value="Environmental studies">
                Environmental studies
              </MenuItem>
              <MenuItem value="History">History</MenuItem>
              <MenuItem value="Bioinformatics">Bioinformatics</MenuItem>
              <MenuItem value="Public health">Public health</MenuItem>
              <MenuItem value="Statistics">Statistics</MenuItem>
              <MenuItem value="Drama and dramatics/theatre arts">
                Drama and dramatics/theatre arts
              </MenuItem>
              <MenuItem value="Visual and performing arts">
                Visual and performing arts
              </MenuItem>
              <MenuItem value="Microbiology">Microbiology</MenuItem>
              <MenuItem value="English language and literature/letters">
                English language and literature/letters
              </MenuItem>
              <MenuItem value="Social sciences">Social sciences</MenuItem>
              <MenuItem value="Human development and family studies">
                Human development and family studies
              </MenuItem>
              <MenuItem value="Multi-/interdisciplinary studies">
                Multi-/interdisciplinary studies
              </MenuItem>
              <MenuItem value="Real estate development">
                Real estate development
              </MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Ecology, evolution, systematics and population biology">
                Ecology, evolution, systematics and population biology
              </MenuItem>
              <MenuItem value="Fine/studio arts">Fine/studio arts</MenuItem>
              <MenuItem value="Health/medical psychology">
                Health/medical psychology
              </MenuItem>
              <MenuItem value="Anthropology">Anthropology</MenuItem>
              <MenuItem value="Philosophy">Philosophy</MenuItem>
              <MenuItem value="Social psychology">Social psychology</MenuItem>
              <MenuItem value="Physics">Physics</MenuItem>
              <MenuItem value="Cognitive psychology and psycholinguistics">
                Cognitive psychology and psycholinguistics
              </MenuItem>
              <MenuItem value="Urban studies/affairs">
                Urban studies/affairs
              </MenuItem>
              <MenuItem value="Ethnic, cultural minority, gender, and group studies">
                Ethnic, cultural minority, gender, and group studies
              </MenuItem>
              <MenuItem value="Developmental and child psychology">
                Developmental and child psychology
              </MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Biological/biosystems engineering">
                Biological/biosystems engineering
              </MenuItem>
              <MenuItem value="Design and visual communications">
                Design and visual communications
              </MenuItem>
              <MenuItem value="Atmospheric sciences and meteorology">
                Atmospheric sciences and meteorology
              </MenuItem>
              <MenuItem value="Community health and preventive medicine">
                Community health and preventive medicine
              </MenuItem>
              <MenuItem value="Geology/earth science">
                Geology/earth science
              </MenuItem>
              <MenuItem value="Music">Music</MenuItem>
              <MenuItem value="Linguistics">Linguistics</MenuItem>
              <MenuItem value="Art history, criticism and conservation">
                Art history, criticism and conservation
              </MenuItem>
              <MenuItem value="Japanese studies">Japanese studies</MenuItem>
              <MenuItem value="Physical sciences">Physical sciences</MenuItem>
              <MenuItem value="Dance">Dance</MenuItem>
              <MenuItem value="Mathematics teacher education">
                Mathematics teacher education
              </MenuItem>
              <MenuItem value="Latin American studies">
                Latin American studies
              </MenuItem>
              <MenuItem value="Environmental/environmental health engineering">
                Environmental/environmental health engineering
              </MenuItem>
              <MenuItem value="Economics">Economics</MenuItem>
              <MenuItem value="International relations and affairs">
                International relations and affairs
              </MenuItem>
              <MenuItem value="Spanish language and literature">
                Spanish language and literature
              </MenuItem>
              <MenuItem value="Biophysics">Biophysics</MenuItem>
              <MenuItem value="Biostatistics">Biostatistics</MenuItem>
              <MenuItem value="Neurobiology and anatomy">
                Neurobiology and anatomy
              </MenuItem>
              <MenuItem value="Religion/religious studies">
                Religion/religious studies
              </MenuItem>
              <MenuItem value="Engineering physics/applied physics">
                Engineering physics/applied physics
              </MenuItem>
              <MenuItem value="Classics and classical languages, literatures, and linguistics">
                Classics and classical languages, literatures, and linguistics
              </MenuItem>
              <MenuItem value="Molecular biology">Molecular biology</MenuItem>
              <MenuItem value="Liberal arts and sciences, general studies and humanities">
                Liberal arts and sciences, general studies and humanities
              </MenuItem>
              <MenuItem value="Russian, Central European, East European and Eurasian studies">
                Russian, Central European, East European and Eurasian studies
              </MenuItem>
              <MenuItem value="Chinese studies">Chinese studies</MenuItem>
              <MenuItem value="African-American/Black studies">
                African-American/Black studies
              </MenuItem>
              <MenuItem value="Environmental health">
                Environmental health
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "flex-start",
          paddingLeft: 3,
        }}
      >
        <Typography
          variant="p"
          sx={{
            color: "#4A4C54",
            fontWeight: 400,
            fontSize: 20,
            marginTop: 3,
            paddingLeft: 1,
          }}
        >
          UCSD College
        </Typography>
        <FormControl
          sx={{
            minWidth: 500,
            backgroundColor: "#95AAFF",
            opacity: 0.5,
            borderRadius: "5px",
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSelect-select": { padding: "20px" },
          }}
        >
          <Select
            value={college}
            onChange={handleCollegeChange}
            displayEmpty
            renderValue={(selected) =>
              selected ? selected : "(Please Select Your College)"
            }
            sx={{
              color: "white",
              fontSize: "20px",
              "& .MuiSelect-select": {
                padding: "14px",
                paddingLeft: "20px",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          >
            <MenuItem value="Revelle College">Revelle College</MenuItem>
            <MenuItem value="John Muir College">John Muir College</MenuItem>
            <MenuItem value="Thurgood Marshall College">
              Thurgood Marshall College
            </MenuItem>
            <MenuItem value="Earl Warren College">Earl Warren College</MenuItem>
            <MenuItem value="Eleanor Roosevelt College">
              Eleanor Roosevelt College
            </MenuItem>
            <MenuItem value="Sixth College">Sixth College</MenuItem>
            <MenuItem value="Seventh College">Seventh College</MenuItem>
            <MenuItem value="Eighth College">Eighth College</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <IconButton
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          size: "large",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "2px",
        }}
        onClick={() => {
          setCurrentPage(1);
        }}
      >
        <ArrowCircleRightOutlinedIcon
          style={{ fontSize: 40, color: "#4A4C54" }}
        />
      </IconButton>
    </>
  );
}
