import React from "react"
import hi from "../images/hi.png"

const style = {
  marginLeft: "10px",
}

const Footer = () => (
  <div
    style={{
      display: "block",
      // position: "absolute",
      // left: "0",
      // marginLeft: "0 !important",
      // marginTop: "80%",
      width: "100%",
      // backgroundColor: "#303741",
      backgroundColor: "#1fa2f2",
      margin: "0 !important",
      height: "300px",
    }}
  >
    <div style={{ marginTop: "50px"  }}>
      <h2>
        Let's build beautiful,
        <br />
        meaningful things together.
      </h2>
      <p>Interested in collaborating? I'll buy the coffee.</p>
    </div>
    <a className="mailto" href="mailto:shrey00000@gmail.com">
      <div
      className="hi"
        style={{
          backgroundColor: "#262D37",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "8px 20px",
          marginLeft: "43%",
          display: "flex",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        <h2
          style={{
            textAlign: "left",
            display: "inline",
            marginTop: "20px",
          }}
        >
          Say Hi
        </h2>
        <img
          style={{
            height: "30px",
            display: "inline-block",
            paddingTop: "5px",
            paddingLeft: "15px",
          }}
          src={hi}
          
          alt="Hi"
        ></img>
      </div>
    </a>
    <div
      className="socials"
      style={{ display: "flex", marginLeft: "37%", marginTop: "150px" }}
    >
      <a
        style={{ marginLeft: "10px", textDecoration: "none", marginBottom: "0px"}}
        href="https://github.com/shrey-sachdeva2000"
      >
        <p>GitHub</p>
      </a>
      <a
        style={{ marginLeft: "10px", textDecoration: "none" }}
        href="https://github.com/shrey-sachdeva2000"
      >
        <p>LinkedIn</p>
      </a>
      <a
        style={{ marginLeft: "10px", textDecoration: "none" }}
        href="https://github.com/shrey-sachdeva2000"
      >
        <p>Dribbble</p>
      </a>
      <a
        style={{ marginLeft: "10px", textDecoration: "none" }}
        href="https://github.com/shrey-sachdeva2000"
      >
        <p>Behance</p>
      </a>
      <a
        style={{ marginLeft: "10px", textDecoration: "none" }}
        href="https://github.com/shrey-sachdeva2000"
      >
        <p>Medium</p>
      </a>
    </div>
    <p style={{ color: "#9b9ea3", marginTop: "20px", marginBottom: "0px" }}>Crafted with &hearts; by Shrey Sachdeva</p>
    <p style={{ color: "#9b9ea3", marginTop: "5px !important"}} >&copy; Shrey Sachdeva</p>
  </div>
)

export default Footer
