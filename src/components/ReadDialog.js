// 은주
import { useEffect } from "react";
import styled from "styled-components";

const Modal = styled.div`
  display: block; // ?
  position: relative;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  position: fixed; //모달 위치 fix
  bottom: 0; // 모달 위치 - 바닥으로 내림
  left: 0; // 모달 위치 - 왼쪽에 붙임
`;
const ModalBackgroundExit = styled.div`
  //클릭했을 때 나가지는 부분, 모달보다 z축 낮음.
  z-index: 1500;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalView = styled.div.attrs((props) => ({ role: "dialog" }))`
  z-index: 2000; // 모달의 z 축을 background보다  위로 올림
  align-self: center;
  position: fixed; // 모달 화면 고정시킴
  position: fixed; // 모달 화면 고정시킴
  width: 60%; //너비 70%
  height: 85%; //
  border-radius: 20px;

  background-color: #fff9ef;
  overflow-y: auto;

  > hr {
    border-top: 1px solid #ff9800;
    margin-top: 0px;
    margin-bottom: 10px;
    width: 95%;
  }

  @media only screen and (max-width: 1250px) {
    // medium 크기 //
    width: 70%; //너비 70%
    height: 60%; //
  }
  @media only screen and (max-width: 540px) {
    // small 크기 //
    width: 80%; //너비 70%
    height: 65%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px;
  padding-bottom: 0px;

  > .close-btn {
    // 나가는 버튼
    color: black;
    font-size: 50px;
    height: 40px;
    width: 40px;
    position: absolute; //부모를 기준으로 맞춰서 위치 지정
    top: 5px;
    right: 0px;
    cursor: pointer;
    transition: 0.1s;
  }
  > .close-btn:hover {
    color: #ff9800;
  }

  @media only screen and (max-width: 540px) {
    // small 크기 //
    > .close-btn {
      font-size: 35px;
      height: 25px;
      width: 30px;
    }
  }
`;

const ModalTitleUser = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  > div > h1 {
    display: flex;
    justify-content: center;
    overflow-wrap: break-word;
    margin: 0;
  }
  > div > h1 > span {
    border-top: 10px solid #ff980099;
    border-bottom: 10px solid #ff980099;
    padding: 5px 20px;
  }
  > div > span {
    display: flex;
    justify-content: end;
    align-items: center;
    color: gray;
  }

  > div > span > h3 {
    justify-content: flex-end;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 10px;
    font-weight: 300;
    color: black;
  }

  @media only screen and (max-width: 540px) {
    // small 크기 //
    > div > h1 {
      font-size: 27px;
    }
    > div > span {
      justify-content: center;
      margin: 10px;
    }
  }
`;
const ModalImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450; // 나중에 width만 넣어서 각 사진 비율로 모달에 넣을 수 있도록 함.
  font-size: 50px;
  margin: auto;
  margin-bottom: 20px; // 이미지 끼리 간격
  padding: 40px 40px;

  > img {
    /* border-bottom: 5px solid #ff9800; */
    width: 90%;
    border-radius: 10px;
  }
  @media only screen and (max-width: 540px) {
    // small 크기 //
    margin-bottom: 10px; // 이미지간격
    padding: 10px 10px;
    > img {
      width: 100%; //너비 70%
      height: 100%;
    }
  }
`;

const ModalText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  padding: 5px 20%;
  margin-left: auto;
  color: black;

  @media only screen and (max-width: 540px) {
    // small 크기 //

    font-size: 20px;
    padding: 30px 30px;
    margin-left: auto;
  }
`;
const ModalFooter = styled.div`
  display: block;
  border-radius: 10px;
`;

function ReadDialog({ open, onClose, item, pathImg }) {
  useEffect(() => {
    document.body.style = `margin:0`;
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);
  return (
    <div className="modal">
      <Modal>
        <ModalBackground>
          <ModalBackgroundExit onClick={onClose}></ModalBackgroundExit>
          <ModalView className="modal-view">
            <ModalHeader>
              <div className="close-btn" onClick={onClose}>
                &times;
              </div>
              <ModalTitleUser>
                <div>
                  <h1>
                    <span>{item?.title}</span>
                  </h1>
                </div>
                <div>
                  <span>
                    <em>{item.createdAt.slice(0, 10)}</em>
                    <h3>{item?.owner_name}</h3>
                  </span>
                </div>
              </ModalTitleUser>
            </ModalHeader>
            <hr />
            <ModalImgDiv>
              <img src={`https://ll-api.jungsub.com${item.img_path}`} />
            </ModalImgDiv>
            <hr />
            <ModalText>{item?.text}</ModalText>
            {item?.text ? <hr /> : null}
            <ModalFooter />
          </ModalView>
        </ModalBackground>
      </Modal>
    </div>
  );
}

export default ReadDialog;
