
// import { getEmployees } from '../../(data)/(api)/employee';

export default async function ProductsPage() {
  // const employees = await getEmployees();

  return (
    <div className="bg-red-900">
      <p className="text-2xl">FEATURED WORK</p>
      <p className="text-9xl -ml-2">PROJECTS</p>
      <p className="main-title">Overview - List of Selected Portfolio</p>
      {/* <ul>
        {employees.map((employee) => (
          <li key={employee.nik}>
            <strong>{employee.nama}</strong> - {employee.jabatan}
          </li>
        ))}
      </ul> */}
    </div>
  );
}