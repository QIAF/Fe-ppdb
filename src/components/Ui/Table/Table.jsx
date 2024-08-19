import React, { useState } from "react";
import "./Table.css";
import { Input } from "../Form/Input";

function Table() {
  return (
    <div className="table-responsive container">
      <table className="table-bordered">
        <thead>
          <tr>
            <th rowSpan={2} scope="col">
              Mata Pelajaran
            </th>
            <th colSpan={2} scope="col text-center">
              Kelas 7
            </th>
            <th colSpan={2} scope="col">
              Kelas 8
            </th>
            <th colSpan={2} scope="col">
              Kelas 9
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>
              <b>Semester 1</b>
            </td>
            <td>
              <b>Semester 2</b>
            </td>
            <td>
              <b>Semester 3</b>
            </td>
            <td>
              <b>Semester 4</b>
            </td>
            <td>
              <b>Semester 5</b>
            </td>
          </tr>
          <tr>
            <td>Matematika</td>
            <td>
              <Input type={"number"} className={"form-control"} />
            </td>

            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
          </tr>
          <tr>
            <td>IPA</td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
          </tr>
          <tr>
            <td>Bahasa Indonesia</td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
          </tr>
          <tr>
            <td>Bahasa Inggris</td>

            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
            <td>
              <Input type={"number"} className={"form-control"} value={""} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
