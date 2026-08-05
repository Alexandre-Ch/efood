import Hero from "../../components/Home/Hero";
import Listagem from "../../components/Home/Listagem";
import { Loading } from "../../components/Loading";
import { PageContainer } from "../../styles/main";
import { useGetRestaurantsQuery } from "../../services/api";

export function Home() {
  const { data: restaurantes = [], isLoading, error } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <PageContainer>
        <Hero />
        <div className="container">
          <h2>Não foi possível carregar os restaurantes.</h2>
        </div>
      </PageContainer>
    );
  }

  return (
    <>
      <PageContainer>
        <Hero />
        <div className="container">
          <Listagem itens={restaurantes} />
        </div>
      </PageContainer>
    </>
  );
}
