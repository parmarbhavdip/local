let students = [];

function saveStudent() {
    let student = {
        roll: roll.value,
        name: name.value,
        gender: gender.value,
        classLevel: classLevel.value,
        department: department.value,
        dob: dob.value,
        email: email.value,
        mobile: mobile.value,
        city: city.value,
        status: status.value
    };

    let index = editIndex.value;

    if (index === "") {
        students.push(student);
    } else {
        students[index] = student;
        editIndex.value = "";
    }

    clearForm();
    displayStudents();
}

function displayStudents() {
    studentTable.innerHTML = "";

    students.forEach((s, i) => {
        studentTable.innerHTML += `
        <tr>
            <td>${s.roll}</td>
            <td>${s.name}</td>
            <td>${s.gender}</td>
            <td>${s.classLevel}</td>
            <td>${s.department}</td>
            <td>${s.dob}</td>
            <td>${s.email}</td>
            <td>${s.mobile}</td>
            <td>${s.city}</td>
            <td>${s.status}</td>
            <td>
                <button type="button" class="btn btn-warning btn-sm" onclick="editStudent(${i})">Edit</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function editStudent(i) {
    let s = students[i];
    roll.value = s.roll;
    name.value = s.name;
    gender.value = s.gender;
    classLevel.value = s.classLevel;
    department.value = s.department;
    dob.value = s.dob;
    email.value = s.email;
    mobile.value = s.mobile;
    city.value = s.city;
    status.value = s.status;
    editIndex.value = i;
}

function deleteStudent(i) {
    students.splice(i, 1);
    displayStudents();
}

function filterData(cls, dept) {
    studentTable.innerHTML = "";

    students
        .filter(s =>
            (cls === "" || s.classLevel === cls) &&
            (dept === "" || s.department === dept)
        )
        .forEach((s, i) => {
            studentTable.innerHTML += `
            <tr>
                <td>${s.roll}</td>
                <td>${s.name}</td>
                <td>${s.gender}</td>
                <td>${s.classLevel}</td>
                <td>${s.department}</td>
                <td>${s.dob}</td>
                <td>${s.email}</td>
                <td>${s.mobile}</td>
                <td>${s.city}</td>
                <td>${s.status}</td>
                <td>
                    <button type="button" class="btn btn-warning btn-sm" onclick="editStudent(${i})">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm" onclick="deleteStudent(${i})">Delete</button>
                </td>
            </tr>
            `;
        });
}

function clearForm() {
    document.querySelectorAll("input, select").forEach(e => e.value = "");
}
