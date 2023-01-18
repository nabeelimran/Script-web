import React from "react";
import BlackScreen from "./BlackScreen";
import UpperRoot from "./UpperRoot";
import { useDispatch, useSelector } from "react-redux";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { toggleHistoryModalVisibility } from "redux/reducers/connectWalletModal_State";
import HistoryTable from "pages/HistoryTable";

const TableModal = () => {
  const dispatch = useDispatch();

  const { isHistoryTableModal } = useSelector(
    (state) => state.connectWalletModal_State
  );

  const modalRef = OutsideClickDetector(() =>
    dispatch(toggleHistoryModalVisibility(false))
  );

  return (
    <>
      <BlackScreen zIndex="1000000" show={isHistoryTableModal} />

      <UpperRoot>
        <section
          ref={modalRef}
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isHistoryTableModal
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          <HistoryTable isHistoryTableModal={isHistoryTableModal}/>
        </section>
      </UpperRoot>
    </>
  );
};

export default TableModal;
