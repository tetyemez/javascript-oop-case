import Bus from "vehicles/Bus.js"
import Car from "vehicles/Car.js"
import Minibus from "vehicles/Minibus.js"
import Vehicle from 'vehicles/Vehicle.js'

import TollBooth from "tollBooth.js"
import Report from "hgsReport.js"

const car = new Car(140177,56,"Sıla Demir",0.1);
const car2 = new Car(988971,75,"Sinem Yavuz",0.1);
const car3 = new Car(545794,150,"Hülya Çelik",0.1);
const car4 = new Car(497480,147,"Emel Aslan",0.1);
const bus = new Bus(196324,240,"Hüseyin Balkan",0.1);
const minibus = new Minibus(804873,130,"Yunus Emre Sari",0.1);

const vehicles = [car,car2,car3,bus,minibus];

const booth = new TollBooth();

booth.payment(vehicles);

Report.getBooth(booth);

let dailyBalance = Report.getDailyBalance();