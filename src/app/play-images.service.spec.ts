import { TestBed } from '@angular/core/testing';

import { PlayImagesService } from './play-images.service';

describe('PlayImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayImagesService = TestBed.get(PlayImagesService);
    expect(service).toBeTruthy();
  });
});
