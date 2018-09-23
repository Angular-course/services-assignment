import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    activeUsers = [];
    counter: number;

    constructor(private usersService: UsersService, private counterService: CounterService) {
    }

    ngOnInit() {
        this.activeUsers = this.usersService.activeUsers;
    }

    onSetToInactive(id: number) {
        this.usersService.onSetToInactive(id);
        this.counter = this.counterService.activeToInactiveCounter;
    }

}
