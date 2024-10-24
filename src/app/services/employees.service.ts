import { Injectable } from '@angular/core';

export interface Employee {
  employee_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  hire_date: string;
  job_id: string;
  salary: number;
  commission_pct: number | null;
  manager_id: number | null;
  department_id: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employees: Employee[] = [
    {
      employee_id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone_number: "555-1234",
      hire_date: "2020-01-15",
      job_id: "IT_PROG",
      salary: 60000,
      commission_pct: null,
      manager_id: 100,
      department_id: 10
    },
    {
      employee_id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      phone_number: "555-5678",
      hire_date: "2019-07-23",
      job_id: "HR_REP",
      salary: 50000,
      commission_pct: null,
      manager_id: 101,
      department_id: 20
    },
    {
      employee_id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone_number: "555-6789",
      hire_date: "2021-03-01",
      job_id: "SA_MAN",
      salary: 75000,
      commission_pct: 0.05,
      manager_id: 102,
      department_id: 30
    },
    {
      employee_id: 4,
      first_name: "Bob",
      last_name: "Williams",
      email: "bob.williams@example.com",
      phone_number: "555-9876",
      hire_date: "2018-06-15",
      job_id: "AD_VP",
      salary: 120000,
      commission_pct: 0.10,
      manager_id: 103,
      department_id: 40
    },
    {
      employee_id: 5,
      first_name: "Charlie",
      last_name: "Brown",
      email: "charlie.brown@example.com",
      phone_number: "555-5432",
      hire_date: "2017-11-20",
      job_id: "MK_REP",
      salary: 45000,
      commission_pct: null,
      manager_id: 104,
      department_id: 50
    },
    {
      employee_id: 6,
      first_name: "David",
      last_name: "Clark",
      email: "david.clark@example.com",
      phone_number: "555-6543",
      hire_date: "2020-08-10",
      job_id: "IT_PROG",
      salary: 65000,
      commission_pct: null,
      manager_id: 105,
      department_id: 60
    },
    {
      employee_id: 7,
      first_name: "Eve",
      last_name: "Martinez",
      email: "eve.martinez@example.com",
      phone_number: "555-7890",
      hire_date: "2019-02-25",
      job_id: "HR_REP",
      salary: 55000,
      commission_pct: null,
      manager_id: 106,
      department_id: 70
    },
    {
      employee_id: 8,
      first_name: "Frank",
      last_name: "Jones",
      email: "frank.jones@example.com",
      phone_number: "555-8765",
      hire_date: "2021-09-30",
      job_id: "SA_MAN",
      salary: 80000,
      commission_pct: 0.06,
      manager_id: 107,
      department_id: 80
    },
    {
      employee_id: 9,
      first_name: "Grace",
      last_name: "Davis",
      email: "grace.davis@example.com",
      phone_number: "555-4321",
      hire_date: "2016-12-05",
      job_id: "AD_VP",
      salary: 125000,
      commission_pct: 0.12,
      manager_id: 108,
      department_id: 90
    },
    {
      employee_id: 10,
      first_name: "Henry",
      last_name: "Moore",
      email: "henry.moore@example.com",
      phone_number: "555-2109",
      hire_date: "2022-04-18",
      job_id: "MK_REP",
      salary: 48000,
      commission_pct: null,
      manager_id: 109,
      department_id: 100
    }
  ];

  constructor() {
    console.log("EmployeesService listo para usar...");
  }

  // Método para obtener todos los empleados
  getEmployees() {
    return this.employees;
  }

  // Método para obtener un empleado por su ID
  getEmployeeById(employee_id: number) {
    return this.employees.find(emp => emp.employee_id === employee_id);
  }
}
