import React, { useEffect } from "react";
import BaseButton from "./ui/button/BaseButton";
import axios from "axios";

interface Products {
  id: number;
  name: string;
  price: number;
  fruits_path: string;
}

const baseURL = "http://localhost/api/v1/product";

export const DetailPage = (): JSX.Element => {
  useEffect(() => {
    axios
      .get<Products>(baseURL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <p>{}</p>
      <BaseButton text="購入ページ"></BaseButton>
    </div>
  );
};

export default DetailPage;
