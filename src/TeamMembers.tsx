import TeamMemberCard from "./TeamMemberCard"
const TeamMembers = ({employees, handleEmployeeCardClick, selectedTeam}: any) => {
  return(
    employees.map((employee: any) => (
      <TeamMemberCard key={employee.id} id={employee.id} employee={employee} handleEmployeeCardClick = {handleEmployeeCardClick}
                                selectedTeam={selectedTeam}/>
    ))
  )
}
export default TeamMembers