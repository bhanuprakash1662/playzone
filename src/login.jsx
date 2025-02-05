// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import cricketer from "./box1/images/signformimg.jpg"
// // import { width } from "@fortawesome/free-solid-svg-icons/fa0";

// function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     alert("Login Successful!");
//     navigate("/");
//     // Add logic for authentication here
//   };

//   const styles = {
//     app: {
//       fontFamily: "Arial, sans-serif",
//       textAlign: "center",
//       marginTop: "50px",
//     },

//     loginForm: {
//       height: "60vh",
//       width: "400px",
//       margin: "0 auto",
//       padding: "20px",
//       border: "1px solid #ccc",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     heading: {
//       marginBottom: "20px",
//     },
//     formGroup: {
//       marginBottom: "15px",
//       textAlign: "left",
//     },
//     label: {
//       display: "block",
//       marginBottom: "5px",
//     },
//     input: {
//       width: "100%",
//       padding: "8px",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       backgroundColor: "#007bff",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       marginTop: "10px",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//    cricketer1 :{
//       height:"100%",
//       width:"100%",
//     }
//   };

//   return (

//     <div style={styles.app}>
//           <div className="cricketer1" style={{
//           backgroundImage: `url(${cricketer})`,
//           ...styles.cricketer1, // Merging inline and external styles
//         }} >
//       <div style={styles.loginForm}>
//         {/* <div className="" style={{backgroundImage: `url(${cricketer})`}}> */}
//         <h2 style={styles.heading}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="username">
//               Username:
//             </label>
//             <input
//               style={styles.input}
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="password">
//               Password:
//             </label>
//             <input
//               style={styles.input}
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             style={styles.button}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Login; 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cricketer from "./box1/images/signformimg.jpg";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login Successful!");
    navigate("/");
  };

  const styles = {
    app: {
      height: "100vh",
      backgroundImage: `url(${cricketer})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    loginForm: {
      width: "400px",
      padding: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },

    heading: {
      marginBottom: "20px",
      textAlign: "center",
    },

    formGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },

    label: {
      display: "block",
      marginBottom: "5px",
    },

    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },

    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.loginForm}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="username">
              Username:
            </label>
            <input
              style={styles.input}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              style={styles.input}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
