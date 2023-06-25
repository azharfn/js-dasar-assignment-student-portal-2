function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}
    //CARA 1 
    function studentStatus(name, studentId) {
    
        let kodeProdi = "";
        let tahun = "";
        
        if (studentId.substring(0, 2) === "FE") {
            kodeProdi = studentId.substring(6, 8);
            tahun = studentId.substring(2,6);
        } 
        else if (studentId.substring(0, 5) === "FISIP") {
            kodeProdi = studentId.substring(9, 11);
            tahun = studentId.substring(5,9)
        } 
        else if (studentId.substring(0, 4) === "FTIS") {
            kodeProdi = studentId.slice(8, 10);
            tahun = studentId.substring(4,8);
        } 
        else if (studentId.substring(0, 2) === "FT") {
            kodeProdi = studentId.substring(6, 8);
            tahun = studentId.substring(2,6);
        }
        
    
        let fakultas = "";
        let prodi = "";
    
        if(studentId.substring(0,2) === "FE"){
            fakultas = "Fakultas Ekonomi";
            if(kodeProdi === "21"){
                prodi = "Ekonomi";
            }
            else if(kodeProdi === "22"){
                prodi = "Manajemen";
            }else
            if(kodeProdi === "23"){
                prodi = "Akuntansi";
            }
        }
        else if(studentId.substring(0,5) === "FISIP"){
            fakultas = "Fakultas Ilmu Sosial dan Politik";
            if(kodeProdi === "31"){
                prodi = "Administrasi Publik";
            }
            else if(kodeProdi === "32"){
                prodi = "Administrasi Bisnis";
            }else
            if(kodeProdi === "33"){
                prodi = "Hubungan Internasional";
            }
        }
        else if(studentId.substring(0,4) === "FTIS"){
            fakultas = "Fakultas Teknologi Informasi dan Sains";
            if(kodeProdi === "51"){
                prodi = "Matematika";
            }
            else if(kodeProdi === "52"){
                prodi = "Fisika";
            }
            else if(kodeProdi === "53"){
                prodi = "Informatika";
            }
        }
        else if(studentId.substring(0,2) === "FT"){
            fakultas = "Fakultas Teknik";
            if(kodeProdi === "41"){
                prodi = "Teknik Sipil";
            }
            else if(kodeProdi === "42"){
                prodi = "Arsitektur";
            } 
        }
        else {
            return "";
        }
    
    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${prodi} pada ${fakultas} sejak tahun ${tahun}.`;
}

//CARA 2
// // final code FIX
// function studentStatus(name, studentId) {
//     //deklarasi variable 
//     let kodeProdi = "";
//     let tahun = "";
//     let fakultas = "";
//     let prodi = "";

//     //buat kondisi dimana indeks yang diambil setiap fakultas akansesuai yang diasumsikan 
//     //asumsikan dengan membedakan angka awalnya sehinga FE = 21-23, FISIP = 31-33, FTIS = 51-53, DAN FT = 41-42
//     //tambahkan kodeProdi dengan indeksnya untuk mengakses kondisi kodeProdi
//     //tambahkan tahun dan beri indeks parameter yang diambil
//     if (studentId.substring(0, 2) === "FE") {
//         kodeProdi = studentId.substring(6, 8);
//         tahun = studentId.substring(2, 6);
//         fakultas = "Fakultas Ekonomi";
//         if (kodeProdi === "21") {
//             prodi = "Ekonomi";
//         } else if (kodeProdi === "22") {
//             prodi = "Manajemen";
//         } else if (kodeProdi === "23") {
//             prodi = "Akuntansi";
//         }
//     } else if (studentId.substring(0, 5) === "FISIP") {
//         kodeProdi = studentId.substring(9, 11);
//         tahun = studentId.substring(5, 9);
//         fakultas = "Fakultas Ilmu Sosial dan Politik";
//         if (kodeProdi === "31") {
//             prodi = "Administrasi Publik";
//         } else if (kodeProdi === "32") {
//             prodi = "Administrasi Bisnis";
//         } else if (kodeProdi === "33") {
//             prodi = "Hubungan Internasional";
//         }
//     } else if (studentId.substring(0, 4) === "FTIS") {
//         kodeProdi = studentId.slice(8, 10);
//         tahun = studentId.substring(4, 8);
//         fakultas = "Fakultas Teknologi Informasi dan Sains";
//         if (kodeProdi === "51") {
//             prodi = "Matematika";
//         } else if (kodeProdi === "52") {
//             prodi = "Fisika";
//         } else if (kodeProdi === "53") {
//             prodi = "Informatika";
//         }
//     } else if (studentId.substring(0, 2) === "FT") {
//         kodeProdi = studentId.substring(6, 8);
//         tahun = studentId.substring(2, 6);
//         fakultas = "Fakultas Teknik";
//         if (kodeProdi === "41") {
//             prodi = "Teknik Sipil";
//         } else if (kodeProdi === "42") {
//             prodi = "Arsitektur";
//         }
//     } else {
//         return "";
//     }

//     return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${prodi} pada ${fakultas} sejak tahun ${tahun}.`;
// }


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;
