import {
  AppBar,
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CartPage from "./CartPage";

type appBarProps = {
  onChange: any;
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
};

const AppBarComponent = ({ onChange, word, setWord }: appBarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
              <Grid item lg={9} md={6} sm={6} justifyContent={"center"}>
                <Stack
                  direction={"row"}
                  justifyContent={"start"}
                  alignItems={"center"}
                >
                  <h2 onClick={()=>{window.location.reload()}} style={{cursor:"pointer"}}>หน้าหลัก</h2>
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
              </Grid>
              <Grid item lg={3} md={6} sm={6}  justifyContent={"center"}>
                <Stack
                  direction={"row"}
                  justifyContent={"end"}
                  alignItems={"center"}
                >
                  <Box sx={searchStyle} className="search-box">
                    <SearchIcon sx={{ color: "blue" }} />
                    <input
                      type="text"
                      placeholder="(กรุณาเลือกเมนูทั้งหมด)"
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                    />
                  </Box>
                  <CartPage />
                </Stack>
              </Grid>
            </Grid>
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
  marginRight: "10px",
};

export default AppBarComponent;
