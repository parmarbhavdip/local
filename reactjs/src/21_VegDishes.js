import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const VegDishCard = ({ name, description, ingredients }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
        <div 
          className="p-3 text-white" 
          style={{ background: "linear-gradient(135deg,#ff9800,#ff5722)" }}
        >
          <h5 className="mb-0 fw-bold text-center">{name}</h5>
        </div>

        <div className="card-body">
          <p className="text-muted small">{description}</p>
          <div className="mt-3">
            {ingredients.map((item, i) => (
              <span key={i} className="badge bg-light text-dark me-1 mb-1 border">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const indianVegDishes = [
    {"name":"Paneer Butter Masala","description":"A rich and creamy North Indian curry made with paneer cooked in a tomato-butter gravy.","ingredients":["paneer","tomato","butter","cream","onion","ginger garlic","garam masala","kasuri methi"]},
    {"name":"Masala Dosa","description":"A crispy fermented rice crepe filled with spiced potato masala, popular in South India.","ingredients":["rice","urad dal","potato","onion","mustard seeds","curry leaves","green chilli","turmeric"]},
    {"name":"Chole Bhature","description":"A Punjabi dish of spicy chickpea curry served with deep-fried bread.","ingredients":["chickpeas","onion","tomato","ginger garlic","chole masala","flour","yogurt","oil"]},
    {"name":"Dal Makhani","description":"A slow-cooked lentil dish made with black lentils, butter, and cream.","ingredients":["black lentils","kidney beans","butter","cream","tomato","ginger garlic","garam masala"]},
    {"name":"Palak Paneer","description":"Paneer cubes cooked in a smooth spinach gravy with mild spices.","ingredients":["paneer","spinach","onion","tomato","ginger garlic","cream","garam masala"]},
    {"name":"Rajma Chawal","description":"A comforting North Indian meal of red kidney bean curry served with rice.","ingredients":["kidney beans","rice","onion","tomato","ginger garlic","cumin","garam masala"]},
    {"name":"Vegetable Biryani","description":"A fragrant rice dish cooked with mixed vegetables and aromatic spices.","ingredients":["basmati rice","mixed vegetables","yogurt","onion","ginger garlic","biryani masala","mint"]},
    {"name":"Aloo Paratha","description":"A stuffed Indian flatbread filled with spiced mashed potatoes.","ingredients":["wheat flour","potato","green chilli","coriander","cumin","butter","salt"]},
    {"name":"Pav Bhaji","description":"A Mumbai street food made of mashed vegetables cooked in butter and spices, served with bread rolls.","ingredients":["potato","tomato","peas","capsicum","butter","pav bhaji masala","bread rolls"]},
    {"name":"Idli Sambar","description":"Soft steamed rice cakes served with lentil-vegetable stew.","ingredients":["rice","urad dal","toor dal","vegetables","tamarind","sambar powder","mustard seeds"]}
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Indian Vegetarian Dishes</h2>
      <div className="row">
        {indianVegDishes.map((item, index) => (
          <VegDishCard
            key={index} 
            name={item.name}
            description={item.description}
            ingredients={item.ingredients}
          />
        ))}
      </div>
    </div>
  );
}