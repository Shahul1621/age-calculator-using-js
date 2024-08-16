document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdateInput = document.getElementById('birthdate').value;
    const birthdate = new Date(birthdateInput);
    const today = new Date();

    if (!birthdateInput || isNaN(birthdate.getTime())) {
        document.querySelector('.result').textContent = 'Please enter a valid birthdate.';
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    const dayDifference = today.getDate() - birthdate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.querySelector('.result').textContent = `You are ${age} years old.`;
});
