import {AppComponent} from '../app.component';
import {it, describe, expect, beforeEach, beforeEachProviders, inject} from '@angular/core/testing';

beforeEachProviders(() => [AppComponent]);

describe('App: Angular2Calculator', () => {
  it('adds element to operation',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));
});
