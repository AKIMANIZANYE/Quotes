import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

 export class QuoteComponent implements OnInit {
  Quote = [
      new quote('Quote about Stress','Anne','Do not stress yourself', 'Claudine',new Date(2019,1,12),0,0),
      new Quote('Motivation Quote', 'Alexia','Never giveup', 'Ciara',new Date(1993,8,4),0,0 ),
      new Quote ( 'Courageous Quotes', 'Anneheyman','Try to fail but never fail to try', 'Claire', new Date(1998,9,4),0,0 ),
      new Quote( 'Women in Tech', 'cosntantine','“Life is a series of building, testing, changing and iterating.”', 'Maliza',new Date(1918,8,24) ),
      new Quote('Underreted Women', 'Alfred','“Trust in yourself, believe that your voice matters, and know that your words are good enough.”','Clemantine' ,new Date(1956,6,14),0,0 ),
      new Quotes( 'Quote about believe','lilianne','“Love what you do and do what you love. " ', 'Clarisse', new Date(1997,9,14) ,0,0),

  ]
  addNewGoal(goal){
    let goalLength = this.Quote.length;
    goal.id=goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.Quote.push(goal)

}
  deleteGoal(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.Quote[index].quote
        }`)
        
        if(toDelete){
            this.Quote.splice(index,1)
        }
    }
}

  completeGoal(isComplete,index){
    if (isComplete){
        this.Quote.splice(index,1);
        }
        }
        
        toogleDetails(index){
          this.Quote[index].showDescription = !this.Quote[index].showDescription;
      }

        ngOnInit(){}
      }
     