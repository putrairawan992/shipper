import styled from "styled-components";

export const DriverManagementStyle = styled.div`
  .disabled {
    cursor: not-allowed;
  }

  .shipper {
    &__search-driver {
      width: 200px;
      margin-right: 15px;
    }
    @media screen and (min-width: 501px) {
      &__cards-driver-hideDesktop {
        display: none !important;
      }
    }
    @media screen and (max-width: 500px) {
      &__cards-driver-hideMobile {
        display: none;
      }
    }
    @media screen and (max-width: 900px) {
      .ant-typography.ant-typography-danger {
        font-size: 24px;
      }

      &__card {
        width: 100% !important;
      }
      &__search-driver {
        width: 100%;
        margin-bottom: 20px;
      }
      &__add-driver {
        width: 100%;
      }
    }
    &__card {
      width: 200px;
      &__tittle {
        display: flex;
        justify-content: space-between;
      }
    }
    &__button-driverManagement {
      border: unset;
      outline: unset;
      cursor: pointer;
      background:unset;
    }
    &__button-driverManagement::focus {
      outline: unset !important;
    }
  }
`;
