import EmailSVG from "../../../assets/svg/email"
import IconUserSVG from "../../../assets/svg/icon-user"
import IconOcultSVG from "../../../assets/svg/ocult"
import IconQuestionSVG from "../../../assets/svg/quetion"
import { Container, Top ,Main, ContainerIcon, IconUser,  IconContainerGroup, Name, ContainerText, ContainerMoney, TextAccount, TextMoney,  } from "./style"

const Home = () => {
 return <Container>
    <Top>
      <ContainerText>
      <ContainerIcon>
         <IconUser>
            <IconUserSVG
            width={31}
            height={32}
            />
         </IconUser>
         <IconContainerGroup>
               <IconOcultSVG/>
               <IconQuestionSVG/>
               <EmailSVG/>
         </IconContainerGroup>
      </ContainerIcon>
      <Name>Olá, Felipe Leite</Name>
      </ContainerText>
    </Top>
    <Main>
    <ContainerMoney>
    <TextAccount>Conta</TextAccount>
    <TextMoney>R$ 1.965.098,00</TextMoney>
    </ContainerMoney>
    </Main>
 </Container>
}

export default Home