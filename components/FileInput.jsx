'use client'

import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
    margin: 20px 0;
`;
const Title = styled.div`
    font-size: 1rem;
    font-weight: 600; 
    margin-bottom: 0.5rem;
`;
const BtnContainer = styled.button`
    height: 48px;
    width: 100%;
    border-radius: 6px;
    border: 3px solid grey;
    padding: 14px;
    opacity: 0.4;
    background-color: #c1c1c1;
    position: relative;
    
    svg {
        height: 180%;
        color: black;
    }

`;
const UploadBtn = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    opacity: 0;
    cursor: pointer;
`;

const UploadedImg = styled.div`
    height: 120px;
    margin: 4px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 8px rgba(86, 86, 86, 0.2);

    svg {
        height: 24px;
        position: absolute;
        top: 0;
        right: 0;
        color: grey;
        display: none;
        @media screen and (max-width: 767px) {
            display: block;
        }
    }

    img {
        max-height: 100%;
        height: auto;
        width: auto;
    }

    &:hover{
        svg{
            display: block;
        }
        svg:active{
            color: #484848;
        }
    }
`;
const ImageBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const LoaderContainer = styled.div`
    height: 120px;
    margin: 4px;
    border-radius: 6px;
    overflow: hidden;
    padding: 22px;
    img{
        height: 100%;
        width: 100%
    }
`;

const FileInput = React.forwardRef(({customerFile, setCustomerFile}, ref) => {
    const [isUploading, setIsUploading] = useState(false);

    const uploadImage = async(e) => {
        setIsUploading(true)
        const files = e.target?.files;
        if(files?.length > 0){
            const data = new FormData();
            Array.from(files).forEach((file) => data.append('file', file));
            const res = await axios.post('/api/upload', data);
            const imgLink = res.data.link;
            setCustomerFile(imgLink);
        }
        setIsUploading(false)
    }

    const removeImage = async() => {
        await axios.delete(`/api/upload?link=${customerFile}`);
        setCustomerFile(null); 
    };

    return (
        <Container>
            <Title ref={ref}>Upload Files</Title>
            {customerFile === null ?
                <>
                    {isUploading && 
                        <LoaderContainer>
                            <img src="/assets/spinner.svg" alt="spinner" />
                        </LoaderContainer>
                    }
                    <BtnContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <UploadBtn type="file" onChange={uploadImage} />
                    </BtnContainer>
                </>
            :   
                <ImageBox>
                    <UploadedImg>
                        <img src={customerFile} alt="uploaded image" height="100" width="100" />
                        <svg onClick={removeImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                        </svg>
                    </UploadedImg>
                </ImageBox>
            }
            <div>{uploadImage}</div>
        </Container>
    )
})

export default FileInput