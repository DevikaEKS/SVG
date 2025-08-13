import React from "react";
import "./OverlayCards.css";

const cards = [
  { id: 1, text: "CEMENT", color: "#222326" ,img:"https://static.vecteezy.com/system/resources/thumbnails/055/972/383/small_2x/a-shovel-is-laying-on-top-of-a-pile-of-cement-free-photo.jpeg"},
  { id: 2, text: "TEXTILE", color: "#222326" ,img:"https://img.freepik.com/premium-photo/within-textile-manufacturing-industry_988095-4640.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 3, text: "SUGAR", color: "#222326" ,img:"https://knnindia.co.in/uploads/newsfiles/SUGAR-17-7-2024.jpg" },
  { id: 4, text: "PAPER", color: "#222326" ,img:"https://i0.wp.com/blog.bosswallah.com/wp-content/uploads/2025/03/paper-3.webp?resize=650%2C250&ssl=1" },

  { id: 5, text: "BEVERAGES", color: "#222326" ,img:"https://img.freepik.com/premium-photo/beverage-factory-interior-conveyor-flowing-with-bottles-juice-water_478515-1735.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 6, text: "CHEMICAL", color: "#222326" ,img:"https://img.freepik.com/free-photo/laboratory-3d-glassware_23-2151560643.jpg?semt=ais_hybrid&w=740&q=80" },
];

export default function CardsOverlay() {
  return (
   
    <div className="cards-container ">
         <h1 className="services-title text-center">Electcare Industries</h1>
      {cards.map((card, index) => (
       <div
  key={card.id}
  className="card1"
  style={{ backgroundColor: card.color, zIndex: cards.length - index }}
>
  <h1>{card.text}</h1>
  <img src={card.img} className="crdimg" />
</div>

      ))}
    </div>
   
  );
}
