export const validateName = (name?:string) => {
  return name!=null && name.trim().length > 0;
};

export const validateEmail = (email?:string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email!=null && emailRegex.test(email);
};