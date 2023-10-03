import React, { useEffect, useState } from "react";
import BaseButton from "./ui/button/BaseButton";
import axios from "axios";

interface Products {
  id: number;
  name: string;
  price: number;
  fruits_path: string;
}

const baseURL = "http://localhost/api/v1/products";

export const DetailPage: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    axios
      .get<Products[]>(baseURL)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>価格: {product.price}円</p>
          {/* 他の商品情報も表示できるように必要な情報を追加 */}
          <BaseButton text="購入ページ"></BaseButton>
        </div>
      ))}
    </div>
    // <div>
    //   <div>{products.map((product: Products) => (
    //     <div key={product.id}>{ product.name }</div>
    //   ))}</div>
    //   <BaseButton text="購入ページ"></BaseButton>
    // </div>
  );
};

export default DetailPage;
