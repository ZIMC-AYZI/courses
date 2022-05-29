export const userEmailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const userPasswordReg = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*.\[\]{}\-_,()])(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{10,}$/);
export const userNameReg = new RegExp(/^[A-zА-яЁёІіЇї]{1,30}$/);
export const userDayOfBirthReg = new RegExp(/^(3[01]|[12][0-9]|[1-9])$/);
export const userMonthOfBirthReg = new RegExp(/^(1[0-2]|[1-9])$/);
export const userYearOfBirthReg = new RegExp(/^(2[1-2]|[0-9][0-9][0-9][0-9])$/);
