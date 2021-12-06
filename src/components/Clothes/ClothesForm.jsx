import React, { useState, useEffect } from "react";
import * as ClothesServices from "./ClothesService";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

const ClothesForm = () => {
  const history = useHistory();
  const params = useParams();

  const [clothes, setclothes] = useState({
    title: "",
    img: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    setclothes({ ...clothes, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    params.id
      ? await ClothesServices.updateClothes(params.id, clothes)
      : await ClothesServices.setClothes(clothes);
    setclothes({ title: "", img: "", price: 0 });
    toast.dark(params.id ? "clothes updated" : "new clothes added", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    });
    history.push("/");
  };

  useEffect(() => {
    getClothes(params.id);
  }, []);

  const getClothes = async (id) => {
    const res = await ClothesServices.getOneClothes(id);
    setclothes(res.data);
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>new Clothes</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Title
                  </span>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    onChange={handleInputChange}
                    value={clothes.title}
                    autoFocus
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon2">
                    .img/
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="img"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={clothes.img}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3">
                    &nbsp;&nbsp; $ &nbsp;&nbsp;
                  </span>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    value={clothes.price === 0 ? "" : clothes.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="d-grid gap-2">
                {params.id ? (
                  <button className="btn btn-primary">Update clothes</button>
                ) : (
                  <button className="btn btn-primary">Create clothes</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothesForm;
