import {
  Box,
  Typography,
  Avatar,
  Button,
  Chip,
  IconButton,
  Modal,
  Slider,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import Cropper from "react-easy-crop";
import { useState, useRef, useCallback } from "react";
import { useContext } from "react";

import getCroppedImg from "../utils/cropImage";
import { calculateAge } from "../utils/utils";
import { AuthContext } from "../context/AuthProvider";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);
  const { user } = useContext(AuthContext);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleCameraClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    e.target.value = null;

    if (!file) return;
    const imageDataUrl = URL.createObjectURL(file);
    setImageSrc(imageDataUrl);
    setOpen(true);
  };

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropSave = async () => {
    try {
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      const base64Image = await toBase64(croppedBlob);

      // For now, just set the profile image directly without server call
      // This ensures the save button works even without a backend
      setProfileImage(base64Image);
      setOpen(false);

      // If you want to re-enable server upload later, uncomment this code:
      /*
      const res = await fetch("http://localhost:4000/upload-profile-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64Image }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }
  
      setProfileImage(data.url);
      */
    } catch (e) {
      console.error("Upload failed:", e);
      // Still close the modal and use the cropped image even if server upload fails
      setProfileImage(
        await toBase64(await getCroppedImg(imageSrc, croppedAreaPixels))
      );
      setOpen(false);
    }
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
        <Typography
          variant="h3"
          fontWeight={700}
          color="#4B4B4B"
          textAlign="left"
          mb={6}
        >
          My Profile
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "100%", md: "40%" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box sx={{ position: "relative", mb: 2 }}>
              <Avatar
                src={profileImage}
                alt="Profile"
                sx={{ width: 180, height: 180, bgcolor: "#d6dfe7" }}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <IconButton
                onClick={handleCameraClick}
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  backgroundColor: "#95AAFF",
                  width: 40,
                  height: 40,
                  "&:hover": { backgroundColor: "#7B93FF" },
                  boxShadow: 2,
                }}
              >
                <CameraAlt sx={{ color: "white", fontSize: 20 }} />
              </IconButton>
            </Box>
            <Typography variant="h4" fontWeight={700} color="#4B4B4B" mb={2}>
              {user.name}
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
                "&:hover": { backgroundColor: "#7B93FF" },
              }}
            >
              Edit Profile
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              mt: { xs: 0, md: -4 },
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight={700} color="#4B4B4B" mb={2}>
                About Me
              </Typography>
              <Typography variant="body1" color="#4B4B4B" mb={3}>
                I am ad;ljfal;sdjf;aksdj asdlfjasldkf adsfasdasdf asdf asdf asdf
                alsdnfknas;lkv;jasdfandl;f a
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontWeight={700}
                  color="#4B4B4B"
                >
                  Age:
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  color="#4B4B4B"
                  ml={1}
                >
                  {calculateAge(user.birthdate)}
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontWeight={700}
                  color="#4B4B4B"
                >
                  Major:
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  color="#4B4B4B"
                  ml={1}
                >
                  {!user.major && "Not Specified"}
                  {user.major && user.major}
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontWeight={700}
                  color="#4B4B4B"
                >
                  Gender:
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  color="#4B4B4B"
                  ml={1}
                >
                  {user.gender}
                </Typography>
              </Box>
            </Box>
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

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 300,
            height: 430,
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: 2,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flexGrow: 1, position: "relative" }}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </Box>

          <Box sx={{ px: 2, py: 1.5 }}>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e, z) => setZoom(z)}
              sx={{
                color: "#95AAFF",
                mb: 2,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleCropSave}
              sx={{
                backgroundColor: "#95AAFF",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#7B93FF",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
