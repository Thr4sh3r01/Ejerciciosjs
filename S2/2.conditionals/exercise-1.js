const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucía Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i = 0; i < alumns.length; i++) {
  const trimestresAprobados = [alumns[i].T1, alumns[i].T2, alumns[i].T3].filter(
    (trimestre) => trimestre
  ).length;
  alumns[i].isApproved = trimestresAprobados >= 2;
}
console.log(alumns);
