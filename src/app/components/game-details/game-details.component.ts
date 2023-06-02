import {Component, OnDestroy, OnInit} from '@angular/core';
import {Game} from "../../models";
import {ActivatedRoute, Route} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {Subject, Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit, OnDestroy {
  gaugeType = "semi";
  label = "rating";
  rating: number = 20;

  game: Game | undefined;
  gameId: string | null = '';
  unsub: Subject<void> = new Subject<void>();

  thresholdConfig = {
    '0': {color: '#ef4655'},
    '30': {color: '#f7aa38'},
    '50': {color: '#fffa50'},
    '75': {color: '#5ee432'}
  };

  constructor(private route:ActivatedRoute, private httpService: HttpService) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
        this.gameId = params.get('id');
        if(this.gameId) {
          this.httpService.getGameDetails(this.gameId).pipe(takeUntil(this.unsub)).subscribe(res => {
            if(res) {
              this.game = res;
            }
          });
        }
      })
  }

  ngOnDestroy() {
    this.unsub.next();
  }
}
