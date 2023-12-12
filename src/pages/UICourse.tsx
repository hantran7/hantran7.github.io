import React, {useEffect} from "react";
import { Tab, Tabs, Typography, Box } from "@mui/material";
import Blogs from "../components/Blogs";
import UIWork from "../components/UIWork";

type Props = {};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function UICourse({}: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "auto", marginTop: "4rem" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        User Interface
      </h1>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ display: "flex", justifyContent: "center" }}
          TabIndicatorProps={{ 
            style: { 
              backgroundColor: '#9E9BFF', // Change to your desired color
              // Additional styles for the indicator
            }
          }}
        >
          <Tab
            sx={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "1.5rem",
              "&.Mui-selected": {
                color: "#9E9BFF",
              },
            }}
            label="Blogs"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "1.5rem",
              "&.Mui-selected": {
                color: "#9E9BFF",
              },
            }}
            label="Work"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Blogs />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UIWork />
      </CustomTabPanel>
    </Box>
  );
}
