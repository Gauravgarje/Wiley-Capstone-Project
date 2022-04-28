import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  getHomePage() {
    return this.http.get(environment.apiBaseUrl, { responseType: 'text' });
  }
  employeeLogin(empId: number) {
    return this.http.get(environment.apiBaseUrl + '/employee?empId=' + empId);
  }
  getBranchCode(empId: number) {
    return this.http.get(environment.apiBaseUrl + '/employee?empId=' + empId);

  }
  getBankName(branchCode: string) {
    return this.http.get(environment.apiBaseUrl + '/employee/bank?branchCode=' + branchCode);
  }
  getAllCustomersByBranch(branchCode: string) {
    return this.http.get(environment.apiBaseUrl + `/employee/customers/${branchCode}`);
  }
  deleteCustomer(custId: number) {
    return this.http.delete(
      environment.apiBaseUrl + '/admin/customer/delete?customerId=' + custId
    );
  }

}
