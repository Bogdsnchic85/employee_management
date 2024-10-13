function showAddEmployeeForm() {
    document.getElementById('addEmployeeForm').style.display = 'block';
}

function hideAddEmployeeForm() {
    document.getElementById('addEmployeeForm').style.display = 'none';
}

function filterTable() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const tableRows = document.querySelectorAll('#employeesTable tbody tr');

    tableRows.forEach(row => {
        const fullName = row.cells[0].textContent.toLowerCase();
        
        if (fullName.includes(searchInput)) {
            row.style.display = ''; // Показываем строку
        } else {
            row.style.display = 'none'; // Скрываем строку
        }
    });
}

function editEmployee(id) {
    // Здесь можно реализовать логику для редактирования сотрудника
    alert("Редактировать сотрудника с ID: " + id);
}

function terminateEmployee(id) {
    if (confirm("Вы уверены, что хотите уволить сотрудника?")) {
        window.location.href = `terminate_employee.php?id=${id}`;
    }
}