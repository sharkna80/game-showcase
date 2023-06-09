import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

export type sortType = {
  name: string;
  value: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  sortFields: sortType[] = [
    { name: 'Released', value: '-released' },
    { name: 'Added', value: '-added' },
    { name: 'Created', value: '-created' },
    { name: 'Updated', value: '-updated' },
    { name: 'Rating', value: '-rating' },
  ];


  select: string = '';

  games: Game[] = [];
  videoUrl: string = "";
  mousedGameId: string = "";
  pageNum: number = 1;
  pageSize: number = 20;
  unsub: Subject<any> = new Subject();

  @ViewChild('video') videoElement: ElementRef | undefined;
  isLoading = true;

  constructor(private httpService : HttpService, private elementRef: ElementRef, private cdRef: ChangeDetectorRef, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')) {
        this.fetchData(false, params.get('id'))
      }
    })
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(scrolling?: boolean, search?: string | null | undefined): void {
    this.isLoading = true;

    this.httpService.getGameList(this.pageNum, this.pageSize, this.select, search).pipe(takeUntil(this.unsub)).subscribe(res => {
      if(!scrolling) {
        this.games = res.results;
      } else{
        this.games.push(...res.results);
      }
      this.isLoading = false;
    });
  }

  onFilterChange() {
    this.pageNum = 1;
    this.fetchData(false);
  }

  onVideoStart(game: Game) {
    this.mousedGameId = game.id;
    this.httpService.getGameTrailers(game.id).pipe(takeUntil(this.unsub)).subscribe(res => {
      if(res.results[0]?.data?.max) {
        this.videoUrl = res.results[0].data?.max;
        if(this.videoElement) {
          this.videoElement.nativeElement.play();
        }
      }
    })
  }

  onVideoEnd() {
    if(this.videoElement && this.videoUrl.length > 0) {
      this.videoUrl = "";
      this.videoElement.nativeElement.currentTime = 0;
      this.videoElement.nativeElement.pause();
    }
  }

  @HostListener('window:scroll',['$event'])
  onWindowScroll(event: Event) {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.pageNum++;
      this.fetchData(true);
    }
  }

  gotoDetails(gameId: string) {
    console.log("id = " + gameId);
    this.router.navigate(['/details',gameId]);
  }

  ngOnDestroy() {
    this.unsub.next;
  }
}
