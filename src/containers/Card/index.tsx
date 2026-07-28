import star from "../../assets/rating.png";

import {
  CardBody,
  ImgDiv,
  InfoContainer,
  MoreButton,
  Tag,
  TagDiv,
  TitleDiv,
} from "./styles";

type Props = {
  id: number;
  type: string;
  description: string;
  image: string;
  title: string;
  rating: number;
  top: boolean;
};

const Card = ({ image, title, rating, description, type, id, top }: Props) => {
  const getDescricao = () => {
    if (description && description.length > 150) {
      return description.slice(0) + " . .";
    }
    return description;
  };

  const estaComDestaque = top === true;

  return (
    <CardBody>
      <ImgDiv>
        <img src={image} alt={type} />
        <TagDiv>
          <Tag key={type}>{type}</Tag>
          {estaComDestaque && <Tag>Destaque da Semana</Tag>}
        </TagDiv>
      </ImgDiv>
      <InfoContainer>
        <TitleDiv>
          <h2>{title}</h2>
          <span>
            <h2>{rating}</h2>
            <img src={star} />
          </span>
        </TitleDiv>
        <p>{getDescricao()}</p>
        <MoreButton to={`/perfil/${id}`} type="button">
          Saiba mais
        </MoreButton>
      </InfoContainer>
    </CardBody>
  );
};

export default Card;
