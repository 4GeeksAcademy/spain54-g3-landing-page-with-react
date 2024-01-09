import React from "react";

export const Cards = ({ valores = [{ title: 'card-title', subtitle: 'Lorem ipsum', label: 'Find Out More!', image: 'https://placehold.co/500x325' }] }) => {

  return (
    
    <div className="container">
      <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {valores.map((valor, index) => (
          <div className="card" style={{ width: "18rem", margin: '10px' }} key={index}>
            <img src={valor.image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">{valor.title}</h5>
              <p className="card-text">{valor.subtitle}</p>
            </div>
            <div class="card-footer bg-light text-center">
              <a href="#" className="btn btn-primary">{valor.label}</a>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};