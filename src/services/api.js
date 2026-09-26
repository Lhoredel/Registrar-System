// Frontend mock data. Replace these functions with fetch/axios calls to your API.
export const initialStudents = [
  { id: 'IDSC-26-0041', name: 'Justine Nicole Tato', program: 'BSIT', year: '2nd Year', status: 'Enrolled', date: 'Oct 24, 2026' },
  { id: 'IDSC-26-0182', name: 'Martin Matias', program: 'BSCS', year: '1st Year', status: 'Pending', date: 'Oct 23, 2026' },
  { id: 'IDSC-25-0921', name: 'Ashley Beltran', program: 'BA', year: '2nd Year', status: 'Enrolled', date: 'Oct 23, 2026' },
  { id: 'IDSC-26-0205', name: 'John Lei Madrona', program: 'BSED', year: '1st Year', status: 'Enrolled', date: 'Oct 22, 2026' },
  { id: 'IDSC-24-1102', name: 'Maricar Ofenia', program: 'BEED', year: '3rd Year', status: 'Pending', date: 'Oct 22, 2026' },
  { id: 'IDSC-25-0221', name: 'Paolo Reyes', program: 'BSIT', year: '2nd Year', status: 'Enrolled', date: 'Oct 21, 2026' },
  { id: 'IDSC-26-0308', name: 'Angelica Ramos', program: 'BSCS', year: '1st Year', status: 'Pending', date: 'Oct 20, 2026' },
  { id: 'IDSC-24-0144', name: 'Joshua Dela Cruz', program: 'BSIT', year: '3rd Year', status: 'Enrolled', date: 'Oct 19, 2026' }
]

export const initialFaculty = [
  { id: 'FAC-001', name: 'Dr. Maria Santos', department: 'IT Department', email: 'm.santos@idsc.edu.ph', status: 'Active' },
  { id: 'FAC-002', name: 'Prof. Carlo Reyes', department: 'Computer Science', email: 'c.reyes@idsc.edu.ph', status: 'Active' },
  { id: 'FAC-003', name: 'Ms. Elena Cruz', department: 'Education', email: 'e.cruz@idsc.edu.ph', status: 'Active' },
  { id: 'FAC-004', name: 'Mr. Ramon Flores', department: 'Arts and Sciences', email: 'r.flores@idsc.edu.ph', status: 'On Leave' }
]

export const initialSubjects = [
  { code: 'IT201', title: 'Web Systems and Technologies', program: 'BSIT', units: 3, year: '2nd Year' },
  { code: 'IT202', title: 'Information Management', program: 'BSIT', units: 3, year: '2nd Year' },
  { code: 'CS101', title: 'Introduction to Computing', program: 'BSCS', units: 3, year: '1st Year' },
  { code: 'ED105', title: 'The Teaching Profession', program: 'BSED', units: 3, year: '1st Year' }
]

export const initialSchedules = [
  { day: 'Monday', time: '08:00 AM – 10:00 AM', subject: 'Web Systems and Technologies', room: 'Lab 1', faculty: 'Dr. Maria Santos' },
  { day: 'Tuesday', time: '10:00 AM – 12:00 PM', subject: 'Information Management', room: 'Room 204', faculty: 'Prof. Carlo Reyes' },
  { day: 'Wednesday', time: '01:00 PM – 03:00 PM', subject: 'Introduction to Computing', room: 'Lab 2', faculty: 'Prof. Carlo Reyes' }
]
