const Validate = (email, password) => {
    email = email.trim();
    password = password.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (emailRegex.test(email)) {
        if (passwordRegex.test(password)) {
            return "Register";
        } else if (password.length < 8) {
            return "Password must be at least 8 characters long";
        } else {
            return "Password must contain 1 uppercase letter, 1 special character, 1 lowercase letter, and 1 number";
        }
    } else {
        if (email && !email.includes('@')) {
            return "Email must contain @ character";
        } else {
            return "Invalid Email";
        }
    }
}

export default Validate;
