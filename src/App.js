import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Pagination from './Pagination';
import Sort from './Sort';

import './App.css';

const API = `http://localhost:3001`;
const ITEMS_PER_PAGE = 3;

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState({column: null, order: null});

  const unsortedEmployees = useRef([]);

  // Retrieve the employee data when the app initially renders
  useEffect(() => {
    axios.get(`${API}/employees/all`)
      .then((response) => {
        const employees = response.data.employees;
        unsortedEmployees.current = employees.slice();

        // TODO: Why is this firing twice?
        console.log(`employees retrieved`);

        setEmployees(employees);
        setTotalPages(Math.ceil(employees.length / ITEMS_PER_PAGE));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = (start + ITEMS_PER_PAGE > employees.length - 1) ? undefined : start + ITEMS_PER_PAGE;
  const employeesThisPage = employees.slice(start, end);

  const selectSort = (event) => {
    const getButton = (target) => {
      return target.tagName === `BUTTON` ? target : getButton(target.parentNode);
    }
    const clickedButton = getButton(event.target);
    const buttonColumn = clickedButton.dataset.column;

    let order;
    if (sort.column === buttonColumn) {
      if (sort.order === `ascending`) {
        order = `descending`;
        setSort({column: buttonColumn, order: order});
      } else if (sort.order === `descending`) {
        order = null;
        setSort({column: null, order: null});
        setEmployees(unsortedEmployees.current);
      } else {
        order = `ascending`;
        setSort({column: buttonColumn, order: order});
      }
    } else {
      order = `ascending`;
      setSort({column: buttonColumn, order: order});
    }

    if (order === null) return;

    const sortedEmployees = employees.slice().sort((a, b) => {
      if (a[buttonColumn] > b[buttonColumn]) {
        return order === `ascending` ? 1 : -1;
      } else if (a[buttonColumn] < b[buttonColumn]) {
        return order === `ascending` ? -1 : 1;
      } else {
        return 0;
      }
    });

    setEmployees(sortedEmployees);
  }

  return (
    <>
    <main className="container">
      <Header />
      <div className="employees">
        <div className="employees__header tr">
          <button type="button" data-column="name" onClick={selectSort}>
            Name
            <Sort sort={sort} column="name" />
          </button>

          <button type="button" data-column="role" onClick={selectSort}>
            Role
            <Sort sort={sort} column="role" />
          </button>

          <button type="button" data-column="username" onClick={selectSort}>
            Username
            <Sort sort={sort} column="username" />
          </button>

          <button type="button" data-column="email" onClick={selectSort}>
            Email Address
            <Sort sort={sort} column="email" />
          </button>
        </div>
        {employeesThisPage.map((employee) => {
          const id = employee.id;
          const username = employee.username;
          const role = employee.role;
          const name = employee.name;
          const email = employee.email;

          return (
            <div className="employees__employee tr" key={id}>
              <div className="employees__employee__name">
                {name}
              </div>
              <div className="employees__employee__role">
                <span className="label">Role: </span>{role}
              </div>
              <div className="employees__employee_username">
                <span className="label">Username: </span>{username}
              </div>
              <div className="employees__employee_email">
                <span className="label">Email: </span>{email}
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </main>
    <Footer />
    </>
  );
}

export default App;
