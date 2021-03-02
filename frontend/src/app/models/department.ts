export class Department {
    
    constructor(_id='',item='',guests=0,beds=0,baths=0,amenities=[],type='',price=0,
    city='',occupied=[]){
        this._id=_id;
        this.item=item;
        this.guests=guests;
        this.beds=beds;
        this.baths=baths;
        this.amenities=amenities;
        this.type=type;
        this.price=price;
        this.city=city;
        this.occupied=occupied;
    }

    _id: string;
    item: string;
    guests: number;
    beds: number;
    baths: number;
    amenities: string[];
    type: string;
    price: number;
    city: string;
    occupied: {arrival: Date, departure: Date}[]
    
}
