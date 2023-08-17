import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./final.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Navb

const Newservice = () => {
  return (
    <>
      <Navbar />
      <div style={{}}>

        

        <Grid container style={{ padding: "5%", height: "150%", margin: "0" }}>
          <Grid
            item
            md={6}
            spacing={3}
            style={{
              padding: "10%",
              borderWidth: "1px",
              borderStyle: "outset",
              borderRight: "none",
            }}
          >
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Typography variant="h2">Gaming</Typography>
              </Grid>
              <Grid item md={12}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                est natus saepe. Minus natus veritatis beatae suscipit saepe
                error perferendis Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Ut, praesentium.
              </Grid>
              <Grid item md={12}>
                {" "}
                <Button
                  variant="filed"
                  sx={{ color: "white ", bgcolor: "#FC6709" }}
                >
                  {" "}
                  click me{" "}
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            md={6}
            sx={{
              borderStyle: "outset",
              borderWidth: "1px",
              borderLeft: "none",
            }}
          >
            <div className="bb">
              <div className="content">
                <img
                  src="../src/assets/3dprinter.png"
                  alt="hi"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          style={{ padding: "5%",  margin: "0" }}
        >
          <Grid item md={6} style={{
              padding: "10%",
              borderWidth: "1px",
              borderStyle: "outset",
              borderRight: "none",
            }}>
            <div className="bb1">
              <div className="content">
                <img
                  src="../src/assets/Char.png"
                  alt="hi"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </Grid>
          <Grid item md={6} spacing={3} sx={{
              borderStyle: "outset",
              borderWidth: "1px",
              borderLeft: "none",
            }}>
            <Grid container spacing={3} sx={{paddingTop:"30%"}}>
              <Grid item md={12} >
                <Typography variant="h2">3d Printing</Typography>
              </Grid>
              <Grid item md={12}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                suscipit eligendi officiis iste fugit dolorem obcaecati corporis
                aspernatur, veritatis accusamus quisquam, tenetur laboriosam
                ipsam cumque? Ducimus dicta delectus laboriosam minus!
              </Grid>
              <Grid item md={12}>
                {" "}
                <Button
                  variant="filed"
                  sx={{ color: "white ", bgcolor: "#FC6709" }}
                >
                  {" "}
                  click me{" "}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          style={{ padding: "5%", margin: "0" }}
        >
          <Grid item md={6} spacing={3} style={{
              padding: "10%",
              borderWidth: "1px",
              borderStyle: "outset",
              borderRight: "none",
            }}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Typography variant="h2">Studios</Typography>
              </Grid>
              <Grid item md={12}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi hic quidem totam assumenda itaque enim mollitia,
                quaerat provident tempora aperiam cumque consequatur, asperiores
                dolor tenetur. Necessitatibus natus facilis temporibus
                reiciendis!
              </Grid>
              <Grid item md={12}>
                {" "}
                <Button
                  variant="filed"
                  sx={{ color: "white ", bgcolor: "#FC6709" }}
                >
                  {" "}
                  click me{" "}
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item md={6} style={{ border: "1px solid white" }}>
            <div className="bb">
    
            <div>
                <img
                src="../src/assets/3dprinter.png"
                alt="hi"
                // style={{zIndex:'1'}}
                style={{ width: "50%" }}
                />
            </div></div>
        </Grid>
      </Grid> */}
          <Grid item md={6} sx={{
              borderStyle: "outset",
              borderWidth: "1px",
              borderLeft: "none",
            }}>
            <div className="bb">
              <div className="content">
                <img
                  src="../src/assets/3dprinter.png"
                  alt="hi"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Newservice;
