import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayImagesComponent } from './play-images.component';

describe('PlayImagesComponent', () => {
  let component: PlayImagesComponent;
  let fixture: ComponentFixture<PlayImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
