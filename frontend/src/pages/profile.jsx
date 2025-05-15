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
import getCroppedImg from "../utils/cropImage";
import { useState, useRef, useCallback, useContext, useEffect } from "react";
import { calculateAge } from "../utils/utils";
import { AuthContext } from "../context/AuthProvider";
import { uploadProfilePicture } from "../api";

export default function ProfilePage() {
  const MAX_ABOUT_ME_LENGTH = 100;
  const [profileImage, setProfileImage] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [aboutMe, setAboutMe] = useState(
    "I am ad;ljfal;sdjf;aksdj asdlfjasldkf adsfasdasdf asdf asdf asdf alsdnfknas;lkv;jasdfandl;f a"
  );
  const [originalAboutMe, setOriginalAboutMe] = useState(aboutMe);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.profilePicture) {
      setProfileImage(user.profilePicture);
    }
  }, [user]);

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
      setProfileImage(base64Image);
      setOpen(false);
    } catch (e) {
      console.error("Upload failed:", e);
    }
  };

  const handleEdit = () => {
    setOriginalAboutMe(aboutMe);
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setAboutMe(originalAboutMe);
    setIsEditing(false);
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
          height: 440,
          overflow: "hidden",
        }}
      >
        <Typography variant="h3" fontWeight={700} color="#4B4B4B" mb={6}>
          My Profile
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          {/* Left Column */}
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
            {isEditing ? (
              <>
                <Button
                  variant="contained"
                  onClick={handleSave}
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
                    mb: 1,
                    width: 160,
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCancel}
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
                    width: 160,
                  }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                onClick={handleEdit}
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
                  width: 160,
                }}
              >
                Edit Profile
              </Button>
            )}
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              mt: { xs: 0, md: -4 },
              position: "relative",
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight={700} color="#4B4B4B" mb={2}>
                About Me
              </Typography>

              <Box sx={{ position: "relative", minHeight: 50, mb: 3 }}>
                {!isEditing ? (
                  <Typography variant="body1" color="#4B4B4B">
                    {aboutMe}
                  </Typography>
                ) : (
                  <>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 50,
                        bgcolor: "white",
                        border: "1px solid #ccc",
                        borderRadius: 1,
                        zIndex: 10,
                        p: 1,
                      }}
                    >
                      <textarea
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                        maxLength={MAX_ABOUT_ME_LENGTH}
                        style={{
                          width: "100%",
                          height: "100%",
                          fontSize: "1rem",
                          padding: "10px",
                          borderRadius: "6px",
                          border: "none",
                          resize: "none",
                          outline: "none",
                          boxSizing: "border-box",
                          background: "transparent",
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          textAlign: "right",
                          display: "block",
                          color: "#888",
                          mt: 0.5,
                        }}
                      >
                        {aboutMe.length}/{MAX_ABOUT_ME_LENGTH}
                      </Typography>
                    </Box>
                  </>
                )}
              </Box>

              <Box sx={{ mb: 1 }}>
                <Typography variant="h6" component="span" fontWeight={700}>
                  Age:
                </Typography>
                <Typography component="span" ml={1}>
                  {calculateAge(user.birthdate)}
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="h6" component="span" fontWeight={700}>
                  Major:
                </Typography>
                <Typography component="span" ml={1}>
                  {!user.major && "Not Specified"}
                  {user.major && user.major}
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="h6" component="span" fontWeight={700}>
                  Gender:
                </Typography>
                <Typography component="span" ml={1}>
                  {user.gender}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={700} color="#4B4B4B" mb={2}>
                My Preferences
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
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

      {/* Image Cropper Modal */}
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
              sx={{ color: "#95AAFF", mb: 2 }}
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
                "&:hover": { backgroundColor: "#7B93FF" },
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
