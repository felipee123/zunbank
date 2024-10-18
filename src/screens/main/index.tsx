import IconUserSVG from "../../../assets/svg/icon-user"
import { Container, Top ,Main, ContainerIcon, IconUser,  } from "./style"

const Home = () => {
 return <Container>
    <Top>
      <ContainerIcon>
         <IconUser>
            <IconUserSVG
            width={31}
            height={32}/>
         </IconUser>
      </ContainerIcon>
    </Top>
    <Main></Main>
 </Container>
}

export default Home