import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    //we get a value every second and we console log the value
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });


    //create takes in a function
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count); //we can call next() here to emit a new value
        if(count === 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('count is > 3'));
        }
        count++;
      },1000);
    });

    //pipe method is built into rxjs
    // customIntervalObservable.pipe(map(
    //   (data: number) => {
    //     return 'Round: ' + (data + 1);
    //   }
    // ));

    this.firstObsSubscription = customIntervalObservable.pipe(filter((data)=>{
      return data > 0;
    }),
    map(
      (data: number) => {
        return 'Round: ' + (data + 1);
      }
    )).subscribe(
      data => {
        console.log(data);
    },
      error => {
        console.log(error);
        alert(error.message);
    },
     () => {
       console.log('Completed!');
     });
  }

  ngOnDestroy(){
    //when we leave the page, we terminate the subscription. 
    //this could prevent memory leaks
    this.firstObsSubscription.unsubscribe();
  }

}
