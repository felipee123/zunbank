import EmailSVG from "../../../assets/svg/email"
import IconUserSVG from "../../../assets/svg/icon-user"
import IconOcultSVG from "../../../assets/svg/ocult"
import IconQuestionSVG from "../../../assets/svg/quetion"
import { Container, Top ,Main, ContainerIcon, IconUser,  IconContainerGroup, Name, ContainerText,  } from "./style"

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
      <Name>Felipe Leite</Name>
      </ContainerText>
    </Top>
    <Main></Main>
 </Container>
}

export default Home