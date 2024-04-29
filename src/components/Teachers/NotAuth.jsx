import img from "../../assets/images/authentication.webp";
import { NotAuthSection, TitleNotAuth } from "./Teachers.styled";

export const NotAuth = () => {
  return (
    <NotAuthSection>
      <img src={img} alt="notAuth" width="200" height="200" />
      <TitleNotAuth>
        Oops, you are not registered yet. Register and you will have access to
        more functions of using the site.
      </TitleNotAuth>
    </NotAuthSection>
  );
};
