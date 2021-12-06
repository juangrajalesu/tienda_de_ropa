import React, { useEffect, useState } from "react";
import ClothesItem from "./ClothesItem.jsx";
import * as ClothesServices from "./ClothesService";

const ClothesList = () => {
  const [clothes, setClothes] = useState([]);

  const loadClothes = async () => {
    const res = await ClothesServices.getClothes();
    setClothes(res.data);
  };
  
  useEffect(() => {
    loadClothes();
  }, []);

  return (
    <div className="row ">
      {clothes.map((oneClothes) => {
        return <ClothesItem clothes={oneClothes} key={oneClothes._id} loadClothes={loadClothes} />;
      })}
    </div>
  );
};

export default ClothesList;
