import React from "react";
import Filter from "../../assets/filter.svg";
import support from "../../assets/support.svg";
import style from "../../assets/style.svg";
import "./Feature.css";
const Features = () => {
  return (
    <div>
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
        Key Features
      </div>
      <hr style={{ borderTop: "1px dashed #5288de", margin: "5px 0px" }} />

      <div style={{ padding: "25px" }}>
        <div
          className="feature"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="key-features">
            <div
              style={{
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={Filter}
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "3px solid #5288de",
                }}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                color: "#ffffff",
                padding: "12px",
                fontSize: "20px",
              }}
            >
              + 50 Filter Support
            </div>
          </div>

          <div className="key-features">
            <div
              style={{
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={support}
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  borderRadius: "50%",
                  border: "3px solid #5288de",
                }}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                color: "#ffffff",
                padding: "12px",
                fontSize: "20px",
              }}
            >
              24/7 customer support
            </div>
          </div>

          <div className="key-features">
            <div
              style={{
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={style}
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  borderRadius: "50%",
                  border: "3px solid #5288de",
                }}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                color: "#ffffff",
                padding: "12px",
                fontSize: "20px",
              }}
            >
              Stylish Items
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
