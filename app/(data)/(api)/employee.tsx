type Employee = {
  nik: number;
  nama: string;
  organisasi: string;
  nama_organisasi: string;
  email: string;
  telepon: number;
  jabatan: string;
  nama_jabatan: string;
  nama_gelar: string;
  tanggal_lahir: string;

}

export async function getEmployees(): Promise<Employee[]> {
  try {
    const response = await fetch('http://helpdesk-api-dev/general/employee');
    if (!response.ok) {
      throw new Error('Failed to fetch employee data');
    }

    const result = await response.json();

    // Assuming the API returns the structure shown
    return result.data || [];
  } catch (error) {
    console.error('Error fetching employee data:', error);
    return [];
  }
}

export const employees: Employee[] = [];