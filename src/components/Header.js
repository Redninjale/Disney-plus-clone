import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebases'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if(user) {
          setUser(user);
          navigate("/");
        }
      })
    }, [userName]);

    const handleAuth = () => {
        if(!userName) {
            signInWithPopup( auth, provider )
            .then(result => {
                setUser(result.user);
            }).catch(error => {
                alert(error.message);
            })
        } else if(userName) {
            auth.signOut().then(
                () => {
                    dispatch(setSignOutState());
                    navigate('/login');
                }
            ).catch((err) => {
                alert(err.message);
            });
        }
    };

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        })
        );
    }

    return (
        <Nav>
        <Logo src="..\images\logo.svg"/>

        {
          !userName ? (<Login onClick={handleAuth}>Login</Login>) : 
          <>
        <NavMenu>
            <a>
            <img src="..\images\home-icon.svg" alt="home" />
            <span>HOME</span>
            </a>
            <a>
            <img src="..\images\search-icon.svg" alt="home" />
            <span>SEARCH</span>
            </a>
            <a>
            <img src="..\images\watchlist-icon.svg" alt="home" />
            <span>WATCHLIST</span>
            </a>
            <a>
            <img src="..\images\original-icon.svg" alt="home" />
            <span>ORIGINALS</span>
            </a>
            <a>
            <img src="..\images\movie-icon.svg" alt="home" />
            <span>MOVIES</span>
            </a>
            <a>
            <img src="..\images\series-icon.svg" alt="home" />
            <span>SERIES</span>
            </a>
        </NavMenu>
        <SignOut>
            <UserImg referrerpolicy="no-referrer" src={userPhoto} alt={userName} />
            <DropDown>
                <span onClick={handleAuth}>SignOut</span>
            </DropDown>
        </SignOut>
        </>
        }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items:center;
  padding: 0 36px;
  position: relative;
  inset: 0;
`

const Logo = styled.img`
  max-width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height:20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  }

`

const UserImg = styled.img`
  height: 100%;
  cursor: pointer;
`

const DropDown = styled.div`
    position: absolute;
    inset: 60px 0 0 -10px;
    background-color: rgb(19,19,19);
    border: 1px solid rgb(151,151,151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    height: 40px;
    width: 90px;
    opacity: 0;
`

const SignOut = styled.div`
    position: relative;
    height: 60px;
    width: 60px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
            z-index: 2;
        }
    }
`

const Login = styled.a`
    background-color: rgba(0,0,0, 0.6);
    text-transform: uppercase;
    padding: 6px 0px;
    text-align: center;
    letter-spacing: 1.2px;
    border: 2px solid #f9f9f9;
    border-radius: 4px;
    transition: all 250ms ease 0s;
    position: absolute;
    inset: 15px 1% 15px 94%;

    &:hover {
        background-color: white;
        color: black;
        border-color: transparent;
        cursor: pointer;
    }
`