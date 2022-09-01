// gişe sınıfı günlük olarak 
// geçen araçları bir dizide tutsun.

const date = new Date();
let hgsReport = [];

export class tollBooth {
    
    payment(vehicles){
        for (let i=0; i<vehicles.length; i++) {
            if(vehicles[i].hgsBalance >= vehicles[i].passFee){
                vehicles[i].hgsBalance = 
                vehicles[i].hgsBalance - vehicles[i].passFee;
                this.hgsReport.push
                    ({"hgsNumber":vehicles[i].hgsNumber,"type":vehicles[i].constructor.name,
                        "date":date,"fee":vehicles[i].passFee});
            } 
            else{
                this.hgsReport.push
                    ({"hgsNumber":vehicles[i].hgsNumber,"type":vehicles[i].constructor.name,
                        "date":date,"fee":0});
            }

            
        }
    }
}