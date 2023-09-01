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
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
};

const AppBarComponent = ({ onChange,word ,setWord}: appBarProps) => {
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
                    sx={{
                      backgroundColor: "white",
                      height: "45px",
                      fontFamily: "Mali",
                    }}
                  >
                    <MenuItem
                      value="รายการอาหารทั้งหมด"
                      sx={{ fontFamily: "Mali" }}
                    >
                      รายการอาหารทั้งหมด
                    </MenuItem>
                    <MenuItem value="เครื่องดื่ม" sx={{ fontFamily: "Mali" }}>
                      เครื่องดื่ม
                    </MenuItem>
                    <MenuItem value="ผัด-ทอด" sx={{ fontFamily: "Mali" }}>
                      ผัด-ทอด
                    </MenuItem>
                    <MenuItem value="สเต็ก" sx={{ fontFamily: "Mali" }}>
                      สเต็ก
                    </MenuItem>
                    <MenuItem value="แกง-ต้มยำ" sx={{ fontFamily: "Mali" }}>
                      แกง-ต้มยำ
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Box sx={searchStyle} className="search-box">
                <SearchIcon sx={{ color: "blue" }} />
                <input
                  type="text"
                  placeholder="ค้นหา"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
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
