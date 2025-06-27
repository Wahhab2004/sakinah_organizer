const dataDummyUser = [
  {
    id: "USR001",
    nama: "Wahhab",
    email: "p7NpM@example.com",
    role: "Super Admin",
    phone: "08123456789",
  },
  {
    id: "USR002",
    nama: "Aisyah",
    email: "LbUwI@example.com",
    role: "Admin",
    phone: "08123456789",
  },  
  {
    id: "USR003",
    nama: "Budi Santoso",
    email: "K8P7o@example.com",
    role: "User",
    phone: "08123456789",  
  },
  {
    id: "USR004",
    nama: "Siti Aminah",
    email: "kE5dZ@example.com",
    role: "User",
    phone: "08123456789",  
  },
  {
    id: "USR005",
    nama: "Ahmad Yani",
    email: "6yP6o@example.com",
    role: "User",
    phone: "08123456789",  
  },
 
];


interface User {
  id: string;
  nama: string;
  email: string;
  role: string;
  phone: string;
}

export type { User };

export default dataDummyUser;