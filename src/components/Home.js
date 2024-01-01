import React from "react";
import "./Home.css";
import banner from "./img/banner.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={banner} alt={banner} className="home_image"></img>
        <div className="home_row">
          <Product
            id="8979"
            title="MSI Katana GF66 11UC - 478IN 15.6 inches FHD Gaming Laptop I Notebook Black - Intel Core i5-11400H I 8GB (3200MHz) I 512GB I RTX 3050, GDDR6 4GB I Windows 10 Home I Single Backlight KB(Red), 2.25kg"
            price={70990}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlIPp6Oq8SttUcobqfHr2Pfc6JcS8TtvJCTHwGN3rQ2Hrx_D5wwXl9A8cTnIXneyKRucxH_3R7VE&usqp=CAU&ec=48665701"
            rating={4}
          />
          <Product
            id="3596"
            title="ASUS ROG Flow Z13 (2022) with RTX 3080 eGPU, 13.4 (34.03 cm) UHD+ Touch, Core i9 12th Gen, 4GB RTX 3050 Ti Graphics, 2-in-1 Gaming Laptop (16GB/1TB SSD/Win 11/Office/Black/1.18 kg), GZ301ZE-LC193WS"
            price={304980}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1YmXpCz7ehukwJSutOxBwfeCPskNPGqwkOBk3k65mO8LB5qX8qu0AP7CY_h0_PCdunhzEQ-4Vg8&usqp=CAU&ec=48665701"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="6487"
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (White)"
            price={5599}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTmqzYib0HiaPMYFvFz_P2S-vB4RW7oExBDNIBj27bg&usqp=CAU&ec=48665701"
            rating={4}
          />
          <Product
            id="9889"
            title="Sony HT-S20R Real 5.1ch Dolby Digital Soundbar for TV with subwoofer and Compact Rear Speakers, 5.1ch Home Theatre System (400W,Bluetooth & USB Connectivity, HDMI & Optical connectivity)"
            price={17990}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHv-OFDmI5Lc6-Y_eB6kW4Uw_gkDTJNHmWJT0z0tVFw&usqp=CAU&ec=48665701"
            rating={4}
          />
          <Product
            id="5000"
            title="Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 40Hr Battery, 3 Min Quick Charge = 3 Hours Playback, Multi Point Connectivity, Alexa - Black"
            price={27900}
            rating={5}
            image="https://m.media-amazon.com/images/I/61vJtKbAssL._SX679_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="3762"
            title="Sony Bravia 164 cm (65 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-65A95K (Black)"
            price={322990}
            image="https://m.media-amazon.com/images/I/81-G4oTdhOL._SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
