import styled from "styled-components";

export const SideBarStyle = styled.div`
  .shipper {
    .ant-menu-inline .ant-menu-item::after {
      border-right: unset !important;
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: unset;
    }
    .ant-menu-item-selected {
      color: #e62b34;
      font-weight: 555;
      border-left: 3px solid #e62b34;
    }
    .ant-menu-inline > .ant-menu-item {
      font-weight: 555;
    }
    &__header {
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__logo {
        width: 120px;
        img {
          width: 100%;
        }
      }
      &__icon-text {
        &__username {
          margin-right: 15px;
        }
      }
    }
    &__sidebard {
      background: #ffffff;
    }
    &__content {
      background: #ececec;
    }
  }
`;
