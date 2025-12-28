import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";

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
  const comboRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboRef.current &&
        !comboRef.current.contains(event.target as Node)
      ) {
        setState((prev) => ({ ...prev, isOpen: false }));
      }
    };

    if (state.isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [state.isOpen, setState]);

  return (
    <Combo ref={comboRef}>
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
          {combo_array.map((combo: string, index: number) => (
            <button
              key={index}
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
