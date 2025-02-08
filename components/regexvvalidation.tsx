export const validateUsername = (username: string): boolean => {
    const usernameRegex = /^.{5,}$/;
    return usernameRegex.test(username);
};

export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?!.*\s)[A-Za-z\d\W_]{8,}$/;
    return passwordRegex.test(password);
};
