import React, { useState } from "react";
import Box from "../Components/Box";
import Days from "./Days";
function Goal() {
  const [day, setDay] = useState<string>("");
  const [goal, setGoal] = useState<any>("");
  const [data, setData] = useState([
    {
      day: "Monday",
      goals: [],
    },
    { day: "Tuesday", goals: [] },
    { day: "Wednesday", goals: [] },
    { day: "Thursday", goals: [] },
    { day: "Friday", goals: [] },
  ]);
  const handle = () => {
    setDay("");
    setGoal("");
  };

  const handleSubmit = () => {
    setData((prevData:any) => {
      return prevData.map((item:any) => {
        if (item.day === day) {
          return { ...item, goals: [...item.goals,<Days goal={goal}/> ] };
        } else {
          return item;
        }
      });
    });
  };
  return (
    <>
      <div
        className="container d-flex justify-content-center rounded"
        style={{ width: "80%", marginTop: "2rem" }}
      >
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Day and Goal
            </span>
          </div>
          <input
            style={{ backgroundColor: "whitesmoke" }}
            type="text"
            placeholder="day"
            className="form-control"
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
          <input
            style={{ backgroundColor: "whitesmoke" }}
            type="text"
            className="form-control"
            placeholder="goal"
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <button
          style={{ marginTop: "1rem" }}
          type="submit"
          className="btn btn-primary btn-small"
          onClick={handleSubmit}
        >
          Add
        </button>
        <button
          style={{ marginLeft: "1rem", marginTop: "1rem" }}
          type="reset"
          className="btn btn-info btn-small"
          onClick={handle}
        >
          Reset
        </button>
      </div>
      <div style={{ margin: "1rem" }}>
        <Box rows={data} />
      </div>
      ;
    </>
  );
}

export default Goal;
