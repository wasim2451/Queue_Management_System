import { FaUserTimes } from "react-icons/fa";
export default function DisplayFunc({ queue, onUpdate, onRemove }) {
  function getColor(status) {
    switch (status) {
      case "Waiting":
        return "#ff0000";
      case "Serving":
        return "#00ff00";
      case "Complete":
        return "#646cff";
      default:
        return "#ffff";
    }
  }

  return (
    <div className="display-container">
      <h2 className="header" style={{ color: "#ffff" }}>
        Current Queue
      </h2>
      <div className="display-div">
        {queue.length == 0 ? (
          <p className="serviceText">No Queue Present</p>
        ) : (
          <div className="display-div">
            {queue.map((customer) => (
              <div key={customer.id} className="div-card">
                <div>
                  <p className="textList">{customer.name}</p>
                  <p className="serviceText"> Service : {customer.services}</p>
                  <p style={{ color: getColor(customer.status) }}>
                    {customer.status}
                  </p>
                </div>
                <div className="card-btn-container">
                  {/* Button to remove user */}
                  {customer.status == "Waiting" && (
                    <button
                      className="serveBtn"
                      onClick={() => onUpdate(customer.id, "Serving")}
                    >
                      Serve
                    </button>
                  )}
                  {customer.status == "Serving" && (
                    <button
                      className="completeBtn"
                      onClick={() => onUpdate(customer.id, "Complete")}
                    >
                      Complete
                    </button>
                  )}
                  <button
                    className="delete-btn"
                    onClick={() => onRemove(customer.id)}
                  >
                    <FaUserTimes />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
