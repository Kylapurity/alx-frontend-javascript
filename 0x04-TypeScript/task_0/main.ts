// Define the interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two instances of Student
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table with Vanilla JavaScript
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
