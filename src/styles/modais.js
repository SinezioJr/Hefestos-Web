import styled from "styled-components";

const Modal = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1001;
  }

  .modal-main {
    position: relative;
    background: white;
    text-align: center;
    max-width: ${(props) =>
      props.long ? "1350px" : props.min ? "700px" : "1080px"};
    width: 100%;
    padding: ${(props) => (props.long ? "19px 27px" : "28px 90px")};
    background: #ffffff;
    border: 1px solid #d1d1d1;
    box-sizing: border-box;

    height: min-content;
    max-height: ${(props) => "calc(100% - 100px)"};
    overflow: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
    }
  }

  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    height: min-content;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  .row {
    text-align: left;
    display: inline-flex;
    width: 100%;
    .column {
      width: 100%;
    }

    .sec {
      margin-left: 20px;
    }
  }
`;

export default function modal({ handleClose, show, children, long, min }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <Modal long={long} min={min}>
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="close" onClick={handleClose}>
            &#10005;
          </div>
          {children}
        </section>
      </div>
    </Modal>
  );
}
