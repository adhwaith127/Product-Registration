import React, { useState } from "react";
import StatusButtons from "../components/StatusButtons";
import '../styles/AddSerialNum.css';

export default function AddSerialNum() {
  const [Slno, setSlno] = useState("");
  const [serialList, setSerialList] = useState([]);

  const re = /^[0-9]{4}[0-9]{2}(AMP|API)[0-9]{6}B$/;

  const handleAdd = (e) => {
    e.preventDefault();

    if (!Slno.trim()) {
      window.alert("Please Fill out the field");
      return;
    }

    if (!re.test(Slno.trim())) {
      window.alert("The Serial Number is not valid");
      return;
    }

    setSerialList([...serialList, Slno.trim()]);
    setSlno("");
  };

  return (
    <div className="serial-page">
      {/* Page Header */}
      <header className="serial-page__header">
        <h1 className="serial-page__title">Add Serial Number</h1>
      </header>

      {/* Main Panel */}
      <section className="serial-panel">
        <div className="serial-panel__header">
          <h3 className="serial-panel__title">New Serial</h3>
        </div>

        <div className="serial-panel__body">
          {/* Input Form */}
          <form className="serial-form" onSubmit={handleAdd}>
            <div className="serial-form__field">
              <input
                type="text"
                className="serial-form__input"
                required
                placeholder="Enter Sl.no (eg:202505AMP123456B)"
                value={Slno}
                onChange={(e) => setSlno(e.target.value)}
                aria-label="Serial number"
              />
            </div>

            <div className="serial-form__actions">
              <button type="submit" className="serial-form__submit">
                Add Serial Number
              </button>
            </div>
          </form>

          {/* Table Wrapper for mobile scroll */}
          <div className="serial-table-wrapper">
            <table className="serial-table">
              <thead className="serial-table__head">
                <tr className="serial-table__row">
                  <th className="serial-table__header serial-table__header--index">#</th>
                  <th className="serial-table__header">Serial Number</th>
                  <th className="serial-table__header">Actions</th>
                </tr>
              </thead>
              <tbody className="serial-table__body">
                {serialList.length === 0 ? (
                  <tr className="serial-table__row serial-table__row--empty">
                    <td colSpan="3" className="serial-table__cell">
                      No serial numbers added yet.
                    </td>
                  </tr>
                ) : (
                  serialList.map((item, index) => (
                    <tr key={index} className="serial-table__row">
                      <td className="serial-table__cell" data-label="#">
                        {index + 1}
                      </td>
                      <td 
                        className="serial-table__cell serial-table__cell--serial" 
                        data-label="Serial Number"
                      >
                        {item}
                      </td>
                      <td className="serial-table__cell" data-label="Actions">
                        <div className="serial-table__actions">
                          <StatusButtons serial={item} />
                          <button
                            type="button"
                            className="serial-table__btn serial-table__btn--delete"
                            onClick={() =>
                              setSerialList(serialList.filter((s, i) => i !== index))
                            }
                            aria-label={`Delete serial ${item}`}
                          >
                            <i className="fas fa-trash" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="serial-panel__footer">
          <small className="serial-panel__count">
            {serialList.length} record{serialList.length !== 1 ? "s" : ""}
          </small>
        </div>
      </section>
    </div>
  );
}