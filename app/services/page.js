'use client'

import Center from "@components/Center"
import ServiceCard from "@components/ServiceCard";
import styled from "styled-components";

const ServicePageContainer = styled.div`
  margin: 35px 0;
`;

const Heading = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 34px; /* text-[28px] */
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 5px; /* mb-5 */
`;

const SubHeading = styled.h2`
  text-align: center;
  color: #767676;
  margin: 0;
`;

const ServicesGrid = styled.div`
  padding: 15px;
  gap: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px;
`;

const GetQuoteBtn = styled.div`
  padding: 14px 35px;
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;

  &:active{
    transform: scale(0.9);
  }
`;

const ServicesPage = () => {

  const services = [
    {
      title: "Event Photography",
      subTitle: "something jkhvjws sdlihusvg ldugvjhbd kjhvjg",
      image: "https://www.adorama.com/alc/wp-content/uploads/2017/03/concert-photographer.jpg"
    },
    {
      title: "Videography",
      subTitle: "something jkhvjws sdlihusvg ldugvjhbd kjhvjg",
      image: "https://cdn.imgbin.com/0/0/15/imgbin-video-camera-logo-camera-operator-tv-camera-s-white-and-black-video-camera-illustration-m9nubR3gNTyJWdhHNt9Ky2bpM.jpg"
    },
    {
      title: "Passport",
      subTitle: "something jkhvjws sdlihusvg ldugvjhbd kjhvjg",
      image: "https://images.indianexpress.com/2018/07/indian-passport759.jpg"
    },
    {
      title: "Visa Any Country",
      subTitle: "something jkhvjws sdlihusvg ldugvjhbd kjhvjg",
      image: "https://w7.pngwing.com/pngs/238/408/png-transparent-airplane-aircraft-airplane-service-airplane-flight-thumbnail.png"
    },{
      title: "Portfolio",
      subTitle: "something jkhvjws sdlihusvg ldugvjhbd kjhvjg",
      image: "https://muffingroup.com/betheme/assets/images/placeholders/portfolio-pic1.webp"
    }
  ]

  return (
    <div>
        <Center>
            <ServicePageContainer>
              <Heading>OUR SERVICES</Heading>
              <SubHeading>We offer complete photo solutions!</SubHeading>
              <ServicesGrid>
                {services.map((item,index) => (
                  <ServiceCard key={index} info={item} />
                ))}
              </ServicesGrid>
              <ButtonContainer>
                <GetQuoteBtn>Get Quote</GetQuoteBtn>
              </ButtonContainer>
            </ServicePageContainer>
        </Center>
    </div>
  )
}

export default ServicesPage