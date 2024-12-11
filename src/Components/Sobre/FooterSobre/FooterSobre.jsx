import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  Container,
  ImgLogo,
  LiMedia,
  Rodape,
  SocialMedia,
  Text,
  UlMedia,
} from './FooterSobreStyle.js';

export default function FooterSobre() {
  return (
    <Rodape>
      <Container>
        <figure>
          <ImgLogo src="/Images/logomarca.png" alt="logomarca Starbucks" />
        </figure>
        <div>
          <Text>
            Desafio Final desenvolvido por{' '}
            <a href="https://linkedin.com/in/andressanassantos" target="_blank">
              Andressa Santos
            </a>{' '}
          </Text>
        </div>
        <SocialMedia>
          <UlMedia>
            <LiMedia>
              <a
                href="https://www.facebook.com/andressanassantos"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </LiMedia>
            <LiMedia>
              <a
                href="https://www.linkedin.com/in/andressanassantos"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </LiMedia>
            <LiMedia>
              <a href="https://www.instagram.com/andressacodes" target="_blank">
                <FaInstagram />
              </a>
            </LiMedia>
          </UlMedia>
        </SocialMedia>
      </Container>
    </Rodape>
  );
}
