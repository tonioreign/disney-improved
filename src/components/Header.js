import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="./img/logo.svg" />

            <NavMenu>
                <a href="#">
                    <img src="./img/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a href="#">
                    <img src="./img/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a href="#">
                    <img src="./img/watchlist-icon.svg" alt="" />
                    <span>WATCH</span>
                </a>
                <a href="#">
                    <img src="./img/original-icon.svg" alt="" />
                    <span>ORIGINAL</span>
                </a>
                <a href="#">
                    <img src="./img/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a href="#">
                    <img src="./img/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>

            <UserImg src="./img/tonio_pic.jpg" />
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 20px;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        color: white;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                background: white;
                height: 2px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span::after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;

const UserImg = styled.img`
    height: 48px;
    width: 48px;
    flex-shrink: 0;
    border-radius: 50%;
`;
