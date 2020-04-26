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
                            <div>Gender: {character.gender}</div>
                        </CardText>
                        <CardText>
                            <div>Species: {character.species}</div>
                        </CardText>
                        <CardText>
                            <div>Location: {character.location.name}</div>
                        </CardText>
                        <CardText>
                            <div>Current Status: {character.status}</div>
                        </CardText>
                        </CardBody>
                    </ContColor>
                </Card>
        </Container>
      );
    };

export default CharacterCard;