document.addEventListener('DOMContentLoaded', function() {
    const calendarElement = document.getElementById('calendar');
    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    // Crear encabezados para los días de la semana
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day', 'header');
        dayElement.textContent = day;
        calendarElement.appendChild(dayElement);
    });

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const currentDate = today.getDate();

    // Obtener el primer día del mes
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Obtener el número de días en el mes
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Añadir celdas vacías para los días antes del inicio del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day');
        calendarElement.appendChild(emptyCell);
    }

    // Añadir los días del mes
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;

        // Destacar el día actual
        if (i === currentDate) {
            dayElement.style.backgroundColor = '#ffeb3b'; // Color de fondo para el día actual
        } else if (i < currentDate) {
            dayElement.style.backgroundColor = '#a9a9a9'; // Color gris oscuro para los días pasados
            dayElement.style.color = '#ffffff'; // Texto blanco para contraste
        }

        calendarElement.appendChild(dayElement);
    }
});


/* FORM */
document.querySelectorAll('.time-slot').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.time-slot').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('selectedTime').value = this.textContent;
    });
});

document.getElementById('saveButton').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('reservationForm'));
    const data = Object.fromEntries(formData.entries());
    console.log('Data Saved:', data);
    alert('Information sent correctly.');
});

document.getElementById('redirectButton').addEventListener('click', function() {
    const selectedTime = document.getElementById('selectedTime').value;
    if (!selectedTime) {
        alert('Please choose a time before continuing');
        return;
    }
    window.location.href = 'https://square.link/u/FLqgwfAx';
});



// Loader

window.addEventListener('load', () => {
    document.querySelector('.load').classList.add('load--hidden');
});

