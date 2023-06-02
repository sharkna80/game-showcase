import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {environment as env} from 'src/environments/environment';
import { ApiResponse, Game, Trailer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

//   data = {
//     "count": 849402,
//     "next": "https://api.rawg.io/api/games?key=dea44c1a15db4a2d8b56be69c33230c4&page=2",
//     "previous": null,
//     "results": [
//         {
//             "id": 3498,
//             "slug": "grand-theft-auto-v",
//             "name": "Grand Theft Auto V",
//             "released": "2013-09-17",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
//             "rating": 4.47,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 3781,
//                     "percent": 58.9
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 2117,
//                     "percent": 32.98
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 407,
//                     "percent": 6.34
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 114,
//                     "percent": 1.78
//                 }
//             ],
//             "ratings_count": 6330,
//             "reviews_text_count": 50,
//             "added": 19372,
//             "added_by_status": {
//                 "yet": 496,
//                 "owned": 11200,
//                 "beaten": 5406,
//                 "toplay": 565,
//                 "dropped": 1009,
//                 "playing": 696
//             },
//             "metacritic": 92,
//             "playtime": 73,
//             "suggestions_count": 421,
//             "updated": "2023-05-17T14:15:34",
//             "user_game": null,
//             "reviews_count": 6419,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 187,
//                         "name": "PlayStation 5",
//                         "slug": "playstation5",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": 2020,
//                         "games_count": 853,
//                         "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                     },
//                     "released_at": "2013-09-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 186,
//                         "name": "Xbox Series S/X",
//                         "slug": "xbox-series-x",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": 2020,
//                         "games_count": 748,
//                         "image_background": "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg"
//                     },
//                     "released_at": "2013-09-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2013-09-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2013-09-17",
//                     "requirements_en": {
//                         "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
//                         "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2013-09-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2013-09-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2013-09-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 290375,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 438095,
//                     "store": {
//                         "id": 11,
//                         "name": "Epic Games",
//                         "slug": "epic-games",
//                         "domain": "epicgames.com",
//                         "games_count": 1232,
//                         "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
//                     }
//                 },
//                 {
//                     "id": 290376,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 290377,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 },
//                 {
//                     "id": 290378,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 36,
//                     "name": "Open World",
//                     "slug": "open-world",
//                     "language": "eng",
//                     "games_count": 6199,
//                     "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
//                 },
//                 {
//                     "id": 411,
//                     "name": "cooperative",
//                     "slug": "cooperative",
//                     "language": "eng",
//                     "games_count": 4026,
//                     "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 149,
//                     "name": "Third Person",
//                     "slug": "third-person",
//                     "language": "eng",
//                     "games_count": 9292,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Funny",
//                     "slug": "funny",
//                     "language": "eng",
//                     "games_count": 22398,
//                     "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
//                 },
//                 {
//                     "id": 37,
//                     "name": "Sandbox",
//                     "slug": "sandbox",
//                     "language": "eng",
//                     "games_count": 5845,
//                     "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                 },
//                 {
//                     "id": 123,
//                     "name": "Comedy",
//                     "slug": "comedy",
//                     "language": "eng",
//                     "games_count": 10802,
//                     "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
//                 },
//                 {
//                     "id": 150,
//                     "name": "Third-Person Shooter",
//                     "slug": "third-person-shooter",
//                     "language": "eng",
//                     "games_count": 2852,
//                     "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
//                 },
//                 {
//                     "id": 62,
//                     "name": "Moddable",
//                     "slug": "moddable",
//                     "language": "eng",
//                     "games_count": 764,
//                     "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
//                 },
//                 {
//                     "id": 144,
//                     "name": "Crime",
//                     "slug": "crime",
//                     "language": "eng",
//                     "games_count": 2532,
//                     "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
//                 },
//                 {
//                     "id": 62349,
//                     "name": "vr mod",
//                     "slug": "vr-mod",
//                     "language": "eng",
//                     "games_count": 17,
//                     "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
//                 },
//                 {
//                     "id": 1827221,
//                     "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
//                 },
//                 {
//                     "id": 1827222,
//                     "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
//                 },
//                 {
//                     "id": 1827223,
//                     "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
//                 },
//                 {
//                     "id": 1827225,
//                     "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
//                 },
//                 {
//                     "id": 1827226,
//                     "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
//                 },
//                 {
//                     "id": 1827227,
//                     "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 3328,
//             "slug": "the-witcher-3-wild-hunt",
//             "name": "The Witcher 3: Wild Hunt",
//             "released": "2015-05-18",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
//             "rating": 4.66,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 4738,
//                     "percent": 77.43
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 977,
//                     "percent": 15.97
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 250,
//                     "percent": 4.09
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 154,
//                     "percent": 2.52
//                 }
//             ],
//             "ratings_count": 6026,
//             "reviews_text_count": 64,
//             "added": 18553,
//             "added_by_status": {
//                 "yet": 1057,
//                 "owned": 10709,
//                 "beaten": 4384,
//                 "toplay": 728,
//                 "dropped": 839,
//                 "playing": 836
//             },
//             "metacritic": 92,
//             "playtime": 46,
//             "suggestions_count": 663,
//             "updated": "2023-05-17T14:22:02",
//             "user_game": null,
//             "reviews_count": 6119,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 186,
//                         "name": "Xbox Series S/X",
//                         "slug": "xbox-series-x",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": 2020,
//                         "games_count": 748,
//                         "image_background": "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg"
//                     },
//                     "released_at": "2015-05-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2015-05-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo Switch",
//                         "slug": "nintendo-switch",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5226,
//                         "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
//                     },
//                     "released_at": "2015-05-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2015-05-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2015-05-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 187,
//                         "name": "PlayStation 5",
//                         "slug": "playstation5",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": 2020,
//                         "games_count": 853,
//                         "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                     },
//                     "released_at": "2015-05-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo",
//                         "slug": "nintendo"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 },
//                 {
//                     "id": 5,
//                     "name": "RPG",
//                     "slug": "role-playing-games-rpg",
//                     "games_count": 52322,
//                     "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 354780,
//                     "store": {
//                         "id": 5,
//                         "name": "GOG",
//                         "slug": "gog",
//                         "domain": "gog.com",
//                         "games_count": 5136,
//                         "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                     }
//                 },
//                 {
//                     "id": 3565,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 305376,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 312313,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 676022,
//                     "store": {
//                         "id": 6,
//                         "name": "Nintendo Store",
//                         "slug": "nintendo",
//                         "domain": "nintendo.com",
//                         "games_count": 8868,
//                         "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 36,
//                     "name": "Open World",
//                     "slug": "open-world",
//                     "language": "eng",
//                     "games_count": 6199,
//                     "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
//                 },
//                 {
//                     "id": 149,
//                     "name": "Third Person",
//                     "slug": "third-person",
//                     "language": "eng",
//                     "games_count": 9292,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 64,
//                     "name": "Fantasy",
//                     "slug": "fantasy",
//                     "language": "eng",
//                     "games_count": 24276,
//                     "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
//                 },
//                 {
//                     "id": 37,
//                     "name": "Sandbox",
//                     "slug": "sandbox",
//                     "language": "eng",
//                     "games_count": 5845,
//                     "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                 },
//                 {
//                     "id": 97,
//                     "name": "Action RPG",
//                     "slug": "action-rpg",
//                     "language": "eng",
//                     "games_count": 5650,
//                     "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//                 },
//                 {
//                     "id": 41,
//                     "name": "Dark",
//                     "slug": "dark",
//                     "language": "eng",
//                     "games_count": 14006,
//                     "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
//                 },
//                 {
//                     "id": 44,
//                     "name": "Nudity",
//                     "slug": "nudity",
//                     "language": "eng",
//                     "games_count": 4899,
//                     "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
//                 },
//                 {
//                     "id": 336,
//                     "name": "controller support",
//                     "slug": "controller-support",
//                     "language": "eng",
//                     "games_count": 293,
//                     "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//                 },
//                 {
//                     "id": 145,
//                     "name": "Choices Matter",
//                     "slug": "choices-matter",
//                     "language": "eng",
//                     "games_count": 3470,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 192,
//                     "name": "Mature",
//                     "slug": "mature",
//                     "language": "eng",
//                     "games_count": 2131,
//                     "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
//                 },
//                 {
//                     "id": 40,
//                     "name": "Dark Fantasy",
//                     "slug": "dark-fantasy",
//                     "language": "eng",
//                     "games_count": 3191,
//                     "image_background": "https://media.rawg.io/media/games/920/92039cd19460532b76f6244b2bb3e4ac.jpg"
//                 },
//                 {
//                     "id": 66,
//                     "name": "Medieval",
//                     "slug": "medieval",
//                     "language": "eng",
//                     "games_count": 5296,
//                     "image_background": "https://media.rawg.io/media/games/ccf/ccf26f6e3d553a04f0033a8107a521b8.jpg"
//                 },
//                 {
//                     "id": 82,
//                     "name": "Magic",
//                     "slug": "magic",
//                     "language": "eng",
//                     "games_count": 8027,
//                     "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
//                 },
//                 {
//                     "id": 218,
//                     "name": "Multiple Endings",
//                     "slug": "multiple-endings",
//                     "language": "eng",
//                     "games_count": 6988,
//                     "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
//                 },
//                 {
//                     "id": 30336,
//                     "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
//                 },
//                 {
//                     "id": 30337,
//                     "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
//                 },
//                 {
//                     "id": 30338,
//                     "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
//                 },
//                 {
//                     "id": 30339,
//                     "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
//                 },
//                 {
//                     "id": 30340,
//                     "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
//                 },
//                 {
//                     "id": 30342,
//                     "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 4200,
//             "slug": "portal-2",
//             "name": "Portal 2",
//             "released": "2011-04-18",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
//             "rating": 4.62,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 3738,
//                     "percent": 70.41
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1319,
//                     "percent": 24.84
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 143,
//                     "percent": 2.69
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 109,
//                     "percent": 2.05
//                 }
//             ],
//             "ratings_count": 5262,
//             "reviews_text_count": 31,
//             "added": 17483,
//             "added_by_status": {
//                 "yet": 581,
//                 "owned": 10799,
//                 "beaten": 5083,
//                 "toplay": 340,
//                 "dropped": 538,
//                 "playing": 142
//             },
//             "metacritic": 95,
//             "playtime": 11,
//             "suggestions_count": 541,
//             "updated": "2023-05-17T14:22:04",
//             "user_game": null,
//             "reviews_count": 5309,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2011-04-19",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2011-04-19",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": null,
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2011-04-19",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": null,
//                     "requirements_en": null,
//                     "requirements_ru": {
//                         "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
//                         "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2011-04-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Puzzle",
//                     "slug": "puzzle",
//                     "games_count": 97086,
//                     "image_background": "https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 465889,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 13134,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 4526,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 33916,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 40849,
//                     "name": "Steam Cloud",
//                     "slug": "steam-cloud",
//                     "language": "eng",
//                     "games_count": 13992,
//                     "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 411,
//                     "name": "cooperative",
//                     "slug": "cooperative",
//                     "language": "eng",
//                     "games_count": 4026,
//                     "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 9,
//                     "name": "Online Co-Op",
//                     "slug": "online-co-op",
//                     "language": "eng",
//                     "games_count": 4318,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Funny",
//                     "slug": "funny",
//                     "language": "eng",
//                     "games_count": 22398,
//                     "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
//                 },
//                 {
//                     "id": 189,
//                     "name": "Female Protagonist",
//                     "slug": "female-protagonist",
//                     "language": "eng",
//                     "games_count": 10439,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 123,
//                     "name": "Comedy",
//                     "slug": "comedy",
//                     "language": "eng",
//                     "games_count": 10802,
//                     "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
//                 },
//                 {
//                     "id": 75,
//                     "name": "Local Co-Op",
//                     "slug": "local-co-op",
//                     "language": "eng",
//                     "games_count": 4955,
//                     "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
//                 },
//                 {
//                     "id": 11669,
//                     "name": "stats",
//                     "slug": "stats",
//                     "language": "eng",
//                     "games_count": 4455,
//                     "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
//                 },
//                 {
//                     "id": 40852,
//                     "name": "Steam Workshop",
//                     "slug": "steam-workshop",
//                     "language": "eng",
//                     "games_count": 1298,
//                     "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
//                 },
//                 {
//                     "id": 25,
//                     "name": "Space",
//                     "slug": "space",
//                     "language": "eng",
//                     "games_count": 41716,
//                     "image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
//                 },
//                 {
//                     "id": 40838,
//                     "name": "Includes level editor",
//                     "slug": "includes-level-editor",
//                     "language": "eng",
//                     "games_count": 1626,
//                     "image_background": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg"
//                 },
//                 {
//                     "id": 40833,
//                     "name": "Captions available",
//                     "slug": "captions-available",
//                     "language": "eng",
//                     "games_count": 1227,
//                     "image_background": "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg"
//                 },
//                 {
//                     "id": 40834,
//                     "name": "Commentary available",
//                     "slug": "commentary-available",
//                     "language": "eng",
//                     "games_count": 253,
//                     "image_background": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg"
//                 },
//                 {
//                     "id": 87,
//                     "name": "Science",
//                     "slug": "science",
//                     "language": "eng",
//                     "games_count": 1499,
//                     "image_background": "https://media.rawg.io/media/screenshots/e25/e25a1506d7d628e607dde00df0c69db5.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 2,
//                 "name": "Everyone 10+",
//                 "slug": "everyone-10-plus"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 99018,
//                     "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
//                 },
//                 {
//                     "id": 99019,
//                     "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
//                 },
//                 {
//                     "id": 99020,
//                     "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
//                 },
//                 {
//                     "id": 99021,
//                     "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
//                 },
//                 {
//                     "id": 99022,
//                     "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
//                 },
//                 {
//                     "id": 99023,
//                     "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 5286,
//             "slug": "tomb-raider",
//             "name": "Tomb Raider (2013)",
//             "released": "2013-03-05",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
//             "rating": 4.05,
//             "rating_top": 4,
//             "ratings": [
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 2219,
//                     "percent": 60.2
//                 },
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 944,
//                     "percent": 25.61
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 410,
//                     "percent": 11.12
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 113,
//                     "percent": 3.07
//                 }
//             ],
//             "ratings_count": 3660,
//             "reviews_text_count": 12,
//             "added": 15279,
//             "added_by_status": {
//                 "yet": 633,
//                 "owned": 9897,
//                 "beaten": 3911,
//                 "toplay": 242,
//                 "dropped": 494,
//                 "playing": 102
//             },
//             "metacritic": 86,
//             "playtime": 10,
//             "suggestions_count": 636,
//             "updated": "2023-05-18T15:38:25",
//             "user_game": null,
//             "reviews_count": 3686,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2013-03-05",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2013-03-05",
//                     "requirements_en": {
//                         "minimum": "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2013-03-05",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "i486-100, 8 Мб",
//                         "recommended": "Pentium 166, 16 Мб"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2013-03-05",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2013-03-05",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2013-03-05",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 33824,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 },
//                 {
//                     "id": 13151,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 5640,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 218233,
//                     "store": {
//                         "id": 8,
//                         "name": "Google Play",
//                         "slug": "google-play",
//                         "domain": "play.google.com",
//                         "games_count": 17034,
//                         "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//                     }
//                 },
//                 {
//                     "id": 79036,
//                     "store": {
//                         "id": 4,
//                         "name": "App Store",
//                         "slug": "apple-appstore",
//                         "domain": "apps.apple.com",
//                         "games_count": 75015,
//                         "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//                     }
//                 },
//                 {
//                     "id": 713685,
//                     "store": {
//                         "id": 11,
//                         "name": "Epic Games",
//                         "slug": "epic-games",
//                         "domain": "epicgames.com",
//                         "games_count": 1232,
//                         "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 149,
//                     "name": "Third Person",
//                     "slug": "third-person",
//                     "language": "eng",
//                     "games_count": 9292,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 193,
//                     "name": "Classic",
//                     "slug": "classic",
//                     "language": "eng",
//                     "games_count": 1728,
//                     "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Exploration",
//                     "slug": "exploration",
//                     "language": "eng",
//                     "games_count": 19164,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 189,
//                     "name": "Female Protagonist",
//                     "slug": "female-protagonist",
//                     "language": "eng",
//                     "games_count": 10439,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 15,
//                     "name": "Stealth",
//                     "slug": "stealth",
//                     "language": "eng",
//                     "games_count": 5685,
//                     "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
//                 },
//                 {
//                     "id": 150,
//                     "name": "Third-Person Shooter",
//                     "slug": "third-person-shooter",
//                     "language": "eng",
//                     "games_count": 2852,
//                     "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
//                 },
//                 {
//                     "id": 69,
//                     "name": "Action-Adventure",
//                     "slug": "action-adventure",
//                     "language": "eng",
//                     "games_count": 13327,
//                     "image_background": "https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg"
//                 },
//                 {
//                     "id": 74,
//                     "name": "Retro",
//                     "slug": "retro",
//                     "language": "eng",
//                     "games_count": 39505,
//                     "image_background": "https://media.rawg.io/media/screenshots/f7e/f7e70957c14ead1fa187a616dfa83e09.jpg"
//                 },
//                 {
//                     "id": 110,
//                     "name": "Cinematic",
//                     "slug": "cinematic",
//                     "language": "eng",
//                     "games_count": 1361,
//                     "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
//                 },
//                 {
//                     "id": 269,
//                     "name": "Quick-Time Events",
//                     "slug": "quick-time-events",
//                     "language": "eng",
//                     "games_count": 409,
//                     "image_background": "https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg"
//                 },
//                 {
//                     "id": 126,
//                     "name": "Dinosaurs",
//                     "slug": "dinosaurs",
//                     "language": "eng",
//                     "games_count": 1624,
//                     "image_background": "https://media.rawg.io/media/screenshots/428/4286a224467623d23706dacb569a2ea1.jpg"
//                 },
//                 {
//                     "id": 306,
//                     "name": "Lara Croft",
//                     "slug": "lara-croft",
//                     "language": "eng",
//                     "games_count": 14,
//                     "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//                 },
//                 {
//                     "id": 99160,
//                     "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
//                 },
//                 {
//                     "id": 99161,
//                     "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
//                 },
//                 {
//                     "id": 99162,
//                     "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
//                 },
//                 {
//                     "id": 99163,
//                     "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
//                 },
//                 {
//                     "id": 99164,
//                     "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
//                 },
//                 {
//                     "id": 99165,
//                     "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 4291,
//             "slug": "counter-strike-global-offensive",
//             "name": "Counter-Strike: Global Offensive",
//             "released": "2012-08-21",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
//             "rating": 3.57,
//             "rating_top": 4,
//             "ratings": [
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1533,
//                     "percent": 46.94
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 846,
//                     "percent": 25.9
//                 },
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 523,
//                     "percent": 16.01
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 364,
//                     "percent": 11.15
//                 }
//             ],
//             "ratings_count": 3235,
//             "reviews_text_count": 22,
//             "added": 15156,
//             "added_by_status": {
//                 "yet": 237,
//                 "owned": 11485,
//                 "beaten": 922,
//                 "toplay": 71,
//                 "dropped": 1815,
//                 "playing": 626
//             },
//             "metacritic": 81,
//             "playtime": 65,
//             "suggestions_count": 581,
//             "updated": "2023-05-18T12:27:10",
//             "user_game": null,
//             "reviews_count": 3266,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2012-08-21",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
//                         "recommended": "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2012-08-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2012-08-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 4619,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 11489,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 49169,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 411,
//                     "name": "cooperative",
//                     "slug": "cooperative",
//                     "language": "eng",
//                     "games_count": 4026,
//                     "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 9,
//                     "name": "Online Co-Op",
//                     "slug": "online-co-op",
//                     "language": "eng",
//                     "games_count": 4318,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 80,
//                     "name": "Tactical",
//                     "slug": "tactical",
//                     "language": "eng",
//                     "games_count": 4048,
//                     "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                 },
//                 {
//                     "id": 11669,
//                     "name": "stats",
//                     "slug": "stats",
//                     "language": "eng",
//                     "games_count": 4455,
//                     "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
//                 },
//                 {
//                     "id": 40852,
//                     "name": "Steam Workshop",
//                     "slug": "steam-workshop",
//                     "language": "eng",
//                     "games_count": 1298,
//                     "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
//                 },
//                 {
//                     "id": 157,
//                     "name": "PvP",
//                     "slug": "pvp",
//                     "language": "eng",
//                     "games_count": 7127,
//                     "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
//                 },
//                 {
//                     "id": 62,
//                     "name": "Moddable",
//                     "slug": "moddable",
//                     "language": "eng",
//                     "games_count": 764,
//                     "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
//                 },
//                 {
//                     "id": 70,
//                     "name": "War",
//                     "slug": "war",
//                     "language": "eng",
//                     "games_count": 8623,
//                     "image_background": "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg"
//                 },
//                 {
//                     "id": 40837,
//                     "name": "In-App Purchases",
//                     "slug": "in-app-purchases",
//                     "language": "eng",
//                     "games_count": 2049,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Team-Based",
//                     "slug": "team-based",
//                     "language": "eng",
//                     "games_count": 1259,
//                     "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
//                 },
//                 {
//                     "id": 77,
//                     "name": "Realistic",
//                     "slug": "realistic",
//                     "language": "eng",
//                     "games_count": 3749,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 },
//                 {
//                     "id": 131,
//                     "name": "Fast-Paced",
//                     "slug": "fast-paced",
//                     "language": "eng",
//                     "games_count": 10261,
//                     "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
//                 },
//                 {
//                     "id": 81,
//                     "name": "Military",
//                     "slug": "military",
//                     "language": "eng",
//                     "games_count": 1350,
//                     "image_background": "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg"
//                 },
//                 {
//                     "id": 170,
//                     "name": "Competitive",
//                     "slug": "competitive",
//                     "language": "eng",
//                     "games_count": 1014,
//                     "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
//                 },
//                 {
//                     "id": 40856,
//                     "name": "Valve Anti-Cheat enabled",
//                     "slug": "valve-anti-cheat-enabled",
//                     "language": "eng",
//                     "games_count": 104,
//                     "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
//                 },
//                 {
//                     "id": 73,
//                     "name": "e-sports",
//                     "slug": "e-sports",
//                     "language": "eng",
//                     "games_count": 80,
//                     "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
//                 },
//                 {
//                     "id": 245,
//                     "name": "Trading",
//                     "slug": "trading",
//                     "language": "eng",
//                     "games_count": 975,
//                     "image_background": "https://media.rawg.io/media/games/59f/59f8ff56cde745ceb56029f229ad4e43.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
//                 },
//                 {
//                     "id": 81644,
//                     "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
//                 },
//                 {
//                     "id": 81645,
//                     "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
//                 },
//                 {
//                     "id": 81646,
//                     "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
//                 },
//                 {
//                     "id": 81647,
//                     "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
//                 },
//                 {
//                     "id": 81648,
//                     "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
//                 },
//                 {
//                     "id": 81649,
//                     "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 13536,
//             "slug": "portal",
//             "name": "Portal",
//             "released": "2007-10-09",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
//             "rating": 4.51,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 2705,
//                     "percent": 61.1
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1466,
//                     "percent": 33.11
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 168,
//                     "percent": 3.79
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 88,
//                     "percent": 1.99
//                 }
//             ],
//             "ratings_count": 4391,
//             "reviews_text_count": 23,
//             "added": 14854,
//             "added_by_status": {
//                 "yet": 412,
//                 "owned": 9177,
//                 "beaten": 4610,
//                 "toplay": 234,
//                 "dropped": 348,
//                 "playing": 73
//             },
//             "metacritic": 90,
//             "playtime": 4,
//             "suggestions_count": 281,
//             "updated": "2023-05-18T17:49:06",
//             "user_game": null,
//             "reviews_count": 4427,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 21,
//                         "name": "Android",
//                         "slug": "android",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 52230,
//                         "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
//                     },
//                     "released_at": "2007-10-09",
//                     "requirements_en": {
//                         "minimum": "4.4 and up"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2007-10-09",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2007-10-09",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2007-10-09",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2007-10-09",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2007-10-09",
//                     "requirements_en": {
//                         "minimum": "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
//                         "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo Switch",
//                         "slug": "nintendo-switch",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5226,
//                         "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
//                     },
//                     "released_at": "2007-10-09",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 8,
//                         "name": "Android",
//                         "slug": "android"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo",
//                         "slug": "nintendo"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Puzzle",
//                     "slug": "puzzle",
//                     "games_count": 97086,
//                     "image_background": "https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 14890,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 40973,
//                     "store": {
//                         "id": 8,
//                         "name": "Google Play",
//                         "slug": "google-play",
//                         "domain": "play.google.com",
//                         "games_count": 17034,
//                         "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 40845,
//                     "name": "Partial Controller Support",
//                     "slug": "partial-controller-support",
//                     "language": "eng",
//                     "games_count": 9706,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Funny",
//                     "slug": "funny",
//                     "language": "eng",
//                     "games_count": 22398,
//                     "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
//                 },
//                 {
//                     "id": 193,
//                     "name": "Classic",
//                     "slug": "classic",
//                     "language": "eng",
//                     "games_count": 1728,
//                     "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
//                 },
//                 {
//                     "id": 189,
//                     "name": "Female Protagonist",
//                     "slug": "female-protagonist",
//                     "language": "eng",
//                     "games_count": 10439,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 123,
//                     "name": "Comedy",
//                     "slug": "comedy",
//                     "language": "eng",
//                     "games_count": 10802,
//                     "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
//                 },
//                 {
//                     "id": 40838,
//                     "name": "Includes level editor",
//                     "slug": "includes-level-editor",
//                     "language": "eng",
//                     "games_count": 1626,
//                     "image_background": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg"
//                 },
//                 {
//                     "id": 40833,
//                     "name": "Captions available",
//                     "slug": "captions-available",
//                     "language": "eng",
//                     "games_count": 1227,
//                     "image_background": "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg"
//                 },
//                 {
//                     "id": 111,
//                     "name": "Short",
//                     "slug": "short",
//                     "language": "eng",
//                     "games_count": 57464,
//                     "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
//                 },
//                 {
//                     "id": 114,
//                     "name": "Physics",
//                     "slug": "physics",
//                     "language": "eng",
//                     "games_count": 17677,
//                     "image_background": "https://media.rawg.io/media/screenshots/f5a/f5abab52c4d606551cd5ec3ab709e501.jpg"
//                 },
//                 {
//                     "id": 148,
//                     "name": "Dark Humor",
//                     "slug": "dark-humor",
//                     "language": "eng",
//                     "games_count": 2432,
//                     "image_background": "https://media.rawg.io/media/screenshots/5a1/5a1ce6908dc401fa9f805d5db4e832d7.jpg"
//                 },
//                 {
//                     "id": 40834,
//                     "name": "Commentary available",
//                     "slug": "commentary-available",
//                     "language": "eng",
//                     "games_count": 253,
//                     "image_background": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg"
//                 },
//                 {
//                     "id": 40839,
//                     "name": "Includes Source SDK",
//                     "slug": "includes-source-sdk",
//                     "language": "eng",
//                     "games_count": 60,
//                     "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
//                 },
//                 {
//                     "id": 87,
//                     "name": "Science",
//                     "slug": "science",
//                     "language": "eng",
//                     "games_count": 1499,
//                     "image_background": "https://media.rawg.io/media/screenshots/e25/e25a1506d7d628e607dde00df0c69db5.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 3,
//                 "name": "Teen",
//                 "slug": "teen"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
//                 },
//                 {
//                     "id": 115793,
//                     "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
//                 },
//                 {
//                     "id": 115794,
//                     "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
//                 },
//                 {
//                     "id": 115795,
//                     "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
//                 },
//                 {
//                     "id": 115796,
//                     "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
//                 },
//                 {
//                     "id": 115797,
//                     "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
//                 },
//                 {
//                     "id": 115798,
//                     "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 12020,
//             "slug": "left-4-dead-2",
//             "name": "Left 4 Dead 2",
//             "released": "2009-11-17",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
//             "rating": 4.09,
//             "rating_top": 4,
//             "ratings": [
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1634,
//                     "percent": 53.1
//                 },
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 977,
//                     "percent": 31.75
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 353,
//                     "percent": 11.47
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 113,
//                     "percent": 3.67
//                 }
//             ],
//             "ratings_count": 3059,
//             "reviews_text_count": 9,
//             "added": 14805,
//             "added_by_status": {
//                 "yet": 355,
//                 "owned": 10824,
//                 "beaten": 2319,
//                 "toplay": 99,
//                 "dropped": 1070,
//                 "playing": 138
//             },
//             "metacritic": 89,
//             "playtime": 9,
//             "suggestions_count": 582,
//             "updated": "2023-05-18T12:27:23",
//             "user_game": null,
//             "reviews_count": 3077,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2009-11-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2009-11-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2009-11-17",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
//                         "recommended": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2009-11-17",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 13208,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 34000,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 40849,
//                     "name": "Steam Cloud",
//                     "slug": "steam-cloud",
//                     "language": "eng",
//                     "games_count": 13992,
//                     "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 411,
//                     "name": "cooperative",
//                     "slug": "cooperative",
//                     "language": "eng",
//                     "games_count": 4026,
//                     "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 16,
//                     "name": "Horror",
//                     "slug": "horror",
//                     "language": "eng",
//                     "games_count": 41770,
//                     "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 9,
//                     "name": "Online Co-Op",
//                     "slug": "online-co-op",
//                     "language": "eng",
//                     "games_count": 4318,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 26,
//                     "name": "Gore",
//                     "slug": "gore",
//                     "language": "eng",
//                     "games_count": 5025,
//                     "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
//                 },
//                 {
//                     "id": 1,
//                     "name": "Survival",
//                     "slug": "survival",
//                     "language": "eng",
//                     "games_count": 7128,
//                     "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                 },
//                 {
//                     "id": 75,
//                     "name": "Local Co-Op",
//                     "slug": "local-co-op",
//                     "language": "eng",
//                     "games_count": 4955,
//                     "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
//                 },
//                 {
//                     "id": 80,
//                     "name": "Tactical",
//                     "slug": "tactical",
//                     "language": "eng",
//                     "games_count": 4048,
//                     "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                 },
//                 {
//                     "id": 11669,
//                     "name": "stats",
//                     "slug": "stats",
//                     "language": "eng",
//                     "games_count": 4455,
//                     "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
//                 },
//                 {
//                     "id": 40852,
//                     "name": "Steam Workshop",
//                     "slug": "steam-workshop",
//                     "language": "eng",
//                     "games_count": 1298,
//                     "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
//                 },
//                 {
//                     "id": 63,
//                     "name": "Zombies",
//                     "slug": "zombies",
//                     "language": "eng",
//                     "games_count": 9613,
//                     "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
//                 },
//                 {
//                     "id": 62,
//                     "name": "Moddable",
//                     "slug": "moddable",
//                     "language": "eng",
//                     "games_count": 764,
//                     "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
//                 },
//                 {
//                     "id": 43,
//                     "name": "Post-apocalyptic",
//                     "slug": "post-apocalyptic",
//                     "language": "eng",
//                     "games_count": 3270,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 17,
//                     "name": "Survival Horror",
//                     "slug": "survival-horror",
//                     "language": "eng",
//                     "games_count": 7541,
//                     "image_background": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg"
//                 },
//                 {
//                     "id": 40833,
//                     "name": "Captions available",
//                     "slug": "captions-available",
//                     "language": "eng",
//                     "games_count": 1227,
//                     "image_background": "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg"
//                 },
//                 {
//                     "id": 5,
//                     "name": "Replay Value",
//                     "slug": "replay-value",
//                     "language": "eng",
//                     "games_count": 1275,
//                     "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Team-Based",
//                     "slug": "team-based",
//                     "language": "eng",
//                     "games_count": 1259,
//                     "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
//                 },
//                 {
//                     "id": 40856,
//                     "name": "Valve Anti-Cheat enabled",
//                     "slug": "valve-anti-cheat-enabled",
//                     "language": "eng",
//                     "games_count": 104,
//                     "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
//                 },
//                 {
//                     "id": 40834,
//                     "name": "Commentary available",
//                     "slug": "commentary-available",
//                     "language": "eng",
//                     "games_count": 253,
//                     "image_background": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg"
//                 },
//                 {
//                     "id": 40839,
//                     "name": "Includes Source SDK",
//                     "slug": "includes-source-sdk",
//                     "language": "eng",
//                     "games_count": 60,
//                     "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                 },
//                 {
//                     "id": 99748,
//                     "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
//                 },
//                 {
//                     "id": 99749,
//                     "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
//                 },
//                 {
//                     "id": 99750,
//                     "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
//                 },
//                 {
//                     "id": 99751,
//                     "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
//                 },
//                 {
//                     "id": 99752,
//                     "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
//                 },
//                 {
//                     "id": 99753,
//                     "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 5679,
//             "slug": "the-elder-scrolls-v-skyrim",
//             "name": "The Elder Scrolls V: Skyrim",
//             "released": "2011-11-11",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
//             "rating": 4.42,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 2503,
//                     "percent": 57.21
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1386,
//                     "percent": 31.68
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 393,
//                     "percent": 8.98
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 93,
//                     "percent": 2.13
//                 }
//             ],
//             "ratings_count": 4332,
//             "reviews_text_count": 29,
//             "added": 14647,
//             "added_by_status": {
//                 "yet": 465,
//                 "owned": 8752,
//                 "beaten": 3470,
//                 "toplay": 376,
//                 "dropped": 1214,
//                 "playing": 370
//             },
//             "metacritic": 94,
//             "playtime": 46,
//             "suggestions_count": 593,
//             "updated": "2023-05-16T19:12:58",
//             "user_game": null,
//             "reviews_count": 4375,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2011-11-11",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
//                         "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo Switch",
//                         "slug": "nintendo-switch",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5226,
//                         "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
//                     },
//                     "released_at": "2011-11-11",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2011-11-11",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2011-11-11",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo",
//                         "slug": "nintendo"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 5,
//                     "name": "RPG",
//                     "slug": "role-playing-games-rpg",
//                     "games_count": 52322,
//                     "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 6037,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 15144,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 32919,
//                     "store": {
//                         "id": 6,
//                         "name": "Nintendo Store",
//                         "slug": "nintendo",
//                         "domain": "nintendo.com",
//                         "games_count": 8868,
//                         "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 49792,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 40849,
//                     "name": "Steam Cloud",
//                     "slug": "steam-cloud",
//                     "language": "eng",
//                     "games_count": 13992,
//                     "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 36,
//                     "name": "Open World",
//                     "slug": "open-world",
//                     "language": "eng",
//                     "games_count": 6199,
//                     "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 149,
//                     "name": "Third Person",
//                     "slug": "third-person",
//                     "language": "eng",
//                     "games_count": 9292,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 40845,
//                     "name": "Partial Controller Support",
//                     "slug": "partial-controller-support",
//                     "language": "eng",
//                     "games_count": 9706,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 64,
//                     "name": "Fantasy",
//                     "slug": "fantasy",
//                     "language": "eng",
//                     "games_count": 24276,
//                     "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
//                 },
//                 {
//                     "id": 37,
//                     "name": "Sandbox",
//                     "slug": "sandbox",
//                     "language": "eng",
//                     "games_count": 5845,
//                     "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                 },
//                 {
//                     "id": 97,
//                     "name": "Action RPG",
//                     "slug": "action-rpg",
//                     "language": "eng",
//                     "games_count": 5650,
//                     "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//                 },
//                 {
//                     "id": 40852,
//                     "name": "Steam Workshop",
//                     "slug": "steam-workshop",
//                     "language": "eng",
//                     "games_count": 1298,
//                     "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
//                 },
//                 {
//                     "id": 468,
//                     "name": "role-playing",
//                     "slug": "role-playing",
//                     "language": "eng",
//                     "games_count": 1481,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 62,
//                     "name": "Moddable",
//                     "slug": "moddable",
//                     "language": "eng",
//                     "games_count": 764,
//                     "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
//                 },
//                 {
//                     "id": 121,
//                     "name": "Character Customization",
//                     "slug": "character-customization",
//                     "language": "eng",
//                     "games_count": 3438,
//                     "image_background": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg"
//                 },
//                 {
//                     "id": 40,
//                     "name": "Dark Fantasy",
//                     "slug": "dark-fantasy",
//                     "language": "eng",
//                     "games_count": 3191,
//                     "image_background": "https://media.rawg.io/media/games/920/92039cd19460532b76f6244b2bb3e4ac.jpg"
//                 },
//                 {
//                     "id": 66,
//                     "name": "Medieval",
//                     "slug": "medieval",
//                     "language": "eng",
//                     "games_count": 5296,
//                     "image_background": "https://media.rawg.io/media/games/ccf/ccf26f6e3d553a04f0033a8107a521b8.jpg"
//                 },
//                 {
//                     "id": 82,
//                     "name": "Magic",
//                     "slug": "magic",
//                     "language": "eng",
//                     "games_count": 8027,
//                     "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
//                 },
//                 {
//                     "id": 205,
//                     "name": "Lore-Rich",
//                     "slug": "lore-rich",
//                     "language": "eng",
//                     "games_count": 777,
//                     "image_background": "https://media.rawg.io/media/games/e85/e851f527ab0658519436342ee73da191.jpg"
//                 },
//                 {
//                     "id": 215,
//                     "name": "Dragons",
//                     "slug": "dragons",
//                     "language": "eng",
//                     "games_count": 2394,
//                     "image_background": "https://media.rawg.io/media/screenshots/a9e/a9e717295c03af6550b66163ed3cc6f3.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
//                 },
//                 {
//                     "id": 118307,
//                     "image": "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg"
//                 },
//                 {
//                     "id": 118308,
//                     "image": "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg"
//                 },
//                 {
//                     "id": 118309,
//                     "image": "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg"
//                 },
//                 {
//                     "id": 118310,
//                     "image": "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg"
//                 },
//                 {
//                     "id": 118311,
//                     "image": "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg"
//                 },
//                 {
//                     "id": 118312,
//                     "image": "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 4062,
//             "slug": "bioshock-infinite",
//             "name": "BioShock Infinite",
//             "released": "2013-03-26",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
//             "rating": 4.39,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 2122,
//                     "percent": 55.43
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1269,
//                     "percent": 33.15
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 333,
//                     "percent": 8.7
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 104,
//                     "percent": 2.72
//                 }
//             ],
//             "ratings_count": 3791,
//             "reviews_text_count": 21,
//             "added": 14142,
//             "added_by_status": {
//                 "yet": 773,
//                 "owned": 8430,
//                 "beaten": 4028,
//                 "toplay": 366,
//                 "dropped": 447,
//                 "playing": 98
//             },
//             "metacritic": 94,
//             "playtime": 12,
//             "suggestions_count": 595,
//             "updated": "2023-05-18T13:58:30",
//             "user_game": null,
//             "reviews_count": 3828,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2013-03-26",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2013-03-26",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo Switch",
//                         "slug": "nintendo-switch",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5226,
//                         "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
//                     },
//                     "released_at": "2013-03-26",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2013-03-26",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2013-03-26",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD",
//                         "recommended": "Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2013-03-26",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2013-03-26",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo",
//                         "slug": "nintendo"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 828870,
//                     "store": {
//                         "id": 11,
//                         "name": "Epic Games",
//                         "slug": "epic-games",
//                         "domain": "epicgames.com",
//                         "games_count": 1232,
//                         "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
//                     }
//                 },
//                 {
//                     "id": 71727,
//                     "store": {
//                         "id": 4,
//                         "name": "App Store",
//                         "slug": "apple-appstore",
//                         "domain": "apps.apple.com",
//                         "games_count": 75015,
//                         "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//                     }
//                 },
//                 {
//                     "id": 440409,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 461035,
//                     "store": {
//                         "id": 6,
//                         "name": "Nintendo Store",
//                         "slug": "nintendo",
//                         "domain": "nintendo.com",
//                         "games_count": 8868,
//                         "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 4382,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 13084,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 33810,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 40849,
//                     "name": "Steam Cloud",
//                     "slug": "steam-cloud",
//                     "language": "eng",
//                     "games_count": 13992,
//                     "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 64,
//                     "name": "Fantasy",
//                     "slug": "fantasy",
//                     "language": "eng",
//                     "games_count": 24276,
//                     "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
//                 },
//                 {
//                     "id": 26,
//                     "name": "Gore",
//                     "slug": "gore",
//                     "language": "eng",
//                     "games_count": 5025,
//                     "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
//                 },
//                 {
//                     "id": 115,
//                     "name": "Controller",
//                     "slug": "controller",
//                     "language": "eng",
//                     "games_count": 9308,
//                     "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
//                 },
//                 {
//                     "id": 119,
//                     "name": "Dystopian",
//                     "slug": "dystopian",
//                     "language": "eng",
//                     "games_count": 1758,
//                     "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//                 },
//                 {
//                     "id": 154,
//                     "name": "Steampunk",
//                     "slug": "steampunk",
//                     "language": "eng",
//                     "games_count": 1106,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 305,
//                     "name": "Linear",
//                     "slug": "linear",
//                     "language": "eng",
//                     "games_count": 3823,
//                     "image_background": "https://media.rawg.io/media/games/736/736c0eaec96d848d7824b33298a182f2.jpg"
//                 },
//                 {
//                     "id": 208,
//                     "name": "Alternate History",
//                     "slug": "alternate-history",
//                     "language": "eng",
//                     "games_count": 1439,
//                     "image_background": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg"
//                 },
//                 {
//                     "id": 317,
//                     "name": "Time Travel",
//                     "slug": "time-travel",
//                     "language": "eng",
//                     "games_count": 1678,
//                     "image_background": "https://media.rawg.io/media/screenshots/120/120530499012ea0149cfe358330b10c9.jpg"
//                 },
//                 {
//                     "id": 287,
//                     "name": "Political",
//                     "slug": "political",
//                     "language": "eng",
//                     "games_count": 495,
//                     "image_background": "https://media.rawg.io/media/screenshots/2f3/2f39e67948648417709e746748a903b8.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 98549,
//                     "image": "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg"
//                 },
//                 {
//                     "id": 98550,
//                     "image": "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg"
//                 },
//                 {
//                     "id": 98551,
//                     "image": "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg"
//                 },
//                 {
//                     "id": 98552,
//                     "image": "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg"
//                 },
//                 {
//                     "id": 98553,
//                     "image": "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg"
//                 },
//                 {
//                     "id": 98554,
//                     "image": "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 28,
//             "slug": "red-dead-redemption-2",
//             "name": "Red Dead Redemption 2",
//             "released": "2018-10-26",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
//             "rating": 4.59,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 3381,
//                     "percent": 73.26
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 843,
//                     "percent": 18.27
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 258,
//                     "percent": 5.59
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 133,
//                     "percent": 2.88
//                 }
//             ],
//             "ratings_count": 4523,
//             "reviews_text_count": 67,
//             "added": 14052,
//             "added_by_status": {
//                 "yet": 851,
//                 "owned": 7385,
//                 "beaten": 2800,
//                 "toplay": 1542,
//                 "dropped": 594,
//                 "playing": 880
//             },
//             "metacritic": 96,
//             "playtime": 19,
//             "suggestions_count": 601,
//             "updated": "2023-05-18T16:43:21",
//             "user_game": null,
//             "reviews_count": 4615,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2018-10-26",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2018-10-26",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2018-10-26",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 257732,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 374316,
//                     "store": {
//                         "id": 11,
//                         "name": "Epic Games",
//                         "slug": "epic-games",
//                         "domain": "epicgames.com",
//                         "games_count": 1232,
//                         "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
//                     }
//                 },
//                 {
//                     "id": 384218,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 48782,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 36,
//                     "name": "Open World",
//                     "slug": "open-world",
//                     "language": "eng",
//                     "games_count": 6199,
//                     "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 149,
//                     "name": "Third Person",
//                     "slug": "third-person",
//                     "language": "eng",
//                     "games_count": 9292,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 40845,
//                     "name": "Partial Controller Support",
//                     "slug": "partial-controller-support",
//                     "language": "eng",
//                     "games_count": 9706,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 9,
//                     "name": "Online Co-Op",
//                     "slug": "online-co-op",
//                     "language": "eng",
//                     "games_count": 4318,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 26,
//                     "name": "Gore",
//                     "slug": "gore",
//                     "language": "eng",
//                     "games_count": 5025,
//                     "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Exploration",
//                     "slug": "exploration",
//                     "language": "eng",
//                     "games_count": 19164,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 37,
//                     "name": "Sandbox",
//                     "slug": "sandbox",
//                     "language": "eng",
//                     "games_count": 5845,
//                     "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                 },
//                 {
//                     "id": 34,
//                     "name": "Violent",
//                     "slug": "violent",
//                     "language": "eng",
//                     "games_count": 5845,
//                     "image_background": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg"
//                 },
//                 {
//                     "id": 150,
//                     "name": "Third-Person Shooter",
//                     "slug": "third-person-shooter",
//                     "language": "eng",
//                     "games_count": 2852,
//                     "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
//                 },
//                 {
//                     "id": 157,
//                     "name": "PvP",
//                     "slug": "pvp",
//                     "language": "eng",
//                     "games_count": 7127,
//                     "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
//                 },
//                 {
//                     "id": 40837,
//                     "name": "In-App Purchases",
//                     "slug": "in-app-purchases",
//                     "language": "eng",
//                     "games_count": 2049,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 192,
//                     "name": "Mature",
//                     "slug": "mature",
//                     "language": "eng",
//                     "games_count": 2131,
//                     "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
//                 },
//                 {
//                     "id": 89,
//                     "name": "Historical",
//                     "slug": "historical",
//                     "language": "eng",
//                     "games_count": 2544,
//                     "image_background": "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg"
//                 },
//                 {
//                     "id": 110,
//                     "name": "Cinematic",
//                     "slug": "cinematic",
//                     "language": "eng",
//                     "games_count": 1361,
//                     "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
//                 },
//                 {
//                     "id": 77,
//                     "name": "Realistic",
//                     "slug": "realistic",
//                     "language": "eng",
//                     "games_count": 3749,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 },
//                 {
//                     "id": 144,
//                     "name": "Crime",
//                     "slug": "crime",
//                     "language": "eng",
//                     "games_count": 2532,
//                     "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
//                 },
//                 {
//                     "id": 45878,
//                     "name": "Online PvP",
//                     "slug": "online-pvp",
//                     "language": "eng",
//                     "games_count": 3102,
//                     "image_background": "https://media.rawg.io/media/games/018/01857c5ff9579c48fa8bd76b4d83a946.jpg"
//                 },
//                 {
//                     "id": 478,
//                     "name": "3rd-Person Perspective",
//                     "slug": "3rd-person-perspective",
//                     "language": "eng",
//                     "games_count": 86,
//                     "image_background": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg"
//                 },
//                 {
//                     "id": 270,
//                     "name": "Blood",
//                     "slug": "blood",
//                     "language": "eng",
//                     "games_count": 1941,
//                     "image_background": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
//                 },
//                 {
//                     "id": 78,
//                     "name": "America",
//                     "slug": "america",
//                     "language": "eng",
//                     "games_count": 450,
//                     "image_background": "https://media.rawg.io/media/screenshots/e0e/e0ef96a0639af3735cb4d26160e82c16.jpg"
//                 },
//                 {
//                     "id": 578,
//                     "name": "Masterpiece",
//                     "slug": "masterpiece",
//                     "language": "eng",
//                     "games_count": 276,
//                     "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                 },
//                 {
//                     "id": 577,
//                     "name": "Beautiful",
//                     "slug": "beautiful",
//                     "language": "eng",
//                     "games_count": 1802,
//                     "image_background": "https://media.rawg.io/media/games/bf7/bf73b105ccbba42107986bbcd96fcada.jpg"
//                 },
//                 {
//                     "id": 181,
//                     "name": "Hunting",
//                     "slug": "hunting",
//                     "language": "eng",
//                     "games_count": 834,
//                     "image_background": "https://media.rawg.io/media/screenshots/650/650350f286e4e809da148b9495031489.jpg"
//                 },
//                 {
//                     "id": 152,
//                     "name": "Western",
//                     "slug": "western",
//                     "language": "eng",
//                     "games_count": 1206,
//                     "image_background": "https://media.rawg.io/media/games/d11/d116eb848dad9bc60d63d1b209f5d3c8.jpeg"
//                 },
//                 {
//                     "id": 5452,
//                     "name": "3rd-person",
//                     "slug": "3rd-person",
//                     "language": "eng",
//                     "games_count": 97,
//                     "image_background": "https://media.rawg.io/media/screenshots/e30/e30b6a334c20ae534c15d3f0d71cad36.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                 },
//                 {
//                     "id": 778173,
//                     "image": "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg"
//                 },
//                 {
//                     "id": 778174,
//                     "image": "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg"
//                 },
//                 {
//                     "id": 778175,
//                     "image": "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg"
//                 },
//                 {
//                     "id": 778176,
//                     "image": "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg"
//                 },
//                 {
//                     "id": 778177,
//                     "image": "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg"
//                 },
//                 {
//                     "id": 778178,
//                     "image": "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 802,
//             "slug": "borderlands-2",
//             "name": "Borderlands 2",
//             "released": "2012-09-18",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
//             "rating": 4.02,
//             "rating_top": 4,
//             "ratings": [
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1462,
//                     "percent": 47.87
//                 },
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 951,
//                     "percent": 31.14
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 516,
//                     "percent": 16.9
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 125,
//                     "percent": 4.09
//                 }
//             ],
//             "ratings_count": 3034,
//             "reviews_text_count": 12,
//             "added": 13980,
//             "added_by_status": {
//                 "yet": 571,
//                 "owned": 9653,
//                 "beaten": 2143,
//                 "toplay": 209,
//                 "dropped": 1190,
//                 "playing": 214
//             },
//             "metacritic": 89,
//             "playtime": 10,
//             "suggestions_count": 679,
//             "updated": "2023-05-16T21:11:55",
//             "user_game": null,
//             "reviews_count": 3054,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2012-09-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2012-09-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2012-09-18",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение",
//                         "recommended": "Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 21,
//                         "name": "Android",
//                         "slug": "android",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 52230,
//                         "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
//                     },
//                     "released_at": "2012-09-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2012-09-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 19,
//                         "name": "PS Vita",
//                         "slug": "ps-vita",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 1449,
//                         "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
//                     },
//                     "released_at": "2012-09-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2012-09-18",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 8,
//                         "name": "Android",
//                         "slug": "android"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 5,
//                     "name": "RPG",
//                     "slug": "role-playing-games-rpg",
//                     "games_count": 52322,
//                     "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 4000,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 213037,
//                     "store": {
//                         "id": 8,
//                         "name": "Google Play",
//                         "slug": "google-play",
//                         "domain": "play.google.com",
//                         "games_count": 17034,
//                         "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//                     }
//                 },
//                 {
//                     "id": 11088,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 34042,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 },
//                 {
//                     "id": 71617,
//                     "store": {
//                         "id": 4,
//                         "name": "App Store",
//                         "slug": "apple-appstore",
//                         "domain": "apps.apple.com",
//                         "games_count": 75015,
//                         "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//                     }
//                 },
//                 {
//                     "id": 817,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 40849,
//                     "name": "Steam Cloud",
//                     "slug": "steam-cloud",
//                     "language": "eng",
//                     "games_count": 13992,
//                     "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 36,
//                     "name": "Open World",
//                     "slug": "open-world",
//                     "language": "eng",
//                     "games_count": 6199,
//                     "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
//                 },
//                 {
//                     "id": 411,
//                     "name": "cooperative",
//                     "slug": "cooperative",
//                     "language": "eng",
//                     "games_count": 4026,
//                     "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 9,
//                     "name": "Online Co-Op",
//                     "slug": "online-co-op",
//                     "language": "eng",
//                     "games_count": 4318,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Funny",
//                     "slug": "funny",
//                     "language": "eng",
//                     "games_count": 22398,
//                     "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
//                 },
//                 {
//                     "id": 123,
//                     "name": "Comedy",
//                     "slug": "comedy",
//                     "language": "eng",
//                     "games_count": 10802,
//                     "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
//                 },
//                 {
//                     "id": 97,
//                     "name": "Action RPG",
//                     "slug": "action-rpg",
//                     "language": "eng",
//                     "games_count": 5650,
//                     "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//                 },
//                 {
//                     "id": 167,
//                     "name": "Futuristic",
//                     "slug": "futuristic",
//                     "language": "eng",
//                     "games_count": 4261,
//                     "image_background": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg"
//                 },
//                 {
//                     "id": 120,
//                     "name": "Memes",
//                     "slug": "memes",
//                     "language": "eng",
//                     "games_count": 1551,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 148,
//                     "name": "Dark Humor",
//                     "slug": "dark-humor",
//                     "language": "eng",
//                     "games_count": 2432,
//                     "image_background": "https://media.rawg.io/media/screenshots/5a1/5a1ce6908dc401fa9f805d5db4e832d7.jpg"
//                 },
//                 {
//                     "id": 98,
//                     "name": "Loot",
//                     "slug": "loot",
//                     "language": "eng",
//                     "games_count": 1903,
//                     "image_background": "https://media.rawg.io/media/screenshots/ef8/ef8201008461d1c102b6c11c4114d08e.jpg"
//                 },
//                 {
//                     "id": 166,
//                     "name": "Stylized",
//                     "slug": "stylized",
//                     "language": "eng",
//                     "games_count": 4171,
//                     "image_background": "https://media.rawg.io/media/screenshots/066/066eb1b7a3f332b8089645fbf8c3ebdc.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 7041,
//                     "image": "https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg"
//                 },
//                 {
//                     "id": 7062,
//                     "image": "https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg"
//                 },
//                 {
//                     "id": 7070,
//                     "image": "https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg"
//                 },
//                 {
//                     "id": 7072,
//                     "image": "https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg"
//                 },
//                 {
//                     "id": 7081,
//                     "image": "https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg"
//                 },
//                 {
//                     "id": 7088,
//                     "image": "https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 3439,
//             "slug": "life-is-strange-episode-1-2",
//             "name": "Life is Strange",
//             "released": "2015-01-29",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
//             "rating": 4.11,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 1519,
//                     "percent": 43.72
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1267,
//                     "percent": 36.47
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 466,
//                     "percent": 13.41
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 222,
//                     "percent": 6.39
//                 }
//             ],
//             "ratings_count": 3432,
//             "reviews_text_count": 25,
//             "added": 13977,
//             "added_by_status": {
//                 "yet": 744,
//                 "owned": 8998,
//                 "beaten": 3175,
//                 "toplay": 326,
//                 "dropped": 591,
//                 "playing": 143
//             },
//             "metacritic": 83,
//             "playtime": 7,
//             "suggestions_count": 523,
//             "updated": "2023-05-16T11:16:58",
//             "user_game": null,
//             "reviews_count": 3474,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "iOS",
//                         "slug": "ios",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 76778,
//                         "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": {
//                         "minimum": "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 21,
//                         "name": "Android",
//                         "slug": "android",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 52230,
//                         "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": {
//                         "minimum": "6.0 and up"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2015-01-29",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "iOS",
//                         "slug": "ios"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 8,
//                         "name": "Android",
//                         "slug": "android"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 451321,
//                     "store": {
//                         "id": 5,
//                         "name": "GOG",
//                         "slug": "gog",
//                         "domain": "gog.com",
//                         "games_count": 5136,
//                         "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                     }
//                 },
//                 {
//                     "id": 3702,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 35603,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 35602,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 217695,
//                     "store": {
//                         "id": 8,
//                         "name": "Google Play",
//                         "slug": "google-play",
//                         "domain": "play.google.com",
//                         "games_count": 17034,
//                         "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//                     }
//                 },
//                 {
//                     "id": 245823,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 },
//                 {
//                     "id": 44714,
//                     "store": {
//                         "id": 4,
//                         "name": "App Store",
//                         "slug": "apple-appstore",
//                         "domain": "apps.apple.com",
//                         "games_count": 75015,
//                         "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 149,
//                     "name": "Third Person",
//                     "slug": "third-person",
//                     "language": "eng",
//                     "games_count": 9292,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 189,
//                     "name": "Female Protagonist",
//                     "slug": "female-protagonist",
//                     "language": "eng",
//                     "games_count": 10439,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 41,
//                     "name": "Dark",
//                     "slug": "dark",
//                     "language": "eng",
//                     "games_count": 14006,
//                     "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
//                 },
//                 {
//                     "id": 141,
//                     "name": "Point & Click",
//                     "slug": "point-click",
//                     "language": "eng",
//                     "games_count": 11641,
//                     "image_background": "https://media.rawg.io/media/screenshots/e70/e7009d889b38df2a16f78859a7343308.jpg"
//                 },
//                 {
//                     "id": 111,
//                     "name": "Short",
//                     "slug": "short",
//                     "language": "eng",
//                     "games_count": 57464,
//                     "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
//                 },
//                 {
//                     "id": 117,
//                     "name": "Mystery",
//                     "slug": "mystery",
//                     "language": "eng",
//                     "games_count": 11773,
//                     "image_background": "https://media.rawg.io/media/games/6ac/6ac602e70c837ababdf025e997391d9c.jpg"
//                 },
//                 {
//                     "id": 145,
//                     "name": "Choices Matter",
//                     "slug": "choices-matter",
//                     "language": "eng",
//                     "games_count": 3470,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 120,
//                     "name": "Memes",
//                     "slug": "memes",
//                     "language": "eng",
//                     "games_count": 1551,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 91,
//                     "name": "Walking Simulator",
//                     "slug": "walking-simulator",
//                     "language": "eng",
//                     "games_count": 6211,
//                     "image_background": "https://media.rawg.io/media/games/90c/90caf1fcb836cad70013452f6f239008.jpg"
//                 },
//                 {
//                     "id": 406,
//                     "name": "Story",
//                     "slug": "story",
//                     "language": "eng",
//                     "games_count": 11200,
//                     "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
//                 },
//                 {
//                     "id": 218,
//                     "name": "Multiple Endings",
//                     "slug": "multiple-endings",
//                     "language": "eng",
//                     "games_count": 6988,
//                     "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
//                 },
//                 {
//                     "id": 232,
//                     "name": "Episodic",
//                     "slug": "episodic",
//                     "language": "eng",
//                     "games_count": 425,
//                     "image_background": "https://media.rawg.io/media/games/123/123e035701a975f5d96c233f4048eed2.jpg"
//                 },
//                 {
//                     "id": 295,
//                     "name": "Soundtrack",
//                     "slug": "soundtrack",
//                     "language": "eng",
//                     "games_count": 2761,
//                     "image_background": "https://media.rawg.io/media/games/872/8721094b44212218051621bc6fbee27d.jpg"
//                 },
//                 {
//                     "id": 317,
//                     "name": "Time Travel",
//                     "slug": "time-travel",
//                     "language": "eng",
//                     "games_count": 1678,
//                     "image_background": "https://media.rawg.io/media/screenshots/120/120530499012ea0149cfe358330b10c9.jpg"
//                 },
//                 {
//                     "id": 302,
//                     "name": "Time Manipulation",
//                     "slug": "time-manipulation",
//                     "language": "eng",
//                     "games_count": 385,
//                     "image_background": "https://media.rawg.io/media/games/f1a/f1ab53ba75dd2077d861d4e56efb0b29.jpg"
//                 },
//                 {
//                     "id": 992,
//                     "name": "student",
//                     "slug": "student",
//                     "language": "eng",
//                     "games_count": 1514,
//                     "image_background": "https://media.rawg.io/media/screenshots/326/326e62623a7fe86c99290670d04489ad_U6VkjPl.jpg"
//                 },
//                 {
//                     "id": 2682,
//                     "name": "strange",
//                     "slug": "strange",
//                     "language": "eng",
//                     "games_count": 360,
//                     "image_background": "https://media.rawg.io/media/screenshots/1d4/1d42ee97681050baedab12c082bb8b54.jpg"
//                 },
//                 {
//                     "id": 3197,
//                     "name": "photography",
//                     "slug": "photography",
//                     "language": "eng",
//                     "games_count": 208,
//                     "image_background": "https://media.rawg.io/media/screenshots/4fc/4fcf62ceae1cc56d80fd3ce1df64083f.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//                 },
//                 {
//                     "id": 1826487,
//                     "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
//                 },
//                 {
//                     "id": 1826488,
//                     "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
//                 },
//                 {
//                     "id": 1826489,
//                     "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
//                 },
//                 {
//                     "id": 1826490,
//                     "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
//                 },
//                 {
//                     "id": 1826491,
//                     "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
//                 },
//                 {
//                     "id": 1826492,
//                     "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 13537,
//             "slug": "half-life-2",
//             "name": "Half-Life 2",
//             "released": "2004-11-16",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
//             "rating": 4.49,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 2303,
//                     "percent": 63.87
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 988,
//                     "percent": 27.4
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 207,
//                     "percent": 5.74
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 108,
//                     "percent": 3.0
//                 }
//             ],
//             "ratings_count": 3584,
//             "reviews_text_count": 16,
//             "added": 13224,
//             "added_by_status": {
//                 "yet": 615,
//                 "owned": 8320,
//                 "beaten": 3412,
//                 "toplay": 278,
//                 "dropped": 510,
//                 "playing": 89
//             },
//             "metacritic": 96,
//             "playtime": 7,
//             "suggestions_count": 551,
//             "updated": "2023-05-18T17:50:35",
//             "user_game": null,
//             "reviews_count": 3606,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2004-11-16",
//                     "requirements_en": {
//                         "minimum": "Minimum:\r\n\r\nOS: Windows 7, Vista, XP\r\n\r\nProcessor: 1.7 Ghz\r\n\r\nMemory: 512 MB RAM\r\n\r\nGraphics: DirectX 8.1 level Graphics Card (requires support for SSE)\r\n\r\nStorage: 6500 MB available space"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет",
//                         "recommended": "Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2004-11-16",
//                     "requirements_en": {
//                         "minimum": "Minimum:\r\n\r\nOS: Leopard 10.5.8, Snow Leopard 10.6.3, or higher\r\n\r\nMemory: 1 GB RAM\r\n\r\nGraphics: Nvidia GeForce8 or higher, ATI X1600 or higher, Intel HD 3000 or higher"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2004-11-16",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2004-11-16",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 80,
//                         "name": "Xbox",
//                         "slug": "xbox-old",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 725,
//                         "image_background": "https://media.rawg.io/media/games/0a5/0a56e2bb9ce95359e69ff9689c553a45.jpg"
//                     },
//                     "released_at": "2004-11-16",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 21,
//                         "name": "Android",
//                         "slug": "android",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 52230,
//                         "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
//                     },
//                     "released_at": "2004-11-16",
//                     "requirements_en": {
//                         "minimum": "4.4 and up"
//                     },
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 8,
//                         "name": "Android",
//                         "slug": "android"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 14891,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 41441,
//                     "store": {
//                         "id": 8,
//                         "name": "Google Play",
//                         "slug": "google-play",
//                         "domain": "play.google.com",
//                         "games_count": 17034,
//                         "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 40849,
//                     "name": "Steam Cloud",
//                     "slug": "steam-cloud",
//                     "language": "eng",
//                     "games_count": 13992,
//                     "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 40845,
//                     "name": "Partial Controller Support",
//                     "slug": "partial-controller-support",
//                     "language": "eng",
//                     "games_count": 9706,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 16,
//                     "name": "Horror",
//                     "slug": "horror",
//                     "language": "eng",
//                     "games_count": 41770,
//                     "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 193,
//                     "name": "Classic",
//                     "slug": "classic",
//                     "language": "eng",
//                     "games_count": 1728,
//                     "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
//                 },
//                 {
//                     "id": 63,
//                     "name": "Zombies",
//                     "slug": "zombies",
//                     "language": "eng",
//                     "games_count": 9613,
//                     "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
//                 },
//                 {
//                     "id": 62,
//                     "name": "Moddable",
//                     "slug": "moddable",
//                     "language": "eng",
//                     "games_count": 764,
//                     "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
//                 },
//                 {
//                     "id": 40833,
//                     "name": "Captions available",
//                     "slug": "captions-available",
//                     "language": "eng",
//                     "games_count": 1227,
//                     "image_background": "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg"
//                 },
//                 {
//                     "id": 114,
//                     "name": "Physics",
//                     "slug": "physics",
//                     "language": "eng",
//                     "games_count": 17677,
//                     "image_background": "https://media.rawg.io/media/screenshots/f5a/f5abab52c4d606551cd5ec3ab709e501.jpg"
//                 },
//                 {
//                     "id": 172,
//                     "name": "Aliens",
//                     "slug": "aliens",
//                     "language": "eng",
//                     "games_count": 6214,
//                     "image_background": "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg"
//                 },
//                 {
//                     "id": 119,
//                     "name": "Dystopian",
//                     "slug": "dystopian",
//                     "language": "eng",
//                     "games_count": 1758,
//                     "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//                 },
//                 {
//                     "id": 40839,
//                     "name": "Includes Source SDK",
//                     "slug": "includes-source-sdk",
//                     "language": "eng",
//                     "games_count": 60,
//                     "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
//                 },
//                 {
//                     "id": 319,
//                     "name": "Silent Protagonist",
//                     "slug": "silent-protagonist",
//                     "language": "eng",
//                     "games_count": 80,
//                     "image_background": "https://media.rawg.io/media/screenshots/5ce/5ce17393fdcd1a4356187e388fa21723.jpeg"
//                 },
//                 {
//                     "id": 62349,
//                     "name": "vr mod",
//                     "slug": "vr-mod",
//                     "language": "eng",
//                     "games_count": 17,
//                     "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 115804,
//                     "image": "https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg"
//                 },
//                 {
//                     "id": 115805,
//                     "image": "https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg"
//                 },
//                 {
//                     "id": 115806,
//                     "image": "https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg"
//                 },
//                 {
//                     "id": 115807,
//                     "image": "https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg"
//                 },
//                 {
//                     "id": 115808,
//                     "image": "https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg"
//                 },
//                 {
//                     "id": 115809,
//                     "image": "https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 4286,
//             "slug": "bioshock",
//             "name": "BioShock",
//             "released": "2007-08-21",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
//             "rating": 4.36,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 1655,
//                     "percent": 53.06
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1135,
//                     "percent": 36.39
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 229,
//                     "percent": 7.34
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 100,
//                     "percent": 3.21
//                 }
//             ],
//             "ratings_count": 3081,
//             "reviews_text_count": 23,
//             "added": 12856,
//             "added_by_status": {
//                 "yet": 586,
//                 "owned": 8226,
//                 "beaten": 2962,
//                 "toplay": 302,
//                 "dropped": 671,
//                 "playing": 109
//             },
//             "metacritic": 96,
//             "playtime": 3,
//             "suggestions_count": 637,
//             "updated": "2023-05-18T13:55:20",
//             "user_game": null,
//             "reviews_count": 3119,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2007-08-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2007-08-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2007-08-21",
//                     "requirements_en": {
//                         "minimum": "<h2 class=\"bb_tag\"><strong>Minimum: </strong></h2><ul class=\"bb_ul\"><li><strong>Operating System</strong>: Windows XP (with Service Pack 2) or Windows Vista<br></li><li><strong>CPU</strong>: Intel single-core Pentium 4 processor at 2.4GHz<br></li><li><strong>RAM</strong>: 1 GB<br></li><li><strong>Video Card</strong>: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)<br></li><li><strong>Sound Card</strong>: 100% direct X 9.0c compatible sound card<br></li><li><strong>Hard Drive Space</strong>: 8GB<br></li><li>Game requires Internet connection for activation</li></ul>",
//                         "recommended": "<h2 class=\"bb_tag\"><strong>Recommended: </strong></h2><ul class=\"bb_ul\"><li><strong>CPU</strong>: Intel Core 2 Duo processor<br></li><li><strong>RAM</strong>: 2GB<br></li><li><strong>Video Card</strong>: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better<br></li><li><strong>Sound Card</strong>: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение",
//                         "recommended": "Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2007-08-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 4614,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 79531,
//                     "store": {
//                         "id": 4,
//                         "name": "App Store",
//                         "slug": "apple-appstore",
//                         "domain": "apps.apple.com",
//                         "games_count": 75015,
//                         "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//                     }
//                 },
//                 {
//                     "id": 440407,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 20580,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 33844,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 40845,
//                     "name": "Partial Controller Support",
//                     "slug": "partial-controller-support",
//                     "language": "eng",
//                     "games_count": 9706,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 16,
//                     "name": "Horror",
//                     "slug": "horror",
//                     "language": "eng",
//                     "games_count": 41770,
//                     "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 193,
//                     "name": "Classic",
//                     "slug": "classic",
//                     "language": "eng",
//                     "games_count": 1728,
//                     "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
//                 },
//                 {
//                     "id": 97,
//                     "name": "Action RPG",
//                     "slug": "action-rpg",
//                     "language": "eng",
//                     "games_count": 5650,
//                     "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//                 },
//                 {
//                     "id": 41,
//                     "name": "Dark",
//                     "slug": "dark",
//                     "language": "eng",
//                     "games_count": 14006,
//                     "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
//                 },
//                 {
//                     "id": 119,
//                     "name": "Dystopian",
//                     "slug": "dystopian",
//                     "language": "eng",
//                     "games_count": 1758,
//                     "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
//                 },
//                 {
//                     "id": 154,
//                     "name": "Steampunk",
//                     "slug": "steampunk",
//                     "language": "eng",
//                     "games_count": 1106,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 208,
//                     "name": "Alternate History",
//                     "slug": "alternate-history",
//                     "language": "eng",
//                     "games_count": 1439,
//                     "image_background": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg"
//                 },
//                 {
//                     "id": 287,
//                     "name": "Political",
//                     "slug": "political",
//                     "language": "eng",
//                     "games_count": 495,
//                     "image_background": "https://media.rawg.io/media/screenshots/2f3/2f39e67948648417709e746748a903b8.jpg"
//                 },
//                 {
//                     "id": 250,
//                     "name": "Underwater",
//                     "slug": "underwater",
//                     "language": "eng",
//                     "games_count": 1971,
//                     "image_background": "https://media.rawg.io/media/screenshots/41c/41cb09356a97110b6b7d79f0abcb7699.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 170993,
//                     "image": "https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg"
//                 },
//                 {
//                     "id": 170994,
//                     "image": "https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg"
//                 },
//                 {
//                     "id": 170995,
//                     "image": "https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg"
//                 },
//                 {
//                     "id": 170996,
//                     "image": "https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg"
//                 },
//                 {
//                     "id": 170997,
//                     "image": "https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg"
//                 },
//                 {
//                     "id": 170998,
//                     "image": "https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 1030,
//             "slug": "limbo",
//             "name": "Limbo",
//             "released": "2010-07-21",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
//             "rating": 4.15,
//             "rating_top": 4,
//             "ratings": [
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1627,
//                     "percent": 52.23
//                 },
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 1079,
//                     "percent": 34.64
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 309,
//                     "percent": 9.92
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 100,
//                     "percent": 3.21
//                 }
//             ],
//             "ratings_count": 3081,
//             "reviews_text_count": 22,
//             "added": 12482,
//             "added_by_status": {
//                 "yet": 529,
//                 "owned": 7932,
//                 "beaten": 2987,
//                 "toplay": 284,
//                 "dropped": 659,
//                 "playing": 91
//             },
//             "metacritic": 88,
//             "playtime": 3,
//             "suggestions_count": 183,
//             "updated": "2023-05-13T17:35:56",
//             "user_game": null,
//             "reviews_count": 3115,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": {
//                         "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 19,
//                         "name": "PS Vita",
//                         "slug": "ps-vita",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 1449,
//                         "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 21,
//                         "name": "Android",
//                         "slug": "android",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 52230,
//                         "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": {
//                         "minimum": "4.4 and up"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo Switch",
//                         "slug": "nintendo-switch",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5226,
//                         "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "iOS",
//                         "slug": "ios",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 76778,
//                         "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": {
//                         "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": {
//                         "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2 GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 512MB<br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> 5 years or younger. Integrated graphics and very low budget cards may not work. Shader Model 3.0 required<br>\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c\t<br>\t\t\t\t\t\t</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере",
//                         "recommended": "Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": {
//                         "minimum": "Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Xbox 360",
//                         "slug": "xbox360",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 2777,
//                         "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 16,
//                         "name": "PlayStation 3",
//                         "slug": "playstation3",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 3193,
//                         "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2010-07-21",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "iOS",
//                         "slug": "ios"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 8,
//                         "name": "Android",
//                         "slug": "android"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo",
//                         "slug": "nintendo"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 },
//                 {
//                     "id": 51,
//                     "name": "Indie",
//                     "slug": "indie",
//                     "games_count": 52550,
//                     "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Puzzle",
//                     "slug": "puzzle",
//                     "games_count": 97086,
//                     "image_background": "https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg"
//                 },
//                 {
//                     "id": 83,
//                     "name": "Platformer",
//                     "slug": "platformer",
//                     "games_count": 100594,
//                     "image_background": "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 1054,
//                     "store": {
//                         "id": 4,
//                         "name": "App Store",
//                         "slug": "apple-appstore",
//                         "domain": "apps.apple.com",
//                         "games_count": 75015,
//                         "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
//                     }
//                 },
//                 {
//                     "id": 3679,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 7493,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 10311,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 26852,
//                     "store": {
//                         "id": 5,
//                         "name": "GOG",
//                         "slug": "gog",
//                         "domain": "gog.com",
//                         "games_count": 5136,
//                         "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                     }
//                 },
//                 {
//                     "id": 33137,
//                     "store": {
//                         "id": 7,
//                         "name": "Xbox 360 Store",
//                         "slug": "xbox360",
//                         "domain": "marketplace.xbox.com",
//                         "games_count": 1912,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     }
//                 },
//                 {
//                     "id": 49142,
//                     "store": {
//                         "id": 6,
//                         "name": "Nintendo Store",
//                         "slug": "nintendo",
//                         "domain": "nintendo.com",
//                         "games_count": 8868,
//                         "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 40035,
//                     "store": {
//                         "id": 8,
//                         "name": "Google Play",
//                         "slug": "google-play",
//                         "domain": "play.google.com",
//                         "games_count": 17034,
//                         "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
//                     }
//                 },
//                 {
//                     "id": 335541,
//                     "store": {
//                         "id": 11,
//                         "name": "Epic Games",
//                         "slug": "epic-games",
//                         "domain": "epicgames.com",
//                         "games_count": 1232,
//                         "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 45,
//                     "name": "2D",
//                     "slug": "2d",
//                     "language": "eng",
//                     "games_count": 187536,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 16,
//                     "name": "Horror",
//                     "slug": "horror",
//                     "language": "eng",
//                     "games_count": 41770,
//                     "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                 },
//                 {
//                     "id": 49,
//                     "name": "Difficult",
//                     "slug": "difficult",
//                     "language": "eng",
//                     "games_count": 12409,
//                     "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//                 },
//                 {
//                     "id": 115,
//                     "name": "Controller",
//                     "slug": "controller",
//                     "language": "eng",
//                     "games_count": 9308,
//                     "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
//                 },
//                 {
//                     "id": 41,
//                     "name": "Dark",
//                     "slug": "dark",
//                     "language": "eng",
//                     "games_count": 14006,
//                     "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
//                 },
//                 {
//                     "id": 336,
//                     "name": "controller support",
//                     "slug": "controller-support",
//                     "language": "eng",
//                     "games_count": 293,
//                     "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//                 },
//                 {
//                     "id": 111,
//                     "name": "Short",
//                     "slug": "short",
//                     "language": "eng",
//                     "games_count": 57464,
//                     "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
//                 },
//                 {
//                     "id": 113,
//                     "name": "Side Scroller",
//                     "slug": "side-scroller",
//                     "language": "eng",
//                     "games_count": 9365,
//                     "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
//                 },
//                 {
//                     "id": 114,
//                     "name": "Physics",
//                     "slug": "physics",
//                     "language": "eng",
//                     "games_count": 17677,
//                     "image_background": "https://media.rawg.io/media/screenshots/f5a/f5abab52c4d606551cd5ec3ab709e501.jpg"
//                 },
//                 {
//                     "id": 110,
//                     "name": "Cinematic",
//                     "slug": "cinematic",
//                     "language": "eng",
//                     "games_count": 1361,
//                     "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
//                 },
//                 {
//                     "id": 46,
//                     "name": "Surreal",
//                     "slug": "surreal",
//                     "language": "eng",
//                     "games_count": 4477,
//                     "image_background": "https://media.rawg.io/media/games/156/1560280d5bc572efd0dd88b088112e90.jpg"
//                 },
//                 {
//                     "id": 83,
//                     "name": "Puzzle-Platformer",
//                     "slug": "puzzle-platformer",
//                     "language": "eng",
//                     "games_count": 9497,
//                     "image_background": "https://media.rawg.io/media/screenshots/085/0851d86b5e8250ee33af5ab56544989b.jpg"
//                 },
//                 {
//                     "id": 112,
//                     "name": "Minimalist",
//                     "slug": "minimalist",
//                     "language": "eng",
//                     "games_count": 13641,
//                     "image_background": "https://media.rawg.io/media/games/c49/c4983df94a8a8167d652b812de742da8.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 3,
//                 "name": "Teen",
//                 "slug": "teen"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
//                 },
//                 {
//                     "id": 30985,
//                     "image": "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg"
//                 },
//                 {
//                     "id": 30986,
//                     "image": "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg"
//                 },
//                 {
//                     "id": 30987,
//                     "image": "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg"
//                 },
//                 {
//                     "id": 30988,
//                     "image": "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg"
//                 },
//                 {
//                     "id": 30989,
//                     "image": "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg"
//                 },
//                 {
//                     "id": 30991,
//                     "image": "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 58175,
//             "slug": "god-of-war-2",
//             "name": "God of War (2018)",
//             "released": "2018-04-20",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
//             "rating": 4.58,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 3217,
//                     "percent": 72.16
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 903,
//                     "percent": 20.26
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 202,
//                     "percent": 4.53
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 136,
//                     "percent": 3.05
//                 }
//             ],
//             "ratings_count": 4367,
//             "reviews_text_count": 67,
//             "added": 12364,
//             "added_by_status": {
//                 "yet": 627,
//                 "owned": 6341,
//                 "beaten": 3610,
//                 "toplay": 1091,
//                 "dropped": 282,
//                 "playing": 413
//             },
//             "metacritic": 94,
//             "playtime": 11,
//             "suggestions_count": 586,
//             "updated": "2023-05-18T13:56:36",
//             "user_game": null,
//             "reviews_count": 4458,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2018-04-20",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2018-04-20",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 },
//                 {
//                     "id": 5,
//                     "name": "RPG",
//                     "slug": "role-playing-games-rpg",
//                     "games_count": 52322,
//                     "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 46917,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 677451,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 677452,
//                     "store": {
//                         "id": 11,
//                         "name": "Epic Games",
//                         "slug": "epic-games",
//                         "domain": "epicgames.com",
//                         "games_count": 1232,
//                         "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 40849,
//                     "name": "Steam Cloud",
//                     "slug": "steam-cloud",
//                     "language": "eng",
//                     "games_count": 13992,
//                     "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 149,
//                     "name": "Third Person",
//                     "slug": "third-person",
//                     "language": "eng",
//                     "games_count": 9292,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 64,
//                     "name": "Fantasy",
//                     "slug": "fantasy",
//                     "language": "eng",
//                     "games_count": 24276,
//                     "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
//                 },
//                 {
//                     "id": 26,
//                     "name": "Gore",
//                     "slug": "gore",
//                     "language": "eng",
//                     "games_count": 5025,
//                     "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Exploration",
//                     "slug": "exploration",
//                     "language": "eng",
//                     "games_count": 19164,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 34,
//                     "name": "Violent",
//                     "slug": "violent",
//                     "language": "eng",
//                     "games_count": 5845,
//                     "image_background": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg"
//                 },
//                 {
//                     "id": 97,
//                     "name": "Action RPG",
//                     "slug": "action-rpg",
//                     "language": "eng",
//                     "games_count": 5650,
//                     "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//                 },
//                 {
//                     "id": 69,
//                     "name": "Action-Adventure",
//                     "slug": "action-adventure",
//                     "language": "eng",
//                     "games_count": 13327,
//                     "image_background": "https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg"
//                 },
//                 {
//                     "id": 68,
//                     "name": "Hack and Slash",
//                     "slug": "hack-and-slash",
//                     "language": "eng",
//                     "games_count": 3388,
//                     "image_background": "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg"
//                 },
//                 {
//                     "id": 37796,
//                     "name": "exclusive",
//                     "slug": "exclusive",
//                     "language": "eng",
//                     "games_count": 4510,
//                     "image_background": "https://media.rawg.io/media/games/d64/d646810b629081cc12aec49ed9f49441.jpg"
//                 },
//                 {
//                     "id": 125,
//                     "name": "Crafting",
//                     "slug": "crafting",
//                     "language": "eng",
//                     "games_count": 3323,
//                     "image_background": "https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg"
//                 },
//                 {
//                     "id": 1465,
//                     "name": "combat",
//                     "slug": "combat",
//                     "language": "eng",
//                     "games_count": 9214,
//                     "image_background": "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg"
//                 },
//                 {
//                     "id": 37797,
//                     "name": "true exclusive",
//                     "slug": "true-exclusive",
//                     "language": "eng",
//                     "games_count": 3995,
//                     "image_background": "https://media.rawg.io/media/games/d30/d30ef0c7dd4878161b1f781e297ae6a0.jpg"
//                 },
//                 {
//                     "id": 571,
//                     "name": "3D",
//                     "slug": "3d",
//                     "language": "eng",
//                     "games_count": 77001,
//                     "image_background": "https://media.rawg.io/media/games/73e/73efc5c0ac6f354271dae610276f617c.jpg"
//                 },
//                 {
//                     "id": 478,
//                     "name": "3rd-Person Perspective",
//                     "slug": "3rd-person-perspective",
//                     "language": "eng",
//                     "games_count": 86,
//                     "image_background": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg"
//                 },
//                 {
//                     "id": 270,
//                     "name": "Blood",
//                     "slug": "blood",
//                     "language": "eng",
//                     "games_count": 1941,
//                     "image_background": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
//                 },
//                 {
//                     "id": 171,
//                     "name": "PvE",
//                     "slug": "pve",
//                     "language": "eng",
//                     "games_count": 3022,
//                     "image_background": "https://media.rawg.io/media/games/82b/82be203e68d737762846203811165933.jpg"
//                 },
//                 {
//                     "id": 572,
//                     "name": "Emotional",
//                     "slug": "emotional",
//                     "language": "eng",
//                     "games_count": 1759,
//                     "image_background": "https://media.rawg.io/media/games/05a/05addb2c6604db3f6d667ec7f3b637ea.jpg"
//                 },
//                 {
//                     "id": 108,
//                     "name": "Mythology",
//                     "slug": "mythology",
//                     "language": "eng",
//                     "games_count": 1666,
//                     "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
//                 },
//                 {
//                     "id": 580,
//                     "name": "Souls-like",
//                     "slug": "souls-like",
//                     "language": "eng",
//                     "games_count": 1036,
//                     "image_background": "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg"
//                 },
//                 {
//                     "id": 43374,
//                     "name": "Remote Play on TV",
//                     "slug": "remote-play-on-tv",
//                     "language": "eng",
//                     "games_count": 315,
//                     "image_background": "https://media.rawg.io/media/games/538/538b320977e1075eb279e381e6b92cc8.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
//                 },
//                 {
//                     "id": 766263,
//                     "image": "https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg"
//                 },
//                 {
//                     "id": 766264,
//                     "image": "https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg"
//                 },
//                 {
//                     "id": 766265,
//                     "image": "https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg"
//                 },
//                 {
//                     "id": 766266,
//                     "image": "https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg"
//                 },
//                 {
//                     "id": 766267,
//                     "image": "https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg"
//                 },
//                 {
//                     "id": 766268,
//                     "image": "https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg"
//                 }
//             ]
//         },
//         {
//             "id": 32,
//             "slug": "destiny-2",
//             "name": "Destiny 2",
//             "released": "2017-09-06",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
//             "rating": 3.55,
//             "rating_top": 4,
//             "ratings": [
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1129,
//                     "percent": 45.36
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 791,
//                     "percent": 31.78
//                 },
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 345,
//                     "percent": 13.86
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 224,
//                     "percent": 9.0
//                 }
//             ],
//             "ratings_count": 2463,
//             "reviews_text_count": 19,
//             "added": 12336,
//             "added_by_status": {
//                 "yet": 389,
//                 "owned": 9260,
//                 "beaten": 745,
//                 "toplay": 158,
//                 "dropped": 1386,
//                 "playing": 398
//             },
//             "metacritic": 82,
//             "playtime": 5,
//             "suggestions_count": 1191,
//             "updated": "2023-05-16T19:12:14",
//             "user_game": null,
//             "reviews_count": 2489,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2017-09-06",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2017-09-06",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2017-09-06",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 171,
//                         "name": "Web",
//                         "slug": "web",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 260132,
//                         "image_background": "https://media.rawg.io/media/screenshots/c20/c201f665fc1d461719833ec1320935d6.jpg"
//                     },
//                     "released_at": "2017-09-06",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 186,
//                         "name": "Xbox Series S/X",
//                         "slug": "xbox-series-x",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": 2020,
//                         "games_count": 748,
//                         "image_background": "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg"
//                     },
//                     "released_at": "2017-09-06",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 187,
//                         "name": "PlayStation 5",
//                         "slug": "playstation5",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": 2020,
//                         "games_count": 853,
//                         "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                     },
//                     "released_at": "2017-09-06",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 14,
//                         "name": "Web",
//                         "slug": "web"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Adventure",
//                     "slug": "adventure",
//                     "games_count": 132231,
//                     "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
//                 },
//                 {
//                     "id": 59,
//                     "name": "Massively Multiplayer",
//                     "slug": "massively-multiplayer",
//                     "games_count": 3208,
//                     "image_background": "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 837910,
//                     "store": {
//                         "id": 11,
//                         "name": "Epic Games",
//                         "slug": "epic-games",
//                         "domain": "epicgames.com",
//                         "games_count": 1232,
//                         "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
//                     }
//                 },
//                 {
//                     "id": 32,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 808,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 326831,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 36,
//                     "name": "Open World",
//                     "slug": "open-world",
//                     "language": "eng",
//                     "games_count": 6199,
//                     "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
//                 },
//                 {
//                     "id": 411,
//                     "name": "cooperative",
//                     "slug": "cooperative",
//                     "language": "eng",
//                     "games_count": 4026,
//                     "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 9,
//                     "name": "Online Co-Op",
//                     "slug": "online-co-op",
//                     "language": "eng",
//                     "games_count": 4318,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Exploration",
//                     "slug": "exploration",
//                     "language": "eng",
//                     "games_count": 19164,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 79,
//                     "name": "Free to Play",
//                     "slug": "free-to-play",
//                     "language": "eng",
//                     "games_count": 5342,
//                     "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
//                 },
//                 {
//                     "id": 397,
//                     "name": "Online multiplayer",
//                     "slug": "online-multiplayer",
//                     "language": "eng",
//                     "games_count": 3806,
//                     "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
//                 },
//                 {
//                     "id": 69,
//                     "name": "Action-Adventure",
//                     "slug": "action-adventure",
//                     "language": "eng",
//                     "games_count": 13327,
//                     "image_background": "https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg"
//                 },
//                 {
//                     "id": 25,
//                     "name": "Space",
//                     "slug": "space",
//                     "language": "eng",
//                     "games_count": 41716,
//                     "image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
//                 },
//                 {
//                     "id": 157,
//                     "name": "PvP",
//                     "slug": "pvp",
//                     "language": "eng",
//                     "games_count": 7127,
//                     "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
//                 },
//                 {
//                     "id": 167,
//                     "name": "Futuristic",
//                     "slug": "futuristic",
//                     "language": "eng",
//                     "games_count": 4261,
//                     "image_background": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg"
//                 },
//                 {
//                     "id": 172,
//                     "name": "Aliens",
//                     "slug": "aliens",
//                     "language": "eng",
//                     "games_count": 6214,
//                     "image_background": "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg"
//                 },
//                 {
//                     "id": 1465,
//                     "name": "combat",
//                     "slug": "combat",
//                     "language": "eng",
//                     "games_count": 9214,
//                     "image_background": "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg"
//                 },
//                 {
//                     "id": 406,
//                     "name": "Story",
//                     "slug": "story",
//                     "language": "eng",
//                     "games_count": 11200,
//                     "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
//                 },
//                 {
//                     "id": 413,
//                     "name": "online",
//                     "slug": "online",
//                     "language": "eng",
//                     "games_count": 6511,
//                     "image_background": "https://media.rawg.io/media/screenshots/3ea/3ea3f535b2a779ca5cd2e466a2f8abba.jpg"
//                 },
//                 {
//                     "id": 478,
//                     "name": "3rd-Person Perspective",
//                     "slug": "3rd-person-perspective",
//                     "language": "eng",
//                     "games_count": 86,
//                     "image_background": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg"
//                 },
//                 {
//                     "id": 158,
//                     "name": "MMORPG",
//                     "slug": "mmorpg",
//                     "language": "eng",
//                     "games_count": 1253,
//                     "image_background": "https://media.rawg.io/media/screenshots/3ed/3ed77f22a7bf8139b096a90bb732e208.jpg"
//                 },
//                 {
//                     "id": 98,
//                     "name": "Loot",
//                     "slug": "loot",
//                     "language": "eng",
//                     "games_count": 1903,
//                     "image_background": "https://media.rawg.io/media/screenshots/ef8/ef8201008461d1c102b6c11c4114d08e.jpg"
//                 },
//                 {
//                     "id": 171,
//                     "name": "PvE",
//                     "slug": "pve",
//                     "language": "eng",
//                     "games_count": 3022,
//                     "image_background": "https://media.rawg.io/media/games/82b/82be203e68d737762846203811165933.jpg"
//                 },
//                 {
//                     "id": 2030,
//                     "name": "city",
//                     "slug": "city",
//                     "language": "eng",
//                     "games_count": 9137,
//                     "image_background": "https://media.rawg.io/media/games/1c6/1c61ef4ce04bce876841118580b03ccb.jpg"
//                 },
//                 {
//                     "id": 205,
//                     "name": "Lore-Rich",
//                     "slug": "lore-rich",
//                     "language": "eng",
//                     "games_count": 777,
//                     "image_background": "https://media.rawg.io/media/games/e85/e851f527ab0658519436342ee73da191.jpg"
//                 },
//                 {
//                     "id": 5816,
//                     "name": "console",
//                     "slug": "console",
//                     "language": "eng",
//                     "games_count": 1386,
//                     "image_background": "https://media.rawg.io/media/games/a59/a5993b9f84944570a31cb6ad08bfe502.jpg"
//                 },
//                 {
//                     "id": 744,
//                     "name": "friends",
//                     "slug": "friends",
//                     "language": "eng",
//                     "games_count": 15057,
//                     "image_background": "https://media.rawg.io/media/screenshots/b2a/b2a07062fed4f1bfb52f4ec4ab4fbb86.jpg"
//                 },
//                 {
//                     "id": 578,
//                     "name": "Masterpiece",
//                     "slug": "masterpiece",
//                     "language": "eng",
//                     "games_count": 276,
//                     "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                 },
//                 {
//                     "id": 3109,
//                     "name": "weapons",
//                     "slug": "weapons",
//                     "language": "eng",
//                     "games_count": 2157,
//                     "image_background": "https://media.rawg.io/media/games/075/0753492cda7ee3c9bd4a3ca673fd0c8c.jpg"
//                 },
//                 {
//                     "id": 1484,
//                     "name": "skill",
//                     "slug": "skill",
//                     "language": "eng",
//                     "games_count": 3487,
//                     "image_background": "https://media.rawg.io/media/games/18a/18a3d9d3ddebe3f7af215af8d53613d0.jpg"
//                 },
//                 {
//                     "id": 3046,
//                     "name": "destroy",
//                     "slug": "destroy",
//                     "language": "eng",
//                     "games_count": 4599,
//                     "image_background": "https://media.rawg.io/media/games/922/92244532ff3c3f277824c0cf8941f187.jpg"
//                 },
//                 {
//                     "id": 1743,
//                     "name": "collect",
//                     "slug": "collect",
//                     "language": "eng",
//                     "games_count": 8026,
//                     "image_background": "https://media.rawg.io/media/games/4e9/4e928ff4b4e3c3f5acfda38b98a4cf65.jpg"
//                 },
//                 {
//                     "id": 2184,
//                     "name": "hunt",
//                     "slug": "hunt",
//                     "language": "eng",
//                     "games_count": 2314,
//                     "image_background": "https://media.rawg.io/media/games/2a8/2a8e6acdf8cde8915920f568bd6f86b0.jpg"
//                 },
//                 {
//                     "id": 754,
//                     "name": "gun",
//                     "slug": "gun",
//                     "language": "eng",
//                     "games_count": 3204,
//                     "image_background": "https://media.rawg.io/media/screenshots/085/08553ac02c3d79bba1703dd4dc967b68.jpg"
//                 },
//                 {
//                     "id": 1527,
//                     "name": "rain",
//                     "slug": "rain",
//                     "language": "eng",
//                     "games_count": 857,
//                     "image_background": "https://media.rawg.io/media/screenshots/4d9/4d945833f039c3afc45deaa82f9012e2.jpg"
//                 },
//                 {
//                     "id": 18426,
//                     "name": "enemy",
//                     "slug": "enemy",
//                     "language": "eng",
//                     "games_count": 2516,
//                     "image_background": "https://media.rawg.io/media/games/dc4/dc4d36f790226897c9962534a9f0bbaf.jpg"
//                 },
//                 {
//                     "id": 691,
//                     "name": "quick",
//                     "slug": "quick",
//                     "language": "eng",
//                     "games_count": 928,
//                     "image_background": "https://media.rawg.io/media/screenshots/952/9522f259c79b8139915765c621c2b4c9.jpg"
//                 },
//                 {
//                     "id": 2863,
//                     "name": "darkness",
//                     "slug": "darkness",
//                     "language": "eng",
//                     "games_count": 449,
//                     "image_background": "https://media.rawg.io/media/screenshots/ead/eadedfa15d4d08212995d06aca94e3f0.jpg"
//                 },
//                 {
//                     "id": 6580,
//                     "name": "defender",
//                     "slug": "defender",
//                     "language": "eng",
//                     "games_count": 181,
//                     "image_background": "https://media.rawg.io/media/screenshots/296/296bfebf2214d9e7b5f54ddb7de85ca6_S7JIPnC.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 3,
//                 "name": "Teen",
//                 "slug": "teen"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 2629150,
//                     "image": "https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg"
//                 },
//                 {
//                     "id": 2629151,
//                     "image": "https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg"
//                 },
//                 {
//                     "id": 2629152,
//                     "image": "https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg"
//                 },
//                 {
//                     "id": 2629153,
//                     "image": "https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg"
//                 },
//                 {
//                     "id": 2629154,
//                     "image": "https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg"
//                 },
//                 {
//                     "id": 2629155,
//                     "image": "https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 3070,
//             "slug": "fallout-4",
//             "name": "Fallout 4",
//             "released": "2015-11-09",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
//             "rating": 3.8,
//             "rating_top": 4,
//             "ratings": [
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1493,
//                     "percent": 48.25
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 809,
//                     "percent": 26.15
//                 },
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 639,
//                     "percent": 20.65
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 153,
//                     "percent": 4.95
//                 }
//             ],
//             "ratings_count": 3068,
//             "reviews_text_count": 17,
//             "added": 12291,
//             "added_by_status": {
//                 "yet": 584,
//                 "owned": 7730,
//                 "beaten": 2073,
//                 "toplay": 385,
//                 "dropped": 1225,
//                 "playing": 294
//             },
//             "metacritic": 84,
//             "playtime": 41,
//             "suggestions_count": 444,
//             "updated": "2023-05-16T19:14:02",
//             "user_game": null,
//             "reviews_count": 3094,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2015-11-09",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2015-11-09",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2015-11-09",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 5,
//                     "name": "RPG",
//                     "slug": "role-playing-games-rpg",
//                     "games_count": 52322,
//                     "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 3252,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 9047,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 13248,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 40836,
//                     "name": "Full controller support",
//                     "slug": "full-controller-support",
//                     "language": "eng",
//                     "games_count": 14147,
//                     "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 40849,
//                     "name": "Steam Cloud",
//                     "slug": "steam-cloud",
//                     "language": "eng",
//                     "games_count": 13992,
//                     "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 24,
//                     "name": "RPG",
//                     "slug": "rpg",
//                     "language": "eng",
//                     "games_count": 17069,
//                     "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
//                 },
//                 {
//                     "id": 118,
//                     "name": "Story Rich",
//                     "slug": "story-rich",
//                     "language": "eng",
//                     "games_count": 18005,
//                     "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
//                 },
//                 {
//                     "id": 36,
//                     "name": "Open World",
//                     "slug": "open-world",
//                     "language": "eng",
//                     "games_count": 6199,
//                     "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 149,
//                     "name": "Third Person",
//                     "slug": "third-person",
//                     "language": "eng",
//                     "games_count": 9292,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Exploration",
//                     "slug": "exploration",
//                     "language": "eng",
//                     "games_count": 19164,
//                     "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
//                 },
//                 {
//                     "id": 37,
//                     "name": "Sandbox",
//                     "slug": "sandbox",
//                     "language": "eng",
//                     "games_count": 5845,
//                     "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                 },
//                 {
//                     "id": 1,
//                     "name": "Survival",
//                     "slug": "survival",
//                     "language": "eng",
//                     "games_count": 7128,
//                     "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                 },
//                 {
//                     "id": 97,
//                     "name": "Action RPG",
//                     "slug": "action-rpg",
//                     "language": "eng",
//                     "games_count": 5650,
//                     "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
//                 },
//                 {
//                     "id": 150,
//                     "name": "Third-Person Shooter",
//                     "slug": "third-person-shooter",
//                     "language": "eng",
//                     "games_count": 2852,
//                     "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
//                 },
//                 {
//                     "id": 43,
//                     "name": "Post-apocalyptic",
//                     "slug": "post-apocalyptic",
//                     "language": "eng",
//                     "games_count": 3270,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                 },
//                 {
//                     "id": 27994,
//                     "image": "https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg"
//                 },
//                 {
//                     "id": 27996,
//                     "image": "https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg"
//                 },
//                 {
//                     "id": 28000,
//                     "image": "https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg"
//                 },
//                 {
//                     "id": 28002,
//                     "image": "https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg"
//                 },
//                 {
//                     "id": 28004,
//                     "image": "https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg"
//                 },
//                 {
//                     "id": 28006,
//                     "image": "https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 2454,
//             "slug": "doom",
//             "name": "DOOM (2016)",
//             "released": "2016-05-13",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
//             "rating": 4.38,
//             "rating_top": 5,
//             "ratings": [
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 1748,
//                     "percent": 52.26
//                 },
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1270,
//                     "percent": 37.97
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 249,
//                     "percent": 7.44
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 78,
//                     "percent": 2.33
//                 }
//             ],
//             "ratings_count": 3308,
//             "reviews_text_count": 27,
//             "added": 12288,
//             "added_by_status": {
//                 "yet": 524,
//                 "owned": 7692,
//                 "beaten": 2621,
//                 "toplay": 474,
//                 "dropped": 681,
//                 "playing": 296
//             },
//             "metacritic": 85,
//             "playtime": 10,
//             "suggestions_count": 652,
//             "updated": "2023-05-17T19:08:58",
//             "user_game": null,
//             "reviews_count": 3345,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "Xbox One",
//                         "slug": "xbox-one",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5509,
//                         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                     },
//                     "released_at": "2016-05-13",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2016-05-13",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 650<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GTX 770<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "i386-33, 4 Мб",
//                         "recommended": "i486-40, 8 Мб"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo Switch",
//                         "slug": "nintendo-switch",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 5226,
//                         "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
//                     },
//                     "released_at": "2016-05-13",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 18,
//                         "name": "PlayStation 4",
//                         "slug": "playstation4",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 6626,
//                         "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
//                     },
//                     "released_at": "2016-05-13",
//                     "requirements_en": null,
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 2,
//                         "name": "PlayStation",
//                         "slug": "playstation"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 3,
//                         "name": "Xbox",
//                         "slug": "xbox"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 7,
//                         "name": "Nintendo",
//                         "slug": "nintendo"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 355582,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 },
//                 {
//                     "id": 2571,
//                     "store": {
//                         "id": 3,
//                         "name": "PlayStation Store",
//                         "slug": "playstation-store",
//                         "domain": "store.playstation.com",
//                         "games_count": 7799,
//                         "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                     }
//                 },
//                 {
//                     "id": 38659,
//                     "store": {
//                         "id": 6,
//                         "name": "Nintendo Store",
//                         "slug": "nintendo",
//                         "domain": "nintendo.com",
//                         "games_count": 8868,
//                         "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                     }
//                 },
//                 {
//                     "id": 8223,
//                     "store": {
//                         "id": 2,
//                         "name": "Xbox Store",
//                         "slug": "xbox-store",
//                         "domain": "microsoft.com",
//                         "games_count": 4758,
//                         "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 31,
//                     "name": "Singleplayer",
//                     "slug": "singleplayer",
//                     "language": "eng",
//                     "games_count": 204994,
//                     "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Atmospheric",
//                     "slug": "atmospheric",
//                     "language": "eng",
//                     "games_count": 29260,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 42,
//                     "name": "Great Soundtrack",
//                     "slug": "great-soundtrack",
//                     "language": "eng",
//                     "games_count": 3236,
//                     "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 411,
//                     "name": "cooperative",
//                     "slug": "cooperative",
//                     "language": "eng",
//                     "games_count": 4026,
//                     "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 32,
//                     "name": "Sci-fi",
//                     "slug": "sci-fi",
//                     "language": "eng",
//                     "games_count": 17042,
//                     "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
//                 },
//                 {
//                     "id": 40845,
//                     "name": "Partial Controller Support",
//                     "slug": "partial-controller-support",
//                     "language": "eng",
//                     "games_count": 9706,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 16,
//                     "name": "Horror",
//                     "slug": "horror",
//                     "language": "eng",
//                     "games_count": 41770,
//                     "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 26,
//                     "name": "Gore",
//                     "slug": "gore",
//                     "language": "eng",
//                     "games_count": 5025,
//                     "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
//                 },
//                 {
//                     "id": 49,
//                     "name": "Difficult",
//                     "slug": "difficult",
//                     "language": "eng",
//                     "games_count": 12409,
//                     "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
//                 },
//                 {
//                     "id": 193,
//                     "name": "Classic",
//                     "slug": "classic",
//                     "language": "eng",
//                     "games_count": 1728,
//                     "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
//                 },
//                 {
//                     "id": 63,
//                     "name": "Zombies",
//                     "slug": "zombies",
//                     "language": "eng",
//                     "games_count": 9613,
//                     "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
//                 },
//                 {
//                     "id": 120,
//                     "name": "Memes",
//                     "slug": "memes",
//                     "language": "eng",
//                     "games_count": 1551,
//                     "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
//                 },
//                 {
//                     "id": 131,
//                     "name": "Fast-Paced",
//                     "slug": "fast-paced",
//                     "language": "eng",
//                     "games_count": 10261,
//                     "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
//                 },
//                 {
//                     "id": 271,
//                     "name": "Remake",
//                     "slug": "remake",
//                     "language": "eng",
//                     "games_count": 1663,
//                     "image_background": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg"
//                 },
//                 {
//                     "id": 270,
//                     "name": "Blood",
//                     "slug": "blood",
//                     "language": "eng",
//                     "games_count": 1941,
//                     "image_background": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
//                 },
//                 {
//                     "id": 187,
//                     "name": "Demons",
//                     "slug": "demons",
//                     "language": "eng",
//                     "games_count": 1945,
//                     "image_background": "https://media.rawg.io/media/screenshots/33e/33e5d7f16c1d63fb50c7cf6af515df3e.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
//                 },
//                 {
//                     "id": 22393,
//                     "image": "https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg"
//                 },
//                 {
//                     "id": 22394,
//                     "image": "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg"
//                 },
//                 {
//                     "id": 22398,
//                     "image": "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg"
//                 },
//                 {
//                     "id": 22400,
//                     "image": "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg"
//                 },
//                 {
//                     "id": 22402,
//                     "image": "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg"
//                 },
//                 {
//                     "id": 22404,
//                     "image": "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg"
//                 }
//             ]
//         },
//         {
//             "id": 11859,
//             "slug": "team-fortress-2",
//             "name": "Team Fortress 2",
//             "released": "2007-10-10",
//             "tba": false,
//             "background_image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
//             "rating": 3.67,
//             "rating_top": 4,
//             "ratings": [
//                 {
//                     "id": 4,
//                     "title": "recommended",
//                     "count": 1230,
//                     "percent": 45.12
//                 },
//                 {
//                     "id": 3,
//                     "title": "meh",
//                     "count": 669,
//                     "percent": 24.54
//                 },
//                 {
//                     "id": 5,
//                     "title": "exceptional",
//                     "count": 563,
//                     "percent": 20.65
//                 },
//                 {
//                     "id": 1,
//                     "title": "skip",
//                     "count": 264,
//                     "percent": 9.68
//                 }
//             ],
//             "ratings_count": 2701,
//             "reviews_text_count": 18,
//             "added": 12019,
//             "added_by_status": {
//                 "yet": 170,
//                 "owned": 9234,
//                 "beaten": 739,
//                 "toplay": 42,
//                 "dropped": 1673,
//                 "playing": 161
//             },
//             "metacritic": 92,
//             "playtime": 9,
//             "suggestions_count": 515,
//             "updated": "2023-05-18T01:40:38",
//             "user_game": null,
//             "reviews_count": 2726,
//             "saturated_color": "0f0f0f",
//             "dominant_color": "0f0f0f",
//             "platforms": [
//                 {
//                     "platform": {
//                         "id": 4,
//                         "name": "PC",
//                         "slug": "pc",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 512291,
//                         "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
//                     },
//                     "released_at": "2007-10-10",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 (32/64-bit)/Vista/XP<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 8.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>",
//                         "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 (32/64-bit)<br></li><li><strong>Processor:</strong> Pentium 4 processor (3.0GHz, or better)<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
//                     },
//                     "requirements_ru": {
//                         "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
//                         "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "macOS",
//                         "slug": "macos",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 101452,
//                         "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
//                     },
//                     "released_at": "2007-10-10",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Leopard 10.5.8 and above<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
//                     },
//                     "requirements_ru": null
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux",
//                         "image": null,
//                         "year_end": null,
//                         "year_start": null,
//                         "games_count": 75078,
//                         "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                     },
//                     "released_at": "2007-10-10",
//                     "requirements_en": {
//                         "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>"
//                     },
//                     "requirements_ru": null
//                 }
//             ],
//             "parent_platforms": [
//                 {
//                     "platform": {
//                         "id": 1,
//                         "name": "PC",
//                         "slug": "pc"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 5,
//                         "name": "Apple Macintosh",
//                         "slug": "mac"
//                     }
//                 },
//                 {
//                     "platform": {
//                         "id": 6,
//                         "name": "Linux",
//                         "slug": "linux"
//                     }
//                 }
//             ],
//             "genres": [
//                 {
//                     "id": 4,
//                     "name": "Action",
//                     "slug": "action",
//                     "games_count": 172481,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Shooter",
//                     "slug": "shooter",
//                     "games_count": 59320,
//                     "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
//                 }
//             ],
//             "stores": [
//                 {
//                     "id": 13018,
//                     "store": {
//                         "id": 1,
//                         "name": "Steam",
//                         "slug": "steam",
//                         "domain": "store.steampowered.com",
//                         "games_count": 75059,
//                         "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
//                     }
//                 }
//             ],
//             "clip": null,
//             "tags": [
//                 {
//                     "id": 40847,
//                     "name": "Steam Achievements",
//                     "slug": "steam-achievements",
//                     "language": "eng",
//                     "games_count": 30183,
//                     "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Multiplayer",
//                     "slug": "multiplayer",
//                     "language": "eng",
//                     "games_count": 34834,
//                     "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
//                 },
//                 {
//                     "id": 7808,
//                     "name": "steam-trading-cards",
//                     "slug": "steam-trading-cards",
//                     "language": "eng",
//                     "games_count": 7578,
//                     "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
//                 },
//                 {
//                     "id": 18,
//                     "name": "Co-op",
//                     "slug": "co-op",
//                     "language": "eng",
//                     "games_count": 9732,
//                     "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
//                 },
//                 {
//                     "id": 411,
//                     "name": "cooperative",
//                     "slug": "cooperative",
//                     "language": "eng",
//                     "games_count": 4026,
//                     "image_background": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg"
//                 },
//                 {
//                     "id": 8,
//                     "name": "First-Person",
//                     "slug": "first-person",
//                     "language": "eng",
//                     "games_count": 28369,
//                     "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 40845,
//                     "name": "Partial Controller Support",
//                     "slug": "partial-controller-support",
//                     "language": "eng",
//                     "games_count": 9706,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 30,
//                     "name": "FPS",
//                     "slug": "fps",
//                     "language": "eng",
//                     "games_count": 12039,
//                     "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
//                 },
//                 {
//                     "id": 9,
//                     "name": "Online Co-Op",
//                     "slug": "online-co-op",
//                     "language": "eng",
//                     "games_count": 4318,
//                     "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Funny",
//                     "slug": "funny",
//                     "language": "eng",
//                     "games_count": 22398,
//                     "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
//                 },
//                 {
//                     "id": 123,
//                     "name": "Comedy",
//                     "slug": "comedy",
//                     "language": "eng",
//                     "games_count": 10802,
//                     "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
//                 },
//                 {
//                     "id": 79,
//                     "name": "Free to Play",
//                     "slug": "free-to-play",
//                     "language": "eng",
//                     "games_count": 5342,
//                     "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
//                 },
//                 {
//                     "id": 80,
//                     "name": "Tactical",
//                     "slug": "tactical",
//                     "language": "eng",
//                     "games_count": 4048,
//                     "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
//                 },
//                 {
//                     "id": 11669,
//                     "name": "stats",
//                     "slug": "stats",
//                     "language": "eng",
//                     "games_count": 4455,
//                     "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
//                 },
//                 {
//                     "id": 40852,
//                     "name": "Steam Workshop",
//                     "slug": "steam-workshop",
//                     "language": "eng",
//                     "games_count": 1298,
//                     "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
//                 },
//                 {
//                     "id": 40838,
//                     "name": "Includes level editor",
//                     "slug": "includes-level-editor",
//                     "language": "eng",
//                     "games_count": 1626,
//                     "image_background": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg"
//                 },
//                 {
//                     "id": 40832,
//                     "name": "Cross-Platform Multiplayer",
//                     "slug": "cross-platform-multiplayer",
//                     "language": "eng",
//                     "games_count": 2211,
//                     "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
//                 },
//                 {
//                     "id": 62,
//                     "name": "Moddable",
//                     "slug": "moddable",
//                     "language": "eng",
//                     "games_count": 764,
//                     "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
//                 },
//                 {
//                     "id": 40833,
//                     "name": "Captions available",
//                     "slug": "captions-available",
//                     "language": "eng",
//                     "games_count": 1227,
//                     "image_background": "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg"
//                 },
//                 {
//                     "id": 40837,
//                     "name": "In-App Purchases",
//                     "slug": "in-app-purchases",
//                     "language": "eng",
//                     "games_count": 2049,
//                     "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
//                 },
//                 {
//                     "id": 125,
//                     "name": "Crafting",
//                     "slug": "crafting",
//                     "language": "eng",
//                     "games_count": 3323,
//                     "image_background": "https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Team-Based",
//                     "slug": "team-based",
//                     "language": "eng",
//                     "games_count": 1259,
//                     "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
//                 },
//                 {
//                     "id": 170,
//                     "name": "Competitive",
//                     "slug": "competitive",
//                     "language": "eng",
//                     "games_count": 1014,
//                     "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
//                 },
//                 {
//                     "id": 40856,
//                     "name": "Valve Anti-Cheat enabled",
//                     "slug": "valve-anti-cheat-enabled",
//                     "language": "eng",
//                     "games_count": 104,
//                     "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
//                 },
//                 {
//                     "id": 197,
//                     "name": "Robots",
//                     "slug": "robots",
//                     "language": "eng",
//                     "games_count": 7713,
//                     "image_background": "https://media.rawg.io/media/games/8cd/8cd179c85bd3de8f79bef245b15075fb.jpg"
//                 },
//                 {
//                     "id": 40834,
//                     "name": "Commentary available",
//                     "slug": "commentary-available",
//                     "language": "eng",
//                     "games_count": 253,
//                     "image_background": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg"
//                 },
//                 {
//                     "id": 164,
//                     "name": "Cartoony",
//                     "slug": "cartoony",
//                     "language": "eng",
//                     "games_count": 3610,
//                     "image_background": "https://media.rawg.io/media/games/444/4440f674e2bcb257e249a9ab595d8ab6.jpg"
//                 },
//                 {
//                     "id": 179,
//                     "name": "Cartoon",
//                     "slug": "cartoon",
//                     "language": "eng",
//                     "games_count": 4614,
//                     "image_background": "https://media.rawg.io/media/games/36d/36dbcc51d45ae1105c7cb744a5fa6e2a.jpg"
//                 },
//                 {
//                     "id": 265,
//                     "name": "Class-Based",
//                     "slug": "class-based",
//                     "language": "eng",
//                     "games_count": 391,
//                     "image_background": "https://media.rawg.io/media/screenshots/420/4205650e0fd16a5ba7bf4f8524fac1f1.jpg"
//                 },
//                 {
//                     "id": 245,
//                     "name": "Trading",
//                     "slug": "trading",
//                     "language": "eng",
//                     "games_count": 975,
//                     "image_background": "https://media.rawg.io/media/games/59f/59f8ff56cde745ceb56029f229ad4e43.jpg"
//                 }
//             ],
//             "esrb_rating": {
//                 "id": 4,
//                 "name": "Mature",
//                 "slug": "mature"
//             },
//             "short_screenshots": [
//                 {
//                     "id": -1,
//                     "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
//                 },
//                 {
//                     "id": 97905,
//                     "image": "https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg"
//                 },
//                 {
//                     "id": 97906,
//                     "image": "https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg"
//                 },
//                 {
//                     "id": 97907,
//                     "image": "https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg"
//                 },
//                 {
//                     "id": 97908,
//                     "image": "https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg"
//                 },
//                 {
//                     "id": 97909,
//                     "image": "https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg"
//                 },
//                 {
//                     "id": 97910,
//                     "image": "https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg"
//                 }
//             ]
//         }
//     ],
//     "seo_title": "All Games",
//     "seo_description": "",
//     "seo_keywords": "",
//     "seo_h1": "All Games",
//     "noindex": false,
//     "nofollow": false,
//     "description": "",
//     "filters": {
//         "years": [
//             {
//                 "from": 2020,
//                 "to": 2023,
//                 "filter": "2020-01-01,2023-12-31",
//                 "decade": 2020,
//                 "years": [
//                     {
//                         "year": 2023,
//                         "count": 53263,
//                         "nofollow": false
//                     },
//                     {
//                         "year": 2022,
//                         "count": 167483,
//                         "nofollow": false
//                     },
//                     {
//                         "year": 2021,
//                         "count": 158180,
//                         "nofollow": false
//                     },
//                     {
//                         "year": 2020,
//                         "count": 119817,
//                         "nofollow": false
//                     }
//                 ],
//                 "nofollow": true,
//                 "count": 498743
//             },
//             {
//                 "from": 2010,
//                 "to": 2019,
//                 "filter": "2010-01-01,2019-12-31",
//                 "decade": 2010,
//                 "years": [
//                     {
//                         "year": 2019,
//                         "count": 73495,
//                         "nofollow": false
//                     },
//                     {
//                         "year": 2018,
//                         "count": 67915,
//                         "nofollow": false
//                     },
//                     {
//                         "year": 2017,
//                         "count": 54567,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2016,
//                         "count": 40226,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2015,
//                         "count": 25880,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2014,
//                         "count": 15345,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2013,
//                         "count": 6327,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2012,
//                         "count": 5381,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2011,
//                         "count": 4315,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2010,
//                         "count": 3879,
//                         "nofollow": true
//                     }
//                 ],
//                 "nofollow": true,
//                 "count": 297330
//             },
//             {
//                 "from": 2000,
//                 "to": 2009,
//                 "filter": "2000-01-01,2009-12-31",
//                 "decade": 2000,
//                 "years": [
//                     {
//                         "year": 2009,
//                         "count": 3104,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2008,
//                         "count": 2032,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2007,
//                         "count": 1556,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2006,
//                         "count": 1281,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2005,
//                         "count": 1159,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2004,
//                         "count": 1166,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2003,
//                         "count": 1137,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2002,
//                         "count": 989,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2001,
//                         "count": 1116,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 2000,
//                         "count": 1008,
//                         "nofollow": true
//                     }
//                 ],
//                 "nofollow": true,
//                 "count": 14548
//             },
//             {
//                 "from": 1990,
//                 "to": 1999,
//                 "filter": "1990-01-01,1999-12-31",
//                 "decade": 1990,
//                 "years": [
//                     {
//                         "year": 1999,
//                         "count": 781,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1998,
//                         "count": 724,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1997,
//                         "count": 873,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1996,
//                         "count": 763,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1995,
//                         "count": 865,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1994,
//                         "count": 816,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1993,
//                         "count": 743,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1992,
//                         "count": 655,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1991,
//                         "count": 578,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1990,
//                         "count": 540,
//                         "nofollow": true
//                     }
//                 ],
//                 "nofollow": true,
//                 "count": 7338
//             },
//             {
//                 "from": 1980,
//                 "to": 1989,
//                 "filter": "1980-01-01,1989-12-31",
//                 "decade": 1980,
//                 "years": [
//                     {
//                         "year": 1989,
//                         "count": 434,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1988,
//                         "count": 317,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1987,
//                         "count": 339,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1986,
//                         "count": 248,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1985,
//                         "count": 231,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1984,
//                         "count": 185,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1983,
//                         "count": 206,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1982,
//                         "count": 148,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1981,
//                         "count": 65,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1980,
//                         "count": 35,
//                         "nofollow": true
//                     }
//                 ],
//                 "nofollow": true,
//                 "count": 2208
//             },
//             {
//                 "from": 1970,
//                 "to": 1979,
//                 "filter": "1970-01-01,1979-12-31",
//                 "decade": 1970,
//                 "years": [
//                     {
//                         "year": 1979,
//                         "count": 15,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1978,
//                         "count": 17,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1977,
//                         "count": 13,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1976,
//                         "count": 7,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1975,
//                         "count": 3,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1974,
//                         "count": 2,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1973,
//                         "count": 1,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1972,
//                         "count": 2,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1971,
//                         "count": 6,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1970,
//                         "count": 1,
//                         "nofollow": true
//                     }
//                 ],
//                 "nofollow": true,
//                 "count": 67
//             },
//             {
//                 "from": 1960,
//                 "to": 1969,
//                 "filter": "1960-01-01,1969-12-31",
//                 "decade": 1960,
//                 "years": [
//                     {
//                         "year": 1962,
//                         "count": 1,
//                         "nofollow": true
//                     }
//                 ],
//                 "nofollow": true,
//                 "count": 1
//             },
//             {
//                 "from": 1950,
//                 "to": 1959,
//                 "filter": "1950-01-01,1959-12-31",
//                 "decade": 1950,
//                 "years": [
//                     {
//                         "year": 1958,
//                         "count": 1,
//                         "nofollow": true
//                     },
//                     {
//                         "year": 1954,
//                         "count": 2,
//                         "nofollow": true
//                     }
//                 ],
//                 "nofollow": true,
//                 "count": 3
//             }
//         ]
//     },
//     "nofollow_collections": [
//         "stores"
//     ]
// };

    // trailer = {"count":1,"next":null,"previous":null,"results":[{"id":5850,"name":"DOOM SnapMap Video","preview":"https://media.rawg.io/media/movies/d4c/d4c56ec3256f49c2b62f572332045845.jpg","data":{"480":"https://steamcdn-a.akamaihd.net/steam/apps/256677412/movie480.mp4","max":"https://steamcdn-a.akamaihd.net/steam/apps/256677412/movie_max.mp4"}}]};


  constructor(private httpClient: HttpClient) { }

  getGameList(pageNum: number, pageSize: number, order?: string, search?: string): Observable<ApiResponse<Game>> {
    let params = new HttpParams();

    params = params.set('page', pageNum);
    params = params.set('page_size', pageSize);

    if(search) {
      params = params.set('search', search);
    }

    if(order) {
      params = params.set('ordering', order);
    }

    // return of(this.data) as Observable<any>;
    return this.httpClient.get(`${env.BASE_URL}/games`, {params: params}) as Observable<any>;
  }


  getGameTrailers(id: string): Observable<ApiResponse<Trailer>> {
    // return of(this.trailer) as Observable<any>;
    return this.httpClient.get(`${env.BASE_URL}/games/${id}/movies`) as Observable<any>;
  }

  getGameDetails(gameId: string): Observable<Game> {
    return this.httpClient.get(`${env.BASE_URL}/games/${gameId}`) as Observable<Game>;
  }
}
