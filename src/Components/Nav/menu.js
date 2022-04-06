import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { StyledMenu, StyledIMG, StyledH3, StyledDiv } from "./styles";

const Menu = ({ open, setOpen }) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <StyledMenu open={open}>
      {
        user.userName && (
          <StyledDiv>
            <StyledIMG src={process.env.PUBLIC_URL + `/uploads/${user.profilePic}`} alt='' />
            <StyledH3>{user.userName}</StyledH3>
          </StyledDiv>)
        }
      <Link className='link' to='/login' onClick={setOpen}>👤 Login</Link>
      <Link className='link' to='/search' onClick={setOpen}>🔍 Search</Link>
      <Link className="link" to='/result' onClick={setOpen}>🏆 Leader Board</Link>
      <Link className="link" to='/game-display' onClick={setOpen}>🃏 Play</Link>
    </StyledMenu>
  )
}

export default Menu;