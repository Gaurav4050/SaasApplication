import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import axios from "axios";
const Items = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1A2027",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#5288de",
    border: "5px solid #5288de",
  }));

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://backend-saas-3jc1.onrender.com/auth/items"
        );
        const data = response.data;
        setData(data.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 20px", // Increased padding for better spacing
          fontSize: "28px", // Slightly larger font size
          fontWeight: "bold", // Bolder font weight
          color: "#5288de",
          backgroundColor: "#f5f5f5", // Added a subtle background color
          borderRadius: "5px", // Rounded corners
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // A subtle box shadow
        }}
      >
        Item List
      </div>
      <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />

      <div style={{ marginTop: "10px", padding: "25px 50px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((item, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <Item>
                  <div className="item-box">
                    <img
                      src={item.image}
                      alt={item.itemname}
                      className="item-image"
                      style={{
                        width: "8rem",
                        height: "8rem",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "5px solid #5288de",
                      }}
                    />
                    <div className="item-details">
                      <h2 className="item-name">{item.itemname}</h2>
                      <div className="price">
                        <span
                          className="original-price"
                          style={{ color: "red" }}
                        >
                          Price:-<del>{item.price}</del>
                        </span>
                        <br />
                        <span
                          className="discounted-price"
                          style={{ fontWeight: 600 }}
                        >
                          DiscountPrice:- {item.discountprice}
                        </span>
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Items;
