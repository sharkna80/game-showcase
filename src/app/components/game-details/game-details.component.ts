import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiResponse, Game, Screenshot, Trailer} from "../../models";
import {ActivatedRoute, Route} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {forkJoin, map, Observable, Subject, Subscription, takeUntil} from "rxjs";
import {GameTabData} from "../game-tabs/game-tabs.component";

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
  tabsData: GameTabData | undefined;

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
          this.fetchDetails();
        }
      })
  }

  fetchDetails() {
    if(this.gameId) {

      let assetSources: Observable<any>[] = [];

      this.httpService.getGameDetails(this.gameId).subscribe(res => {
        this.game = res;

        if(this.game.movies_count > 0) {
          assetSources.push(this.httpService.getGameTrailers(this.game.id).pipe(map(val => ({type: 'trailer', val: val}))));
        }

        if(this.game.screenshots_count > 0) {
          assetSources.push(this.httpService.getGameScreenshots(this.game.id).pipe(map(val => ({type: 'screenshot', val: val}))));
        }

        if(assetSources.length > 0) {
          forkJoin(assetSources).subscribe(results => {

            let screenshots: Screenshot[] = [];
            let trailers: Trailer[] = [];

            for(let result of results) {
              if(result.type === 'trailer') {
                trailers = result.val.results;
              }

              if(result.type === 'screenshot') {
                screenshots = result.val.results;
              }
            }

            this.tabsData = {game: this.game, screenshots: screenshots, trailers: trailers};
          });
        }
      })

      // let sources = [this.httpService.getGameDetails(this.gameId),,]

      // forkJoin(sources).pipe(map(([res1,res2,res3]) => {
      //   return {game: res1, trailers: res2, screenshots: res3}
      // })).subscribe(res => {
      //   this.game = res.game as Game;
      //   this.game.trailers = (res.trailers as ApiResponse<Trailer>).results;
      //   this.game.screenshots = (res.screenshots as ApiResponse<Screenshot>).results;
      // });
    }
  }

  ngOnDestroy() {
    this.unsub.next();
  }
}
