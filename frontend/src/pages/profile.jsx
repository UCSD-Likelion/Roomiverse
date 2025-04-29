import {
  Box,
 Typography,
 Avatar,
 Button,
 Chip,
 IconButton,
 } from "@mui/material";
 import { CameraAlt } from "@mui/icons-material";
 import { useState } from "react";
 
 export default function ProfileCard() {
   const [inputValue, setInputValue] = useState("");
   
   const handleCameraClick = () => {
     // Add your camera/upload functionality here
     console.log("Camera button clicked");
     // This could open a file dialog or activate camera
   };
 
   return (
     <Box
       sx={{
         backgroundColor: "#95AAFF",
         minHeight: "100vh",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         p: 4,
       }}
     >
       <Box
         sx={{
           backgroundColor: "white",
           borderRadius: 6,
           width: "60%",
           maxWidth: 800,
           p: { xs: 3, md: 5 },
           boxShadow: 3,
           height: "auto",
         }}
       >
         {/* My Profile Title */}
         <Typography
           variant="h3"
           fontWeight={700}
           color="#4B4B4B"
           textAlign="left"
           mb={6}
         >
           My Profile
         </Typography>
         {/* Main Content - Two Column Layout */}
         <Box
           sx={{
             display: "flex",
             flexDirection: { xs: "column", md: "row" },
             justifyContent: "space-between",
           }}
         >
           {/* Left Column - Avatar and Name */}
           <Box
             sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               width: { xs: "100%", md: "40%" },
               mb: { xs: 4, md: 0 },
             }}
           >
             {/* Avatar with Camera Icon */}
             <Box sx={{ position: "relative", mb: 2 }}>
               <Avatar
                 src=""
                 alt="Profile Image"
                 sx={{
                   width: 180,
                   height: 180,
                   bgcolor: "#d6dfe7",
                 }}
               />
               {/* Camera Icon as a Button */}
               <IconButton
                 onClick={handleCameraClick}
                 sx={{
                   position: "absolute",
                   bottom: 10,
                   right: 10,
                   backgroundColor: "#95AAFF",
                   width: 40,
                   height: 40,
                   "&:hover": {
                     backgroundColor: "#7B93FF",
                   },
                   boxShadow: 2,
                 }}
               >
                 <CameraAlt sx={{ color: "white", fontSize: 20 }} />
               </IconButton>
             </Box>
             {/* Name and Edit Button */}
             <Typography variant="h4" fontWeight={700} color="#4B4B4B" mb={2}>
               First Last
             </Typography>
             <Button
               variant="contained"
               sx={{
                 backgroundColor: "#95AAFF",
                 textTransform: "none",
                 fontWeight: 600,
                 borderRadius: 28,
                 px: 4,
                 py: 1,
                 fontSize: "1rem",
                 color: "white",
                 "&:hover": {
                   backgroundColor: "#7B93FF",
                 },
               }}
             >
               Edit Profile
             </Button>
           </Box>
           {/* Right Column - About Me and Preferences */}
           <Box
             sx={{
               width: { xs: "100%", md: "55%" },
               mt: { xs: 0, md: -4 },
             }}
           >
             {/* About Me Section */}
             <Box sx={{ mb: 4 }}>
               <Typography variant="h5" fontWeight={700} color="#4B4B4B" mb={2}>
                 About Me
               </Typography>
               <Typography variant="body1" color="#4B4B4B" mb={3}>
                 I am ad;ljfal;sdjf;aksdj asdlfjasldkf adsfasdasdf asdf asdf asdf
                 alsdnfknas;lkv;jasdfandl;f a I am ad;ljfal;sdjf;aksdj
                 asdlfjasldkf adsfasdasdf asdf asdf asdf alsdnfknas;lkv;jasdfandl;f a
               </Typography>
               <Box sx={{ mb: 1 }}>
                 <Typography variant="h6" component="span" fontWeight={700} color="#4B4B4B">
                   Age:
                 </Typography>
                 <Typography variant="h6" component="span" color="#4B4B4B" ml={1}>
                   21
                 </Typography>
               </Box>
               <Box sx={{ mb: 1 }}>
                 <Typography variant="h6" component="span" fontWeight={700} color="#4B4B4B">
                   Major:
                 </Typography>
                 <Typography variant="h6" component="span" color="#4B4B4B" ml={1}>
                   Computer Engineering
                 </Typography>
               </Box>
               <Box sx={{ mb: 1 }}>
                 <Typography variant="h6" component="span" fontWeight={700} color="#4B4B4B">
                   Gender:
                 </Typography>
                 <Typography variant="h6" component="span" color="#4B4B4B" ml={1}>
                   Male
                 </Typography>
               </Box>
             </Box>
             {/* Preferences Section */}
             <Box>
               <Typography variant="h5" fontWeight={700} color="#4B4B4B" mb={2}>
                 My Preferences
               </Typography>
               <Box
                 sx={{
                   display: "flex",
                   flexWrap: "wrap",
                   gap: 2,
                   mb: 2,
                 }}
               >
                 <Chip
                   label="Sleep Time: 11:00"
                   sx={{
                     backgroundColor: "#95AAFF",
                     color: "white",
                     fontWeight: 600,
                     borderRadius: 28,
                     px: 2,
                     py: 2.5,
                     height: 40,
                     fontSize: "0.95rem",
                   }}
                 />
                 <Box sx={{ width: { xs: "100%", sm: "auto" }, height: 0, display: { xs: "block", sm: "none" } }} />
                 <Chip
                   label="On-Campus"
                   sx={{
                     backgroundColor: "#95AAFF",
                     color: "white",
                     fontWeight: 600,
                     borderRadius: 28,
                     px: 2,
                     py: 2.5,
                     height: 40,
                     fontSize: "0.95rem",
                   }}
                 />
               </Box>
             </Box>
           </Box>
         </Box>
       </Box>
     </Box>
   );
 }