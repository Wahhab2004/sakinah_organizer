const dataDummyPaket = [
  {
    id: "USR001",
    jenisPaket: "Sakinah",
    customer: "Kagama",
    hargaAsli: "Rp. 1.000.000",
    hargaDiskon: "Rp. 800.000",
    fasilitas: "Fasilitas A, Fasilitas B",
  },

  {
    id: "USR002",
    jenisPaket: "Mawaddah",
    customer: "Dosen/Tendik UGM",
    hargaAsli: "Rp. 1.500.000",
    hargaDiskon: "Rp. 1.200.000",
    fasilitas: "Fasilitas A, Fasilitas B, Fasilitas C",
  },

  {
    id: "USR003",
    jenisPaket: "Warahmah",
    customer: "UGM",
    hargaAsli: "Rp. 2.000.000",
    hargaDiskon: "Rp. 1.800.000",
    fasilitas: "Fasilitas A, Fasilitas B, Fasilitas C, Fasilitas D",
  },
  
 
];


interface jenisPaket {
  id: string;
  jenisPaket: string;
  customer: string;
  hargaAsli: string;
  hargaDiskon: string;
  fasilitas: string;
}

export type { jenisPaket };

export default dataDummyPaket;