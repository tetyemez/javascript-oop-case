export class hgsreport{
    constructor(){
        this.dailyBalance = 0;
        this.tollBooth = [];
    }

    getBooth(booth){
        this.tollBooth.push(booth);
    }

    getDailyBalance(){
        for(let tb of this.tollBooth){
            this.dailyBalance += tb.passFee;
        }
        
    }

}