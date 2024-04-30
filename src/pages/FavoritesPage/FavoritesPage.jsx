import { Teachers } from "../../components/Teachers/Teachers";
import { Section } from "../../components/Teachers/Teachers.styled";
import { database } from "../../config/firebase-config";
import { Container } from "../../globalStyles";
import { useFavorite } from "../../helpers/favorite";
import { Title } from "./FavoritesPage.styled";

const FavoritesPage = () => {
  const favorite = useFavorite(database);

  return (
    <Section>
      <Container>
        <Teachers item={favorite} />
        {favorite.length === 0 && (
          <Title>You haven&apos;t added teachers to your favorites yet.</Title>
        )}
      </Container>
    </Section>
  );
};

export default FavoritesPage;
