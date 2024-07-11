import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

function ProductId({ params }: Props) {
  return <div>ProductID: {params.productId}</div>;
}

export default ProductId;
