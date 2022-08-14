import { Chip } from "@mui/material";
import styled from "styled-components";

interface ProductKeywordsType {
  keywords: string[];
}

const StyledProductKeywordsContainer = styled.div`
  width: 100%;
  margin-top: 145px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

function ProductKeywords({ keywords }: ProductKeywordsType) {
  return (
    <StyledProductKeywordsContainer>
      {keywords.map((keyword: string) => (
        <Chip
          label={`#${keyword}`}
          sx={{
            height: "40px",
            marginRight: "5px",
            fontSize: "16px",
            fontWeight: 500,
          }}
        />
      ))}
    </StyledProductKeywordsContainer>
  );
}

export default ProductKeywords;
