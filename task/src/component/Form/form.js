import React from "react";
import "./Form.scss";

const Form = props => {
  return (
    <>
      <h2>Узнайте погоду!!!</h2>
      <form className="form" onSubmit={props.weatherMethod}>
        <div className="input-field col s12">
          <input
            className="input"
            type="text"
            name="city"
            placeholder="Сity search..."
          />
        </div>

        <button className="waves-effect waves-light btn">
          <i className="material-icons left">cloud</i>Поиск города
        </button>
      </form>
    </>
  );
};
export default Form;
