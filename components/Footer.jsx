import styled from 'styled-components';
import { FaMapMarkerAlt, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Center from './Center';

const FooterWrapper = styled.footer`
  background-color: #222222;
  color: #fff;
  padding-top: 3rem;
  padding-bottom: 0.75rem;
  margin-top: 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
  }
`;

const MenuSection = styled.div`
  display: flex;
  gap: 1.1rem;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    gap: 0.75rem;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  .font-oswald {
    font-family: Oswald, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.875rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .social-icon {
    width: 2.0rem;
    height: 2.0rem;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const FooterText = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const PhoneNumbers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Logo = styled.img`
  height: 82px;
`;

const Address = styled.div`
  font-size: 12px;
  color: #a7a7a7a1;
  font-weight: 600;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Center>
        <ContentWrapper>
          {/* <MenuSection>
            <div className="font-oswald">Find a store</div>
            <a>become a partner</a>
            <a>send us feedback</a>
            <a>contact developer</a>
          </MenuSection> */}
          <MenuSection>
            <div className="font-oswald">Contact us</div>
            <PhoneNumbers>
              <a href="tel:+919886487688">+91 9886487688</a>
              <a href="tel:+919880151628">+91 9880151628</a>
              <a href="tel:+919448908847">+91 9448908847</a>
            </PhoneNumbers>
            <a href="mailto:svrlabkrpur2020@gmail.com">svrlabkrpur2020@gmail.com</a>
          </MenuSection>
          <SocialLinks>
            <Logo src="/assets/svr-color-lab-logo.svg" alt="company logo" />
            <Address>#2.Flower Garden Devasandra Main Road, </Address>
            <Address>Near Hotel Nalapaka, K R Pura-560036</Address>
            <div className="social-icon" onClick={() => window.open('https://maps.app.goo.gl/Yg6cFJ1Qm1oZ9Jft7', '_blank')}>
              <FaMapMarkerAlt size={16} />
            </div>
          </SocialLinks>
        </ContentWrapper>
        <ContentWrapper>
          <FooterText>&copy; 2023 SVR Color Lab, Inc. All Rights Reserved</FooterText>
        </ContentWrapper>
      </Center>
    </FooterWrapper>
  );
};

export default Footer;
