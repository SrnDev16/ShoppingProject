import {
  AppBar,
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg">
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
             <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                  <Typography>หน้าหลัก</Typography>
                  <SelectBox/>
             </Stack>
              <Box sx={searchStyle} className="search-box">
                <SearchIcon sx={{ color: "blue" }} />
                <input type="text" name="" id="" placeholder="ค้นหา" />
              </Box>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export const SelectBox = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-helper-label">รายการอาหาร</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        //   value={age}
        label="รายการอาหาร"
        //   onChange={handleChange}
        sx={{backgroundColor:"white",height:"45px"}}
      >
        <MenuItem value="รายการอาหารทั้งหมด">รายการอาหารทั้งหมด</MenuItem>
        <MenuItem value="เครื่องดื่ม">เครื่องดื่ม</MenuItem>
        <MenuItem value="ผัด-ทอด">ผัด-ทอด</MenuItem>
        <MenuItem value="สเต็ก">สเต็ก</MenuItem>
        <MenuItem value="แกง-ต้มยำ">แกง-ต้มยำ</MenuItem>
      </Select>
    </FormControl>
  );
};

export const searchStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "5px",
  height: "30px",
};

export default AppBarComponent;
