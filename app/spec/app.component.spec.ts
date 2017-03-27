import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AppComponent } from "./../app.component";

describe("App Component", () => {
    let fixture: ComponentFixture<AppComponent>;
    let instance: AppComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ]
        })
        .compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        instance = fixture.componentInstance;
    }));

    it("should instantiate component", () => {
        expect(instance instanceof AppComponent).toBe(true, "should create AppComponent");
    });

    it("sum should return five", () => {
        const expected = 5;
        const result = instance.sum(2, 3);
        expect(result).toBe(expected, "Unexpected Result");
    });
});
