

const InputLocation = ({dataSelect, srtSearch, setId }) => {

    
    return (
      <>
        <div className="header">
          <div className="img-header">
            <img src="/assets/img/logo.svg" alt="logo" />
            <div className="input-search">
              <div className="input-content">
                
                <div>
                  <input
                    type="text"
                    onChange={(e) => srtSearch(e.target.value)}
                    placeholder="Ingrese Locación"
                  />
                </div>
               
              </div>
            </div>
            {dataSelect.length > 0  && (
              <select
                className="select-name"
                onChange={(e) =>
                  setId(e.target.value)
                }
              >
                {dataSelect.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </>
    );
  };
  
  export default InputLocation;
  