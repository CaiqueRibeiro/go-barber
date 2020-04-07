import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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
`;
