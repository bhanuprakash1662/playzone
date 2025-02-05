// // import React from "react";
// // import Carousel from "react-bootstrap/Carousel";
// // import Card from "react-bootstrap/Card";
// // import batball from "./images/batball.jpg";
// // import players from "./images/players.jpg";
// // import Wicket from "./images/wicket.jpg";
// // import Box from "./images/box.jpg";
// // import yog from "./images/yog.jpg"
// // import box4 from "./images/box4.jpg"
// // import box3 from "./images/box3.jpg"

// // const CustomCarousel = () => {
// //   return (
// //     <div>
// //       {/* Grey Background Div */}
// //       <div style={{ backgroundColor: "grey", color: "black" }}>
// //         {/* Carousel Section */}
// //         <Carousel fade>
// //           <Carousel.Item>
// //             <img
// //               className="d-block w-100"
// //               src={batball}
// //               alt="First slide"
// //               style={{ height: "400px", objectFit: "cover" }}
// //             />
// //             <Carousel.Caption>
// //               <h3>First Slide Label</h3>
// //               {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
// //             </Carousel.Caption>
// //           </Carousel.Item>

// //           <Carousel.Item>
// //             <img
// //               className="d-block w-100"
// //               src={yog}
// //               alt="Second slide"
// //               style={{ height: "400px", objectFit: "cover" }}
// //             />
// //             <Carousel.Caption>
// //               <h3>Second Slide Label</h3>
// //               {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
// //             </Carousel.Caption>
// //           </Carousel.Item>

// //           <Carousel.Item>
// //             <img
// //               className="d-block w-100"
// //               src={box4}
// //               alt="Third slide"
// //               style={{ height: "400px", objectFit: "fill" }}
// //             />
// //             <Carousel.Caption>
// //               <h3>Third Slide Label</h3>
// //               {/* <p>
// //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// //               </p> */}
// //             </Carousel.Caption>
// //           </Carousel.Item>
// //         </Carousel>
// //       </div>

     
// //       <div
// //         style={{
// //           backgroundColor: "rgb(70, 130, 180)", /* Mixed Blue Color */
// //           // backgroundColor:"grey",
          
// //           color: "white",
// //           padding: "20px",
// //         }}
// //       >
// //         {/* Cards Section */}
// //         <div
// //           style={{
// //             margin: "30px 0", /* Space above and below the cards */
// //             padding: "20px",
// //             // backgroundColor: "#474E93", /* blue background for card area */
// //             backgroundColor:"#A9BFA8",
            
// //             borderRadius: "10px",
           
// //           }}
// //         >
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-around",
// //               gap: "20px",
// //             }}
// //           >
// //             <div>
// //               <Card
// //                 style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
// //               >
// //                 <Card.Img
// //                   variant="top"
// //                   src={box3}
// //                   alt="Bat and Ball"
// //                   style={{ height: "150px", objectFit: "cover" }}
// //                 />
// //                 <Card.Body>
// //                   <Card.Title>Top-Notch Turfs</Card.Title>
// //                   <Card.Text>
// //                     Discover premium cricket turfs with excellent facilities and
// //                     ambiance.
// //                   </Card.Text>
// //                 </Card.Body>
// //               </Card>
// //             </div>

// //             <div>
// //               <Card
// //                 style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
// //               >
// //                 <Card.Img
// //                   variant="top"
// //                   src={players}
// //                   alt="Players"
// //                   style={{ height: "150px", objectFit: "cover" }}
// //                 />
// //                 <Card.Body>
// //                   <Card.Title>Competitive Matches</Card.Title>
// //                   <Card.Text>
// //                     Join thrilling matches and test your skills with fellow
// //                     enthusiasts.
// //                   </Card.Text>
// //                 </Card.Body>
// //               </Card>
// //             </div>

// //             <div>
// //               <Card
// //                 style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
// //               >
// //                 <Card.Img
// //                   variant="top"
// //                   src={Box}
// //                   alt="Cricket Box"
// //                   style={{ height: "150px", objectFit: "cover" }}
// //                 />
// //                 <Card.Body>
// //                   <Card.Title>Easy Booking</Card.Title>
// //                   <Card.Text>
// //                     Book your preferred venue effortlessly with our seamless
// //                     platform.
// //                   </Card.Text>
// //                 </Card.Body>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>

// //         <div style={{ display: "flex", marginTop: "10px" }}>
// //           <div className="add">
// //             <button className="info">HIT & RUN</button>
// //             <h2 id="info1">BOX CRICKET &#127951;</h2>

