import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main", // Background color of the footer
        color: "common.white", // Text color
        padding: "5px 0", // Padding for the footer
        textAlign: "center",
        width: "100%", // Ensures no margin on left and right
      }}
    >
      {/* First row */}
      <Typography variant="body1" sx={{ mb: 1 }}>
        © 2025 JobHive. All rights reserved.
      </Typography>

      {/* Second row */}
      <Typography variant="body2" sx={{ mb: 1 }}>
        Developed by AsnAzm | Made with ❤️
      </Typography>
    </Box>
  );
};

export default Footer;
