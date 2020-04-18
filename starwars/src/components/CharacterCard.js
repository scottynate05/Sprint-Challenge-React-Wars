// Write your Character component here
import React from "react";
import { Container, Card, CardBody, CardText } from "reactstrap";
import styled from "styled-components";



const CharacterCard = (props) => {
    const character = props.character;
    console.log(character);

    const ImgShape = styled.img`
        border-radius: 10px;
    `;

    const ContColor = styled(Card)`
        background-color: #6BDFFF;
    `;

    return (
        <Container lg="12" xl="6">   
                <Card>
                    <ContColor>
                        <CardBody>
                            <ImgShape src={character.image} alt={character.name} />
                        </CardBody>
                        <CardBody>
                            <h2>{character.name}</h2>
                        <CardText>
                            <span>Gender:</span>
                            <span>{character.gender}</span>
                        </CardText>
                        <CardText>
                            <span>Species:</span>
                            <span>{character.species}</span>
                        </CardText>
                        <CardText>
                            <span>Location:</span>
                            <span>{character.location.name}</span>
                        </CardText>
                        <CardText>
                            <span>Status:</span>
                            <span>{character.status}</span>
                        </CardText>
                        </CardBody>
                    </ContColor>
                </Card>
        </Container>
      );
    };

export default CharacterCard;