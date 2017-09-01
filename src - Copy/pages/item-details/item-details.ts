import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
//   [{ id: 0, name: "Adambakkam" }, { id: 1, name: "Adyar" }, { id: 2, name: "Alandur" }, { id: 3, name: "Alapakkam" }, { id: 4, name: "Alwarpet" },
//   { id: 5, name: "Alwarthirunagar" }, { id: 6, name: "Ambattur" }, { id: 7, name: "Aminjikarai" }, { id: 8, name: "Anna Nagar" }, { id: 9, name: "Annanur" },
//   { id: 10, name: "Arumbakkam" }, { id: 11, name: "Ashok Nagar" }, { id: 12, name: "Avadi" }, { id: 13, name: "Ayanavaram" }, { id: 14, name: "Besant Nagar" },
//   { id: 15, name: "Basin Bridge" }, { id: 16, name: "Chepauk" }, { id: 17, name: "Chetput" }, { id: 18, name: "Chintadripet" }, { id: 19, name: "Chitlapakkam" },
//   { id: 20, name: "Choolai" }, { id: 21, name: "Choolaimedu" }, { id: 22, name: "Chrompet" }, { id: 23, name: "Egmore" }, { id: 24, name: "Ekkaduthangal" },
//   { id: 25, name: "Ennore" }, { id: 26, name: "Foreshore Estate" }, { id: 27, name: "Fort St. George" }, { id: 28, name: "George Town" }, { id: 29, name: "Gopalapuram" },
//   { id: 30, name: "Government Estate" }, { id: 31, name: "Guindy" }, { id: 32, name: "IIT Madras" }, { id: 33, name: "Injambakkam" }, { id: 34, name: "ICF" },
//   { id: 35, name: "Iyyapanthangal" }, { id: 36, name: "Jafferkhanpet" }, { id: 37, name: "Karapakkam" }, { id: 38, name: "Kattivakkam" }, { id: 39, name: "Kazhipattur" },
//   { id: 40, name: "K.K. Nagar" }, { id: 41, name: "Keelkattalai" }, { id: 42, name: "Kelambakkam" }, { id: 43, name: "Kilpauk" }, { id: 44, name: "Kodambakkam" },
//   { id: 45, name: "Kodungaiyur" }, { id: 46, name: "Kolathur" }, { id: 47, name: "Korattur" }, { id: 48, name: "Korukkupet" }, { id: 49, name: "Kottivakkam" },
//   { id: 50, name: "Kotturpuram" }, { id: 51, name: "Kottur" }, { id: 52, name: "Kovalam" }, { id: 53, name: "Kovilambakkam" }, { id: 54, name: "Koyambedu" }, 
//   { id: 55, name: "Kundrathur" }, { id: 56, name: "Madhavaram" }, { id: 57, name: "Madhavaram Milk Colony" }, { id: 58, name: "Madipakkam" }, { id: 59, name: "Madambakkam" }, 
//   { id: 60, name: "Maduravoyal" }, { id: 61, name: "Manali" }, { id: 62, name: "Manali New Town" }, { id: 63, name: "Manapakkam" }, { id: 64, name: "Mandaveli" }, 
//   { id: 65, name: "Mangadu" }, { id: 66, name: "Mannady" }, { id: 67, name: "Mathur" }, { id: 68, name: "Medavakkam" }, { id: 69, name: "Meenambakkam" }, 
//   { id: 70, name: "MGR Nagar" }, { id: 71, name: "Minjur" }, { id: 72, name: "Mogappair" }, { id: 73, name: "MKB Nagar" }, { id: 74, name: "Mount Road" }, 
//   { id: 75, name: "Moolakadai" }, { id: 76, name: "Moulivakkam" }, { id: 77, name: "Mugalivakkam" }, { id: 78, name: "Mudichur" }, { id: 79, name: "Mylapore" }, 
//   { id: 80, name: "Nandanam" }, { id: 81, name: "Nanganallur" }, { id: 82, name: "Navalur" }, { id: 83, name: "Neelankarai" }, { id: 84, name: "Nemilichery" }, 
//   { id: 85, name: "Nesapakkam" }, { id: 86, name: "Nolambur" }, { id: 87, name: "Noombal" }, { id: 88, name: "Nungambakkam" }, { id: 89, name: "Otteri" }, 
//   { id: 90, name: "Padi" }, { id: 91, name: "Pakkam" }, { id: 92, name: "Palavakkam" }, { id: 93, name: "Pallavaram" }, { id: 94, name: "Pallikaranai" }, 
//   { id: 95, name: "Pammal" }, { id: 96, name: "Park Town" }, { id: 97, name: "Parry's Corner" }, { id: 98, name: "Pattabiram" }, { id: 99, name: "Pattaravakkam" }, 
//   { id: 100, name: "Pazhavanthangal" }, { id: 101, name: "Peerkankaranai" }, { id: 102, name: "Perambur" }, { id: 103, name: "Peravallur" }, { id: 104, name: "Perumbakkam" }, 
//   { id: 105, name: "Perungalathur" }, { id: 106, name: "Perungudi" }, { id: 107, name: "Pozhichalur" }, { id: 108, name: "Poonamallee" }, { id: 109, name: "Porur" }, 
//   { id: 110, name: "Pudupet" }, { id: 111, name: "Purasaiwalkam" }, { id: 112, name: "Puthagaram" }, { id: 113, name: "Puzhal" }, { id: 114, name: "Puzhuthivakkam" }, 
//   { id: 115, name: "Raj Bhavan" }, { id: 116, name: "Ramavaram" }, { id: 117, name: "Red Hills" }, { id: 118, name: "Royapettah" }, { id: 119, name: "Royapuram" }, 
//   { id: 120, name: "Saidapet" }, { id: 121, name: "Saligramam" }, { id: 122, name: "Santhome" }, { id: 123, name: "Sembakkam" }, { id: 124, name: "Selaiyur" }, 
//   { id: 125, name: "Shenoy Nagar" }, { id: 126, name: "Sholavaram" }, { id: 127, name: "Sholinganallur" }, { id: 128, name: "Sithalapakkam" }, { id: 129, name: "Sowcarpet" }, 
//   { id: 130, name: "St.Thomas Mount" }, { id: 131, name: "Tambaram" }, { id: 132, name: "Teynampet" }, { id: 133, name: "Tharamani" }, { id: 134, name: "T. Nagar" }, 
//   { id: 135, name: "Thirumangalam" }, { id: 136, name: "Thirumullaivoyal" }, { id: 137, name: "Thiruneermalai" }, { id: 138, name: "Thiruninravur" }, 
//   { id: 139, name: "Thiruvanmiyur" }, { id: 140, name: "Tiruverkadu" }, { id: 141, name: "Thiruvotriyur" }, { id: 142, name: "Tirusulam" }, { id: 143, name: "Tiruvallikeni" }, 
//   { id: 144, name: "Tiruvallur" }, { id: 145, name: "Tondiarpet" }, { id: 146, name: "United India Colony" }, { id: 147, name: "Vandalur" }, { id: 148, name: "Vadapalani" }, 
//   { id: 149, name: "Valasaravakkam" }, { id: 150, name: "Vallalar Nagar" }, { id: 151, name: "Vanagaram" }, { id: 152, name: "Velachery" }, { id: 153, name: "Villivakkam" }, 
//   { id: 154, name: "Virugambakkam" }, { id: 155, name: "Vyasarpadi" }, { id: 156, name: "Washermanpet" }, { id: 157, name: "West Mambalam" }]
// }],
}
