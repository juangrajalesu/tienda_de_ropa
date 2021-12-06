import React from "react";
import "./ClothesItem.css";
import { useHistory } from "react-router-dom";
import { deleteClothes } from "./ClothesService";

function ClothesItem({ clothes, loadClothes }) {
  const history = useHistory();

  const handleDelete = async (id) => {
    await deleteClothes(id);
    loadClothes();
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sn-12 ms-auto ">
      <div className="clothes-card">
        <div className="card">
          <img
            src={`${process.env.PUBLIC_URL}/img/${clothes.img}.png`}
            alt="prototype"
            className="card-img-top"
          />
          <div className="card-img-overlay ">
            <span
              className="text-danger fs-4  float-end"
              onClick={() => clothes._id && handleDelete(clothes._id)}
              style={{ cursor: "pointer" }}>
              X
            </span>
          </div>
        </div>
        <div className="card-body">
          <h3
            className="card-title"
            onClick={() => {
              history.push(`/update/${clothes._id}`);
            }}
            style={{ cursor: "pointer" }}>
            {clothes.title}
          </h3>
          <p className="card-text" style={{ textAlign: "right" }}>
            {clothes.price} $
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClothesItem;
