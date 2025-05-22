import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles"; 
import useMediaQuery from "@mui/material/useMediaQuery"; 
import { Box } from "@mui/material";
  import 'bootstrap/dist/css/bootstrap.min.css';

// import TopBar from "./Components/TopBar";
// import Sidebar from "./Sidebar"; 
// import ScrollToTop from "./Components/ScrollToTop";
import MonthlyBudgetCalculator from "./MonthlyBudgetCalculator";
// import ShimmerLoadingScreen from "./Components/ShimmerLoadingScreen";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import WhatsAppButton from "./Components/whatsappButton";

const hideBottomNavRoutes = ["/login", "/auth", "/signup", "/verify","/convert-new-user"];

const App = () => {
  const location = useLocation();
  const isMdOrLarger = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery('(min-width:1400px)');
  const isMediumScreen = useMediaQuery('(min-width:1024px) and (max-width:1399px)');
  const [loading, setLoading] = useState(false);

  // Adjust sidebar width based on screen size
  const sidebarWidth = isLargeScreen ? 280 : isMediumScreen ? 220 : 200; // Dynamic width for better adaptability

  useEffect(() => {
    // Start the loading effect whenever the route changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay to show shimmer effect appropriately

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App" style={{ display: "" }}>
      <WhatsAppButton/>

      <Box>

      {/* <TopBar /> */}



      <Box
        component="main"
      
      >
        
          <Box
           
          >
            {/* <ScrollToTop /> */}
            <Routes>
              <Route path="/" element={<MonthlyBudgetCalculator/>} />
            </Routes>
          </Box>
   
 
      </Box>



      </Box>

      
    </div>
  );
};

const Root = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* <GoogleOAuthProvider clientId="597576292269-1lsjf5rb8vi3n472f4l64ebuthl79fss.apps.googleusercontent.com"> */}
        <Router>
          <App />
        </Router>
      {/* </GoogleOAuthProvider> */}
    </ThemeProvider>
  );
};

export default Root;