// //             <h3 style={{ color: "white" }}>Box Cricket Venues in Hyderabad</h3>
// //             <p style={{ color: "white" }}>
// //               Ready to level up your box cricket game? Explore and discover
// //               top-notch box cricket turfs in Hyderabad. Compare prices and
// //               conveniently book your preferred venue online. Join the Nandhu
// //               community now!
// //             </p>
// //           </div>
// //           <div>
// //             <img
// //               className="wicket"
// //               style={{ height: "300px", width: "600px" }}
// //               src={Wicket}
// //               alt="wicket"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Footer Section */}
// //       <footer
// //         style={{
// //           backgroundColor: "#222",
// //           color: "white",
// //           padding: "20px",
// //           textAlign: "center",
// //         }}
// //       >
// //         <div style={{ maxWidth: "800px", margin: "0 auto" }}>
// //           <h4>About Us</h4>
// //           <p>
// //             We are passionate about bringing you the best experience through our
// //             services. Our platform is designed with user satisfaction in mind.
// //           </p>
// //           <hr style={{ border: "1px solid white", margin: "20px 0" }} />
// //           <div>
// //             <p>
// //               <strong>Contact Number:</strong> +91 6301993194, 7337011242
// //             </p>
// //             <p>
// //               <strong>Email:</strong> HIT & RUN Boxcricket@gmail.com
// //             </p>
// //             <p>
// //               <strong>Location:</strong>PLOT NO:46 NEAR KPHP, HYDERABAD ,India
// //             </p>
// //             <p>
// //               <strong>Copyrights</strong>© 2024 HIT & RUN Box Cricket. All Rights
// //               Reserved.
// //             </p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default CustomCarousel;




// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";
// import batball from "./images/batball.jpg";
// import players from "./images/players.jpg";
// import Wicket from "./images/wicket.jpg";
// import Box from "./images/box.jpg";
// import yog from "./images/yog.jpg";
// import box4 from "./images/box4.jpg";
// import box3 from "./images/box3.jpg";

// const CustomCarousel = () => {
//   return (
//     <div>
//       <style>
//         {`
//         /* Global Styles for responsiveness */
//         @media (max-width: 768px) {
//           .card-container {
//             flex-direction: column;
//             align-items: center;
//           }

//           .card-container > div {
//             margin-bottom: 20px;
//           }

//           .info-section {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }

//           .info-section img {
//             width: 100%;
//             height: auto;
//           }

//           footer {
//             padding: 15px;
//             font-size: 14px;
//           }

//           footer div p {
//             font-size: 12px;
//           }
//         }

//         @media (max-width: 480px) {
//           h3, h2 {
//             font-size: 18px;
//           }

//           .card-title, .card-text {
//             font-size: 14px;
//           }
//         }
//         `}
//       </style>

//       {/* Grey Background Div */}
//       <div style={{ backgroundColor: "grey", color: "black" }}>
//         {/* Carousel Section */}
//         <Carousel fade>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={batball}
//               alt="First slide"
//               style={{ height: "400px", objectFit: "cover" }}
//             />
//             <Carousel.Caption>
//               <h3>...</h3>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={yog}
//               alt="Second slide"
//               style={{ height: "400px", objectFit: "cover" }}
//             />
//             <Carousel.Caption>
//               <h3>...</h3>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={box4}
//               alt="Third slide"
//               style={{ height: "400px", objectFit: "fill" }}
//             />
//             <Carousel.Caption>
//               <h3>...</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       {/* Cards Section */}
//       <div
//         style={{
//           backgroundColor: "rgb(70, 130, 180)",
//           color: "white",
//           padding: "20px",
//         }}
//       >
//         <div
//           style={{
//             margin: "30px 0",
//             padding: "20px",
//             backgroundColor: "#A9BFA8",
//             borderRadius: "10px",
//           }}
//         >
//           <div
//             className="card-container"
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               gap: "20px",
//             }}
//           >
//             <div>
//               <Card
//                 style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={box3}
//                   alt="Bat and Ball"
//                   style={{ height: "150px", objectFit: "cover" }}
//                 />
//                 <Card.Body>
//                   <Card.Title>Top-Notch Turfs</Card.Title>
//                   <Card.Text>
//                     Discover premium cricket turfs with excellent facilities and
//                     ambiance.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>

//             <div>
//               <Card
//                 style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={players}
//                   alt="Players"
//                   style={{ height: "150px", objectFit: "cover" }}
//                 />
//                 <Card.Body>
//                   <Card.Title>Competitive Matches</Card.Title>
//                   <Card.Text>
//                     Join thrilling matches and test your skills with fellow
//                     enthusiasts.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>

