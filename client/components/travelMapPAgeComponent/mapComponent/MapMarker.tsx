import { Button } from "@mui/material";
import { OverlayView } from "@react-google-maps/api";
import React, { Dispatch, SetStateAction } from "react";
import { allProductType } from "types/productTypes/productDataType";

interface MapMarkerType {
  product: allProductType;
  productIndex: number;
  nowPickStep: allProductType;
  setNowPickStep: Dispatch<SetStateAction<allProductType>>;
  setNowPickIndex: Dispatch<SetStateAction<number>>;
}

// overlayView 를 polyline 의 중앙에 둠, 없으면 오른쪽 아래로 중앙을 벗어나게 됨
const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const selectedMarkerColor = {
  backgroundColor: "#000",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#000",
  },
};

const nonSelectedMarkerColor = {
  backgroundColor: "#fff",
  color: "#838593",
  border: "1px solid #CACBDB",
  "&:hover": {
    backgroundColor: "#CACBDB",
  },
};

function MapMarker({
  product,
  productIndex,
  nowPickStep,
  setNowPickStep,
  setNowPickIndex,
}: MapMarkerType) {
  const onMarkerClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation(); // stopPropagation을 사용하지 않으면, bubbling 때문에 뒤에 있는 parent marker를 클릭하는 이벤트가 발생하게 됨
    setNowPickStep(product);
    setNowPickIndex(productIndex);
  };

  const nowBtnColor = () => {
    if (nowPickStep === null) return nonSelectedMarkerColor;

    if (product._id === nowPickStep._id) return selectedMarkerColor;

    return nonSelectedMarkerColor;
  };
  return (
    <OverlayView
      mapPaneName={OverlayView.FLOAT_PANE}
      position={{ lat: product.latitude, lng: product.longitude }}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <Button
        variant="contained"
        sx={{
          width: "30px",
          height: "30px",
          minWidth: 0,
          padding: 0,
          borderRadius: "100%",
          fontSize: "18px",
          fontWeight: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          ...nowBtnColor(),
        }}
        onClick={onMarkerClick}
      >
        {productIndex}
      </Button>
    </OverlayView>
  );
}

export default MapMarker;
