const MASKAPAI = [
    {
      maskapai_id: "M01",
      maskapai_nama: "Garuda", 
      maskapai_logo : require('../images/garuda.png'),  
    },
    {
      maskapai_id: "M02",
      maskapai_nama: "Citilink",
      maskapai_logo: require('../images/citilink.png'),
    },
    {
      maskapai_id: "M03",
      maskapai_nama: "Lion air",
      maskapai_logo: require('../images/lion.png'),
    },
];

const BANDARA = [
     {
       bandara_id: 'B01',
       bandara_nama: 'Raden Intan', 
     },
     {
       bandara_id: 'B02',
       bandara_nama: 'Soekarno Hatta',
     },
     {
       bandara_id: 'B03',
       bandara_nama: 'Depati Ammir',
     },
];

const JADWAL = [
    {
      jadwal_id: "J01",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M01",
      tanggal: "2020-01-07",
    },
    {
      jadwal_id: "J02",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M02",
      tanggal: "2020-01-07",
    },
    {
     jadwal_id: "J03",
     bandara_id_keberangkatan: "B01",
     bandara_id_kedatangan: "B02",
     maskapai_id: "M03",
     tanggal: "2020-01-01",
    },
    {
     jadwal_id: "J04",
     bandara_id_keberangkatan: "B03",
     bandara_id_kedatangan: "B01",
     maskapai_id: "M01",
     tanggal: "2020-01-01",
    },
    {
      jadwal_id: "J05",
      bandara_id_keberangkatan: "B02",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M02",
      tanggal: "2020-01-02",
    },
    {
      jadwal_id: "J06",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M02",
      tanggal: "2020-01-02",
    },
    {
      jadwal_id: "J07",
      bandara_id_keberangkatan: "B02",
      bandara_id_kedatangan: "B01",
      maskapai_id: "M03",
      tanggal: "2020-01-03",
    },
    {
      jadwal_id: "J08",
      bandara_id_keberangkatan: "B02",
      bandara_id_kedatangan: "B01",
      maskapai_id: "M01",
      tanggal: "2020-01-03",
    },
    {
      jadwal_id: "J09",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M01",
      tanggal: "2020-01-04",
    },
    {
      jadwal_id: "J10",
      bandara_id_keberangkatan: "B02",
      bandara_id_kedatangan: "B03",
      maskapai_id: "M01",
      tanggal: "2020-01-04",
    },
    {
      jadwal_id: "J11",
      bandara_id_keberangkatan: "B01",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M03",
      tanggal: "2020-01-05",
    },
    {
      jadwal_id: "J12",
      bandara_id_keberangkatan: "B03",
      bandara_id_kedatangan: "B02",
      maskapai_id: "M01",
      tanggal: "2020-01-06",
    },
];

export {MASKAPAI, BANDARA, JADWAL};