//             <div>
//               <Card
//                 style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={Box}
//                   alt="Cricket Box"
//                   style={{ height: "150px", objectFit: "cover" }}
//                 />
//                 <Card.Body>
//                   <Card.Title>Easy Booking</Card.Title>
//                   <Card.Text>
//                     Book your preferred venue effortlessly with our seamless
//                     platform.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//         </div>

//         <div
//           className="info-section"
//           style={{ display: "flex", marginTop: "10px", gap: "20px" }}
//         >
//           <div className="add">
//             <button className="info">HIT & RUN</button>
//             <h2 id="info1">BOX CRICKET &#127951;</h2>

//             <h3 style={{ color: "white" }}>Box Cricket Venues in Hyderabad</h3>
//             <p style={{ color: "white" }}>
//               Ready to level up your box cricket game? Explore and discover
//               top-notch box cricket turfs in Hyderabad. Compare prices and
//               conveniently book your preferred venue online. Join the Nandhu
//               community now!
//             </p>
//           </div>
//           <div>
//             <img
//               className="wicket"
//               style={{ height: "300px", width: "100%", maxWidth: "600px" }}
//               src={Wicket}
//               alt="wicket"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer
//         style={{
//           backgroundColor: "#222",
//           color: "white",
//           padding: "20px",
//           textAlign: "center",
//         }}
//       >
//         <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//           <h4>About Us</h4>
//           <p>
//             We are passionate about bringing you the best experience through our
//             services. Our platform is designed with user satisfaction in mind.
//           </p>
//           <hr style={{ border: "1px solid white", margin: "20px 0" }} />
//           <div>
//             <p>
//               <strong>Contact Number:</strong> +91 6301993194, 7337011242
//             </p>
//             <p>
//               <strong>Email:</strong> HIT & RUN Boxcricket@gmail.com
//             </p>
//             <p>
//               <strong>Location:</strong>PLOT NO:46 NEAR KPHP, HYDERABAD, India
//             </p>
//             <p>
//               <strong>Copyrights</strong>© 2024 HIT & RUN Box Cricket. All Rights
//               Reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CustomCarousel;
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import batball from "./images/batball.jpg"; // Cricket Image
import players from "./images/players.jpg"; // Players Image
import Wicket from "./images/wicket.jpg"; // Wicket Image
import Box from "./images/box.jpg"; // Box Cricket Image
import football from "./images/football.jpg"; // Football Image
import basketball from "./images/basketball.jpg"; // Basketball Image
import box4 from "./images/box4.jpg"; // Generic Game Image
import box3 from "./images/box3.jpg"; // Another Game Image
import Swimming from "./images/swimming.jpg";
import Multisport from "./images/multisport.jpg";

