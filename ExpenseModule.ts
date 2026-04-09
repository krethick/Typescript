export type TransactionInfo = [string,string];

export interface IExpense
{
    id:string;
    amount:number;
    category:string;
    transaction:TransactionInfo;
}

// Base class
export class BasicExpense implements IExpense
{
    id:string;
    amount:number;
    category:string;
    transaction:TransactionInfo;

    constructor(
       id:string,
       amount:number,
       category:string,
       transaction:TransactionInfo 
    )
    {
        this.id = id;
        this.amount = amount;
        this.category = category;
        this.transaction = transaction;
    }
   
    getSummary(): string{
        const[date,description] = this.transaction;
        return(
            `ID: ${this.id} |
            Category: ${this.category}| '+
            'Amount: ${this.amount} |
            Date:${date}|
            Description:${description} `
        );
    }
}

export class BusinessExpense extends BasicExpense
{
   gstSummary: string;
   
   constructor
   (
       id:string,
       amount:number,
       category:string,
       transaction:TransactionInfo,
       gstSummary:string
   )
   {
     super(id,amount,category,transaction);
     this.gstSummary = gstSummary;
   }

   getSummary(): string {
       return super.getSummary() + `| GST: ${this.getSummary}`
   }
}








// // Tuple Type
// export type TransactionInfo = [string, string];

// // Interface
// export interface IExpense {
//   id: string;
//   amount: number;
//   category: string;
//   transaction: TransactionInfo;
// }

// // Base Class
// export class BasicExpense implements IExpense {
//   id: string;
//   amount: number;
//   category: string;
//   transaction: TransactionInfo;

//   constructor(
//     id: string,
//     amount: number,
//     category: string,
//     transaction: TransactionInfo
//   ) {
//     this.id = id;
//     this.amount = amount;
//     this.category = category;
//     this.transaction = transaction;
//   }

//   getSummary(): string {
//     const [date, description] = this.transaction;
//     return (
//       `ID: ${this.id} | Category: ${this.category} | ` +
//       `Amount: Rs.${this.amount} | Date: ${date} | Description: ${description}`
//     );
//   }
// }

// // Subclass
// export class BusinessExpense extends BasicExpense {
//   gstSummary: string;

//   constructor(
//     id: string,
//     amount: number,
//     category: string,
//     transaction: TransactionInfo,
//     gstSummary: string
//   ) {
//     super(id, amount, category, transaction);
//     this.gstSummary = gstSummary;
//   }

//   getSummary(): string {
//     return super.getSummary() + ` | GST: ${this.gstSummary}`;
//   }
// }