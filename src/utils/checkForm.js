class CheckForm {
  isEmptyOrSpaces(str) {
    return str !== null && str !== "" && !str.match(/^ *$/);
  }
  isEmptyOrSpacesList(list) {
    const result = list.filter((str) => {
      if (str !== null && str !== "" && !str.match(/^ *$/)) {
        return str;
      }
    });
    return result.length === list.length ? true : false;
  }
  checkPhone(phone) {
    return phone !== null && phone !== "" && /^1[3-9]\d{9}$/.test(phone);
  }
  checkEmail(email) {
    return (
      email !== null &&
      email !== "" &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    );
  }
  checkIDCard(id) {
    return (
      id !== null &&
      id !== "" &&
      /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(id)
    );
  }
  checkCreditCardNumber(number) {
    return number !== null && number !== "" && /^\d{16,19}$/.test(number);
  }
}

export default CheckForm;
