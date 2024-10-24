export interface Employee {
    employee_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number?: string; // ? significa que este campo es opcional
    hire_date: string; // o Date, según cómo manejes las fechas
    job_id: string;
    salary: number;
    commission_pct?: number; // opcional
    manager_id?: number; // opcional
    department_id: number;
}
