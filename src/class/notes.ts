export class Notes {
   
    public date: Date;

    constructor (
      public title: string,
      public content: string,
    ) { 
        this.date = new Date;
    }

  }