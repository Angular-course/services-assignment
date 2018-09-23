import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
    inactiveUsers = [];
    counter: number;

    constructor(private usersService: UsersService, private counterService: CounterService) {
    }

    ngOnInit() {
        this.inactiveUsers = this.usersService.inactiveUsers;
    }

    onSetToActive(id: number) {
        this.usersService.onSetToActive(id);
        this.counter = this.counterService.inactiveToActiveCounter;
    }

}
