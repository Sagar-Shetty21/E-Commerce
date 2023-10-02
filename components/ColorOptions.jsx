
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

const SelectColor = styled.div`
  font-size: 1rem; /* Equivalent to text-md */
  font-weight: 600; /* Equivalent to font-semibold */
`;

const ColorGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px; /* Equivalent to gap-2 */
`;

const ColorItem = styled.div`
  border: 2.2px solid #e5e5e5; /* Equivalent to border */
  border-radius: 0.25rem; /* Equivalent to rounded-md */
  text-align: center;
  padding: 0.75rem; /* Equivalent to py-3 */
  cursor: pointer;
  border-color: ${({selected}) => (selected ? 'black' : '#e5e5e5')};
  &:hover {
    border-color: black;
  }
`;

const StyledErrorMessage = styled.div`
  color: #e53e3e; /* Equivalent to text-red-600 */
  margin-top: 0.25rem; /* Equivalent to mt-1 */
`;

const ColorOptions = React.forwardRef(({data, setSelectedColor, selectedColor}, ref) => {
  return (
    <Container>
        <StyledTitleContainer>
            <SelectColor ref={ref}>Select Color</SelectColor>
        </StyledTitleContainer>
        <ColorGridContainer id="sizesGrid">
            {data.map((item, i) => (
                <ColorItem
                    key={i}
                    selected={selectedColor===item}
                    onClick={() => {
                        setSelectedColor(item);
                    }}
                    style={{backgroundColor: `${item.color}`}}
                />
            ))}
        </ColorGridContainer>
        {!selectedColor && (
            <StyledErrorMessage>
                selection is required
            </StyledErrorMessage>
        )}
    </Container>
  )
})

export default ColorOptions
