import React from "react";
import likeIcon from "../assets/like.svg";

export default function Card({ cardItem, Image }) {
  return (
    <li className="card__item">
      <img
        className="card__item-image"
        src={cardItem.link}
        alt={cardItem.name}
      />
      <div className="card__item-footer">
        <span className="card__item-title">{cardItem.name}</span>
        <button className="card__item-like-button">
          <Image
            className={`card__item-like-icon ${
              cardItem.isLiked ? "card__item-like-icon-liked" : ""
            }`}
            src={likeIcon}
            alt="Like Button"
          />
        </button>
      </div>
    </li>
  );
}
