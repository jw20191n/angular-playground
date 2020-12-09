import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

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
        count++;
      },1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(){
    //when we leave the page, we terminate the subscription. 
    //this could prevent memory leaks
    this.firstObsSubscription.unsubscribe();
  }

}
