
import React, { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    margin: 20px 0;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`;

const SelectFrameDesign = styled.div`
  font-size: 1rem; /* Equivalent to text-md */
  font-weight: 600; /* Equivalent to font-semibold */
`;

const StyledErrorMessage = styled.div`
  color: #e53e3e; /* Equivalent to text-red-600 */
  margin-top: 0.25rem; /* Equivalent to mt-1 */
`;

const CustomSelect = styled.div`
  position: relative;
  width: 100%;
`;

const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 60px;
  
  div{
    display: flex;
    width: 100%;
    opacity: .6;
    align-items: center;
    justify-content: center;
  }
`;

const OptionImage = styled.img`
  width: 70px;
  height: 60px;
  margin-right: 8px;
`;

const OptionsList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  max-height: 200px;
  overflow-y: scroll;
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const FrameDesignOptions = React.forwardRef(({data, setSelectedFrameDesign, selectedFrameDesign}, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
        <CustomSelect>
            <StyledTitleContainer>
                <SelectFrameDesign ref={ref}>Select Frame Design</SelectFrameDesign>
            </StyledTitleContainer>
            <SelectedOption onClick={() => setIsOpen(!isOpen)}>
                {selectedFrameDesign ? 
                    <>
                        <OptionImage src={selectedFrameDesign?.image} alt="frame design" />
                        <span>{selectedFrameDesign?.name}</span>
                    </>
                :
                    <div>
                        <span>No frame design selected</span>
                    </div>
                }
            </SelectedOption>
            <OptionsList isOpen={isOpen}>
                {data.map((item, i) => (
                    <OptionItem
                        key={i}
                        onClick={() => {
                            setSelectedFrameDesign(item);
                            setIsOpen(!isOpen);
                        }}
                    >
                        <OptionImage src={item.image} alt="frame design" />
                        <span>{item.name}</span>
                    </OptionItem>
                ))}
            </OptionsList>
        </CustomSelect>
        {!selectedFrameDesign && (
            <StyledErrorMessage>
                selection is required
            </StyledErrorMessage>
        )}
    </Container>
  )
})

export default FrameDesignOptions

