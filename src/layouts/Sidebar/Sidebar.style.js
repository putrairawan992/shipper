import styled from "styled-components";

export const SideBarStyle = styled.div`
  .shipper {
    .ant-layout-header {
      @media screen and (max-width: 500px) {
        padding: 0px 20px;
      }
    }
    &__header {
      background: #ffffff;
      &__logo {
        width: 120px;
        .ant-btn-primary {
          color: black;
          background: unset;
          border-color: unset;
          text-shadow: unset;
          border: unset;
          box-shadow: unset;
        }
        &__button {
          @media screen and (min-width: 500px) {
            display: none;
            margin-right: 20px;
          }
        }
        img {
          width: 100%;
        }
        @media screen and (max-width: 500px) {
          width: 100%;
          img {
            width: 50%;
            margin-left: 23px;
          }
        }
      }
      &__icon-text {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @media screen and (max-width: 500px) {
          margin-top: 15px;
        }
        &__username {
          margin-right: 15px;
          @media screen and (max-width: 500px) {
            display: none;
          }
        }
      }
    }
    &__sidebard {
      background: #ffffff;
      @media screen and (max-width: 900px) {
        display: none;
      }
    }
    &__content {
      background: #ececec;
    }
  }
`;
