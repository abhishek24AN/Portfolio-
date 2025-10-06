const students = [
  "ADESH RAJENDRA RATHOD",
  "AKSHAYKUMAR MOHAN MASKE",
  "ASHWINI SANTOSH JADHAV",
  "GAYATRI PRAMOD MANSUTE",
  "GAYATRI VISHNU KEDAR",
  "HARSHAL MAHENDRA HORE",
  "LOKESH SANTOSH KALE",
  "RADHIKA KISHOR CHAVAN",
  "RENUKA ASHOK AMBHORE",
  "SANKET DADARAO BODADE",
  "SHILPA RAMRAO RATHOD",
  "SHRUTIKA ARUN NAWALKAR",
  "TANAYA MILIND DESHMUKH",
  "VAISHNAVI KAILAS AMBALKAR",
  "VAISHNAVI RAMKRUSHNA TOLMARE",
  "VISHAKHA NAVEEN DALAL",
  "ABHAY CHANDRAKANT PATIL",
  "ABHISHEK TANAJI NIKALJE",
  "ACHAL MILIND WANKHADE",
  "ADITYA SANJAY KARALE",
  "AJINKYA EKNATH PATIL",
  "AKHILESH NAJUKARAO DHAGE",
  "AMBIKA DNYANESHWAR PATIL",
  "ANANT ANIL PAGAR",
  "ANIKET GAJANAN BENDMALI",
  "ANKITA RAJENDRA BORADE",
  "APURVA MANOHAR KOLHE",
  "CHETAN JAGANNATH BHIVATE",
  "DARSHAN DINESHRAO KALE",
  "DHANSHREE GOPAL GHORALE",
  "DHANSHRI GANESH NEMADE",
  "DISHANT MILIND CHAUDHARI",
  "DNYANESHWAR VIJAY KASURDE",
  "GAURI BALU TAYADE",
  "GAYATRI DIGAMBAR GOTMARE",
  "GAYATRI PRAMOD CHAUDHARI",
  "GAYATRI RAGHUNATH VASATKAR",
  "JANAVI RAMRAO AKARE",
  "KALYANI BALKRUSHNA KANGLE",
  "KHUSHI DNYANESHWAR DONGE",
  "KRISHNA PADMAKAR PATHAK",
  "KRUSHNALI GOVIND BHOYAR",
  "MADHAVI VINAYAK WANKHADE",
  "MAHESHWARI MANOHAR LODAM",
  "MANDAR ARUN PALKHADE",
  "MOHAMMAD MUDASSIR HAFEEZ UR REHMAN",
  "MOHD ADNAN DANISH MOHD TAHSIN",
  "NANDINI BAL SAKALKALE",
  "OM PRAMOD AWARE",
  "PAWAN SHIVCHARAN PARASKAR",
  "PRACHI GAJANAN BOROKAR",
  "PRATHMESH DEVIDAS BAHEKAR",
  "PREM NARAYAN DALI",
  "RAU DILIP PATIL",
  "RIYA SANDEEP NAWGAJE",
  "RUSHIKESH SANTOSH CHOTHAVE",
  "SAINATH RAMESH JADHAV",
  "SAKSHI PRAKASH NAWKAR",
  "SAMARTH ANIL DESHPANDE",
  "SANKET AVINASH KHARABE",
  "SANSKRUTI SUNIL UGALE",
  "SAYALI RAJESH WAGHMARE",
  "SAYALI SANJAY NAVKAR",
  "SHEETAL MANIKRAO KANKALE",
  "SHIVANI BHARAT PANDHARE",
  "SHRAVAN SANDEEP MANKAR",
  "SHRUSHTI RAJESH SUPASE",
  "TUSHAR PRADIP PARIHAR",
  "VAISHNAVI DNYANESHWAR BARBADE",
  "VAISHNAVI PREMSING RATHOD",
  "VAISHNAVI SANJAY PATIL",
  "SHIVANI SANTOSH GAIKWAD",
  "AKHILESH SHAILENDRASINGH TOMAR"
];

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const teacher = document.getElementById('teacher').value;
  const subject = document.getElementById('subject').value;

  if (teacher && subject) {
    document.querySelector('.login-box').classList.add('hidden');
    document.getElementById('attendance-container').classList.remove('hidden');
    loadAttendanceTable();
  }
});

function loadAttendanceTable() {
  const tbody = document.getElementById('attendance-table-body');
  tbody.innerHTML = '';

  students.forEach((name, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${name}</td>
      <td><input type="checkbox" name="present_${index + 1}"></td>
    `;
    tbody.appendChild(row);
  });
}

document.getElementById('attendance-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const attendanceData = students.map((name, index) => {
    const present = document.querySelector(`input[name="present_${index + 1}"]`).checked;
    return { sn: index + 1, name, present };
  });

  fetch('save_attendance.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attendanceData)
  })
    .then(response => response.text())
    .then(data => {
      alert('Attendance saved successfully!');
    })
    .catch(error => {
      console.error('Error saving attendance:', error);
      alert('Failed to save attendance.');
    });
});
