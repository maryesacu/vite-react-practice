
import { CardEmployee } from "./Components/CardEmployee"

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}: any) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
        </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee: any) => ( <CardEmployee key={employee.id} employee={employee} selectedTeam={selectedTeam} 
                handleEmployeeCardClick={handleEmployeeCardClick}/>))
            }
          </div>
        </div>
      </div>  
    </main>
  )

}
export default Employees
