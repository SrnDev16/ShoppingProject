import {
  AppBar,
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type appBarProps = {
  onChange: any;
};

const AppBarComponent = ({ onChange }: appBarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="xl">
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <h2>หน้าหลัก</h2>
                <FormControl sx={{ m: 1, minWidth: 200 }}>    
                  <Select
                    labelId="demo-simple-select"
                    id="demo-simple-select"
                    label="รายการอาหาร"
                    defaultValue={"รายการอาหารทั้งหมด"}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    sx={{ backgroundColor: "white", height: "45px" }}
                  >
                    <MenuItem value="รายการอาหารทั้งหมด">
                      รายการอาหารทั้งหมด
                    </MenuItem>
                    <MenuItem value="เครื่องดื่ม">เครื่องดื่ม</MenuItem>
                    <MenuItem value="ผัด-ทอด">ผัด-ทอด</MenuItem>
                    <MenuItem value="สเต็ก">สเต็ก</MenuItem>
                    <MenuItem value="แกง-ต้มยำ">แกง-ต้มยำ</MenuItem>
                  </Select>
                </FormControl>
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

export const searchStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "5px",
  height: "30px",
};

export default AppBarComponent;
