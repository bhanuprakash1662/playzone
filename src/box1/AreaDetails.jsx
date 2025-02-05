import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button ,Carousel} from "react-bootstrap";
// import "./detailspage.css";
import { useNavigate } from "react-router-dom";
import "./AreaDetails.css";

const CricketAreas = [
  {
    areaName: "Nizampet",
    cricketPlaces: [
      {
        playZoneClub: "Orange Arena",
        address: "123 Main Street, Downtown",
        pricePerHour: 200,
        facilities: ["Floodlights", "Parking", "Restrooms"],
        sports: ["Cricket", "Football", "Badminton", "Table Tennis"],
        description:
          "A premium play zone club featuring state-of-the-art floodlights and ample parking. Enjoy a professionally maintained cricket pitch, a full-sized football field, dedicated badminton courts, and a table tennis area for quick matches.",
        images: [
          "https://media.hudle.in/venues/94e28e0f-97d9-4145-8256-b2e75cabf3d8/photo/5ab139aa537dccf82a3fd7b9138d30a7388cef63",
          "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/709134/pexels-photo-709134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
      {
        playZoneClub: "Harish Sports Hub",
        address: "456 Elm Street, Downtown",
        pricePerHour: 250,
        facilities: ["Seating", "Drinks Counter", "Washrooms"],
        sports: ["Cricket", "Table Tennis", "Chess"],
        description:
          "A spacious play zone club offering a well-kept cricket ground, professional table tennis tables, and an area for chess and board games. Perfect for mixing physical and strategic challenges.",
        images: [
          "https://media.hudle.in/venues/94e28e0f-97d9-4145-8256-b2e75cabf3d8/photo/14661471b24db5883f8fe531a33f85a0990572cd",
          "https://images.pexels.com/photos/4080060/pexels-photo-4080060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.cnbctv18.com/uploads/2024/07/bodhana-2024-07-2d509803b3be6343fd4ce5e8dc3958b8.jpg?impolicy=website&width=400&height=225",
          "https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
      {
        playZoneClub: "Hudle PlayZone Club",
        address: "789 Oak Avenue, Downtown",
        pricePerHour: 300,
        facilities: ["Changing Rooms", "Parking", "Floodlights"],
        sports: ["Cricket", "Badminton", "Squash", "Futsal"],
        description:
          "Equipped with modern changing rooms and bright floodlights, this club caters to both competitive and casual play. Enjoy a quality cricket pitch, dedicated badminton and squash courts, and a futsal arena for fast-paced indoor football.",
        images: [
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/aea0149e1397fcb354803f2df24671f24cf1bc90",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/d8ff119947f42f9d5d327771e41998ce803333f5",
          "https://media.istockphoto.com/id/1335419774/photo/young-asian-indian-female-squash-player-practicing-with-guidance-from-her-coach.jpg?s=612x612&w=0&k=20&c=83X2eXtXEDVEsSxhlEKz2W7Ju8PgG9fIXD-PvY22Djw=",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/34601ad6d21180f304fc050b552e603293db44e0",
        ],
      },
    ],
  },
  {
    areaName: "Manikonda",
    cricketPlaces: [
      {
        playZoneClub: "Santro PlayZone Club",
        address: "10 Lakeview Road, Uptown",
        pricePerHour: 240,
        facilities: ["Restrooms", "Cafeteria", "Parking"],
        sports: ["Cricket", "Volleyball", "Badminton"],
        description:
          "A serene play zone club with a quality cricket pitch, outdoor volleyball courts, and a dedicated badminton area. The on-site cafeteria and ample parking make it ideal for both competitive and casual events.",
        images: [
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/d8ff119947f42f9d5d327771e41998ce803333f5",
          "https://thevintagejohnite.wordpress.com/wp-content/uploads/2019/03/img-20190314-wa0018.jpg?w=1200",
          "https://shop.kenten-tent.com/wp-content/uploads/2024/11/DJI_20241019140409_0351_D.jpg",
        ],
      },
      {
        playZoneClub: "Googly Active Club",
        address: "25 Sunshine Street, Uptown",
        pricePerHour: 260,
        facilities: ["Floodlights", "Changing Rooms", "First Aid"],
        sports: ["Cricket", "Basketball", "Skating"],
        description:
          "This modern play zone club offers a well-maintained cricket field, a professional basketball court, and a small skating rink. Floodlights and first-aid facilities ensure a safe environment for night-time events.",
        images: [
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/ee91d6b148894c9a0931b9a059c148c06f709f50",
          "https://volantbadminton.com/cdn/shop/articles/Outdoor_Badminton_1280x.jpg?v=1568203766",
          "https://content.jdmagicbox.com/comp/chandigarh/b3/0172px172.x172.210614141525.v5b3/catalogue/skating-school-india-chandigarh-sector-33-chandigarh-skating-classes-m3kq9tkdlc.jpg",
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/438164bd108e14872c013a151cff5b4fb36a6ac1",
        ],
      },
      {
        playZoneClub: "Mona FunZone",
        address: "40 Hillside Avenue, Uptown",
        pricePerHour: 230,
        facilities: ["Seating", "Canteen", "Washrooms"],
        sports: ["Cricket", "Table Tennis", "Badminton", "Chess"],
        description:
          "A compact and affordable fun zone club that offers an excellent cricket ground, professionally set-up table tennis areas, and dedicated badminton courts. A corner for chess enthusiasts is also available, complemented by a well-stocked canteen.",
        images: [
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/489f4f0ef868da51ed1e5ea11cb8a2c9823426cc",
          "https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://lh3.googleusercontent.com/proxy/D7pzoY_sQTzHg2agQ6RjZagcejstOyo_r8vJymOIW_LH7MFNBb8V-pgGMGWI_4DsoIKkOAbPsPGz",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/0b4dbe9f79e05c61c26f19f2c5dfda818bb5cad5",
        ],
      },
    ],
  },
  {
    areaName: "Bachupally",
    cricketPlaces: [
      {
        playZoneClub: "Earangel PlayZone",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        sports: ["Cricket", "Football", "Swimming", "Yoga"],
        description:
          "A highly sought-after play zone club in the heart of the city featuring a professional cricket pitch, a full-sized football field with modern turf, a swimming pool for leisure and competitive events, and dedicated zones for yoga sessions.",
        images: [
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/8db09d47c0f1e4055ed3b672ad02ee6eeec7924d",
          "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://yogaindiafoundation.com/wp-content/uploads/2024/07/Untitled-design-2024-07-18T151200.372-e1721295755520.jpg",
          "https://images.pexels.com/photos/8813564/pexels-photo-8813564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
      {
        playZoneClub: "Livik Active Club",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        sports: ["Cricket", "Badminton", "Squash", "Karate"],
        description:
          "A premium play zone club offering a well-prepared cricket ground, modern badminton courts designed for high-speed play, professional squash courts, and a dedicated training area for karate sessions.",
        images: [
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/b8b51341731af4dfa6b82c223eeccbfbe070fafa",
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/59371309f0cd3978791940d9755da6f757a8c2ed",
          "https://media.istockphoto.com/id/1335419774/photo/young-asian-indian-female-squash-player-practicing-with-guidance-from-her-coach.jpg?s=612x612&w=0&k=20&c=83X2eXtXEDVEsSxhlEKz2W7Ju8PgG9fIXD-PvY22Djw=",
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/d88cf5dbf477a772197808ae819220a73aeab610",
        ],
      },
      {
        playZoneClub: "Srija Fun & Play Garden",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        sports: ["Cricket", "Football", "Yoga", "Dance"],
        description:
          "A state-of-the-art play zone club featuring bright floodlights and a canteen offering delicious refreshments. Enjoy a pristine cricket pitch, a robust football field, and dedicated zones for yoga and dance classes to keep you active and entertained.",
        images: [
          "https://media.hudle.in/venues/a5ba7e56-b214-4b86-924c-ca345b90f31b/photo/608c3567d6c1fab69eba19a46f541d2ccd80ffbb",
          "https://ekamyogaacademy.com/public/uploads/blog/1685356430.jpg",
          "https://content.jdmagicbox.com/v2/comp/hyderabad/c4/040pxx40.xx40.120502142049.e8c4/catalogue/shiamak-davars-institute-of-performing-arts-himayat-nagar-hyderabad-dance-classes-2vw3d82.jpg",
          "https://images.pexels.com/photos/30461448/pexels-photo-30461448/free-photo-of-soccer-player-kicking-ball-on-green-field-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://media.hudle.in/venues/199d7101-9809-4171-9724-493d856a0382/photo/ea5c07418dffbf17ba4d11a00d893a2fba921e7b",
        ],
      },
    ],
  },
  {
    areaName: "Miyapur",
    cricketPlaces: [
      {
        playZoneClub: "Mahesh Active Zone",
        address: "10 Lakeview Road, Uptown",
        pricePerHour: 240,
        facilities: ["Restrooms", "Cafeteria", "Parking"],
        sports: ["Cricket", "Basketball", "Skating"],
        description:
          "A serene play zone club offering a dedicated cricket field alongside a professional basketball court and a small skating rink. Enjoy a mix of outdoor and indoor sports in one convenient location.",
        images: [
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/0dc263e80df3ecb03acff381bd6c34cda7e585d6",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/018cb59afdc8f4e5f060f2883cd148a8ee91421d",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/018cb59afdc8f4e5f060f2883cd148a8ee91421d",
          "https://content.jdmagicbox.com/comp/chandigarh/b3/0172px172.x172.210614141525.v5b3/catalogue/skating-school-india-chandigarh-sector-33-chandigarh-skating-classes-m3kq9tkdlc.jpg"
        ],
      },
      // Additional clubs in Miyapur can be added here.
    ],
  },
  {
    areaName: "Jntu",
    cricketPlaces: [
      {
        playZoneClub: "Bheem Rao PlayZone",
        address: "10 Lakeview Road, Uptown",
        pricePerHour: 240,
        facilities: ["Restrooms", "Cafeteria", "Parking"],
        sports: ["Cricket", "Volleyball", "Badminton"],
        description:
          "A calm play zone club featuring a quality cricket pitch along with courts for volleyball and badminton. The cafeteria and ample parking provide a relaxing environment for families and teams.",
        images: [
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/d8ff119947f42f9d5d327771e41998ce803333f5",
          "https://www.doonpublicschoolgorakhpur.com/images/volley_ball_1.jpg",
          "https://watermark.lovepik.com/photo/20220319/large/lovepik-high-end-community-outdoor-badminton-court-picture_502368346.jpg",
        ],
      },
      {
        playZoneClub: "Googly Active Club",
        address: "25 Sunshine Street, Uptown",
        pricePerHour: 260,
        facilities: ["Floodlights", "Changing Rooms", "First Aid"],
        sports: ["Cricket", "Basketball", "Skating"],
        description:
          "A professional play zone club with a well-maintained cricket field, a modern basketball court, and an additional area for roller skating. Floodlights and first-aid services ensure a safe and enjoyable experience.",
        images: [
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/ee91d6b148894c9a0931b9a059c148c06f709f50",
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/25547b3905b1be57e42b3e4f96d04a288fd4b22c",
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/438164bd108e14872c013a151cff5b4fb36a6ac1",
          "https://content.jdmagicbox.com/comp/chandigarh/b3/0172px172.x172.210614141525.v5b3/catalogue/skating-school-india-chandigarh-sector-33-chandigarh-skating-classes-m3kq9tkdlc.jpg"
        ],
      },
      {
        playZoneClub: "Uptown PlayZone",
        address: "40 Hillside Avenue, Uptown",
        pricePerHour: 230,
        facilities: ["Seating", "Canteen", "Washrooms"],
        sports: ["Cricket", "Table Tennis", "Badminton"],
        description:
          "A compact and affordable play zone club that offers an excellent cricket ground along with well-equipped areas for table tennis and badminton. The canteen and comfortable seating enhance the overall experience.",
        images: [
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/489f4f0ef868da51ed1e5ea11cb8a2c9823426cc",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMumbai%2FTable-Tennis-Classes-in-Dadar-West%2Fnct-10469598&psig=AOvVaw25GecwMcwNjmGbAseGpc43&ust=1738495432574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiYtquuoosDFQAAAAAdAAAAABAE",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/0b4dbe9f79e05c61c26f19f2c5dfda818bb5cad5",
        ],
      },
    ],
  },
  {
    areaName: "kphb",
    cricketPlaces: [
      {
        playZoneClub: "Sweat Zone Arena",
        address: "5 Oakfield Drive, Suburbs",
        pricePerHour: 210,
        facilities: ["Floodlights", "Seating", "Parking"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "An affordable play zone club with bright floodlights and ample seating, perfect for casual cricket games, friendly football matches, and quick badminton sessions.",
        images: [
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/7f80d259a83634f32df484bad77d34b2dbe1c302",
          "https://watermark.lovepik.com/photo/20220319/large/lovepik-high-end-community-outdoor-badminton-court-picture_502368346.jpg",
          "https://images.pexels.com/photos/30461448/pexels-photo-30461448/free-photo-of-soccer-player-kicking-ball-on-green-field-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
      {
        playZoneClub: "Surya PlayZone",
        address: "15 Willow Street, Suburbs",
        pricePerHour: 230,
        facilities: ["Changing Rooms", "Restrooms", "Cafeteria"],
        sports: ["Cricket", "Volleyball", "Table Tennis"],
        description:
          "A family-friendly play zone club featuring modern changing rooms and a cafeteria. Enjoy cricket matches along with volleyball and table tennis games in a relaxed atmosphere.",
        images: [
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/b505d71885c9ae3fc3169a2c088a214b14db235f",
          "https://watermark.lovepik.com/photo/20220319/large/lovepik-high-end-community-outdoor-badminton-court-picture_502368346.jpg",
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/45fc99ea0df5b3ae7c3b22d5145dbd27a9608f88",
        ],
      },
      {
        playZoneClub: "Suburbs Active Club",
        address: "30 Maplewood Road, Suburbs",
        pricePerHour: 250,
        facilities: ["Washrooms", "First Aid", "Floodlights"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A well-equipped play zone club for professional-level matches. Enjoy a pristine cricket pitch, a robust football field, and dedicated badminton courts along with essential first-aid facilities.",
        images: [
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/489f4f0ef868da51ed1e5ea11cb8a2c9823426cc",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/133476b10b394afe73b6afb0ec4458c90697ee6b",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/0b4dbe9f79e05c61c26f19f2c5dfda818bb5cad5",
        ],
      },
    ],
  },
  {
    areaName: "kondapur",
    cricketPlaces: [
      {
        playZoneClub: "L&T PlayZone",
        address: "10 Lakeview Road, Uptown",
        pricePerHour: 240,
        facilities: ["Restrooms", "Cafeteria", "Parking"],
        sports: ["Cricket", "Badminton", "Table Tennis"],
        description:
          "A serene play zone club offering a quality cricket field, along with dedicated courts for badminton and table tennis. Enjoy excellent facilities in a relaxed environment.",
        images: [
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/0dc263e80df3ecb03acff381bd6c34cda7e585d6",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/018cb59afdc8f4e5f060f2883cd148a8ee91421d",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMumbai%2FTable-Tennis-Classes-in-Dadar-West%2Fnct-10469598&psig=AOvVaw25GecwMcwNjmGbAseGpc43&ust=1738495432574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiYtquuoosDFQAAAAAdAAAAABAE",
        ],
      },
      {
        playZoneClub: "Vision Active Club",
        address: "25 Sunshine Street, Uptown",
        pricePerHour: 260,
        facilities: ["Floodlights", "Changing Rooms", "First Aid"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A professional play zone club with a well-maintained cricket ground, modern facilities for football, and dedicated badminton courts. Safety is ensured with first-aid and proper lighting.",
        images: [
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/b45b26f9add3a71a9e6003e6bd3941bdedc6f1e6",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/d709130988148d624941fec18287ba895d23b890",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/5e62351997df0083a999b3d4e5d0486d9e8b3e07",
        ],
      },
      {
        playZoneClub: "Atlas PlayZone",
        address: "40 Hillside Avenue, Uptown",
        pricePerHour: 230,
        facilities: ["Seating", "Canteen", "Washrooms"],
        sports: ["Cricket", "Table Tennis", "Chess"],
        description:
          "A compact and affordable play zone club with excellent seating, a well-stocked canteen, and dedicated zones for table tennis and chess. Ideal for casual matches and strategic game sessions.",
        images: [
          "https://media.hudle.in/venues/111b0d83-1f47-4a87-be80-bdbe57f25aaf/photo/07a48c447eb9f4b3af8918ac1eea579ffa40719e",
          "https://media.hudle.in/venues/111b0d83-1f47-4a87-be80-bdbe57f25aaf/photo/09cbab17338a303d19581edc4f51ad268d44b232",
          "https://www.india.com/wp-content/uploads/2016/02/suhaani-lohia-.jpg",
          "https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
    ],
  },
  {
    areaName: "kukatpally",
    cricketPlaces: [
      {
        playZoneClub: "City Center PlayZone",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A highly sought-after play zone club in the heart of the city featuring a professional cricket pitch, a full-sized football field, and dedicated badminton courts with modern amenities.",
        images: [
          "https://media.hudle.in/venues/46a6b649-1de6-4be5-9bb5-e6dc52be2369/photo/0917b9b06687b2d81075a049a5f694b45699322e",
          "https://5.imimg.com/data5/SELLER/Default/2023/5/310825450/IC/ZU/WG/27012647/outdoor-synthetic-badminton-court-500x500.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKb12W9JPp6ZCjjLVLmEezd-BnwzzOuYuVdg&s",
        ],
      },
      {
        playZoneClub: "Arena Active Club",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        sports: ["Cricket", "Basketball", "Skating"],
        description:
          "A premium play zone club with comfortable seating and easy accessibility. Enjoy a well-prepared cricket field, a professional basketball court, and an area for roller skating.",
        images: [
          "https://media.hudle.in/venues/46a6b649-1de6-4be5-9bb5-e6dc52be2369/photo/c2d02365d295492f43e2aa06852e123a063a3033",
          "https://www.courtsoftheworld.com/upload/courts/1026/2/COTW_Madhavan-Park_1251406720.webp",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKb12W9JPp6ZCjjLVLmEezd-BnwzzOuYuVdg&s",
        ],
      },
      {
        playZoneClub: "Riya PlayZone",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        sports: ["Cricket", "Football", "Table Tennis"],
        description:
          "A state-of-the-art play zone club with bright floodlights and a canteen offering delicious refreshments. Enjoy a pristine cricket pitch, a robust football field, and dedicated table tennis courts for intense matches.",
        images: [
          "https://media.hudle.in/venues/9f235fe8-638e-4d0e-a3a7-4f5313390214/photo/c4afb20fb2da5b4c5baada35db68b0ff9b997f02",
          "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/07/08/Pictures/ht-photo_dc21e224-a173-11e9-85f3-0f8400bbe260.JPG",
          "https://thumbs.dreamstime.com/b/howrah-west-bengal-india-nd-april-football-playing-students-ground-indian-institute-engineering-science-technology-iiest-257352257.jpg",
        ],
      },
    ],
  },
  {
    areaName: "Srnagar",
    cricketPlaces: [
      {
        playZoneClub: "Big Ball Arena",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A highly sought-after play zone club located in the heart of the city, featuring world-class amenities and a pristine cricket pitch, a full-sized football field, and dedicated badminton courts.",
        images: [
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/8db09d47c0f1e4055ed3b672ad02ee6eeec7924d",
          "https://5.imimg.com/data5/SELLER/Default/2023/5/310825450/IC/ZU/WG/27012647/outdoor-synthetic-badminton-court-500x500.jpg",
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/c259266fa033755f958880c32087b28bf2325145",
        ],
      },
      {
        playZoneClub: "SL Sports PlayZone",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        sports: ["Cricket", "Basketball", "Skating"],
        description:
          "A premium play zone club with comfortable seating arrangements and easy accessibility. Enjoy a well-prepared cricket field along with facilities for basketball and skating.",
        images: [
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/b8b51341731af4dfa6b82c223eeccbfbe070fafa",
          "https://media.istockphoto.com/id/174843298/photo/boy-playing-basketball.jpg?s=612x612&w=0&k=20&c=9-5_V7hePjBal4ODEZ_eSPQPG59X_3wHuzZcvcT5bu8=",
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/d88cf5dbf477a772197808ae819220a73aeab610",
        ],
      },
      {
        playZoneClub: "Poornima Active Club",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        sports: ["Cricket", "Football", "Yoga"],
        description:
          "A state-of-the-art play zone club with bright floodlights and a canteen offering delicious refreshments. Enjoy a pristine cricket pitch, a robust football field, and dedicated zones for yoga sessions.",
        images: [
          "https://media.hudle.in/venues/a5ba7e56-b214-4b86-924c-ca345b90f31b/photo/608c3567d6c1fab69eba19a46f541d2ccd80ffbb",
          "https://media.hudle.in/venues/a5ba7e56-b214-4b86-924c-ca345b90f31b/photo/57d6f37ac2dbdb113442af9577021091290633b9",
          "https://www.shutterstock.com/image-photo/indian-elder-adult-gen-x-260nw-2539381885.jpg",
          "https://media.hudle.in/venues/199d7101-9809-4171-9724-493d856a0382/photo/ea5c07418dffbf17ba4d11a00d893a2fba921e7b",
        ],
      },
    ],
  },
  {
    areaName: "Gachibowli",
    cricketPlaces: [
      {
        playZoneClub: "Howzat PlayZone",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A highly sought-after play zone club in the heart of the city featuring a professional cricket pitch, a full-sized football field, and dedicated badminton courts with modern amenities.",
        images: [
          "https://media.hudle.in/venues/0fb6199b-94a5-4de5-816b-43bf3ec98081/photo/d52555fcc31d03e4e29ca4cadfb3dd2d05a967b5",
          "https://content.jdmagicbox.com/v2/comp/mumbai/p6/022pxx22.xx22.240313180507.y7p6/catalogue/badminton-indoor-court-dharavi-sion-mumbai-ac-banquet-halls-pkbu1v24gr.jpg",
          "https://media.hudle.in/venues/0fb6199b-94a5-4de5-816b-43bf3ec98081/photo/8b279e54187c83962e38139ef2aa946a988c183f",
        ],
      },
      {
        playZoneClub: "Stumps-ON Active Club",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        sports: ["Cricket", "Basketball", "Skating"],
        description:
          "A premium play zone club with comfortable seating arrangements and easy accessibility. Enjoy a well-prepared cricket field alongside a professional basketball court and a skating area.",
        images: [
          "https://media.hudle.in/venues/2d0a5093-ab25-43dc-bc4d-bf120745ab65/photo/148f0c2fea897d23328413220dbc5ad25f483d5d",
          "https://static.ffx.io/images/$zoom_0.603,$multiply_0.7725,$ratio_1.5,$width_756,$x_0,$y_0/t_crop_custom/q_86,f_auto/6709287f1d4638ece64c26e6c86bb1e20825eadf",
          "https://media.hudle.in/venues/2d0a5093-ab25-43dc-bc4d-bf120745ab65/photo/fb23d3cac6496ff3f1848c35e162689cbf3070b1",
        ],
      },
      {
        playZoneClub: "Not-out PlayZone",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A state-of-the-art play zone club with bright floodlights and a canteen offering delicious refreshments. Enjoy a pristine cricket pitch, a robust football field, and dedicated badminton courts for intense matches.",
        images: [
          "https://nscimumbai.com/wp-content/uploads/2015/06/Table-Tenni_02.jpg",
          "https://media.hudle.in/venues/255602c6-77a3-4828-9606-1c653af390db/photo/880f48010056c3331a944964b72836006bc90f7b",
          "https://content.jdmagicbox.com/v2/comp/mumbai/p6/022pxx22.xx22.240313180507.y7p6/catalogue/badminton-indoor-court-dharavi-sion-mumbai-ac-banquet-halls-pkbu1v24gr.jpg",
        ],
      },
    ],
  },
  {
    areaName: "Madhapur",
    cricketPlaces: [
      {
        playZoneClub: "Happening PlayZone",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A highly sought-after play zone club located in the heart of the city featuring world-class amenities. Enjoy a well-maintained cricket pitch, a versatile football field, and dedicated badminton courts.",
        images: [
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/d8ff119947f42f9d5d327771e41998ce803333f5",
          "https://nscimumbai.com/wp-content/uploads/2015/06/Table-Tenni_02.jpg",
          "https://thumbs.dreamstime.com/b/howrah-west-bengal-india-nd-april-football-playing-students-ground-indian-institute-engineering-science-technology-iiest-257352257.jpg",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/8d551711caa591f844bc09bf3af441b641dd603b",
        ],
      },
      {
        playZoneClub: "Akhil Active Club",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        sports: ["Cricket", "Basketball", "Skating"],
        description:
          "A premium play zone club with comfortable seating and easy accessibility. Enjoy a well-prepared cricket ground alongside a professional basketball court and a small skating rink.",
        images: [
          "https://media.hudle.in/venues/9f235fe8-638e-4d0e-a3a7-4f5313390214/photo/4cb5ea33bb9941df2005e091540cd8e52ebb92ac",
          "https://media.hudle.in/venues/9f235fe8-638e-4d0e-a3a7-4f5313390214/photo/39500073b11d8b61a6bffb4b9d3e84111291ddab",
          "https://static.ffx.io/images/$zoom_0.603,$multiply_0.7725,$ratio_1.5,$width_756,$x_0,$y_0/t_crop_custom/q_86,f_auto/6709287f1d4638ece64c26e6c86bb1e20825eadf",
        ],
      },
      {
        playZoneClub: "Shiva PlayZone",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A state-of-the-art play zone club with bright floodlights and a canteen offering delicious refreshments. Enjoy a quality cricket pitch, a robust football field, and dedicated badminton courts for an all-around sporting experience.",
        images: [
          "https://media.hudle.in/venues/6c8482d2-c9d2-4242-b920-73e89ea6c206/photo/76cc0a5c7838582c2749d76b9ad20c41ede114f9",
          "https://nscimumbai.com/wp-content/uploads/2015/06/Table-Tenni_02.jpg",
          "https://thumbs.dreamstime.com/b/howrah-west-bengal-india-nd-april-football-playing-students-ground-indian-institute-engineering-science-technology-iiest-257352257.jpg",
        ],
      },
    ],
  },
  {
    areaName: "Hitech city",
    cricketPlaces: [
      {
        playZoneClub: "Sportz Pride Arena",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A highly sought-after play zone club located in the heart of the city, featuring world-class amenities. Enjoy a professional cricket pitch, a spacious football field, and dedicated badminton courts.",
        images: [
          "https://media.hudle.in/venues/b0c58b2b-1915-4c8c-94b1-bcebbdc0fb19/photo/38dde0a882a873fba9b59816562d0d08297ba30d",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMumbai%2FTable-Tennis-Classes-in-Dadar-West%2Fnct-10469598&psig=AOvVaw25GecwMcwNjmGbAseGpc43&ust=1738495432574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiYtquuoosDFQAAAAAdAAAAABAE",
          "https://thumbs.dreamstime.com/b/howrah-west-bengal-india-nd-april-football-playing-students-ground-indian-institute-engineering-science-technology-iiest-257352257.jpg",
        ],
      },
      {
        playZoneClub: "United Street Active Club",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        sports: ["Cricket", "Basketball", "Skating"],
        description:
          "A premium play zone club with comfortable seating and easy accessibility. Enjoy a well-prepared cricket field alongside a professional basketball court and a designated skating area.",
        images: [
          "https://media.hudle.in/venues/9634ce65-1252-4cc0-975f-08fdff99a552/photo/d8d1da8057bbabebec7c5e2d6b1c1d7a36c18ec7",
          "https://media.hudle.in/venues/9634ce65-1252-4cc0-975f-08fdff99a552/photo/55059c45b1555ee2a99e231c03e55533ac6b19fd",
          "https://static.ffx.io/images/$zoom_0.603,$multiply_0.7725,$ratio_1.5,$width_756,$x_0,$y_0/t_crop_custom/q_86,f_auto/6709287f1d4638ece64c26e6c86bb1e20825eadf",
        ],
      },
      {
        playZoneClub: "Playo Active Club",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A state-of-the-art play zone club with bright floodlights and a canteen offering delicious refreshments. Enjoy a pristine cricket pitch, a robust football field, and dedicated badminton courts for a complete sporting experience.",
        images: [
          "https://media.hudle.in/venues/6c8482d2-c9d2-4242-b920-73e89ea6c206/photo/80793a719174b6e2062f5117cf8b365dfd8cc2d5",
          "https://images.pexels.com/photos/8813564/pexels-photo-8813564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMumbai%2FTable-Tennis-Classes-in-Dadar-West%2Fnct-10469598&psig=AOvVaw25GecwMcwNjmGbAseGpc43&ust=1738495432574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiYtquuoosDFQAAAAAdAAAAABAE",
        ],
      },
    ],
  },
  {
    areaName: "Ameerpet",
    cricketPlaces: [
      {
        playZoneClub: "Kiran PlayZone",
        address: "12 Forest Drive, Green Valley",
        pricePerHour: 180,
        facilities: ["Floodlights", "Washrooms", "Parking"],
        sports: ["Cricket", "Chess", "Table Tennis"],
        description:
          "A budget-friendly play zone club surrounded by lush greenery, perfect for a relaxed cricket match or a casual game of chess and table tennis.",
        images: [
          "https://media.hudle.in/venues/09c586cd-73a2-45cb-b10c-1b1e0ec7ae95/photo/1bc32db43af7d090e85d46bc7b2adb1dfeb93f79",
          "https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://www.hindustantimes.com/ht-img/img/2024/09/22/1600x900/D-Gukesh-during-the-final-round-of-the-45th-Chess-_1727023171346.jpg",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMumbai%2FTable-Tennis-Classes-in-Dadar-West%2Fnct-10469598&psig=AOvVaw25GecwMcwNjmGbAseGpc43&ust=1738495432574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiYtquuoosDFQAAAAAdAAAAABAE",
        ],
      },
      {
        playZoneClub: "Alamkrutha Active Club",
        address: "45 Meadow Lane, Green Valley",
        pricePerHour: 200,
        facilities: ["Changing Rooms", "Seating", "Restrooms"],
        sports: ["Cricket", "Badminton", "Table Tennis"],
        description:
          "A charming play zone club with modern facilities offering a quality cricket pitch, comfortable seating, and dedicated courts for badminton and table tennis.",
        images: [
          "https://media.hudle.in/venues/4a119578-3e2b-47c4-838e-e851a4e4a13f/photo/d027c6c306a4e4482abd242f15b6d2dca192ffef",
          "https://media.hudle.in/venues/4a119578-3e2b-47c4-838e-e851a4e4a13f/photo/361f0cf8ae46db71db3aafd4521ae6b1e07cbf71",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMumbai%2FTable-Tennis-Classes-in-Dadar-West%2Fnct-10469598&psig=AOvVaw25GecwMcwNjmGbAseGpc43&ust=1738495432574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiYtquuoosDFQAAAAAdAAAAABAE",
        ],
      },
      {
        playZoneClub: "Green Valley PlayZone",
        address: "78 River Road, Green Valley",
        pricePerHour: 220,
        facilities: ["Floodlights", "Canteen", "Parking"],
        sports: ["Cricket", "Football", "Badminton"],
        description:
          "A beautiful play zone club with a well-stocked canteen and ample parking space. Enjoy a dedicated cricket field, a full-sized football pitch, and modern badminton courts.",
        images: [
          "https://media.hudle.in/venues/8a4f62dc-91af-46b4-897d-46905bd9c350/photo/e6d8a25ecc4734aa61a625f19342f5196f63bc1d",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMumbai%2FTable-Tennis-Classes-in-Dadar-West%2Fnct-10469598&psig=AOvVaw25GecwMcwNjmGbAseGpc43&ust=1738495432574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiYtquuoosDFQAAAAAdAAAAABAE",
          "https://images.pexels.com/photos/8813564/pexels-photo-8813564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
    ],
  },
];


const AreaDetails = () => {
  const { areaName } = useParams();
  const navigate = useNavigate();

  const area = CricketAreas.find(
    (area) => area.areaName.toLowerCase() === areaName.toLowerCase()
  );

  if (!area) {
    return (
      <Container className="mt-4" style={{ textAlign: "center" }}>
        <h1 className="text-danger">Area Not Found</h1>
        <p>Please try searching for another area.</p>
      </Container>
    );
  }

  return (
    <Container fluid className="area-details-container">
      <h1 className="area-title">{area.areaName}</h1>
      <Row>
        {area.cricketPlaces.map((place, index) => (
          // Change md={12} to md={6} for 2 columns per row on medium screens
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="custom-card h-100">
              <Carousel className="custom-carousel">
                {place.images.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <Card.Img
                      src={image}
                      alt={`Slide ${idx}`}
                      className="carousel-image"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body className="custom-card-body">
                <Card.Title>{place.name}</Card.Title>
                <Card.Text>
                  <strong>Play Zone Club:</strong> {place.playZoneClub}
                </Card.Text>
                <Card.Text>
                  <strong>Address:</strong> {place.address}
                </Card.Text>
                <Card.Text>
                  <strong>Sports Available:</strong> {place.sports.join(", ")}
                </Card.Text>
                <Card.Text>
                  <strong>Description:</strong> {place.description}
                </Card.Text>
                <Card.Text>
                  <strong>Price per hour:</strong> ₹{place.pricePerHour}
                </Card.Text>
                <Card.Text>
                  <strong>Facilities:</strong> {place.facilities.join(", ")}
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button"
                    onClick={() =>
                      navigate("/place-details", { state: { place } })
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AreaDetails;
