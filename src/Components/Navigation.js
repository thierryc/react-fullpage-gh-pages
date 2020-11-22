import styled from 'styled-components'

const Navigation = styled.nav`
  position: fixed;
  z-index: 500;
  top: 0;
  display: block;
  width: 100%;
  background-color: rgba(0,0,0,0.1);
  color: white;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      float: left;
      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      a:hover:not(.active) {
        background-color: rgba(0,0,0,0.9);
      }
      a.active {
        float: right;
      }
      .active {
        background-color: rgba(255,255,255,0.1);
      }
    }
  }

`;

export default Navigation;