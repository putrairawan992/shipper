import React, { useEffect, useState } from "react";
import Random from "../../repository/Random";
import HeaderDriverManagement from "../../components/HeaderDriverManagement";
import { DriverManagementStyle } from "./DriverManagement.style";
import CardsDriverManagement from "../../components/CardsDriverManagement";
import ButtonDriverManagement from "../../components/ButtonDriverManagement";
import { Card, Spin } from "antd";

function DriverManagement(props) {
  const [randomUser, setRandomUser] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredSearch, setfilteredSearch] = useState([]);

  useEffect(() => {
    fetchDataDriverManagement();
  }, []);
  async function fetchDataDriverManagement() {
    let response = await Random.getUser({
      params: { results: 30 },
      loading: setIsShowLoading,
    });
    if (response.status === 200) {
      setRandomUser(response.data.results); // eslint-disable-next-line
      response.data.results.map((item, index) => {
        item.index = index;
      });
      setfilteredSearch(response.data.results);
    }
  }

  function actionChangeSearch(e) {
    const lowercasedFilter = e.target.value.toLowerCase();
    setfilteredSearch(
      randomUser.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedFilter)
        );
      })
    );
  }

  useEffect(() => {
    // eslint-disable-next-line
    filteredSearch.map((item, index) => {
      item.index = index;
    });
    setUsers(filteredSearch.slice(0, 5));
  }, [filteredSearch]);

  function next() {
    // refSlider.slickNext();
    if (!users || (users.length > 0 && users[0].index === 29)) {
      return;
    } else {
      setUsers(randomUser.slice(users[4].index + 1, users[4].index + 6));
    }
  }
  function previous() {
    // refSlider.slickPrev();
    if (!users || (users.length > 0 && users[0].index === 0)) {
      return;
    } else {
      setUsers(randomUser.slice(users[4].index - 9, users[4].index - 4));
    }
  }

  return (
    <DriverManagementStyle>
      <Spin spinning={isShowLoading}>
        <div className="shipper">
          <Card>
            <HeaderDriverManagement actionChangeSearch={actionChangeSearch} />
            <CardsDriverManagement users={users} />
            {users.length > 0 && (
              <div
                style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}
              >
                {" "}
                <ButtonDriverManagement
                  validasi={
                    !users || (users.length > 0 && users[0].index === 0)
                  }
                  onClick={previous}
                  label={"< Previous Page"}
                />
                <ButtonDriverManagement
                  validasi={
                    !users ||
                    (users.length > 0 &&
                      users[users.length - 1].index ===
                        filteredSearch.length - 1)
                  }
                  onClick={next}
                  label={"Next Page >"}
                />
              </div>
            )}{" "}
          </Card>
        </div>
      </Spin>
    </DriverManagementStyle>
  );
}

export default DriverManagement;
