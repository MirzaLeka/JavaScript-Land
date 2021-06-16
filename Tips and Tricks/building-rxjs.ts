interface ISubject {
    unsubscribe(observer: Observer): void;
    next(): void;
    complete(): void;
    subscribe(data: Observer): void;
    pipe(data: any): Observer;
    addObserver(oboserver: Observer): void;
}

interface Observer {
    subscribe(data: Function): any;
    pipe(data: any): Observer;
    listen(data: any): void;
}

interface APIData {
    id: number;
    username: string;
}

interface Operators {
    map(callback: Function): void;
    filter(callback: Function): void;
}

class PipeOperators implements Operators {

    map(callback: Function) {
        
    }

    filter(callback: Function) {
        
    }


}

class Subject implements Partial<ISubject> {

    private observers: Observer[] = [];
    private apiData: APIData[] = [{ id: 1, username: 'mirza' }];

    next(): void {
        for (const observer of this.observers) {
            observer.listen(this.apiData);
        }
    }

    complete() {
        this.observers = [];
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }

}

class Service implements Observer {
    private serviceData: APIData[] = [];

    constructor(private subject: Subject) {
        this.subject.addObserver(this); // this is a Service
    }

    pipe(callback: Function) {
        callback(this.serviceData);
        return this;
    }

    listen(newData: APIData[]) {
        console.log('listening');
        this.serviceData = newData;
    }

    subscribe(callback: Function) {
        this.subject.next();
        callback(this.serviceData);
    }

}

class UsersComponent {

    private fakeUIElement = '<ul>';
    private userData: APIData[] = [];
    private unsubscribe$ = new Subject();

    constructor(private service: Service) {
        this.onInit();
    }

    onInit() {
        this.service
            //    .pipe(this.takeUntil(this.unsubscribe$))
            .subscribe((data: APIData[]) => {
                this.userData = data;
            });
    }

    displayUIElement() {
        for(const u of this.userData) {
            this.fakeUIElement += `<li>${u.username}</li>`
        }
        this.fakeUIElement += '</ul>';
        console.log(this.fakeUIElement);
    }

    onDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}

const c = new UsersComponent(new Service(new Subject()));
c.displayUIElement();
// c.onDestroy();
// c.displayUIElement();
