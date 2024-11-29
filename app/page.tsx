import { getEmployees } from './(data)/(api)/employee';
import SelectBox from './component/forms/selectbox';

export default async function EmployeePage() {
  const employees = await getEmployees();

  return (
    <div>
      <h1>Employee List</h1>
      <SelectBox/>
      <ul>
        {employees.map((employee) => (
          <li key={employee.nik}>
            <strong>{employee.nama}</strong> - {employee.jabatan}
          </li>
        ))}
      </ul>
    </div>
  );
}