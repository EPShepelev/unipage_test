import React from "react";
import "./StartModal.css";

function StartModal() {
  return (
    <div
      className="card container shadow p-3 mb-5 bg-white rounded"
      style={{ width: "500px" }}
    >
      <div className="card-body col-md-auto">
        <h5 className="card-title">Тренажер скорости печати</h5>
        <p className="card-text">
          Нажмите "Начать" и проверьте насколько вы хороши!
        </p>
        <button type="button" className="btn btn-primary">
          Начать
        </button>
      </div>
    </div>
  );
}

export default StartModal;
