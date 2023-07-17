import styled from "styled-components";
import {StyledButton} from "./StyledButton";
import {Text} from "./Text";
import {Title} from "./Title";

const CardWrapper = styled.article`
  border-radius: 10px;
  background-color: #fff;
  height: 350px;
  width: 300px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px;
`
const CardImage = styled.img`
  padding: 10px 10px 0;
`



// @ts-ignore
export const Card = ({img}) => {
    return (
       <CardWrapper>
           <CardImage src={img} />
           <ContentWrapper>
               <Title>Headline</Title>
           <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
           <ButtonsWrapper>
               <StyledButton btnType={"primary"}>See More</StyledButton>
               <StyledButton btnType={"secondary"}>See More</StyledButton>
           </ButtonsWrapper>
           </ContentWrapper>
       </CardWrapper>
    )
}
