import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";


function Employees() {

  const showEmployeesData = employeesGrid.map((item,index) => (
     <ColumnDirective key={index} {...item} />
  ))


  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent width="auto" toolbar={['Search']} dataSource={employeesData} allowPaging>
        <ColumnsDirective>
        {showEmployeesData}
        </ColumnsDirective>
        <Inject services={[Search, Toolbar, Page]} />
      </GridComponent>
    </div>
  );
}

export default Employees;
