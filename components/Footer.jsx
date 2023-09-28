import styled from 'styled-components';
import { FaMapMarkerAlt, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Center from './Center';

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding-top: 3rem;
  padding-bottom: 0.75rem;
  margin-top: 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    gap: 1.25rem;
  }

  .font-oswald {
    font-family: Oswald, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
    color: #fff;
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
  justify-content: center;

  .social-icon {
    width: 2.5rem;
    height: 2.5rem;
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

const Footer = () => {
  return (
    <FooterWrapper>
      <Center>
        <ContentWrapper>
          <MenuSection>
            <div className="font-oswald">Find a store</div>
            <a>become a partner</a>
            <a>send us feedback</a>
            <a>contact developer</a>
          </MenuSection>
          <MenuSection>
            <div className="font-oswald">get help</div>
            <a>Order Status</a>
            <a>Delivery</a>
            <a>Returns</a>
            {/* <a>Payment Options</a>
            <a>Contact Us</a> */}
          </MenuSection>
          <MenuSection>
            <div className="font-oswald">About Us</div>
            <a>News</a>
            <a>Careers</a>
            <a>Investors</a>
            <a>Sustainability</a>
          </MenuSection>
          <SocialLinks>
            <div className="social-icon" onClick={() => window.open('https://maps.app.goo.gl/Yg6cFJ1Qm1oZ9Jft7', '_blank')}>
              <FaMapMarkerAlt size={20} />
            </div>
            <div className="social-icon">
              <FaYoutube size={20} />
            </div>
            <div className="social-icon">
              <FaInstagram size={20} />
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
