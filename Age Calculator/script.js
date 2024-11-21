const age = document.getElementById('age')
const button = document.getElementById('buttonForm')
let birthDay = document.getElementById('birthDate')
let date = new Date()

button.addEventListener('click', () => {
    const [year, month, day] = birthDay.value.split('-')
    let years = date.getFullYear() - year
    let months = date.getMonth() + 1 - month
    let days = date.getDate() - day

    // Ajustar días negativos
    if (days < 0) {
        // Obtener días del mes anterior
        const previousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    // Ajustar meses negativos
    if (months < 0) {
        months += 12;
        years--;
    }

    age.innerHTML = `${years} years, ${months} months y ${days} days`
})