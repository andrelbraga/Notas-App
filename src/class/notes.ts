export class Notes {
   
    private date: Date;

    constructor (
      public id: number,
      public title: string,
      public content: string,
      public like: number,
      public comment: string,
    ) { 
        console.log(Notes);
        console.log(this);
        this.date = new Date;
    }

  }