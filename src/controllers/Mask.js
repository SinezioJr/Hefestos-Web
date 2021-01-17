class Masks {
  formatarCPF = (CPF) => {
    CPF = CPF.slice(0, 14);
    CPF = CPF.replace(/\D/g, "");
    CPF = CPF.replace(/(\d{3})(\d)/, "$1.$2");
    CPF = CPF.replace(/(\d{3})(\d)/, "$1.$2");
    CPF = CPF.replace(/(\d{3})(\d)/, "$1-$2");
    return CPF;
  };
}

export default new Masks();
