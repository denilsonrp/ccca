const cpfLengthOnlyDigits = 11;

function getVerifyingDigit(value: number) {
  const restOfDivision = value % cpfLengthOnlyDigits;
  return restOfDivision < 2 ? 0 : cpfLengthOnlyDigits - restOfDivision;
}

export function isValidCPF(cpf: string) {
  if (!cpf || cpf.length < 11 || cpf.length > 14) return false;

  const cpfOnlyDigits = cpf.replaceAll(/\D/g, "");

  let firstDigit = 0;
  let secondDigit = 0;

  for (let counter = 1; counter < cpfLengthOnlyDigits - 1; counter++) {
    const eachCpfDigit = parseInt(
      cpfOnlyDigits.substring(counter - 1, counter)
    );

    firstDigit += (cpfLengthOnlyDigits - counter) * eachCpfDigit;
    secondDigit += (12 - counter) * eachCpfDigit;
  }

  const firstVerifyingDigit = getVerifyingDigit(firstDigit);
  secondDigit += firstVerifyingDigit * 2;
  const secondVerifyingDigit = getVerifyingDigit(secondDigit);
  const twoLastCpfDigits = cpfOnlyDigits.substring(
    cpfLengthOnlyDigits - 2,
    cpfLengthOnlyDigits
  );
  const verifyingDigits = `${firstVerifyingDigit}${secondVerifyingDigit}`;

  return twoLastCpfDigits === verifyingDigits;
}
