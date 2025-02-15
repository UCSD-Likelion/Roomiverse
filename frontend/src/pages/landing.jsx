const LandingPage = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.landingContainer}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>Roomiverse</h1>
        </div>
        <div style={styles.gradientCircle}></div>
      </div>
      <div style={styles.scrollContent}>
        <div style={styles.featureContainer}>
          <div style={styles.featureWrapper}>
            <h3 style={styles.featureTitle}>AI Matching</h3>
            <div style={styles.featureBox}>
              <p style={styles.featureText}>Our AI-powered system meticulously analyzes your lifestyle preferences, daily habits, and personal values to match you with the most compatible roommate. By leveraging advanced machine learning algorithms, we ensure that your living experience is seamless and comfortable. The system continuously adapts based on feedback, refining matches over time for an even better experience.</p>
            </div>
          </div>
          <div style={styles.featureWrapper}>
            <h3 style={styles.featureTitle}>Compatibility</h3>
            <div style={styles.featureBox}>
              <p style={styles.featureText}>Utilizing sophisticated compatibility algorithms, we evaluate key factors such as sleep patterns, cleanliness standards, noise tolerance, and shared interests. This ensures that you and your roommate have a harmonious living environment. With our AI-driven insights, we help prevent conflicts before they arise, making co-living stress-free.</p>
            </div>
          </div>
          <div style={styles.featureWrapper}>
            <h3 style={styles.featureTitle}>Verified Profiles</h3>
            <div style={styles.featureBox}>
              <p style={styles.featureText}>Security and trust are at the heart of our platform. Each user goes through a thorough verification process to confirm their identity and background. Additionally, community reviews and a rating system help you make informed decisions about potential roommates. Rest assured, you’ll be living with someone reliable and aligned with your preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    overflowY: "auto",
    overflowX: "hidden", 
    height: "100vh",
  },
  landingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#FF6F61",
    position: "relative",
    width: "100vw", 
    overflow: "hidden", 
  },
  logo: {
    position: "absolute",
    top: "5px",
    left: "20px",
    width: "50px", 
    height: "50px",
  },
  logoText: {
    position: "absolute",
    top: "-5px",
    left: "80px",
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
  },
  loginButton: {
    position: "absolute",
    top: "15px",
    right: "20px",
    backgroundColor: "white",
    color: "#FF6F61",
    padding: "12px 28px", 
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "18px",
  },
  textContainer: {
    position: "relative",
    color: "white",
    textAlign: "center",
    zIndex: 2,
  },
  heading: {
    fontSize: "100px", 
    fontWeight: "bold",
    color: "white",
    marginTop: "20px",
  },
  gradientCircle: {
    position: "absolute",
    top: "50%", 
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "500px",
    background: "linear-gradient(to top, white, rgba(255,111,81,0.4))",
    borderRadius: "50%",
    zIndex: 1,
  },
  scrollContent: {
    width: "100%",
    padding: "150px 20px 200px", 
    backgroundColor: "#FF6F61",
    textAlign: "center",
  },
  featureContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  featureWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  featureBox: {
    width: "300px",
    height: "400px",
    padding: "40px",
    background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
    borderRadius: "20px",
    color: "white",
  },
  featureTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "white",
  },
  featureText: {
    fontSize: "18px",
    color: "white",
  }
};

export default LandingPage;
