import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Review.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red, indigo, green, yellow, orange } from "@mui/material/colors";
const Review = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 490) {
        setCenterSlidePercentage(100);
      } else if (window.innerWidth < 620) {
        setCenterSlidePercentage(70);
      } else if (window.innerWidth < 1000) {
        setCenterSlidePercentage(50);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    handleResize(); // Set initial value based on viewport width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div style={{ marginBottom: "25px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 20px",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#5288de",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        Customers Review
      </div>
      <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />
      <div className="customer-review-section">
        <div className="three-box-slider">
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={1000}
            showStatus={false}
            showThumbs={false}
            // showThumbs={true}
            centerMode={true} // Center the current item
            centerSlidePercentage={centerSlidePercentage} // Show three items at a time
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={false}
          >
            <div
              className="carousel-box"
              style={{ backgroundColor: "#5288de" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div
              className="carousel-box"
              style={{ backgroundColor: "#5288de" }}
            >
              {" "}
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
                      G
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div
              className="carousel-box"
              style={{ backgroundColor: "#5288de" }}
            >
              {" "}
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                      Y
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div
              className="carousel-box"
              style={{ backgroundColor: "#5288de" }}
            >
              {" "}
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: yellow[500] }} aria-label="recipe">
                      B
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div
              className="carousel-box"
              style={{ backgroundColor: "#5288de" }}
            >
              {" "}
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                      S
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            {/* Add more boxes as needed */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Review;
