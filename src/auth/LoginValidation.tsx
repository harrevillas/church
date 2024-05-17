interface ErrorObject {
    Email: string;
    Password: string;
}

const validation = (values: { Email: string; Password: string }): ErrorObject => {
    const error: ErrorObject = {
        Email: "",
        Password: "" 
    };

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.Email === "") {
        error.Email = "Email should not be empty.";
    } else if (!email_pattern.test(values.Email)) {
        error.Email = "Email did not match pattern.";
    } else {
        error.Email = " "
    }

    if (values.Password === "") {
        error.Password = "Password should not be empty.";
    } else if (!password_pattern.test(values.Password)) {
        error.Password = "Password did not match pattern.";
    } else {
        error.Password = " "
    }

    return error;
};

export default validation;
