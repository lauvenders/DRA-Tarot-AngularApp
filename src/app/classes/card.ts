export class Meaning {
    name: string;
    text: string;

    constructor(name: string, text: string){
        this.name = name;
        this.text = text;
    }
}

export class Card {
    name: string;
    img: string;
    meanings: Meaning[];
    class: string;

    constructor(name: string, image: string, upLoveMeaning: string, upCareerMeaning: string, upFinancialMeaning: string,
        downLoveMeaning: string, downCareerMeaning: string, downFinancesMeaning: string){
        this.name = name;
        this.img = image;
        this.meanings = [];
        this.meanings.push(new Meaning("upright love meaning", upLoveMeaning));
        this.meanings.push(new Meaning("upright career meaning", upCareerMeaning));
        this.meanings.push(new Meaning("upright finance meaning", upFinancialMeaning));
        this.meanings.push(new Meaning("reversed love meaning", downLoveMeaning));
        this.meanings.push(new Meaning("reversed career meaning", downCareerMeaning));
        this.meanings.push(new Meaning("reversed finance meaning", downFinancesMeaning));
        this.class = "upright";
    }

    setReversed(){
        if (this.class == "upright"){
            this.class = "reversed"
        } else {
            this.class = "upright"
        }
        
    }
}
