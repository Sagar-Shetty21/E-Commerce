import React from "react";
import styled from "styled-components"

const Container = styled.div`
    margin: 20px 0;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`;

const SelectDimension = styled.div`
  font-size: 1rem; /* Equivalent to text-md */
  font-weight: 600; /* Equivalent to font-semibold */
`;

const DimensionGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px; /* Equivalent to gap-2 */
`;

const DimensionItem = styled.div`
  border: 1px solid #e5e5e5; /* Equivalent to border */
  border-radius: 0.25rem; /* Equivalent to rounded-md */
  text-align: center;
  padding: 0.75rem; /* Equivalent to py-3 */
  font-weight: 500; /* Equivalent to font-medium */
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  border-color: ${({selected}) => (selected ? 'black' : '#e5e5e5')};
  &:hover {
    border-color: black;
  }
`;

const StyledErrorMessage = styled.div`
  color: #e53e3e; /* Equivalent to text-red-600 */
  margin-top: 0.25rem; /* Equivalent to mt-1 */
`;

const DimensionOptions = React.forwardRef(({data, setSelectedDimension, selectedDimension, setProductPrice}, ref) => {
  return (
    <Container>
        <StyledTitleContainer>
            <SelectDimension ref={ref}>Select Dimensions</SelectDimension>
        </StyledTitleContainer>
        <DimensionGridContainer id="sizesGrid">
            {data.map((item, i) => (
                <DimensionItem
                    key={i}
                    selected={selectedDimension===item}
                    onClick={() => {
                        setSelectedDimension(item);
                        setProductPrice(item.price);
                    }}
                    >
                    {item.width} x {item.height}
                </DimensionItem>
            ))}
        </DimensionGridContainer>
        {!selectedDimension && (
            <StyledErrorMessage>
                selection is required
            </StyledErrorMessage>
        )}
    </Container>
  )
});

export default DimensionOptions