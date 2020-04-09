import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input {
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      margin-bottom: 10px;
    }

    button {
      margin: 5px 0 0;
      background: #3498db;
      border: 0;
      border-radius: 4px;
      color: #fff;
      height: 44px;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, '#3498db')}
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    span {
      color: #f34c69;
      align-self: start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
}
  > button {
    margin: 15px 0 0;
    background: #f64c75;
    border: 0;
    border-radius: 4px;
    color: #fff;
    height: 44px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.3s;
    width: 100%;

    &:hover {
      background: ${darken(0.08, '#f64c75')}
    }
`;
