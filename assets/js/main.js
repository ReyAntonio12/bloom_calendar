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

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedTime = document.getElementById('selectedTime').value;
    if (!selectedTime) {
        alert('Por favor, seleccione un horario.');
        return;
    }
    alert(`Formulario enviado con el horario: ${selectedTime}`);
    // Aquí puedes enviar el formulario usando AJAX o un método de envío tradicional
});



// Loader

window.addEventListener('load', () => {
    document.querySelector('.load').classList.add('load--hidden');
});