const CustomCarousel = () => {
  return (
    <div>
      <style>
        {`
        /* Global Styles for responsiveness */
        @media (max-width: 768px) {
          .card-container {
            flex-direction: column;
            align-items: center;
          }

          .card-container > div {
            margin-bottom: 20px;
          }

          .info-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .info-section img {
            width: 100%;
            height: auto;
          }

          footer {
            padding: 15px;
            font-size: 14px;
          }

          footer div p {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          h3, h2 {
            font-size: 18px;
          }

          .card-title, .card-text {
            font-size: 14px;
          }
        }

        /* Card Hover Effects */
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05); /* Slight scale-up effect */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Shadow effect */
        }

        .card-body {
          transition: background-color 0.3s ease;
        }

        .card:hover .card-body {
          background-color: rgba(0, 51, 102, 0.8); /* Darker background on hover */
        }
        `}
      </style>

      {/* Grey Background Div */}
      <div style={{ backgroundColor: "grey", color: "black" }}>
        {/* Carousel Section */}
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Swimming}
              alt="First slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={football}
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={box4}
              alt="Third slide"
              style={{ height: "400px", objectFit: "fill" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Cards Section */}
      <div
        style={{
          backgroundColor: "rgb(70, 130, 180)",
          color: "white",
          padding: "20px",
        }}
      >
        <div
          style={{
            margin: "30px 0",
            padding: "20px",
            backgroundColor: "#1111",
            borderRadius: "10px",
          }}
        >
          <div
            className="card-container"
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap", // Allow wrapping for smaller screens
            }}
          >
            {/* Swimming Card */}
            <div>
              <Card
                style={{
                  width: "22rem", // Increased width
                  backgroundColor: "#003366",
                  color: "white",
                  height: "100%", // Ensure all cards have the same height
                }}
              >
                <Card.Img
                  variant="top"
                  src={Swimming}
                  alt="Game"
                  style={{ height: "200px", objectFit: "cover" }} // Increased image height
                />
                <Card.Body>
                  <Card.Title>Premium Swimming Pools</Card.Title>
                  <Card.Text>
                    Dive into our state-of-the-art swimming pools with top-tier
                    facilities for all your water activities. Whether you're
                    swimming for fitness or leisure, we offer the best aquatic
                    experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* Competitive Matches Card */}
            <div>
              <Card
                style={{
                  width: "22rem", // Increased width
                  backgroundColor: "#003366",
                  color: "white",
                  height: "100%", // Ensure all cards have the same height
                }}
              >
                <Card.Img
                  variant="top"
                  src={players}
                  alt="Players"
                  style={{ height: "200px", objectFit: "cover" }} // Increased image height
                />
                <Card.Body>
                  <Card.Title>Competitive Matches</Card.Title>
                  <Card.Text>
                    Join thrilling matches in football, cricket, basketball, and
                    more!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* Easy Booking Card */}
            <div>
              <Card
                style={{
                  width: "22rem", // Increased width
                  backgroundColor: "#003366",
                  color: "white",
                  height: "100%", // Ensure all cards have the same height
                }}
              >
                <Card.Img
                  variant="top"
                  src={football}
                  alt="Football"
                  style={{ height: "200px", objectFit: "cover" }} // Increased image height
                />
                <Card.Body>
                  <Card.Title>Easy Booking</Card.Title>
                  <Card.Text>
                    Book your preferred venue effortlessly for cricket,
                    football, basketball, and more.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* Basketball Courts Card */}
            <div>
              <Card
                style={{
                  width: "22rem", // Increased width
                  backgroundColor: "#003366",
                  color: "white",
                  height: "100%", // Ensure all cards have the same height
                }}
              >
                <Card.Img
                  variant="top"
                  src={basketball}
                  alt="Basketball"
                  style={{ height: "200px", objectFit: "cover" }} // Increased image height
                />
                <Card.Body>
                  <Card.Title>Basketball Courts</Card.Title>
                  <Card.Text>
                    Play basketball at top-rated courts with excellent amenities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* Indoor Games Card */}
            <div>
              <Card
                style={{
                  width: "22rem", // Increased width
                  backgroundColor: "#003366",
                  color: "white",
                  height: "100%", // Ensure all cards have the same height
                }}
              >
                <Card.Img
                  variant="top"
                  src={box3} // Use an appropriate image for indoor games
                  alt="Indoor Games"
                  style={{ height: "200px", objectFit: "cover" }} // Increased image height
                />
                <Card.Body>
                  <Card.Title>Indoor Games</Card.Title>
                  <Card.Text>
                    Enjoy a variety of indoor games like table tennis, chess,
                    carrom, and more in our premium facilities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* Other Games Card */}
            <div>
              <Card
                style={{
                  width: "22rem", // Increased width
                  backgroundColor: "#003366",
                  color: "white",
                  height: "100%", // Ensure all cards have the same height
                }}
              >
                <Card.Img
                  variant="top"
                  src={Multisport} // Use an appropriate image for other games
                  alt="Other Games"
                  style={{ height: "200px", objectFit: "cover" }} // Increased image height
                />
                <Card.Body>
                  <Card.Title>Other Games</Card.Title>
                  <Card.Text>
                    Explore a wide range of other games and activities tailored
                    for all age groups and skill levels.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div
          className="info-section"
          style={{ display: "flex", marginTop: "10px", gap: "20px" }}
        >
          <div className="add">
            <button className="info">MULTI-SPORTS</button>
            <h2 id="info1">SPORTS VENUES &#127947;</h2>

            <h3 style={{ color: "white" }}>Sports Venues for All Games</h3>
            <p style={{ color: "white" }}>
              Ready to level up your game? Explore and discover top-notch sports
              venues in your area. Compare prices and conveniently book your
              preferred venue online. Join the community now and enjoy football,
              cricket, basketball, and more!
            </p>
          </div>
          <div>
            <img
              className="wicket"
              style={{ height: "300px", width: "100%", maxWidth: "600px" }}
              src={Wicket}
              alt="Sports"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#222",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h4>About Us</h4>
          <p>
            We are passionate about providing the best sports venues for a
            variety of games. Our platform is designed to offer an easy and
            enjoyable booking experience for all sports enthusiasts.
          </p>
          <hr style={{ border: "1px solid white", margin: "20px 0" }} />
          <div>
            <p>
              <strong>Contact Number:</strong> +91 6301993194, 7337011242
            </p>
            <p>
              <strong>Email:</strong> MultiSports@gmail.com
            </p>
            <p>
              <strong>Location:</strong> PLOT NO:46 NEAR KPHP, HYDERABAD, India
            </p>
            <p>
              <strong>Copyrights</strong>© 2024 MultiSports. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomCarousel;
