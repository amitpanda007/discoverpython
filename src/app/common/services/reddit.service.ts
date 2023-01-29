import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  from,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  settings = {
    sort: 'top',
  };
  settings$ = of(this.settings);

  constructor(private http: HttpClient) {}

  getGifs(subredditFormControl: any) {
    const subreddit$ = subredditFormControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );

    return combineLatest(subreddit$, this.settings$).pipe(
      switchMap(([subreddit, settings]) =>
        this.http
          .get(
            `https://www.reddit.com/r/${subreddit}/${settings.sort}/.json?limit=10`
          )
          .pipe(
            map((res: any) => this.convertRedditPostsToGifs(res.data.children)),

            map((gifs) => gifs.filter((gif: any) => gif.auther !== null))
          )
      )
    );
  }
  convertRedditPostsToGifs(posts: any): any {
    return posts.map((post: any) => ({
      auther: post.data.author_fullname,
      name: post.data.name,
    }));
  }
}
