import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import "./final.css";

const Newservice = () => {
  return (
    <div>
      <Grid
        container
        style={{ padding: "10%", margin: "0" }}
      >
        <Grid item md={6} spacing={3} style={{ padding: "10%" }}>
          <Grid container spacing={3}>
            <Grid item md={12}>
              Service 1
            </Grid>
            <Grid item md={12}>
              uska thoda desc
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

        
        <Grid item md={6}>
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
        style={{ padding: "10%", border: "1px solid white", margin: "0" }}
      >
        <Grid item md={6}>
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
        <Grid item md={6} spacing={3} style={{ padding: "10%" }}>
          <Grid container spacing={3}>
            <Grid item md={12}>
              Service 1
            </Grid>
            <Grid item md={12}>
              uska thoda desc
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
        style={{ padding: "10%", border: "1px solid white", margin: "0" }}
      >
        <Grid item md={6} spacing={3} style={{ padding: "10%" }}>
          <Grid container spacing={3}>
            <Grid item md={12}>
              Service 1
            </Grid>
            <Grid item md={12}>
              uska thoda desc
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
        <Grid item md={6}>
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
  );
};

export default Newservice;
