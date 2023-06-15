import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Game, Screenshot, Trailer} from "../../models";

export type GameTabData = {
  game: Game | undefined;
  screenshots: Screenshot[];
  trailers: Trailer[];
}

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit, AfterViewInit {

  gameData: GameTabData | undefined;

  @Input() set gameTabData(data: GameTabData | undefined) {
    this.gameData = data;
    this.setData(data);
  }

  upVote: number | undefined = 0;
  downVote: number | undefined = 0

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {

  }

  setData(gameData: GameTabData | undefined) {
    if(gameData) {
      this.upVote = gameData.game?.ratings.filter(r => r.title === 'exceptional')[0]?.count;
      this.downVote = gameData.game?.ratings.filter(r => r.title === 'skip')[0]?.count;
    }
  }

}
