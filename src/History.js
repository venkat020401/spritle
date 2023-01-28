import axios from "axios";
import React, { useEffect, useState } from "react";

function History({ isVisible }) {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get(
        "https://63d3ccafc1ba499e54c9117f.mockapi.io/cal_history"
      );
      setUserList(users.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        </div>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">History</h6>
          </div>
          <div class="card-body">
            {isLoading ? (
              <>
                <img src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" />
              </>
            ) : (
              <div class="table-responsive">
                <table
                  class="table table-borderless table-hover text-center"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>First Value</th>
                      <th>Operation</th>
                      <th>Second Value</th>
                      <th>Equal to</th>
                      <th>Result</th>
                      <th>Time Stamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>{user.NumberOne}</td>
                          <td>{user.operation}</td>
                          <td>{user.NumberTwo}</td>
                          <td>{user.equal}</td>
                          <td>{parseInt(user.Result)}</td>
                          <td>{user.timestamp}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
