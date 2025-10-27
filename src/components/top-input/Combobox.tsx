import { type Dispatch, type SetStateAction } from "react";

import styled from "styled-components";
import type { Content } from "./EnterInput";

const Combo = styled.div`
  width: 70%;
  box-sizing: border-box;
  position: relative;
  > button {
    width: 100%;
    height: 100%;
    padding: 0.2rem 0.9rem;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    img {
      width: 10px;
    }
  }
  .list {
    position: absolute;
    z-index: 10000000000000;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    &.up {
      bottom: calc(100% + 10px);
      top: auto;
    }
    button {
      text-align: left;
      padding: 3px 9px;
      &:hover {
        background-color: black;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Combobox = ({
  combo_array,
  state,
  setState,
  isUp,
}: {
  combo_array: string[];
  state: Content;
  setState: Dispatch<SetStateAction<Content>>;
  isUp?: boolean;
}) => {
  return (
    <Combo>
      <button
        type="button"
        onClick={() => setState((prev) => ({ ...prev, isOpen: true }))}
      >
        <span>
          {combo_array[state.index].split("/")[1] === state.content &&
            combo_array[state.index].split("/")[0]}
        </span>
        <img src={"/chevron.png"} alt="chevron" />
      </button>
      {state.isOpen && (
        <div className={`list ${isUp ? "up" : ""}`}>
          {combo_array.map((combo: any, index: number) => (
            <button
              type="button"
              onClick={() => {
                setState({
                  isOpen: false,
                  index: index,
                  content: combo.split("/")[1],
                });
              }}
            >
              {combo.split("/")[0]}
            </button>
          ))}
        </div>
      )}
    </Combo>
  );
};

export default Combobox;
