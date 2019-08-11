import styled from "styled-components"

const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: ${({ theme }) => theme.primary};
  padding: 15px 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  vertical-align: middle;

  &:hover {
    background: #004ab3;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`

export default Button
