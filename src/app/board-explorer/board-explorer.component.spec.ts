import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardExplorerComponent } from './board-explorer.component';

describe('BoardExplorerComponent', () => {
  let component: BoardExplorerComponent;
  let fixture: ComponentFixture<BoardExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
