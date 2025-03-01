import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DotsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Dots = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const Popup = styled.div<{ isOpen: boolean; isLastRow: boolean }>`
  position: absolute;
  ${({ isLastRow }) => (isLastRow ? "bottom: 0; transform: translateY(-100%);" : "top: 100%;")}
  right: 0;
  background: white;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 9999;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding:10px;
  white-space: nowrap;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; 
  transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0.95)")};
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

const Option = styled.div`
  display: flex;

  cursor: pointer;
  transition: background 0.2s;
  padding: 10px 14px !important;
  width: 100%;
  text-align: left;


  &:hover {
    background: #f5f5f5;
  }
`;

const Divider = styled.div`
//   height: 1px;
  background: #ddd;
//   margin: 4px 12px;
border:1px solid #f3f1f3;
width:100%;
`;

import SShareSVG from "@/assets/icons/sShare.svg";
import SRenamSVG from "@/assets/icons/sRenam.svg";
import SDuplicateSVG from "@/assets/icons/sDuplicate.svg";
import SDeleteSVG from "@/assets/icons/sDelete.svg";

type DotsMenuProps = {
    rowIndex: number;
};

const DotsMenu: React.FC<DotsMenuProps> = ({ rowIndex }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLastRow, setIsLastRow] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isOpen && popupRef.current) {
            requestAnimationFrame(() => {
                const popupRect = popupRef.current!.getBoundingClientRect();
                const table = menuRef.current?.closest("table");
                if (!table) return;
                const tableRect = table.getBoundingClientRect();
                const isAtBottom = popupRect.bottom > tableRect.bottom;
                setIsLastRow(isAtBottom);
            });
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node) &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <DotsWrapper ref={menuRef}>
            <Dots onClick={() => setIsOpen((prev) => !prev)}>...</Dots>
            {isOpen && (
                <Popup ref={popupRef} isOpen={isOpen} isLastRow={isLastRow}>
                    <Option>
                        <SShareSVG />
                        Share
                    </Option>
                    <Option>
                        <SRenamSVG />
                        Rename
                    </Option>
                    <Option>
                        <SDuplicateSVG />
                        Duplicate
                    </Option>
                    <Divider />
                    <Option>
                        <SDeleteSVG />
                        Delete
                    </Option>
                </Popup>
            )}
        </DotsWrapper>
    );
};

export default DotsMenu;
