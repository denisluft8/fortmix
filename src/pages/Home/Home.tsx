import { background } from "../../assets";
import {
  BackgroundImg,
  ContentContainer,
  HomeContainer,
  HomeSection,
} from "./Home.styles";

export const Home = () => {
  return (
    <HomeSection>
      <BackgroundImg src={background} />
      <HomeContainer>
        <ContentContainer>
          <h3>Inovando sua</h3>
          <h2>Construção</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            libero odio. Suspendisse eu interdum magna. Vestibulum eget mauris
            condimentum, convallis ligula ut, eleifend odio. Nunc sed
            sollicitudin justo. Pellentesque at tortor ante. Nunc turpis leo,
            fermentum non posuere nec, gravida quis orci. Sed vitae augue
            hendrerit, efficitur sapien sit amet, ultricies ex. Etiam lobortis
            justo ut ante egestas, sed volutpat nisl laoreet. Phasellus a lectus
            non turpis interdum molestie at at ex.
          </p>
        </ContentContainer>
        <ContentContainer>
          <h1>FORTMIX</h1>
        </ContentContainer>
      </HomeContainer>
    </HomeSection>
  );
};
